/**
 * All static website content lives here. Edit this file to change copy,
 * services, projects, FAQs and contact details — no template changes needed.
 */
import {
  ContactInfo,
  EngagementModel,
  Faq,
  Highlight,
  NavLink,
  ProcessStep,
  Project,
  Service,
  TechCategory,
  Testimonial,
} from '../models/site.models';

/* TODO: replace the LinkedIn and GitHub placeholders with your real profile URLs. */
export const CONTACT: ContactInfo = {
  brand: 'WebBridge',
  tagline: 'Websites & Software Solutions',
  email: 'webbridgewebsitessoftware@gmail.com',
  whatsapp: '918857977133',
  phoneDisplay: '+91 88579 77133',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  location: 'Remote · Working with clients worldwide',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Services', target: 'services' },
  { label: 'Technologies', target: 'technologies' },
  { label: 'Projects', target: 'projects' },
  { label: 'Hire Us', target: 'freelance' },
  { label: 'Contact', target: 'contact' },
];

export const HERO = {
  trust: 'Building Digital Experiences for Modern Businesses',
  titleLead: 'Turning Ideas Into',
  titleHighlight: 'Powerful Digital Solutions',
  subtitle:
    'We design and develop modern websites, scalable applications, and custom software that help businesses grow faster.',
  /** factual capability points — no invented statistics */
  points: ['Angular & Spring Boot specialists', 'Open for freelance projects', 'Clear, fixed-scope proposals'],
};

/** Lines rendered in the animated hero terminal. */
export const HERO_CODE: { text: string; cls: string }[][] = [
  [{ text: '// webbridge.config.ts', cls: 'c' }],
  [{ text: 'const ', cls: 'k' }, { text: 'project', cls: 'v' }, { text: ' = ', cls: 'p' }, { text: 'await ', cls: 'k' }, { text: 'webbridge', cls: 'f' }, { text: '.build({', cls: 'p' }],
  [{ text: '  idea', cls: 'v' }, { text: ': ', cls: 'p' }, { text: "'your vision'", cls: 's' }, { text: ',', cls: 'p' }],
  [{ text: '  frontend', cls: 'v' }, { text: ': ', cls: 'p' }, { text: "'Angular'", cls: 's' }, { text: ',', cls: 'p' }],
  [{ text: '  backend', cls: 'v' }, { text: ': ', cls: 'p' }, { text: "'Spring Boot'", cls: 's' }, { text: ',', cls: 'p' }],
  [{ text: '  scalable', cls: 'v' }, { text: ': ', cls: 'p' }, { text: 'true', cls: 'n' }, { text: ',', cls: 'p' }],
  [{ text: '});', cls: 'p' }],
  [{ text: '', cls: 'p' }],
  [{ text: '✔ ', cls: 'ok' }, { text: 'Build successful — ready to launch 🚀', cls: 'ok' }],
];

export const ABOUT = {
  title: 'Your Technology Partner for',
  highlight: 'Digital Growth',
  description:
    'We help businesses transform ideas into reliable, scalable, and user-friendly digital products through modern engineering and creative problem-solving.',
  body:
    'From the first conversation to production launch, we work as an extension of your team — translating business goals into clean architecture, polished interfaces, and software that is easy to maintain as you grow.',
};

export const ABOUT_HIGHLIGHTS: Highlight[] = [
  {
    icon: 'briefcase',
    title: 'Business-Focused Solutions',
    description: 'Every feature is tied to a business outcome — faster workflows, more sales, or better customer experience.',
  },
  {
    icon: 'layers',
    title: 'Modern Technology Stack',
    description: 'Angular, Java, Spring Boot and proven databases — chosen for longevity, security and scale.',
  },
  {
    icon: 'gauge',
    title: 'Quality & Performance',
    description: 'Clean code, code reviews, testing and performance budgets baked into every delivery.',
  },
];

