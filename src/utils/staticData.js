import { FaMobileAlt, FaSearch, FaShieldAlt, FaShoppingCart, FaBell, FaBolt, FaLaptopCode, FaServer, FaUsers, FaBrain, FaEye, FaLanguage, FaChartLine, FaLock, FaLayerGroup, FaCog, FaDatabase, FaReact, FaNodeJs, FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDevices, MdOutlineDashboard, MdQrCodeScanner } from "react-icons/md";
import { FiMonitor, FiArrowRight } from "react-icons/fi";
import { AiOutlineCloud, AiOutlineDeploymentUnit } from "react-icons/ai";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiElectron, SiMysql, SiPostman, SiFigma } from "react-icons/si";

const serviceData = [
    {
        name: 'frontend-development',
        title: 'Frontend Development',
        image: '/frontend.png',
        description: 'Specializing in Next.js 15 and React.js to build high-performance, responsive, and intuitive user interfaces.',
        details: [
            "I architect and deliver production-ready frontends using the latest React ecosystem. My focus is on component standardization, state management with Context API/Redux, and ensuring pixel-perfect designs with Tailwind CSS.",
        ],
        features: [
            {
                heading: 'Next.js 15 & SSR',
                icon: SiNextdotjs,
                description: 'Leveraging Server-Side Rendering and App Router for SEO-friendly, fast-loading applications.',
            },
            {
                heading: 'TypeScript Integration',
                icon: SiTypescript,
                description: 'Ensuring type safety and maintainable codebases across large-scale applications.',
            },
            {
                heading: 'Responsive Design',
                icon: MdDevices,
                description: 'Crafting fluid layouts that provide a seamless experience across all screen sizes.',
            },
            {
                heading: 'State Management',
                icon: FaLayerGroup,
                description: 'Efficient global state handling using Context API and modern patterns to reduce overhead.',
            },
        ],
    },
    {
        name: 'full-stack-integration',
        title: 'Full Stack Integration',
        image: '/fullstack.png',
        description: 'Bridging the gap between frontend and backend with robust API integrations and Node.js services.',
        details: [
            "I integrate complex REST APIs and develop backend services with Node.js and Express. My experience includes real-time data rendering and database management with MySQL, ensuring data accuracy across enterprise systems.",
        ],
        features: [
            {
                heading: 'REST API Integration',
                icon: AiOutlineDeploymentUnit,
                description: 'Integrating multiple endpoints with real-time data synchronization and error handling.',
            },
            {
                heading: 'Node.js Backend',
                icon: FaNodeJs,
                description: 'Building scalable server-side logic and managing database interactions efficiently.',
            },
            {
                heading: 'Real-Time Data',
                icon: FaBolt,
                description: 'Implementing features that require instant updates and live data accuracy.',
            },
            {
                heading: 'Role-Based Access (RBAC)',
                icon: FaLock,
                description: 'Securing applications with scoped permissions and data-controlled views.',
            },
        ],
    },
    {
        name: 'desktop-app-development',
        title: 'Desktop App Development',
        image: '/desktop.png',
        description: 'Developing cross-platform desktop applications using Electron.js with offline-first capabilities.',
        details: [
            "I built and shipped a restaurant POS desktop app using React.js and Electron.js. This project emphasized offline-first architecture, ensuring business continuity without internet connectivity.",
        ],
        features: [
            {
                heading: 'Electron.js Framework',
                icon: SiElectron,
                description: 'Creating native-feeling desktop experiences for Windows and macOS.',
            },
            {
                heading: 'Offline-First Architecture',
                icon: FaShieldAlt,
                description: 'Implementing local synchronization to ensure zero data loss during network outages.',
            },
            {
                heading: 'Inventory Management',
                icon: FaDatabase,
                description: 'Building complex systems to track sales, stock, and analytics in a desktop environment.',
            },
        ],
    }
];

