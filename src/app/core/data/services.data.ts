export interface ServiceDetail {
    id: string;
    icon: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    priceRange: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
    {
        id: 'website-development',
        icon: '💻',
        title: 'Website Development Service',
        shortDescription: 'Custom, responsive websites built with modern technologies ensuring fast load times and optimal user experiences.',
        fullDescription: 'Our Website Development service is built upon translating your vision into a robust digital experience. We specialize in developing fast, highly-responsive, and scalable websites that look fantastic on any device. Whether you need a corporate landing page or a complex full-stack web application, our team leverages the latest modern frameworks like Angular, React, and robust backends to deliver products that drive conversions and establish unparalleled brand authority.',
        features: [
            'Custom Design Tailored to Your Brand',
            'Mobile-First & Fully Responsive Layouts',
            'High Performance & Lightning Fast Load Speeds',
            'Search Engine Optimization (SEO) Friendly Architecture',
            'Secure & Standardized Codebase'
        ],
        priceRange: '₹5,000 - ₹20,000'
    },
    {
        id: 'google-maps-optimization',
        icon: '🗺️',
        title: 'Google Maps Business Optimization',
        shortDescription: 'Maximize your local visibility with expert Google Business Profile optimization and map rankings.',
        fullDescription: 'Dominate your local market and start capturing foot traffic right from Google Maps. Many customers search for local businesses directly on mapping applications; if your profile is unoptimized, you are actively losing revenue to competitors. We take full ownership of claiming, verifying, and meticulously optimizing your Google Business Profile to guarantee top-3 map pack visibility for highly relevant keywords in your area.',
        features: [
            'Complete Google Business Profile Setup & Verification',
            'Keyword-Optimized Business Descriptions & Categories',
            'High-Quality Geotagged Image Uploads',
            'Review Strategy & Management Assistance',
            'Local Citations & Directory Generation'
        ],
        priceRange: '₹2,000 - ₹3,500'
    },
    {
        id: 'saas-solutions',
        icon: '☁️',
        title: 'SaaS for Small Businesses',
        shortDescription: 'Cloud-based software solutions tailored for small businesses to streamline operations and scale efficiently.',
        fullDescription: 'Stop relying on disorganized spreadsheets and fragmented, off-the-shelf software. We engineer lightweight Software-as-a-Service (SaaS) platforms built exclusively around your small business operations. Whether you require a custom CRM to manage leads, an internal dashboard to track inventory, or a specialized client portal, we build cloud-native applications that integrate perfectly into your daily processes, saving you hours of manual labor per week.',
        features: [
            'Tailored Cloud Architectures for Your Workflow',
            'Secure User Authentication & Role-Based Access',
            'Real-Time Dashboards & Analytics',
            'Automated Data Processing & Reporting',
            'Seamless API Integrations with Existing Tools'
        ],
        priceRange: 'Starting from ₹25,000'
    },
    {
        id: 'resume-portfolio',
        icon: '📄',
        title: 'Resume & Portfolio Website Service',
        shortDescription: 'Professional personal branding websites combining modern design with interactive elements to showcase your expertise.',
        fullDescription: 'In today\'s ultra-competitive job market and freelance economy, a PDF resume is no longer enough. Elevate your personal brand with a stunning, interactive portfolio website that acts as your 24/7 advocate. We design portfolios that immediately capture attention, organizing your case studies, work history, and achievements using bold typography, smooth animations, and premium aesthetics that prospective employers and clients simply cannot ignore.',
        features: [
            'Custom Interactive Animations & Transitions',
            'Dedicated Case-Study & Project Gallery Sections',
            'Downloadable PDF Resume Integration',
            'Integrated Contact Forms directly to your Email',
            'Lightning fast custom domain hosting options'
        ],
        priceRange: 'Starting at ₹2,500'
    },
    {
        id: 'local-digital-package',
        icon: '🏪',
        title: 'Local Business Digital Package',
        shortDescription: 'An all-in-one digital presence package including web design, local SEO, and essential business tools.',
        fullDescription: 'Designed exclusively for brick-and-mortar storefronts, local contractors, and regional service providers. This signature package eliminates the headache of hiring multiple contractors by delivering your entire digital ecosystem in one seamless rollout. We build your lead-generating website, establish your dominant Google Maps presence, and even map routing straight into a WhatsApp Business funnel—giving you a turn-key solution to start acquiring local customers immediately.',
        features: [
            'Professional High-Converting Business Website',
            'Comprehensive Google Maps Profile Setup',
            'Direct WhatsApp Business Chat Integration',
            'Basic Local Content Strategy Roadmap',
            'Priority Launch Support & Training'
        ],
        priceRange: 'Package Deal: ₹12,000'
    },
    {
        id: 'website-maintenance',
        icon: '🛠️',
        title: 'Website Maintenance Service',
        shortDescription: 'Ongoing technical support, security updates, and performance monitoring to keep your website running flawlessly.',
        fullDescription: 'Your website is a living digital asset that requires consistent care to remain secure and performant. Our maintenance retained service provides total peace of mind. We act as your dedicated IT division, handling all the tedious technical requirements in the background while you focus entirely on running your business. From daily backups and plugin updates to real-time downtime monitoring and rapid bug fixes, we ensure your site is always online and fully optimized.',
        features: [
            '24/7 Uptime & Performance Monitoring',
            'Routine Platform, Theme, and Plugin Updates',
            'Daily Off-Site Secure Data Backups',
            'Monthly Security Audits & Malware Sweeps',
            'Priority Bug Fixes and Technical Support'
        ],
        priceRange: '₹1,000 / month'
    }
];