export const SERVICES: Service[] = [
  {
    icon: 'code',
    title: 'Custom Software Development',
    description: 'Tailored software solutions built around your exact business requirements and workflows.',
    tags: ['Java', 'Angular', 'Spring AI', 'Jasper Reports'],
  },
  {
    icon: 'globe',
    title: 'Web Application Development',
    description: 'Modern, responsive and scalable web applications that work beautifully on every device.',
    tags: ['SPA', 'Responsive', 'PWA'],
  },
  {
    icon: 'coffee',
    title: 'Java & Spring Boot Development',
    description: 'Secure REST APIs, enterprise applications and microservices built on a rock-solid backend.',
    tags: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring AOP'],
  },
  {
    icon: 'layout',
    title: 'Angular Frontend Development',
    description: 'Dynamic dashboards, responsive interfaces and modern UI experiences with Angular.',
    tags: ['Angular', 'TypeScript', 'RxJS'],
  },
  {
    icon: 'cart',
    title: 'E-commerce Development',
    description: 'Online stores, product catalogues and business platforms designed to convert.',
    tags: ['Catalogue', 'Payments', 'Admin'],
  },
  {
    icon: 'plug',
    title: 'API & Microservices Development',
    description: 'Scalable service architecture and smooth third-party integrations.',
    tags: ['REST', 'Docker', 'Integrations'],
  },
  {
    icon: 'database',
    title: 'Database Design & Optimization',
    description: 'Efficient schema design, indexing strategies and query optimization for speed.',
    tags: ['Oracle', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    icon: 'refresh',
    title: 'Website Redesign & Maintenance',
    description: 'Modernization, performance improvements and dependable ongoing support.',
    tags: ['Redesign', 'Speed', 'Support'],
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Frontend',
    icon: 'layout',
    items: [
      { name: 'Angular', mark: 'A', color: '#dd0031' },
      { name: 'React', mark: '⚛', color: '#61dafb' },
      { name: 'HTML5', mark: '5', color: '#e34f26' },
      { name: 'CSS3', mark: '3', color: '#2965f1' },
      { name: 'JavaScript', mark: 'JS', color: '#f7df1e' },
      { name: 'TypeScript', mark: 'TS', color: '#3178c6' },
    ],
  },
  {
    title: 'Backend & Spring Ecosystem',
    icon: 'server',
    items: [
      { name: 'Java', mark: 'J', color: '#f89820' },
      { name: 'Spring Boot', mark: 'SB', color: '#6db33f' },
      { name: 'Spring MVC', mark: 'MVC', color: '#6db33f' },
      { name: 'Spring AOP', mark: 'AOP', color: '#8bc34a' },
      { name: 'Spring AI', mark: 'AI', color: '#22d3ee' },
      { name: 'REST APIs', mark: '{}', color: '#00d4ff' },
      { name: 'Microservices', mark: 'μ', color: '#a78bfa' },
    ],
  },
  {
    title: 'Database & ORM',
    icon: 'database',
    items: [
      { name: 'Oracle', mark: 'O', color: '#f80000' },
      { name: 'PostgreSQL', mark: 'Pg', color: '#4f8fd6' },
      { name: 'MySQL', mark: 'My', color: '#00a3c4' },
      { name: 'MongoDB', mark: 'M', color: '#47a248' },
      { name: 'Hibernate', mark: 'H', color: '#bcae79' },
      { name: 'Spring Data JPA', mark: 'JPA', color: '#6db33f' },
    ],
  },
  {
    title: 'Tools, Cloud & Reporting',
    icon: 'cloud',
    items: [
      { name: 'Git', mark: 'G', color: '#f05032' },
      { name: 'GitHub', mark: 'GH', color: '#e2e8f0' },
      { name: 'SVN', mark: 'SVN', color: '#809cc9' },
      { name: 'Docker', mark: 'D', color: '#2496ed' },
      { name: 'AWS', mark: 'aws', color: '#ff9900' },
      { name: 'Postman', mark: 'P', color: '#ff6c37' },
      { name: 'Jasper Reports', mark: 'JR', color: '#f97316' },
    ],
  },
];

/**
 * Demo / concept projects. These are illustrative builds showing the kind of
 * work we deliver — they are NOT presented as client engagements.
 */
export const PROJECTS: Project[] = [
  /* ---------- Business websites ---------- */
  {
    title: 'Corporate Business Website',
    type: 'website',
    category: 'Company Website',
    description: 'A professional multi-page website for a growing company: services, team, portfolio and lead-capturing contact forms.',
    features: ['Home, About, Services & Contact pages', 'Lead enquiry form with WhatsApp/email', 'Google Maps & business hours', 'SEO-ready, fast-loading pages'],
    tech: ['Angular', 'TypeScript', 'SCSS'],
    visual: 'website',
    accent: ['#3b82f6', '#9333ea'],
  },
  {
    title: 'Clinic & Hospital Website',
    type: 'website',
    category: 'Healthcare',
    description: 'A trustworthy website for clinics and hospitals with doctor profiles, departments and online appointment requests.',
    features: ['Doctor & department profiles', 'Online appointment requests', 'Timings, location & emergency contact', 'Patient-friendly mobile design'],
    tech: ['Angular', 'Spring Boot', 'MySQL'],
    visual: 'booking',
    accent: ['#06b6d4', '#22c55e'],
  },
  {
    title: 'Real Estate Property Website',
    type: 'website',
    category: 'Real Estate',
    description: 'Property listings with search filters, photo galleries and enquiry forms for builders, brokers and agents.',
    features: ['Property listings & filters', 'Photo galleries & floor plans', 'Site-visit enquiry form', 'Admin panel to manage listings'],
    tech: ['Angular', 'Spring Boot', 'PostgreSQL'],
    visual: 'listing',
    accent: ['#f59e0b', '#3b82f6'],
  },
  {
    title: 'School & Coaching Institute Website',
    type: 'website',
    category: 'Education',
    description: 'Courses, faculty, admissions, notices and results in one place for schools, colleges and coaching classes.',
    features: ['Courses & faculty pages', 'Online admission enquiry', 'Notice board & events', 'Photo gallery & results'],
    tech: ['Angular', 'Java', 'Oracle'],
    visual: 'website',
    accent: ['#6366f1', '#06b6d4'],
  },
  {
    title: 'Hotel & Resort Booking Website',
    type: 'website',
    category: 'Hospitality',
    description: 'A rich, visual website for hotels and resorts with room details, amenities, offers and booking requests.',
    features: ['Rooms, amenities & gallery', 'Availability & booking requests', 'Seasonal offers section', 'Reviews & location map'],
    tech: ['Angular', 'Spring Boot', 'MySQL'],
    visual: 'booking',
    accent: ['#ec4899', '#f59e0b'],
  },
  {
    title: 'Manufacturing Company Website',
    type: 'website',
    category: 'Industrial / B2B',
    description: 'A B2B website for manufacturers and suppliers with product catalogue, certifications and bulk-quote requests.',
    features: ['Product catalogue with specs', 'Downloadable brochures (PDF)', 'Request-a-quote form', 'Certifications & client industries'],
    tech: ['Angular', 'Spring Boot', 'Jasper Reports'],
    visual: 'shop',
    accent: ['#22c55e', '#3b82f6'],
  },

  /* ---------- Web applications & software ---------- */
  {
    title: 'Business Management System',
    type: 'app',
    category: 'Enterprise Web App',
    description: 'An all-in-one platform for managing customers, invoices, inventory and reports from a single dashboard.',
    features: ['Role-based access control', 'Invoice & GST-ready billing', 'Inventory tracking with alerts', 'Exportable reports'],
    tech: ['Angular', 'Spring Boot', 'PostgreSQL'],
    visual: 'dashboard',
    accent: ['#3b82f6', '#00d4ff'],
  },
  {
    title: 'Laundry Management Application',
    type: 'app',
    category: 'Operations App',
    description: 'Order intake, garment tracking, delivery scheduling and customer notifications for laundry businesses.',
    features: ['Order lifecycle tracking', 'Pickup & delivery scheduling', 'Customer SMS/WhatsApp updates', 'Daily revenue summary'],
    tech: ['Angular', 'Java', 'MySQL'],
    visual: 'laundry',
    accent: ['#06b6d4', '#22d3ee'],
  },
  {
    title: 'Restaurant Digital Menu Platform',
    type: 'app',
    category: 'QR Menu & Ordering',
    description: 'QR-code digital menus with categories, item photos, live availability and an easy admin panel.',
    features: ['QR menu per table', 'Live item availability', 'Category & combo management', 'Mobile-first design'],
    tech: ['Angular', 'REST API', 'MongoDB'],
    visual: 'menu',
    accent: ['#f59e0b', '#ef4444'],
  },
  {
    title: 'Industrial Monitoring Dashboard',
    type: 'app',
    category: 'IoT / Analytics',
    description: 'Real-time machine metrics, threshold alerts and historical charts for factory floor visibility.',
    features: ['Live sensor metrics', 'Threshold-based alerts', 'Historical trend charts', 'Shift-wise reports'],
    tech: ['Angular', 'Spring Boot', 'Microservices'],
    visual: 'monitor',
    accent: ['#22c55e', '#00d4ff'],
  },
  {
    title: 'E-commerce Web Application',
    type: 'app',
    category: 'Online Store',
    description: 'A fast storefront with product catalogue, cart, checkout flow and order management.',
    features: ['Product catalogue & filters', 'Cart & checkout flow', 'Order management admin', 'SEO-friendly pages'],
    tech: ['Angular', 'Spring Boot', 'MySQL'],
    visual: 'shop',
    accent: ['#9333ea', '#ec4899'],
  },
  {
    title: 'HR Management System',
    type: 'app',
    category: 'People Operations',
    description: 'Employee records, attendance, leave workflows and payroll summaries in one secure system.',
    features: ['Employee directory', 'Attendance & leave approvals', 'Payroll summaries', 'Document storage'],
    tech: ['Angular', 'Java', 'Oracle'],
    visual: 'hr',
    accent: ['#6366f1', '#9333ea'],
  },
];

/* ---------- Freelance projects ---------- */
export const FREELANCE = {
  availability: 'Now accepting new freelance projects',
  title: 'Hire Us for',
  highlight: 'Freelance Projects',
  subtitle:
    'Startups, agencies and businesses worldwide can hire us for one-time projects, ongoing work or quick fixes, with flexible engagement models that fit your budget.',
  perks: [
    { icon: 'globe', text: 'Clients in any country, remote-first' },
    { icon: 'message', text: 'Direct communication via WhatsApp, email & calls' },
    { icon: 'shield', text: 'NDA available & full source-code ownership' },
    { icon: 'clock', text: 'Milestone-based payments & regular updates' },
  ],
} as const;

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    icon: 'target',
    title: 'Fixed-Price Project',
    description: 'A clearly defined scope, timeline and price agreed upfront.',
    bestFor: 'Websites, MVPs & well-defined features',
    points: ['Detailed scope & quotation', 'Milestone-based payments', 'Post-launch support window'],
    featured: true,
  },
  {
    icon: 'clock',
    title: 'Hourly / Part-Time',
    description: 'Flexible hours for evolving requirements or ongoing improvements.',
    bestFor: 'Changing scope & feature additions',
    points: ['Pay only for hours worked', 'Weekly progress reports', 'Scale hours up or down'],
  },
  {
    icon: 'users',
    title: 'Dedicated Developer',
    description: 'A developer working with your team on a monthly retainer.',
    bestFor: 'Agencies & long-term products',
    points: ['Works in your tools & workflow', 'Overlapping working hours', 'Monthly retainer pricing'],
  },
  {
    icon: 'wrench',
    title: 'Small Tasks & Fixes',
    description: 'Quick bug fixes, updates and small enhancements to existing apps.',
    bestFor: 'Existing websites & applications',
    points: ['Fast turnaround', 'Code review before changes', 'Angular, Java & Spring Boot apps'],
  },
];

