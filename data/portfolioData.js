/* ==========================================
   PORTFOLIO DATA - Centralized Content
   ========================================== */

const PORTFOLIO_DATA = {
    // Personal Information
    personal: {
        name: "Soykot Rahman Rodro",
        shortName: "Soykot",
        title: "Flutter Developer",
        subtitle: "Mobile App Specialist",
        email: "soykotrahman1212@gmail.com",
        phone: "+880 1303-920682",
        location: "Mirpur, Dhaka, Bangladesh",
        currentCompany: "ScaleUp Ads Agency"
    },
    
    // Social Links
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/soykotrah12",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/soykotrahman1212",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
        },
        {
            name: "Behance",
            url: "https://www.behance.net/soykotrahman",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>`
        },
        {
            name: "Email",
            url: "mailto:soykotrahman1212@gmail.com",
            icon: `<i data-lucide="mail" class="w-5 h-5"></i>`
        }
    ],
    
    // About Section
    about: {
        paragraphs: [
            `I'm <strong>Soykot Rahman Rodro</strong>, a dedicated Flutter Developer and Mobile App Specialist based in Dhaka, Bangladesh. With a strong foundation in Computer Science from Green University of Bangladesh, I've transformed my passion for technology into a career focused on creating impactful mobile applications.`,
            `Currently, I'm working at <strong>ScaleUp Ads Agency</strong>, where I build cross-platform applications using Flutter. My role involves everything from UI/UX implementation and state management to API integration and performance optimization.`
        ],
        info: [
            { icon: "map-pin", label: "Dhaka, Bangladesh" },
            { icon: "graduation-cap", label: "B.Sc. in CSE" },
            { icon: "mail", label: "soykotrahman1212@gmail.com" },
            { icon: "phone", label: "+880 1303-920682" }
        ]
    },
    
    // Skills for Solar System
    skills: [
        // Orbit 1
        { name: "Flutter", level: 90, planet: "flutter", orbit: 1, position: "top" },
        { name: "Dart", level: 90, planet: "dart", orbit: 1, position: "right" },
        { name: "Firebase", level: 85, planet: "firebase", orbit: 1, position: "bottom" },
        { name: "Python", level: 70, planet: "python", orbit: 1, position: "left" },
        
        // Orbit 2
        { name: "Git", level: 85, planet: "git", orbit: 2, position: "top" },
        { name: "GetX", level: 80, planet: "getx", orbit: 2, position: "top-right" },
        { name: "MongoDB", level: 65, planet: "mongodb", orbit: 2, position: "right" },
        { name: "MySQL", level: 60, planet: "mysql", orbit: 2, position: "bottom-right" },
        { name: "JavaScript", level: 65, planet: "javascript", orbit: 2, position: "bottom", shortName: "JS" },
        { name: "HTML", level: 80, planet: "html", orbit: 2, position: "bottom-left" },
        
        // Orbit 3
        { name: "CSS", level: 75, planet: "css", orbit: 3, position: "top" },
        { name: "REST API", level: 85, planet: "api", orbit: 3, position: "top-right", shortName: "API" },
        { name: "Figma", level: 75, planet: "figma", orbit: 3, position: "bottom-right" },
        { name: "Provider", level: 80, planet: "provider", orbit: 3, position: "bottom" }
    ],
    
    // Skill Categories for Cards
    skillCategories: [
        {
            title: "Mobile Development",
            icon: "smartphone",
            skills: ["Flutter", "Dart", "Android", "iOS"]
        },
        {
            title: "State Management",
            icon: "git-branch",
            skills: ["Provider", "Riverpod", "Bloc", "GetX"]
        },
        {
            title: "Backend & Databases",
            icon: "database",
            skills: ["Firebase", "REST API", "MongoDB", "MySQL"]
        },
        {
            title: "UI/UX & Design",
            icon: "palette",
            skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"]
        },
        {
            title: "Programming Languages",
            icon: "code",
            skills: ["Dart", "Python", "JavaScript", "HTML/CSS"]
        },
        {
            title: "Tools & Workflow",
            icon: "wrench",
            skills: ["Git", "GitHub", "VS Code", "Android Studio"]
        }
    ],
    
    // Experience
    experience: [
        {
            title: "Flutter Developer",
            company: "ScaleUp Ads Agency",
            type: "Current",
            duration: "8 months | Dhaka, Bangladesh",
            responsibilities: [
                "Building cross-platform mobile applications using Flutter",
                "Implementing responsive UI designs from Figma",
                "Integrating REST APIs and Firebase services"
            ]
        },
        {
            title: "Flutter Development Intern",
            company: "NextTech Limited",
            type: "Internship",
            duration: "Dhaka, Bangladesh",
            responsibilities: [
                "Contributed to cross-platform application development",
                "Gained hands-on experience with Flutter workflows"
            ]
        }
    ],
    
    // Education
    education: [
        {
            degree: "B.Sc. in Computer Science & Engineering",
            institution: "Green University of Bangladesh",
            year: "2021 – 2025"
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            institution: "Kuliarchar Govt. College",
            year: "2018 – 2020"
        }
    ],
    
    // Projects
    projects: [
        {
            title: "Rent Car Booking System",
            description: "Car rental platform with real-time availability and booking management.",
            image: "https://picsum.photos/seed/car-rental-app/600/400.jpg",
            tags: ["Flutter", "Firebase"],
            github: "https://github.com/soykotrah12",
            badge: "Ongoing"
        },
        {
            title: "Personal Portfolio Website",
            description: "Responsive portfolio showcasing skills and projects.",
            image: "https://picsum.photos/seed/portfolio-website/600/400.jpg",
            tags: ["Flutter", "Responsive"],
            github: "https://github.com/soykotrah12"
        },
        {
            title: "E-commerce Website Design",
            description: "Modern UI design for online store with user-focused journey.",
            image: "https://picsum.photos/seed/ecommerce-ui/600/400.jpg",
            tags: ["Figma", "UI/UX"],
            link: "https://www.behance.net/soykotrahman"
        }
    ],
    
    // Services
    services: [
        {
            title: "Flutter App Development",
            description: "Build beautiful, high-performance cross-platform mobile applications.",
            icon: "smartphone"
        },
        {
            title: "UI/UX Implementation",
            description: "Transform your Figma designs into pixel-perfect Flutter interfaces.",
            icon: "palette"
        },
        {
            title: "Firebase & API Integration",
            description: "Seamlessly integrate Firebase services and REST APIs.",
            icon: "database"
        }
    ],
    
    // Contact Info
    contactInfo: [
        { icon: "mail", label: "Email", value: "soykotrahman1212@gmail.com", link: "mailto:soykotrahman1212@gmail.com" },
        { icon: "phone", label: "Phone", value: "+880 1303-920682", link: "tel:+8801303920682" },
        { icon: "map-pin", label: "Location", value: "Mirpur, Dhaka, Bangladesh" }
    ]
};

