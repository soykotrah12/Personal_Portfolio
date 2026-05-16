/* ==========================================
   SCROLL SPY - Active Navbar Highlight
   ========================================== */

class ScrollSpy {
    constructor(options = {}) {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        this.navbar = document.getElementById('navbar');
        this.activeClass = options.activeClass || 'active';
        this.rootMargin = options.rootMargin || '-20% 0px -70% 0px';
        
        this.init();
    }
    
    init() {
        // IntersectionObserver for section detection
        const observerOptions = {
            root: null,
            rootMargin: this.rootMargin,
            threshold: 0
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.setActiveLink(entry.target.getAttribute('id'));
                }
            });
        }, observerOptions);
        
        // Observe all sections
        this.sections.forEach(section => {
            this.observer.observe(section);
        });
        
        // Handle navbar scroll effect
        this.handleNavbarScroll();
    }
    
    setActiveLink(sectionId) {
        // Update desktop nav
        this.navLinks.forEach(link => {
            link.classList.remove(this.activeClass);
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add(this.activeClass);
            }
        });
        
        // Update mobile nav
        this.mobileNavLinks.forEach(link => {
            link.classList.remove(this.activeClass);
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add(this.activeClass);
            }
        });
    }
    
    handleNavbarScroll() {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }
    
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScrollSpy;
}