export const ENGAGEMENT_OPTIONS: string[] = [
  ...ENGAGEMENT_MODELS.map((m) => m.title),
  'Not sure yet — need advice',
];

/** Industries we build business websites for (shown under the projects grid). */
export const INDUSTRIES: string[] = [
  'Retail & Shops',
  'Restaurants & Cafés',
  'Clinics & Hospitals',
  'Schools & Coaching',
  'Real Estate',
  'Hotels & Travel',
  'Manufacturing & B2B',
  'Salons, Spas & Gyms',
  'CA, Legal & Consultants',
  'Startups & IT Services',
  'Events & Wedding Planners',
  'NGOs & Trusts',
];

export const PROCESS: ProcessStep[] = [
  { number: '01', title: 'Requirement Analysis', icon: 'search', description: 'We understand your goals, users and constraints, and define a clear scope.' },
  { number: '02', title: 'Planning & Architecture', icon: 'compass', description: 'Tech stack, data model, milestones and a realistic timeline.' },
  { number: '03', title: 'UI/UX Design', icon: 'pen', description: 'Wireframes and polished interfaces you approve before we build.' },
  { number: '04', title: 'Development', icon: 'terminal', description: 'Iterative sprints with regular demos so you see progress early.' },
  { number: '05', title: 'Testing & Optimization', icon: 'shield', description: 'Functional testing, performance tuning and cross-device QA.' },
  { number: '06', title: 'Deployment & Support', icon: 'rocket', description: 'Smooth launch, handover documentation and ongoing support.' },
];

