/* ==========================================
   MAIN - Application Entry Point
   ========================================== */

// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    
    // Initialize Scroll Spy
    const scrollSpy = new ScrollSpy();
    
    // Initialize Solar System
    const solarSystem = new SolarSystem('solar-system', PORTFOLIO_DATA.skills);
    
    // Initialize Animations
    const animations = new AnimationManager();
    
    // Initialize Form Handler
    const formHandler = new FormHandler('contact-form');
    
    // Populate Dynamic Content
    populateContent();
});

/* ==========================================
   CONTENT POPULATION
   ========================================== */

function populateContent() {
    populateSocialLinks();
    populateAboutSection();
    populateSkillCards();
    populateExperience();
    populateEducation();
    populateProjects();
    populateServices();
    populateContactInfo();
}

function populateSocialLinks() {
    const container = document.getElementById('hero-social-links');
    if (!container) return;
    
    container.innerHTML = PORTFOLIO_DATA.socialLinks.map(link => `
        <a href="${link.url}" target="_blank" class="social-link" aria-label="${link.name}">
            ${link.icon}
        </a>
    `).join('');
}

function populateAboutSection() {
    // Text
    const textContainer = document.getElementById('about-text');
    if (textContainer) {
        textContainer.innerHTML = PORTFOLIO_DATA.about.paragraphs.map(p => `
            <p class="text-gray-400 text-lg leading-relaxed mb-6">${p}</p>
        `).join('');
    }
    
    // Info
    const infoContainer = document.getElementById('about-info');
    if (infoContainer) {
        infoContainer.innerHTML = `
            <div class="grid grid-cols-2 gap-4 mb-8">
                ${PORTFOLIO_DATA.about.info.map(item => `
                    <div class="flex items-center gap-3">
                        <i data-lucide="${item.icon}" class="w-5 h-5 text-brand"></i>
                        <span class="text-gray-300">${item.label}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

function populateSkillCards() {
    const container = document.getElementById('skill-cards');
    if (!container) return;
    
    container.innerHTML = PORTFOLIO_DATA.skillCategories.map(category => `
        <div class="skill-card">
            <div class="skill-card-header">
                <div class="skill-card-icon">
                    <i data-lucide="${category.icon}" class="w-5 h-5"></i>
                </div>
                <h3 class="skill-card-title">${category.title}</h3>
            </div>
            <div class="skill-tags">
                ${category.skills.map(skill => `
                    <span class="skill-tag">${skill}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    // Re-initialize icons
    lucide.createIcons();
}

function populateExperience() {
    const container = document.getElementById('experience-timeline');
    if (!container) return;
    
    container.innerHTML = `
        <div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-brand via-brand/50 to-transparent"></div>
        <div class="space-y-12">
            ${PORTFOLIO_DATA.experience.map(exp => `
                <div class="timeline-item relative">
                    <div class="card p-6">
                        <div class="flex items-start justify-between mb-4">
                            <div>
                                <h3 class="text-xl font-semibold text-white">${exp.title}</h3>
                                <p class="text-brand font-medium">${exp.company}</p>
                            </div>
                            <span class="px-3 py-1 ${exp.type === 'Current' ? 'bg-brand/20 text-brand' : 'bg-white/10 text-gray-400'} text-sm rounded-full">${exp.type}</span>
                        </div>
                        <p class="text-gray-400 text-sm mb-4">${exp.duration}</p>
                        <ul class="space-y-2">
                            ${exp.responsibilities.map(resp => `
                                <li class="flex items-start gap-2 text-gray-300">
                                    <i data-lucide="check-circle-2" class="w-4 h-4 text-brand mt-1 flex-shrink-0"></i>
                                    <span>${resp}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    lucide.createIcons();
}

function populateEducation() {
    const container = document.getElementById('education-section');
    if (!container) return;
    
    container.innerHTML = `
        <div class="card p-8">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                    <i data-lucide="graduation-cap" class="w-6 h-6 text-brand"></i>
                </div>
                <h3 class="text-2xl font-semibold text-white">Education</h3>
            </div>
            
            <div class="space-y-6">
                ${PORTFOLIO_DATA.education.map((edu, index) => `
                    <div class="flex items-start gap-4">
                        <div class="w-1 h-full ${index === 0 ? 'bg-brand' : 'bg-brand/50'} rounded-full"></div>
                        <div>
                            <h4 class="text-lg font-semibold text-white">${edu.degree}</h4>
                            <p class="text-brand">${edu.institution}</p>
                            <p class="text-gray-400 text-sm">${edu.year}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    lucide.createIcons();
}

function populateProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    
    container.innerHTML = `
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${PORTFOLIO_DATA.projects.map(project => `
                <div class="project-card group relative card overflow-hidden">
                    <div class="relative h-48 overflow-hidden">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                        <div class="project-overlay flex items-center justify-center gap-4">
                            ${project.github ? `
                                <a href="${project.github}" target="_blank" class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand hover:text-black transition-all">
                                    <i data-lucide="github" class="w-5 h-5"></i>
                                </a>
                            ` : ''}
                            ${project.link ? `
                                <a href="${project.link}" target="_blank" class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand hover:text-black transition-all">
                                    <i data-lucide="external-link" class="w-5 h-5"></i>
                                </a>
                            ` : ''}
                        </div>
                        ${project.badge ? `<span class="absolute top-4 left-4 px-3 py-1 bg-brand text-black text-xs font-semibold rounded-full">${project.badge}</span>` : ''}
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-white mb-2 group-hover:text-brand transition-colors">${project.title}</h3>
                        <p class="text-gray-400 mb-4">${project.description}</p>
                        <div class="flex flex-wrap gap-2">
                            ${project.tags.map(tag => `
                                <span class="px-2 py-1 bg-brand/10 text-brand text-xs rounded">${tag}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    lucide.createIcons();
}

function populateServices() {
    const container = document.getElementById('services-grid');
    if (!container) return;
    
    container.innerHTML = `
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${PORTFOLIO_DATA.services.map(service => `
                <div class="card group p-8 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl group-hover:bg-brand/10 transition-colors"></div>
                    <div class="relative">
                        <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i data-lucide="${service.icon}" class="w-8 h-8 text-black"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-white mb-3">${service.title}</h3>
                        <p class="text-gray-400">${service.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    lucide.createIcons();
}

function populateContactInfo() {
    const container = document.getElementById('contact-info');
    if (!container) return;
    
    container.innerHTML = `
        <div class="card p-8 h-full">
            <h3 class="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
            
            <div class="space-y-6">
                ${PORTFOLIO_DATA.contactInfo.map(info => `
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                            <i data-lucide="${info.icon}" class="w-5 h-5 text-brand"></i>
                        </div>
                        <div>
                            <span class="block text-gray-400 text-sm mb-1">${info.label}</span>
                            ${info.link ? `
                                <a href="${info.link}" class="text-white hover:text-brand transition-colors">${info.value}</a>
                            ` : `
                                <span class="text-white">${info.value}</span>
                            `}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="mt-8 p-4 bg-brand/10 border border-brand/20 rounded-xl">
                <div class="flex items-center gap-3">
                    <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-brand"></span>
                    </span>
                    <span class="text-brand font-medium">Currently available for freelance work</span>
                </div>
            </div>
        </div>
    `;
    
    lucide.createIcons();
}