const aboutData = {
    pageHeader: "Experience & Story",
    heading: 'Driven by Code, Focused on User Experience',
    abstract: [
        "I am Yokesh Kumar T R, a Full Stack Developer (Frontend-Focused) with 9+ months of production internship experience. I specialize in building scalable web and desktop applications using React, Next.js 15, and Node.js.",
        "Currently at Softnix Solutions, I architect complex ERP systems and property management tools. I'm passionate about clean code, component standardization, and delivering high-impact solutions that solve real-world business challenges.",
        "My journey started with a focus on problem-solving, leading to the development of several live projects, from QR-based check-in systems to multi-tenant booking platforms. I am committed to continuous learning and staying ahead of the curve in the React ecosystem."
    ],
    detail: [
        "Specialized in Next.js 15, React, and TypeScript for enterprise-grade frontend development.",
        "Experienced in integrating 15+ REST API endpoints and managing real-time data accuracy.",
        "Proficient in building offline-first desktop applications with Electron.js.",
        "B.Tech in Computer Science and Business Systems (Expected 2026)."
    ],
    image: "/yokesh-profile.jpg", // Placeholder for actual image
    recordDummy: [1, 2, 3, 4],
    skillData: {
        heading: "Technical Arsenal",
        paragraph: "My tech stack is built around the modern JavaScript ecosystem, focusing on performance, type safety, and developer experience.",
        technologies: {
            language: "JavaScript (ES6+), TypeScript, HTML5, CSS3",
            frontend: "React.js, Next.js 15, Tailwind CSS, Context API, React Hook Form",
            backend: "Node.js, Express.js, MySQL (CRUD, Joins)",
            tools: "Git, GitHub, Postman, Figma, VS Code, Electron.js"
        }
    },
    profileData: {
        heading: "Professional Identity",
        paragraph: "A proactive developer who has moved from learning to shipping production code for organizations and international clients."
    }
};

const experienceData = [
    {
        company: "Softnix Solutions",
        role: "Frontend Developer Intern",
        period: "Nov 2024 – Present",
        highlights: [
            "Architected QR-based visitor check-in, cutting manual time by ~40%.",
            "Delivered full ERP frontend (10+ modules) reducing UI bugs by 30%.",
            "Built Dubai-based Real Estate PMS for property listing and lease tracking.",
            "Led code reviews and enforced frontend quality standards."
        ]
    },
    {
        company: "Unityr Techlabs",
        role: "Frontend Developer Intern",
        period: "Feb 2024 – Oct 2024",
        highlights: [
            "Shipped a restaurant POS desktop app using React + Electron with offline-first architecture.",
            "Developed real-time API integrations for a conference management web app.",
            "Consistently delivered sprint tasks across 8+ Agile cycles."
        ]
    }
];

