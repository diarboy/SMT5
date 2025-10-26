// data/portfolio-data.ts

import type { Project, Skill, Experience } from "@/types"

export const profileData = {
  name: "Ardi Syah",
  title: "Full Stack Developer",
  location: "Cirebon, Indonesia",
  intro:
    "Creative and detail-oriented Frontend Engineer with over 8 years of experience in building scalable, responsive, and user-friendly web applications using React, TypeScript, and modern web technologies. Passionate about clean code, performance, and exceptional user experiences. Skilled in collaborating with cross-functional teams to deliver high-quality products on time.",
  about:
    "Hi! I'm Ardi Syah, a Full Stack Developer based in Cirebon, Indonesia. I specialize in creating dynamic and beautiful web applications. With a strong background in both frontend and backend development, I bring a holistic approach to building digital solutions that are not only visually appealing but also highly functional and efficient.",
  email: "ardibukan77@gmail.com",
  phone: "+62 853-2140-7111",
  social: {
    github: "https://github.com/diarboy",
    linkedin: "https://linkedin.com/allbibek",
    twitter: "https://twitter.com/allbibek_",
    instagram: "https://instagram.com/allbibek",
  },
}

export const skills: Skill[] = [
  // --- Tech & Development ---
  { name: "React Native", level: 70, icon: "logo-react", category: "Mobile Development" },
  { name: "React + TypeScript", level: 75, icon: "code-slash-outline", category: "Frontend Development" },
  { name: "Node.js & Express", level: 80, icon: "server-outline", category: "Backend Development" },
  { name: "Firebase / Supabase", level: 82, icon: "cloud-outline", category: "Backend as a Service" },
  { name: "Python (Flask, Django)", level: 75, icon: "logo-python", category: "Backend / Automation" },

  // --- Design & UX ---
  { name: "UI/UX Design", level: 85, icon: "color-palette-outline", category: "Interface & Experience" },
  { name: "Graphic Design", level: 88, icon: "brush-outline", category: "Visual Communication" },
  { name: "Adobe Creative", level: 85, icon: "image-outline", category: "Publication Design" },

  // --- Legal & Documentation ---
  { name: "Legal Drafting", level: 87, icon: "document-text-outline", category: "Legal Consulting" },
  { name: "Business Cons", level: 83, icon: "briefcase-outline", category: "Corporate Law" },
  { name: "Compliance", level: 80, icon: "shield-checkmark-outline", category: "Law & Policy" },
]