export const WHY_US: Highlight[] = [
  { icon: 'code', title: 'Clean & Maintainable Code', description: 'Readable, documented, consistently structured code that any developer can pick up — no lock-in.' },
  { icon: 'layers', title: 'Scalable Architecture', description: 'Modular designs that grow with your users and features without costly rewrites.' },
  { icon: 'cpu', title: 'Modern Technology Stack', description: 'Current, well-supported frameworks chosen for security and long-term stability.' },
  { icon: 'smartphone', title: 'Responsive Design', description: 'Pixel-perfect on mobile, tablet, laptop and desktop.' },
  { icon: 'clock', title: 'On-Time Delivery', description: 'Milestone-based planning with transparent progress updates.' },
  { icon: 'headset', title: 'Dedicated Support', description: 'A direct line to the developers who built your product.' },
];

/**
 * SAMPLE testimonials for layout/demo purposes only.
 * Replace with genuine client feedback (with permission) before launch.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'The team turned a rough spreadsheet workflow into a clean web application our staff actually enjoy using. Communication was clear throughout.',
    name: 'Sample Client A',
    role: 'Operations Lead · Demo testimonial',
    initials: 'SA',
  },
  {
    quote: 'Our old website was slow and hard to update. The redesign is fast, looks premium, and works perfectly on phones.',
    name: 'Sample Client B',
    role: 'Founder · Demo testimonial',
    initials: 'SB',
  },
  {
    quote: 'Solid Spring Boot APIs, well documented and easy for our in-house team to extend. Exactly what we needed.',
    name: 'Sample Client C',
    role: 'Product Manager · Demo testimonial',
    initials: 'SC',
  },
];

export const FAQS: Faq[] = [
  {
    question: 'What software development services do you provide?',
    answer:
      'We build custom software, web applications, Angular frontends, Java & Spring Boot backends, REST APIs and microservices, e-commerce platforms, database design and optimization, plus website redesign and maintenance.',
  },
  {
    question: 'Do you accept freelance projects?',
    answer:
      'Yes. We take on freelance projects from startups, agencies and businesses worldwide, from complete websites and web applications to small tasks and bug fixes. You can hire us on a fixed-price, hourly/part-time or dedicated-developer basis.',
  },
  {
    question: 'Do you develop custom web applications?',
    answer:
      'Yes — custom web applications are our core work. We design them around your workflows, from internal dashboards and management systems to customer-facing portals.',
  },
  {
    question: 'Can you work with existing applications?',
    answer:
      'Absolutely. We can audit your current codebase, fix bugs, add new features, improve performance or gradually modernize legacy systems without disrupting your business.',
  },
  {
    question: 'Do you provide website maintenance?',
    answer:
      'Yes. We offer ongoing maintenance covering updates, security patches, performance monitoring, content changes and small enhancements.',
  },
  {
    question: 'How much does a software development project cost?',
    answer:
      'Cost depends on scope, features and integrations. After a short discovery call we share a transparent, itemized proposal so you know exactly what you are paying for before any work begins.',
  },
  {
    question: 'How long does development take?',
    answer:
      'A business website typically takes 2–4 weeks, while custom web applications usually take 6–16 weeks depending on complexity. You will get a milestone-based timeline with the proposal.',
  },
  {
    question: 'Do you provide post-launch support?',
    answer:
      'Yes. Every project includes a post-launch support window for fixes and adjustments, and we offer flexible support plans for long-term maintenance.',
  },
];

export const SERVICE_OPTIONS: string[] = [
  'Business Website Development',
  ...SERVICES.map((s) => s.title),
  'Something else / Not sure yet',
];

export const BUDGET_OPTIONS: string[] = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $7,000',
  '$7,000 – $15,000',
  '$15,000+',
  'Not sure yet',
];
