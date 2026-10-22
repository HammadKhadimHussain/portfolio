export const profile = {
  name: "Hammad Khadim Hussain",
  role: "Senior Full Stack Developer",
  headline: "Laravel PHP · WordPress · React · Next.js · Node.js",
  email: "hammadhussain72020@gmail.com",
  phoneHref: "tel:+923150234884",
  phone: "+92 315 0234884",
  location: "Karachi, Pakistan",
  linkedin: "https://www.linkedin.com/in/hammadkhan360",
  linkedinLabel: "linkedin.com/in/hammadkhan360",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const about = [
  "Full Stack Developer with 5+ years of experience building web applications, CRM/ERP systems and REST APIs with Laravel/PHP, Node.js/Express, React.js, Vue.js and .NET, backed by MySQL, PostgreSQL and vector databases.",
  "I work independently as well as in a team. On my own, I have built complete products end to end, designed system architecture (modular monolith and microservices) and REST APIs, built AI chatbots and RAG features, and handled AWS deployment and CI/CD.",
  "In a team I review code, take part in sprint planning and share ownership of releases. I talk to clients directly, understand what they need, and take ownership of delivering it.",
];

export const ways = [
  {
    title: "On my own",
    text: "Complete products end to end: system architecture, REST APIs, AI chatbots and RAG, plus AWS deployment and CI/CD.",
  },
  {
    title: "On a team",
    text: "Code review, sprint planning, technical discussion, and shared ownership of releases.",
  },
  {
    title: "With clients",
    text: "Direct requirement conversations and ownership of delivery. At Pixelz360 that work runs through Slack and Jira.",
  },
];

export const impact = [
  {
    value: "5+",
    label: "Years building web apps, CRM/ERP systems, and REST APIs",
  },
  {
    value: "8+",
    label: "Production products delivered for clients at Pixelz360",
  },
  {
    value: "2×",
    label: "System performance after a move to modular monolith and microservices",
  },
  {
    value: "40%",
    label: "Shorter deployments with GitHub CI/CD pipelines",
  },
];

export const experience = [
  {
    id: "pixelz360",
    role: "Full Stack Developer",
    company: "Pixelz360",
    dates: "Aug 2023 – Present",
    current: true,
    stack: [
      "Laravel",
      "PHP",
      "Node.js",
      "React",
      "Next.js",
      "Vue.js",
      "MySQL",
      ".NET",
      "OpenAI",
      "AWS",
      "Docker",
      "NGINX",
      "WordPress",
      "Shopify",
    ],
    points: [
      "Own the development of CRM and ERP systems using Laravel/PHP, Node.js, React.js, Next.js, Vue.js and MySQL, and moved them to a modular monolith and microservices design that doubled system performance.",
      "Built .NET Windows Forms desktop systems for client business operations.",
      "Designed REST APIs for client products and third-party systems, and added OpenAI API features to products.",
      "Trained ML models on datasets built from PDF documents to support AI features.",
      "Planned the architecture and handled deployment on AWS with Docker and NGINX, including SSL, DNS and Cloudflare, which improved load speed by 20%.",
      "Review pull requests on GitHub and set up CI/CD pipelines, cutting deployment time by 40%.",
      "Work directly with clients to understand requirements, and delivered 8+ production products for clients including McLaren Quinn (London) and Bardi Construction, working through Slack and Jira.",
      "Built an AI chatbot for client websites and a Discord chatbot with the OpenAI API that answer user questions automatically, cutting manual support work.",
      "Fix bugs in live systems, write technical documentation, and take part in sprint planning and technical discussions with the team.",
      "Built and maintained WordPress (Elementor), WooCommerce and Shopify (Liquid) sites, handled SEO to keep them fast and easy to find, and launched the LeadX Forms plugin with a Vue.js portal.",
    ],
  },
  {
    id: "cubix",
    role: "Software Engineer",
    company: "Cubix",
    dates: "May 2022 – Jul 2023",
    current: false,
    stack: ["PHP", "Laravel", "Node.js", "OpenAI", "MQTT"],
    points: [
      "Built the ProTrade ERP inventory system in PHP and Laravel (stock, purchase/sales orders, live tracking), improving inventory accuracy by 20% and cutting order time by 35%.",
      "Built a RAG chatbot in Node.js with the OpenAI API, using streaming for real-time answers.",
      "Reviewed teammates' code and tested my features before release to keep quality high.",
      "Met with clients and the team to understand requirements, and delivered my tasks on time in sprints.",
      "Wrote API and module documentation so new team members could pick up work faster.",
      "Connected IoT devices to backend services using MQTT.",
    ],
  },
  {
    id: "evantagesoft",
    role: "Laravel/PHP Developer",
    company: "EvantageSoft",
    dates: "Feb 2021 – Apr 2022",
    current: false,
    stack: ["Laravel", "PHP", "RabbitMQ", "REST APIs", "Google Maps API"],
    points: [
      "Integrated the Alfalah payment gateway and other third-party APIs in Laravel, improving transaction processing efficiency by 20%.",
      "Introduced RabbitMQ in the food ordering system, reducing latency by 40%.",
      "Worked with the Flutter team to design and improve REST APIs, making response times 30% faster.",
      "Owned the payment and order modules from development to release and fixed live issues fast.",
      "Built a CRM and live order tracking module for a food delivery platform using Google Maps API and distance-based delivery charges.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Backend & APIs",
    items: [
      "PHP",
      "Laravel",
      "Node.js",
      "Express.js",
      "C# / .NET (Windows Forms)",
      "REST APIs",
      "Payment Gateways",
      "Python",
      "SOLID",
      "Design Patterns",
    ],
  },
  {
    title: "Front-End",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Vue.js",
    ],
  },
  {
    title: "Databases & Architecture",
    items: [
      "MySQL",
      "PostgreSQL",
      "SQL Optimization",
      "MongoDB",
      "Firebase",
      "RabbitMQ",
      "Microservices",
      "Modular Monolith",
      "Vector Databases",
      "MQTT",
    ],
  },
  {
    title: "Linux & DevOps",
    items: [
      "Linux",
      "NGINX",
      "Docker",
      "GitHub CI/CD",
      "AWS (EC2, Lightsail, S3, IAM)",
      "SSL",
      "DNS",
      "Cloudflare",
      "Git",
      "Code Review",
    ],
  },
  {
    title: "AI / LLM / ML",
    items: [
      "OpenAI API",
      "RAG Pipelines",
      "ML Model Training",
      "Chatbots",
      "Discord Bots",
      "Cursor",
      "Codex",
      "Claude Code",
    ],
  },
  {
    title: "CMS & E-Commerce",
    items: [
      "WordPress (Elementor, custom themes & plugins)",
      "Shopify (Liquid)",
      "WooCommerce",
      "SEO",
      "Figma to website",
    ],
  },
];

export const filters = ["All", "ERP & CRM", "APIs", "Platforms", "Commerce"];

export const projects = [
  {
    id: "geomem",
    name: "Geomem",
    summary: "APIs for a hiking app, including Google Location.",
    groups: ["APIs"],
    scope: ["Hiking app", "APIs", "Google Location"],
  },
  {
    id: "schedule-buddy",
    name: "My Schedule Buddy",
    summary: "A kids routine portal with the APIs behind it.",
    groups: ["Platforms", "APIs"],
    scope: ["Kids routine", "Portal", "APIs"],
  },
  {
    id: "autoyard",
    name: "AutoYard",
    summary: "A car auction website together with a CRM for the business.",
    groups: ["ERP & CRM"],
    scope: ["Car auction", "Website", "CRM"],
  },
  {
    id: "wicofly",
    name: "Wicofly",
    summary: "A CRM for store management.",
    groups: ["ERP & CRM"],
    scope: ["Store management", "CRM"],
  },
  {
    id: "clink",
    name: "C-Link",
    summary: "A construction procurement platform.",
    groups: ["Platforms"],
    scope: ["Construction", "Procurement"],
  },
  {
    id: "knock-here",
    name: "Knock Here",
    summary: "A portal with the system APIs that support it.",
    groups: ["APIs", "Platforms"],
    scope: ["Portal", "System APIs"],
  },
  {
    id: "leadx",
    name: "LeadX Forms",
    summary:
      "A WordPress plugin and Vue.js portal, launched alongside WordPress, WooCommerce, and Shopify work.",
    groups: ["Commerce"],
    scope: ["WordPress plugin", "Vue.js portal"],
  },
  {
    id: "hhc",
    name: "HHC Dropshipping",
    summary: "An ERP and CRM platform with APIs for dropshipping operations.",
    groups: ["ERP & CRM", "APIs"],
    scope: ["ERP", "CRM", "APIs"],
  },
  {
    id: "usimoney",
    name: "UsiMoney",
    summary: "A remittance API paired with a CRM.",
    groups: ["APIs", "ERP & CRM"],
    scope: ["Remittance API", "CRM"],
  },
  {
    id: "lokal",
    name: "Lokal.pk",
    summary:
      "Hotel booking management with a website, portal, vendor tools, and inventory.",
    groups: ["Platforms", "ERP & CRM"],
    scope: ["Website", "Portal", "Vendor", "Inventory"],
  },
];

export const education = [
  {
    id: "iqra",
    period: "2021 – 2025",
    title: "Bachelor of Computer Science",
    place: "Iqra University",
  },
  {
    id: "aptech",
    period: "2020 – 2023",
    title: "ACCP Pro",
    place: "Aptech Learning Center",
  },
];