// Skill Icons (SVG paths)
const SKILL_ICONS = {
    flutter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.314 0L2.3 12.013l3.7 3.7 15.7-15.7h-3.386zm.386 11.313l-6.9 6.9 3.7 3.7 3.2-3.2 6.9-6.9-3.7-3.7z"/></svg>`,
    dart: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.105 4.105S9.158 1.58 11.684.604c.79-.316 1.66-.316 2.369.105l6.842 6.842c.421.71.421 1.58.105 2.37-.974 2.525-3.509 7.578-3.509 7.578L4.105 4.105z"/></svg>`,
    firebase: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.89 15.673L6.255.461A.542.542 0 017.27.289l2.543 4.771-5.923 10.613a.542.542 0 01-.923-.084zm8.879 3.355l-2.44-7.953 3.734-5.853a.542.542 0 01.92.084l2.29 14.722-4.504-1z"/></svg>`,
    python: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05z"/></svg>`,
    git: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>`,
    getx: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    mongodb: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z"/></svg>`,
    mysql: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53z"/></svg>`,
    javascript: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004z"/></svg>`,
    html: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>`,
    css: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>`,
    api: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 3H12v2h1.5a2.5 2.5 0 0 1 0 5H12v2h1.5a4.5 4.5 0 0 0 0-9zM7.5 9a2.5 2.5 0 0 1 2.5-2.5h1.5v-2H10a4.5 4.5 0 0 0 0 9h1.5v-2H10A2.5 2.5 0 0 1 7.5 9z"/></svg>`,
    figma: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51z"/></svg>`,
    provider: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PORTFOLIO_DATA, SKILL_ICONS };
}