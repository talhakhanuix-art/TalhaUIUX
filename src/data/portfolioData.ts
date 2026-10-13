import { Project, Skill, Service, ProcessStep, ToolItem } from '../types/portfolio';

// Local generated high-fidelity asset paths
export const PORTFOLIO_ASSETS = {
  heroPortrait: '/src/assets/images/hero_portrait_dark_1791919462684.jpg',
  aboutWorkspace: '/src/assets/images/about_workspace_studio_1791919463771.jpg',
  novacart: '/src/assets/images/novacart_ecommerce_ui_1791919463837.jpg',
  saasDashboard: '/src/assets/images/saas_dashboard_analytics_1791919464997.jpg',
  digitalBanking: '/src/assets/images/digital_banking_fintech_1791919465007.jpg',
  gameUi: '/src/assets/images/game_ui_interface_1791919465557.jpg',
};

export const PERSONAL_INFO = {
  brandName: 'Talha UIUX',
  fullName: 'Talha',
  role: 'UI/UX Designer',
  titleKicker: 'DIGITAL PRODUCT DESIGNER',
  headline: 'Designing Digital Experiences Beyond the Ordinary.',
  supportingText:
    'I design intuitive, visually engaging digital experiences that connect user needs with business goals.',
  aboutIntro:
    "I'm Talha, a UI/UX Designer passionate about creating clean interfaces, intuitive user journeys, and meaningful digital products. I focus on combining visual clarity with usability to create experiences people enjoy using.",
  email: 'talhakhanuix@gmail.com',
  location: 'Remote · Worldwide Available',
  availability: 'Available for Q4/2026 Projects & Design Advisory',
  primaryCta: 'Explore My Work',
  secondaryCta: "Let's Talk",
  portfolioRefUrl: 'https://talhaportfolio-ten.vercel.app/',
  socials: [
    { name: 'Email', url: 'mailto:talhakhanuix@gmail.com', handle: 'talhakhanuix@gmail.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com', handle: 'in/talha-uiux' },
    { name: 'Behance', url: 'https://behance.net', handle: 'behance.net/talhauiux' },
    { name: 'Dribbble', url: 'https://dribbble.com', handle: 'dribbble.com/talhauiux' },
    { name: 'Figma Community', url: 'https://figma.com', handle: '@talhauiux' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'novacart',
    title: 'NovaCart',
    category: 'E-commerce Mobile App',
    subtitle: 'Luxury Streetwear Digital Commerce Experience',
    description:
      'A high-conversion luxury streetwear commerce experience focusing on tactile micro-interactions, frictionless 2-step checkout, and immersive dark visual browsing.',
    tags: ['Mobile App', 'E-commerce', 'Figma', 'Design System'],
    image: PORTFOLIO_ASSETS.novacart,
    isConcept: true,
    platform: 'Mobile App',
    year: '2026',
    caseStudy: {
      overview:
        'NovaCart is an exploratory concept mobile application addressing drop-off in high-ticket streetwear commerce. The project reimagines the visual catalog by replacing heavy grids with dynamic editorial feeds and a streamlined thumb-zone checkout tray.',
      problemStatement:
        'High-end fashion consumers abandon carts due to cluttered product pages, hidden shipping calculations, and cumbersome multi-step address forms on mobile devices.',
      designGoals: [
        'Streamline the checkout journey to under 45 seconds using biometric Apple Pay/Google Pay trays.',
        'Implement high-contrast dark aesthetic with tactile haptic feedback cues.',
        'Establish an 8pt grid design system with responsive type scales for iOS and Android.',
        'Design an interactive sizing visualizer reducing fit uncertainty.',
      ],
      targetUsers: [
        {
          persona: 'Marcus, 26',
          role: 'Streetwear Collector & Reseller',
          painPoint: 'Needs lightning-fast drops navigation where seconds determine if an item sells out.',
        },
        {
          persona: 'Elena, 31',
          role: 'Design-Conscious Professional',
          painPoint: 'Values editorial photography, fabric details, and effortless single-swipe returns.',
        },
      ],
      userFlowSteps: [
        {
          step: 1,
          action: 'Discover Feed',
          description: 'Swipe-based curated lookbook showcasing high-res apparel with floating tags.',
        },
        {
          step: 2,
          action: 'Product Detail Drawer',
          description: 'Half-sheet inspection with size matrix, dynamic stock meter, and quick-add button.',
        },
        {
          step: 3,
          action: 'Sticky Bag Sheet',
          description: 'Non-intrusive cart pill expanding into price breakdown with zero page reloads.',
        },
        {
          step: 4,
          action: 'Biometric Slide-to-Pay',
          description: 'One-touch biometric confirmation with animated visual receipt.',
        },
      ],
      wireframeNotes:
        'Low-fidelity wireframing explored three navigation layouts: tab bar, floating dock, and gestures. User testing with 8 participants proved bottom sticky sheets yielded 34% faster action completion than separate modal pages.',
      finalScreensNotes:
        'Crafted in Figma using Auto-Layout 5.0 and design tokens. High-contrast typography (#F8FAFC on #0D0D14) guarantees WCAG AA compliance while maintaining sleek boutique mood.',
      designDecisions: [
        {
          decision: 'Bottom sheet checkout instead of multi-page funnel',
          rationale: 'Keeps user context anchored to the item they are purchasing, minimizing anxiety.',
        },
        {
          decision: 'Electric violet badge indicators for limited editions',
          rationale: 'Creates distinct urgency without resorting to aggressive red discount banners.',
        },
        {
          decision: 'Thumb-zone primary actions',
          rationale: 'All primary CTAs sit within the lower 35% of the mobile viewport for one-hand comfort.',
        },
      ],
      metricsOrOutcomes: [
        'Zero-clutter thumb-zone architecture',
        '2-step express checkout prototype',
        'Fully documented 48-component Figma UI kit',
      ],
      prototypeUrl: 'https://figma.com/@talhauiux/novacart-concept',
    },
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    category: 'Analytics Dashboard UI',
    subtitle: 'High-Density Enterprise Telemetry & Revenue Intelligence',
    description:
      'Enterprise revenue analytics dashboard engineered for high-density telemetry, clear financial signals, multi-tenant organization, and customizable metric widgets.',
    tags: ['Web App / SaaS', 'Data Visualization', 'Figma', 'Design System'],
    image: PORTFOLIO_ASSETS.saasDashboard,
    isConcept: true,
    platform: 'Web App / SaaS',
    year: '2026',
    caseStudy: {
      overview:
        'Flux Analytics is a concept enterprise platform for recurring revenue forecasting and customer cohort retention. Designed to replace disjointed spreadsheet workflows with a unified, high-legibility telemetry console.',
      problemStatement:
        'Executive teams and growth leads struggle with fragmented metrics across Stripe, Salesforce, and internal databases, resulting in slow decision-making and overlooked churn signals.',
      designGoals: [
        'Organize complex metrics (MRR, ARPU, Churn, Cohorts) into clear hierarchical card zones.',
        'Implement tabular numerals and monospace alignment for effortless vertical scanning.',
        'Support keyboard shortcuts for rapid date filtering and cohort comparisons.',
        'Deliver a dark-mode palette reducing visual fatigue during extended data analysis.',
      ],
      targetUsers: [
        {
          persona: 'Sophia, 38',
          role: 'VP of Growth & Operations',
          painPoint: 'Needs bird-eye view of revenue trajectory with single-click drill down into churn cohorts.',
        },
        {
          persona: 'David, 33',
          role: 'Product Analytics Lead',
          painPoint: 'Requires modular widgets that can be rearranged and exported directly to executive decks.',
        },
      ],
      userFlowSteps: [
        {
          step: 1,
          action: 'Executive Summary',
          description: 'Instant overview of key KPIs (Total Revenue, MRR, ARPU, Net New Signups) with delta tags.',
        },
        {
          step: 2,
          action: 'Interactive Revenue Curve',
          description: 'Time-series curve with hover tooltip inspect, forecast bands, and weekly/monthly toggle.',
        },
        {
          step: 3,
          action: 'Cohort Breakdown Table',
          description: 'Tabular customer list with status badges, individual LTV, and action quick-menus.',
        },
      ],
      wireframeNotes:
        'Structured around a strict 12-column grid. Tested 4 information densities: default, compact, expanded, and presentation mode.',
      finalScreensNotes:
        'Constructed with dark graphite surfaces (#11111A, #171722), electric purple line charts (#8B5CF6), and cyan delta highlights for maximum chart readability.',
      designDecisions: [
        {
          decision: 'Segmented controls over dropdown menus for timeframes',
          rationale: 'Allows 1-click comparison between 7D, 30D, and Quarter without opening hidden dropdowns.',
        },
        {
          decision: 'Monospace tabular numerals throughout financial tables',
          rationale: 'Eliminates horizontal jitter when values update in real-time.',
        },
      ],
      metricsOrOutcomes: [
        '100% WCAG AAA contrast on data charts',
        'Customizable 6-widget modular layout',
        'Comprehensive data visualization library',
      ],
      prototypeUrl: 'https://figma.com/@talhauiux/flux-analytics-concept',
    },
  },
  {
    id: 'digital-banking',
    title: 'Digital Banking',
    category: 'Mobile Banking Experience',
    subtitle: 'Futuristic Neo-Banking & Crypto-Fiat Portfolio',
    description:
      'Next-generation banking and crypto-fiat portfolio experience featuring biometric authorization, instant international settlements, and holographic virtual card management.',
    tags: ['Mobile App', 'FinTech', 'Biometrics', 'Design System'],
    image: PORTFOLIO_ASSETS.digitalBanking,
    isConcept: true,
    platform: 'Mobile App',
    year: '2026',
    caseStudy: {
      overview:
        'Futura Bank reimagines retail personal finance by unifying fiat checking accounts, investment yields, and digital asset custody into a singular, confidence-inspiring mobile interface.',
      problemStatement:
        'Users find legacy banking apps rigid, confusing, and filled with fine-print friction, while standalone crypto apps look intimidating and prone to costly transactional mistakes.',
      designGoals: [
        'Eliminate transactional ambiguity with plain-language payment confirmation receipts.',
        'Design holographic virtual cards with customizable spend limits and disposable numbers.',
        'Integrate biometric security (Face ID & Touch ID) seamlessly into sensitive balance views.',
        'Enable 3-tap peer-to-peer transfers with clear currency conversion breakdowns.',
      ],
      targetUsers: [
        {
          persona: 'Alex, 29',
          role: 'Global Tech Consultant',
          painPoint: 'Splits finances across multi-currency accounts and needs real-time FX fee transparency.',
        },
        {
          persona: 'Nadia, 34',
          role: 'Freelance Creative',
          painPoint: 'Anxious about accidental transfers and wants visual confirmation before funds depart.',
        },
      ],
      userFlowSteps: [
        {
          step: 1,
          action: 'Biometric Entry',
          description: 'Instant facial or fingerprint authentication with masked balance privacy toggle.',
        },
        {
          step: 2,
          action: 'Virtual Card Swiper',
          description: '3D carousel of cards with instant freeze, pin reveal, and online shield toggles.',
        },
        {
          step: 3,
          action: 'Quick Actions Bar',
          description: 'Immediate access to Pay, Transfer, Trade, Cards, and Deposit in comfortable thumb reach.',
        },
      ],
      wireframeNotes:
        'Prioritized safety and clarity. Every irreversible transaction flow was wireframed with dual confirmation checkpoints to prevent user error.',
      finalScreensNotes:
        'Deep navy/black surfaces with soft neon violet glows and frosted glass overlays give users a sense of modern prestige and bank-grade security.',
      designDecisions: [
        {
          decision: 'Card carousel with peek affordance',
          rationale: 'Shows adjacent cards partially on edge so users intuitively know they can swipe between accounts.',
        },
        {
          decision: 'Hold-to-Confirm slider for money transfers',
          rationale: 'Prevents accidental double-taps when sending money.',
        },
      ],
      metricsOrOutcomes: [
        'Zero-friction balance privacy toggle',
        'Holographic virtual card states',
        'Accessible color-coded cashflow categorization',
      ],
      prototypeUrl: 'https://figma.com/@talhauiux/futura-bank-concept',
    },
  },
  {
    id: 'game-ui',
    title: 'Game UI',
    category: 'Futuristic Gaming Interface',
    subtitle: 'Cyberpunk Tactical HUD & Operative Inventory System',
    description:
      'Tactical sci-fi character loadout and cyberpunk inventory interface designed with holographic depth, rapid gear switching, and high-readability combat telemetry.',
    tags: ['Game UI', 'Sci-Fi HUD', 'Modular Grid', 'Figma'],
    image: PORTFOLIO_ASSETS.gameUi,
    isConcept: true,
    platform: 'Game UI',
    year: '2026',
    caseStudy: {
      overview:
        'CyberDrive is a concept AAA video game user interface for an immersive futuristic action-RPG. The UI system balances futuristic holographic visual styling with competitive esports-level responsiveness and information clarity.',
      problemStatement:
        'Many sci-fi game UIs sacrifice usability for visual clutter: illegible fonts, excessive bloom, slow menu transitions, and cramped inventory slots that frustrate players in fast-paced gameplay.',
      designGoals: [
        'Engineer a modular 12x6 inventory grid supporting drag-and-drop weapon switching.',
        'Provide instant stat comparison overlays (Damage, Fire Rate, Stability) with color deltas.',
        'Design holographic operative preview with interactive rotating inspection.',
        'Ensure full controller navigation and keyboard shortcut parity.',
      ],
      targetUsers: [
        {
          persona: 'Kai, 24',
          role: 'Competitive RPG Gamer',
          painPoint: 'Wants loadout management completed in under 5 seconds during mid-match safe zones.',
        },
        {
          persona: 'Jordan, 30',
          role: 'Immersion Enthusiast',
          painPoint: 'Expects the UI to feel like an authentic in-world holographic projection device.',
        },
      ],
      userFlowSteps: [
        {
          step: 1,
          action: 'Operative Overview',
          description: 'Holographic avatar flanked by active weapon slots, armor integrity, and passive ability tree.',
        },
        {
          step: 2,
          action: 'Inventory Grid Navigation',
          description: 'Segmented tabs for Weapons, Gear, Mods, and Resources with rarity glow rings.',
        },
        {
          step: 3,
          action: 'Compare & Equip',
          description: 'Side-by-side spec differential with quick hotkey hints ([E] Equip, [R] Mod, [X] Dismantle).',
        },
      ],
      wireframeNotes:
        'Tested multiple HUD layouts for field of view obstructions. Settled on a dual-wing layout that leaves the center clear for character visual grounding.',
      finalScreensNotes:
        'Rendered with glowing electric purple lines, cyan holographic wireframes, and dark carbon backing panels for maximum contrast against dynamic 3D game environments.',
      designDecisions: [
        {
          decision: 'High-contrast typography with generous kerning',
          rationale: 'Maintains readability even when rendered at lower resolutions on handheld consoles like Steam Deck.',
        },
        {
          decision: 'Color-coded rarity system (Common, Rare, Epic, Legendary)',
          rationale: 'Instantly familiar to gamers, eliminating inventory cognitive friction.',
        },
      ],
      metricsOrOutcomes: [
        'Ergonomic dual-wing HUD architecture',
        'Modular inventory slot tokens',
        'Universal controller + keyboard shortcut mapping',
      ],
      prototypeUrl: 'https://figma.com/@talhauiux/cyberdrive-hud-concept',
    },
  },
];

export const SKILLS: Skill[] = [
  {
    name: 'UI Design',
    category: 'Core Discipline',
    description: 'Crafting visually harmonious, pixel-perfect interfaces with consistent rhythm, contrast, and modern typography.',
  },
  {
    name: 'UX Design',
    category: 'Core Discipline',
    description: 'User-centered research, heuristic audits, customer empathy mapping, and evidence-backed user journey optimization.',
  },
  {
    name: 'Wireframing',
    category: 'Execution',
    description: 'Rapid low and mid-fidelity architecture blueprints to validate concepts and flows before high-fidelity visual design.',
  },
  {
    name: 'Prototyping',
    category: 'Execution',
    description: 'Building clickable, micro-interactive prototypes in Figma and Framer to simulate authentic production experiences.',
  },
  {
    name: 'Design Systems',
    category: 'Systems',
    description: 'Scalable component libraries, auto-layout variants, design tokens, and documentation for seamless engineering handoff.',
  },
  {
    name: 'Responsive Design',
    category: 'Execution',
    description: 'Fluid grid architectures and layout breakpoints that adapt flawlessly across mobile, tablet, and 4K desktop viewports.',
  },
  {
    name: 'Figma',
    category: 'Systems',
    description: 'Advanced mastery of auto-layout, component properties, variables, design tokens, interactive components, and FigJam.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    name: 'Discover',
    title: 'Understand users, goals, and problems',
    description:
      'I dive into the core product vision, understand user pain points, analyze competitors, and map out the business requirements.',
    activities: [
      'User interviews & empathy mapping',
      'Competitive landscape analysis',
      'Feature prioritization matrix',
      'Project scope & technical alignment',
    ],
    deliverable: 'Research insights & product brief',
  },
  {
    step: 2,
    name: 'Define',
    title: 'Organize requirements and user flows',
    description:
      'I structure the information architecture, draft user journeys, and outline wireframes to guarantee every screen serves a clear purpose.',
    activities: [
      'Information architecture (IA) mapping',
      'Core user flows & happy paths',
      'Edge-case scenario planning',
      'Low-fidelity structural wireframes',
    ],
    deliverable: 'User flows & wireframe blueprints',
  },
  {
    step: 3,
    name: 'Design',
    title: 'Create wireframes, interfaces, and prototypes',
    description:
      'I translate validated wireframes into high-fidelity visual interfaces with polished typography, color systems, and interactive micro-animations.',
    activities: [
      'High-fidelity screen design in Figma',
      'Interactive prototype assembly',
      'Micro-interactions & state design',
      'Design token & component creation',
    ],
    deliverable: 'Interactive high-fidelity prototype',
  },
  {
    step: 4,
    name: 'Refine',
    title: 'Test, improve, and polish the experience',
    description:
      'I test with users, iterate based on quantitative & qualitative feedback, and package the complete design system for development handoff.',
    activities: [
      'Usability testing & feedback rounds',
      'Accessibility & contrast validation (WCAG)',
      'Design system documentation & specs',
      'Developer handoff & QA support',
    ],
    deliverable: 'Production-ready Figma system & specs',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Website UI/UX Design',
    description:
      'Modern, high-converting digital websites and landing pages that communicate brand value with clarity and cinematic visual flair.',
    deliverables: ['Custom responsive layouts', 'Desktop & mobile breakpoints', 'Figma design files', 'Interactive prototype'],
    iconName: 'Globe',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App UI/UX Design',
    description:
      'Intuitive iOS and Android application interfaces designed with native ergonomic thumb-zones, fluid transitions, and tactile feedback.',
    deliverables: ['iOS & Android screen designs', 'Native component patterns', 'Clickable mobile prototype', 'App store preview mockups'],
    iconName: 'Smartphone',
  },
  {
    id: 'saas-dashboard',
    title: 'Dashboard and SaaS Design',
    description:
      'High-density telemetry dashboards, analytics consoles, and enterprise web applications that make complex data effortless to parse.',
    deliverables: ['Modular widget layout', 'Data tables & charts', 'User role & state variations', 'Design system handoff'],
    iconName: 'LayoutDashboard',
  },
  {
    id: 'wireframing',
    title: 'Wireframing and Prototyping',
    description:
      'Rapid interactive blueprints and clickable proof-of-concepts that test user flows and validate product assumptions before engineering begins.',
    deliverables: ['Low/mid-fi wireframes', 'Interactive user journeys', 'Figma prototype links', 'User testing documentation'],
    iconName: 'Layers',
  },
  {
    id: 'design-systems',
    title: 'Design Systems & UI Components',
    description:
      'Scalable, atomic design systems with nested components, design tokens, responsive typography, and auto-layout documentation.',
    deliverables: ['Figma component library', 'Color & typography tokens', 'Component variant matrix', 'Engineering handoff guidelines'],
    iconName: 'Box',
  },
  {
    id: 'game-ui',
    title: 'Game UI Design',
    description:
      'Immersive sci-fi and modern gaming HUDs, tactical inventories, loadout screens, and menus designed for clarity in high-pressure play.',
    deliverables: ['HUD interface concepts', 'Inventory & menu layouts', 'Iconography & asset sheets', 'Controller & keyboard mappings'],
    iconName: 'Gamepad2',
  },
];

export const TOOLS: ToolItem[] = [
  {
    name: 'Figma',
    category: 'Interface & Systems',
    description: 'Primary tool for UI design, design tokens, auto-layout, interactive prototypes, and developer handoff.',
    badge: 'Primary Tool',
  },
  {
    name: 'Adobe XD',
    category: 'Wireframing & Prototyping',
    description: 'Wireframing, vector asset manipulation, and cross-platform screen flow validation.',
    badge: 'Design Tool',
  },
  {
    name: 'FigJam',
    category: 'Discovery & Flows',
    description: 'Collaborative user journey mapping, workshop ideation, and information architecture structuring.',
    badge: 'Ideation',
  },
  {
    name: 'Framer',
    category: 'Interactive Prototyping',
    description: 'Interactive high-fidelity web prototyping and micro-interaction exploration.',
    badge: 'Motion & Web',
  },
];
