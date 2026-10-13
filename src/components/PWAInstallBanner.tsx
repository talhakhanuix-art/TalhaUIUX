import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { Download, WifiOff, X, Share, PlusSquare } from 'lucide-react';

export const PWAInstallBanner: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const isOnline = useOnlineStatus();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  return (
    <>
      {/* Offline Toast */}
      {!isOnline && (
        <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-xl border border-amber-500/40 bg-[#171722]/95 px-3.5 py-2 text-xs font-medium text-amber-300 shadow-2xl backdrop-blur-md">
          <WifiOff className="h-4 w-4 shrink-0 text-amber-400" />
          <span>Offline Mode — Cached portfolio data is active.</span>
        </div>
      )}

      {/* Floating PWA Install Bar (only if not installed and not dismissed) */}
      {!isInstalled && !dismissed && (isInstallable || isIOS) && (
        <aside
          aria-label="PWA Installation banner"
          className="fixed bottom-4 right-4 z-40 max-w-sm rounded-2xl border border-[#A78BFA]/30 bg-[#11111A]/95 p-3.5 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#C4B5FD] font-mono text-xs font-bold">
                TUX
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Install Talha UIUX App</h4>
                <p className="text-[11px] text-[#A1A1B5]">
                  Fast home-screen access &amp; offline support
                </p>
              </div>
            </div>

            <button
              onClick={() => setDismissed(true)}
              className="text-[#A1A1B5] hover:text-white"
              aria-label="Dismiss banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 flex items-center gap-2">
            {isInstallable && (
              <button
                onClick={install}
                className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-[#8B5CF6] py-1.5 text-xs font-semibold text-white shadow-md hover:bg-[#7C3AED] transition-colors"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Install App</span>
              </button>
            )}

            {isIOS && (
              <button
                onClick={() => setShowIOSGuide(true)}
                className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-[#A78BFA]/30 bg-[#171722] py-1.5 text-xs font-medium text-[#C4B5FD] hover:bg-[#8B5CF6]/20 transition-colors"
              >
                <Share className="h-3 w-3" />
                <span>Install on iOS</span>
              </button>
            )}
          </div>
        </aside>
      )}

      {/* iOS Safari Guided Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-[#A78BFA]/30 bg-[#11111A] p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white">Install on iPhone / iPad</h3>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="text-[#A1A1B5] hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs text-[#A1A1B5]">
              <div className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/20 text-[#C4B5FD] font-mono text-[11px] font-bold">
                  1
                </span>
                <span>
                  Tap the <strong>Share</strong> button (box with upward arrow) in the Safari toolbar.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/20 text-[#C4B5FD] font-mono text-[11px] font-bold">
                  2
                </span>
                <span>
                  Scroll down the share sheet and tap <strong>Add to Home Screen</strong>.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/20 text-[#C4B5FD] font-mono text-[11px] font-bold">
                  3
                </span>
                <span>
                  Tap <strong>Add</strong> in the top-right corner to launch Talha UIUX like a native app.
                </span>
              </div>
            </div>
            <button
              onClick={() => setShowIOSGuide(false)}
              className="mt-6 w-full rounded-xl bg-[#8B5CF6] py-2 text-xs font-semibold text-white hover:bg-[#7C3AED]"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};