const projects = [
    {
        title: "Real Estate Property Management System",
        tech: "Next.js · TypeScript · Tailwind CSS",
        description: "A comprehensive ERP frontend for a Dubai-based client covering property listings, tenant onboarding, and financial dashboards.",
        image: "/pms.png",
        client: "Dubai Real Estate Client",
        link: "Confidential",
        dateFrom: "Nov 2024",
        dateTo: "Present",
        statement: "The client needed a robust, scalable system to manage a large portfolio of properties, tenants, and lease agreements in the Dubai market, requiring role-based access and real-time financial tracking.",
        details: [
            "Built with Next.js 15 for optimal performance and SEO.",
            "Implemented Role-Based Access Control (RBAC) for Managers, Agents, and Tenants.",
            "Developed responsive dashboards for financial tracking and property analytics.",
            "Integrated complex REST APIs for real-time lease management and renewals."
        ],
        technologyStack: {
            paragraph: "The project utilizes a modern frontend stack to ensure performance, type safety, and a premium user experience.",
            stack: {
                frontend: ["Next.js 15", "TypeScript", "Tailwind CSS", "React Hook Form"],
                state: ["Context API"],
                icons: ["React Icons", "Lucide React"]
            }
        },
        conclusion: "The system successfully streamlined the takeover process and improved property management efficiency for the client.",
        tags: ["ERP", "Real Estate", "Next.js", "PropTech"]
    },
    {
        title: "Appointment Booking System",
        tech: "Next.js 15 · TypeScript · Tailwind CSS",
        description: "Multi-tenant platform with dynamic subdomain routing and RBAC dashboards for 4 roles.",
        image: "/booking.png",
        client: "Softnix Solutions",
        link: "Live in Production",
        dateFrom: "Oct 2024",
        dateTo: "Present",
        statement: "The goal was to create a multi-tenant booking platform where each organization has its own branded subdomain and specialized dashboards for different staff roles.",
        details: [
            "Architected QR-based visitor check-in functionality.",
            "Implemented dynamic subdomain routing for multi-tenant isolation.",
            "Built complex calendar integrations for appointment scheduling.",
            "Developed RBAC dashboards for Admin, Owner, Staff, and Customers."
        ],
        technologyStack: {
            paragraph: "Focusing on scalability and multi-tenancy support through modern React patterns.",
            stack: {
                frontend: ["Next.js 15", "TypeScript", "Tailwind CSS"],
                backend: ["Node.js integration"],
                security: ["RBAC", "JWT"]
            }
        },
        conclusion: "Reduced manual check-in time by ~40% and served 3+ organizations effectively.",
        tags: ["SaaS", "Booking", "Multi-tenant", "QR-Code"]
    },
    {
        title: "ERP Management System",
        tech: "React.js · Context API · Tailwind CSS",
        description: "Enterprise resource planning frontend covering inventory, sales, and analytics with real-time dashboards.",
        image: "/erp.png",
        client: "Internal ERP Client",
        link: "Github",
        dateFrom: "Aug 2024",
        dateTo: "Oct 2024",
        statement: "The challenge was to replace legacy manual workflows with a unified, real-time digital dashboard for inventory and sales tracking.",
        details: [
            "Created 10+ modules covering inventory, sales, customers, and analytics.",
            "Replaced 2 legacy manual workflows with real-time digital solutions.",
            "Optimized state management using Context API, reducing bundle size by 15%.",
            "Standardized UI components to reduce bug reports by 30%."
        ],
        technologyStack: {
            paragraph: "Prioritizing maintainability and performance across a large-scale enterprise application.",
            stack: {
                frontend: ["React.js", "Tailwind CSS"],
                state: ["Context API"],
                charts: ["Recharts", "ApexCharts"]
            }
        },
        conclusion: "The transition resulted in a measurably cleaner codebase and improved operational efficiency.",
        tags: ["ERP", "Dashboard", "Inventory", "React"]
    },
    {
        title: "Waitr – Restaurant POS",
        tech: "Electron.js · React.js · Offline-First",
        description: "Cross-platform desktop POS with order management and table handling, operational without internet.",
        image: "/pos.png",
        client: "Unityr Techlabs",
        link: "Deployed on Windows",
        dateFrom: "Feb 2024",
        dateTo: "Oct 2024",
        statement: "Restaurants face frequent network outages; a POS must work offline while ensuring data consistency when the connection returns.",
        details: [
            "Built using React.js + Electron.js for a native desktop experience.",
            "Implemented offline-first architecture with local data sync.",
            "Features order management, table handling, and kitchen display.",
            "Zero data loss reported during network interruptions in UAT."
        ],
        technologyStack: {
            paragraph: "Building robust desktop software with web technologies and specialized persistence layers.",
            stack: {
                framework: ["Electron.js", "React.js"],
                storage: ["IndexedDB", "SQLite-local"],
                styling: ["Tailwind CSS"]
            }
        },
        conclusion: "Successfully provided uninterrupted service during outages, significantly reducing order errors.",
        tags: ["POS", "Electron", "Offline-first", "Retail"]
    }
];


const projectData = {
    heading: 'Designing a Better World Through Code',
    pageHeader: 'Selected Works'
};

const heroData = {
    heading: 'Yokesh Kumar T R',
    role: 'Full Stack Developer',
    description: 'Specializing in React, Next.js 15 & Node.js',
    subHeading: '9+ Months Production Experience'
};

const recordData = {
    experience: "01", // Production internship started Feb 2024
    solutions: "04",
    prototypes: "06",
    skills: "15"
};

const navlist = [
    { name: 'Home', to: 'hero', path: '/' },
    { name: 'About', to: 'about', path: '/' },
    { name: 'Services', to: 'services', path: '/' },
    { name: 'Portfolio', to: 'portfolio', path: '/' }
];

export { serviceData, aboutData, projectData, heroData, navlist, experienceData, projects, recordData };