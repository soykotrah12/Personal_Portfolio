/* ==========================================
   SOLAR SYSTEM - Skills Animation
   ========================================== */

class SolarSystem {
    constructor(containerId, data) {
        this.container = document.getElementById(containerId);
        this.data = data;
        this.orbits = {};
        
        if (this.container) {
            this.init();
        }
    }
    
    init() {
        this.createBackground();
        this.createOrbitPaths();
        this.createCore();
        this.createOrbits();
        this.createSkillPlanets();
    }
    
    createBackground() {
        // Space background
        const spaceBg = document.createElement('div');
        spaceBg.className = 'space-bg';
        this.container.appendChild(spaceBg);
        
        // Stars
        this.createStars();
        
        // Floating particles
        this.createParticles();
    }
    
    createStars() {
        const starPositions = [
            { top: '8%', left: '15%', size: 2, duration: 2.5 },
            { top: '12%', left: '75%', size: 1, duration: 3 },
            { top: '25%', left: '90%', size: 2, duration: 2.8 },
            { top: '45%', left: '8%', size: 1, duration: 3.2 },
            { top: '65%', left: '92%', size: 2, duration: 2.6 },
            { top: '78%', left: '20%', size: 1, duration: 3.5 },
            { top: '88%', left: '70%', size: 2, duration: 2.9 },
            { top: '35%', left: '5%', size: 1, duration: 3.1 },
            { top: '55%', left: '95%', size: 2, duration: 2.7 },
            { top: '15%', left: '50%', size: 1, duration: 3.3 }
        ];
        
        starPositions.forEach((pos, index) => {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.cssText = `
                width: ${pos.size}px;
                height: ${pos.size}px;
                top: ${pos.top};
                left: ${pos.left};
                --duration: ${pos.duration}s;
                --delay: ${(index * 0.3) % 1.5}s;
            `;
            this.container.appendChild(star);
        });
    }
    
    createParticles() {
        const particlePositions = [
            { top: '10%', left: '25%', size: 3, duration: 9 },
            { top: '30%', left: '80%', size: 2, duration: 11 },
            { top: '60%', left: '15%', size: 4, duration: 8 },
            { top: '80%', left: '75%', size: 3, duration: 10 },
            { top: '45%', left: '88%', size: 2, duration: 12 },
            { top: '70%', left: '30%', size: 3, duration: 9 }
        ];
        
        particlePositions.forEach((pos, index) => {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                width: ${pos.size}px;
                height: ${pos.size}px;
                top: ${pos.top};
                left: ${pos.left};
                --float-duration: ${pos.duration}s;
                --float-delay: ${index * 0.5}s;
            `;
            this.container.appendChild(particle);
        });
    }
    
    createOrbitPaths() {
        [1, 2, 3, 4].forEach(num => {
            const path = document.createElement('div');
            path.className = `orbit-path orbit-path-${num}`;
            this.container.appendChild(path);
        });
    }
    
    createCore() {
        const core = document.createElement('div');
        core.className = 'core-planet';
        core.innerHTML = '<span class="core-text">ME</span>';
        this.container.appendChild(core);
    }
    
    createOrbits() {
        [1, 2, 3, 4].forEach(num => {
            const orbit = document.createElement('div');
            orbit.className = `orbit orbit-${num}`;
            this.container.appendChild(orbit);
            this.orbits[num] = orbit;
        });
    }
    
    createSkillPlanets() {
        const orbitPositions = {
            1: {
                top: { style: 'top: 0; left: 50%; transform: translate(-50%, -50%);' },
                right: { style: 'top: 50%; left: 100%; transform: translate(-50%, -50%);' },
                bottom: { style: 'top: 100%; left: 50%; transform: translate(-50%, -50%);' },
                left: { style: 'top: 50%; left: 0; transform: translate(-50%, -50%);' }
            },
            2: {
                top: { style: 'top: 0; left: 50%; transform: translate(-50%, -50%);' },
                'top-right': { style: 'top: 14.6%; left: 85.4%; transform: translate(-50%, -50%);' },
                right: { style: 'top: 50%; left: 100%; transform: translate(-50%, -50%);' },
                'bottom-right': { style: 'top: 85.4%; left: 85.4%; transform: translate(-50%, -50%);' },
                bottom: { style: 'top: 100%; left: 50%; transform: translate(-50%, -50%);' },
                'bottom-left': { style: 'top: 85.4%; left: 14.6%; transform: translate(-50%, -50%);' }
            },
            3: {
                top: { style: 'top: 0; left: 50%; transform: translate(-50%, -50%);' },
                'top-right': { style: 'top: 25%; left: 93.3%; transform: translate(-50%, -50%);' },
                'bottom-right': { style: 'top: 75%; left: 93.3%; transform: translate(-50%, -50%);' },
                bottom: { style: 'top: 100%; left: 50%; transform: translate(-50%, -50%);' }
            }
        };
        
        this.data.forEach(skill => {
            const orbit = this.orbits[skill.orbit];
            if (!orbit) return;
            
            const positions = orbitPositions[skill.orbit];
            const position = positions[skill.position];
            if (!position) return;
            
            const planet = document.createElement('div');
            planet.className = `skill-planet planet-${skill.planet}`;
            planet.style.cssText = position.style;
            planet.setAttribute('data-skill', skill.name);
            planet.setAttribute('data-level', skill.level);
            
            const displayName = skill.shortName || skill.name;
            
            planet.innerHTML = `
                <div class="skill-planet-icon">
                    ${SKILL_ICONS[skill.planet] || ''}
                </div>
                <span class="skill-planet-name">${displayName}</span>
                <div class="skill-tooltip">
                    <div class="skill-tooltip-title">${skill.name}</div>
                    <div class="skill-tooltip-level">
                        <div class="skill-tooltip-bar">
                            <div class="skill-tooltip-fill" style="width: ${skill.level}%;"></div>
                        </div>
                        <span class="skill-tooltip-percent">${skill.level}%</span>
                    </div>
                </div>
            `;
            
            orbit.appendChild(planet);
        });
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SolarSystem;
}