export const experience: Experience[] = [
  {
    title: "IT Student",
    company: "Institute of Technology",
    period: "2023 - Present",
    description:
      "Currently pursuing a degree in Information Technology with a focus on full-stack development, software design, and data-driven solutions. Actively involved in student research and technology-based innovation projects.",
  },
  {
    title: "Legal Advisor",
    company: "Sempaner",
    period: "2020 - Present",
    description:
      "Provide legal consultation and documentation support for business and technology-related cases. Contributed to drafting digital agreements, business proposals, and compliance frameworks for startups and SMEs.",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Labs",
    period: "2017 - 2019",
    description:
      "Designed intuitive user interfaces and interactive experiences for websites and mobile applications. Collaborated with developers to ensure pixel-perfect implementation and consistent brand identity.",
  },
  {
    title: "Web Designer",
    company: "PixelCraft",
    period: "2014 - 2017",
    description:
      "Developed modern, responsive websites for various clients. Focused on front-end implementation using HTML, CSS, and JavaScript, with an emphasis on clean design and usability.",
  },
  {
    title: "Brand Assistant",
    company: "Maven & Co.",
    period: "2013 - 2014",
    description:
      "Supported brand strategy, visual identity, and marketing collateral design. Assisted in managing brand consistency across print and digital media platforms.",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Kostanku – Property & Finance Management App",
    shortDescription: "Mobile app for boarding house management and financial tracking",
    description:
      "A React Native application designed for boarding house owners to manage rooms, tenants, and transactions in real time. Integrated with Firebase and Supabase for secure data storage and analytics dashboards.",
    image: require("@/assets/img/bookingapp.png"),
    tags: ["React Native", "Expo", "Firebase", "Supabase", "TypeScript"],
    results: [
      {
        title: "Automated Transaction Logging",
        description:
          "Implemented server-side transaction listeners and client sync that automatically record payments, refunds, and adjustments with timestamps and unique IDs. This eliminated most manual entry, improved data integrity, and made audit trails and reconciliation straightforward for landlords and tenants.",
        image: require("@/assets/img/kostanku-analytics.jpg"),
      },
      {
        title: "Integrated Wallet System",
        description:
          "Built an in-app wallet supporting top-ups, withdrawals, expense categorization, and scheduled recurring payments. Integrated with a payment gateway for secure transactions and provided per-tenant budgets and transaction histories to simplify rent collection and expense tracking.",
        image: require("@/assets/img/wallet-feature.jpg"),
      },
      {
        title: "Real-Time Reports",
        description:
          "Delivered interactive dashboards with income/expense charts, occupancy metrics, and exportable CSV/PDF statements. Features include date-range filtering, trend analysis, and automated monthly reports to help owners make informed financial decisions quickly.",
        image: require("@/assets/img/reporting.svg"),
      },
    ],
    link: "https://github.com/diarboy",
  },
  {
    id: "2",
    title: "Danusandika – Student Marketplace Platform",
    shortDescription: "Campus-based marketplace empowering student entrepreneurship",
    description:
      "A digital marketplace connecting student sellers and buyers, promoting collaborative and sustainable entrepreneurship. Features include digital wallet, product catalog, sales analytics, and seller reputation system.",
    image: require("@/assets/img/food-delivery.jpg"),
    tags: ["React Native", "Firebase", "Django REST API", "Supabase"],
    results: [
      {
        title: "Student Empowerment",
        description:
          "Onboarded student sellers with intuitive seller dashboards, inventory tools, and sales analytics. Provided seller-focused features like product templates, promotions, and educational resources to increase discoverability and monetization opportunities on campus.",
        image: require("@/assets/img/student-growth.png"),
      },
      {
        title: "Scalable Architecture",
        description:
          "Designed a modular, API-driven backend with role-based access control and horizontally scalable services using Supabase and serverless endpoints. The architecture supports per-campus provisioning and easy feature rollout across new campuses.",
        image: require("@/assets/img/collective.png"),
      },
      {
        title: "Social Collaboration",
        description:
          "Added event pages, group promotions, coupon tracking, and messaging tools to enable collaboration between sellers and student organizations. These features supported campus events, pop-up markets, and coordinated promotional campaigns with measurable engagement.",
        image: require("@/assets/img/user-reviews.jpg"),
      },
    ],
    link: "https://danusandika.figma.site/",
  },
  {
    id: "3",
    title: "KBLI2Doc – Legal Reference Generator",
    shortDescription: "Legal-tech tool to convert KBLI data into professional document templates",
    description:
      "A full-stack application that automates the generation of legal documents from KBLI classifications. Built with React frontend and Flask backend, connected to a Supabase database for efficient data retrieval.",
    image: require("@/assets/img/kbli2doc.png"),
    tags: ["React", "Flask", "Supabase", "SQLite", "Vercel"],
    results: [
      {
        title: "Automated Legal Drafting",
        description:
          "Implemented template assembly and clause binding that maps KBLI codes to pre-vetted legal clauses and variables. The system auto-populates templates, validates required fields, and produces ready-to-review documents — drastically cutting manual drafting time and reducing inconsistencies.",
        image: require("@/assets/img/search.png"),
      },
      {
        title: "Semantically Searchable Database",
        description:
          "Built full-text and semantic search over KBLI entries with fuzzy matching, synonym handling, and relevance scoring. Users can filter by industry, regulatory tags, and risk level to quickly find applicable codes and supporting language for documents.",
        image: require("@/assets/img/embed.png"),
      },
      {
        title: "Data Integration",
        description:
          "Normalized and migrated KBLI datasets to Supabase with indexing and row-level security. Created incremental migration scripts and a versioned API so generated documents always reference authoritative, auditable KBLI records.",
        image: require("@/assets/img/kbli2doc.png"),
      },
    ],
    link: "https://ardisyh.site/",
  },
  {
    id: "4",
    title: "Book & Company Profile Design Projects",
    shortDescription: "Professional visual design projects for clients and publication",
    description:
      "Designed and published books such as 'Cara Membuat Resep Kering' and 'Cara Membuat Resep Sponge Cake'. Created company profiles and business proposals integrating brand identity and strategic storytelling.",
    image: require("@/assets/img/book-publish.avif"),
    tags: ["Adobe InDesign", "Illustrator", "Branding", "Typography"],
    results: [
      {
        title: "Published Books",
        description:
          "Managed end-to-end book production including layout, typesetting, image retouching, and print-ready export. Coordinated with editors and printers to deliver ISBN-ready cookbooks with consistent styles, optimized page spreads, and correctly color-managed assets.",
        image: require("@/assets/img/book-design.jpg"),
      },
      {
        title: "Create Publisher Materials and Layouts",
        description:
          "Produced master templates, chapter style guides, and export presets for both print and digital formats. Provided reusable layout systems that accelerate future publications while maintaining typographic consistency and production-ready file standards.",
        image: require("@/assets/img/publisher.png"),
      },
      {
        title: "Corporate Identity Design",
        description:
          "Developed brand guidelines, logo variants, color systems, typography hierarchies, and templated proposal decks. Delivered cohesive identity packages that ensured consistent client communications across print, web, and presentation materials.",
        image: require("@/assets/img/mmraya.png"),
      },
    ],
  },
];