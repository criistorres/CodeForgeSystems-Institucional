// Typewriter Effect com Palavras Rotativas
class TypewriterEffect {
    constructor(elementId, words, options = {}) {
        this.element = document.getElementById(elementId);
        this.words = words;
        this.currentWordIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.typeSpeed = options.typeSpeed || 150;
        this.deleteSpeed = options.deleteSpeed || 100;
        this.pauseDelay = options.pauseDelay || 2000;
        this.deleteDelay = options.deleteDelay || 1000;
        
        this.start();
    }
    
    start() {
        this.type();
    }
    
    type() {
        const currentWord = this.words[this.currentWordIndex];
        
        if (this.isDeleting) {
            // Deletando caracteres
            this.element.textContent = currentWord.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            
            if (this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
                setTimeout(() => this.type(), 500);
                return;
            }
            
            setTimeout(() => this.type(), this.deleteSpeed);
        } else {
            // Escrevendo caracteres
            this.element.textContent = currentWord.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            
            if (this.currentCharIndex === currentWord.length) {
                setTimeout(() => {
                    this.isDeleting = true;
                    this.type();
                }, this.pauseDelay);
                return;
            }
            
            setTimeout(() => this.type(), this.typeSpeed);
        }
    }
}

// Terminal Status Effect
class TerminalStatus {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.statuses = [
            'Carregando expertise...',
            'Inicializando stack...',
            'Conectando APIs...',
            'Deploy concluído ✓',
            'Sistema operacional!'
        ];
        this.currentIndex = 0;
        this.start();
    }
    
    start() {
        this.updateStatus();
    }
    
    updateStatus() {
        if (this.currentIndex < this.statuses.length) {
            this.element.textContent = this.statuses[this.currentIndex];
            this.currentIndex++;
            setTimeout(() => this.updateStatus(), 1500);
        } else {
            // Reinicia o ciclo após completar
            setTimeout(() => {
                this.currentIndex = 0;
                this.updateStatus();
            }, 5000);
        }
    }
}

// Inicializar efeitos quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Palavras rotativas para o typewriter - ATUALIZADAS PARA REFLETIR ESCOPO AMPLO
    const rotatingWords = [
        'sistemas',
        'integrações', 
        'soluções',
        'o futuro',
        'sua visão',
        'inovação',
        'resultados',
        'tecnologia'
    ];
    
    // Inicializar Typewriter Effect
    if (document.getElementById('typewriter-word')) {
        new TypewriterEffect('typewriter-word', rotatingWords, {
            typeSpeed: 120,
            deleteSpeed: 80,
            pauseDelay: 2500,
            deleteDelay: 1000
        });
    }
    
    // Inicializar Terminal Status
    if (document.getElementById('terminal-status')) {
        new TerminalStatus('terminal-status');
    }
    
    // Inicializar Particles.js - OTIMIZADO PARA PERFORMANCE
    if (document.getElementById('particles-js')) {
        initParticles();
    }
});

// WhatsApp Function
function openWhatsApp() {
    const phoneNumber = "5511992950205"; // Número atualizado da proposta
    const message = "Olá! Gostaria de saber mais sobre as soluções tecnológicas da CodeForge Systems.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Particles.js Configuration - OTIMIZADO
function initParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 60, // Reduzido para melhor performance
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#a855f7", "#06d6a0", "#3b82f6", "#10b981"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5, // Reduzido para ser menos distrativo
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#a855f7",
                "opacity": 0.3, // Reduzido
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5, // Mais lento para ser menos distrativo
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 200,
                    "line_linked": {
                        "opacity": 0.6
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

// Menu Mobile Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth Scroll para âncoras (melhorado para links externos)
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Se o link contém uma URL e uma âncora
        if (href.includes('#')) {
            const [url, hash] = href.split('#');
            const currentPath = window.location.pathname;
            
            // Se estamos na mesma página ou o URL está vazio (âncora local)
            if (!url || url === currentPath || url.endsWith(currentPath)) {
                e.preventDefault();
                const target = document.getElementById(hash);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Fechar menu mobile se estiver aberto
                    if (mobileMenu) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            }
            // Se for para outra página com âncora, deixa o navegador fazer o redirecionamento normal
            // O smooth scroll será aplicado quando a nova página carregar
        }
    });
});

// Smooth scroll para âncora na URL quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se há uma âncora na URL
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const target = document.getElementById(hash);
        if (target) {
            // Pequeno delay para garantir que a página carregou completamente
            setTimeout(() => {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
});

// Intersection Observer para animações
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.2s';
            entry.target.classList.add('animate-slide-up');
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.animate-slide-up').forEach(el => {
    observer.observe(el);
});

// Parallax effect sutil nos gradientes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const liquidBg = document.querySelector('.liquid-gradient');
    const liquidBgAlt = document.querySelector('.liquid-gradient-alt');
    
    if (liquidBg) {
        liquidBg.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
    if (liquidBgAlt) {
        liquidBgAlt.style.transform = `translateY(${scrolled * -0.05}px)`;
    }
});

// Navbar dinâmica com transição gradual
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;
    
    const scrolled = window.scrollY;
    const heroHeight = window.innerHeight;
    const scrollProgress = Math.min(scrolled / (heroHeight * 0.3), 1);
    
    // Transição gradual da navbar
    if (scrollProgress > 0) {
        header.classList.remove('navbar-transparent');
        header.classList.add('navbar-solid');
        header.style.background = `rgba(15, 23, 42, ${0.95 * scrollProgress})`;
        header.style.borderBottom = `1px solid rgba(168, 85, 247, ${0.2 * scrollProgress})`;
        header.style.backdropFilter = `blur(${10 + (10 * scrollProgress)}px)`;
    } else {
        header.classList.remove('navbar-solid');
        header.classList.add('navbar-transparent');
        header.style.background = 'rgba(15, 23, 42, 0)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        header.style.backdropFilter = 'blur(0px)';
    }
});

// CTAs com eventos - ATUALIZADOS
document.querySelectorAll('button').forEach(button => {
    const buttonText = button.textContent.trim();
    
    // CTAs principais
    if (buttonText.includes('Solicitar Análise Gratuita') || 
        buttonText.includes('Agendar Consultoria Gratuita') ||
        buttonText.includes('Fale Conosco')) {
        button.addEventListener('click', () => {
            openWhatsApp();
        });
    }
    
    // CTA secundário - scroll para metodologia
    if (buttonText.includes('Conhecer Nossa Metodologia')) {
        button.addEventListener('click', () => {
            // Buscar pela seção que contém "Metodologia" no título
            const headings = document.querySelectorAll('h2, h3');
            let metodologiaSection = null;
            
            headings.forEach(heading => {
                if (heading.textContent.includes('Metodologia')) {
                    metodologiaSection = heading.closest('section');
                }
            });
            
            if (metodologiaSection) {
                metodologiaSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Fallback: scroll para uma seção específica por ID se existir
                const fallbackSection = document.querySelector('#metodologia') || 
                                       document.querySelector('[data-section="metodologia"]');
                if (fallbackSection) {
                    fallbackSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
    
    // Ver Nossos Projetos - scroll para produtos
    if (buttonText.includes('Ver Nossos Projetos')) {
        button.addEventListener('click', () => {
            window.location.href = '/produtos/';
        });
    }
});

// Auto-hide messages after 5 seconds
document.addEventListener('DOMContentLoaded', function() {
    const messages = document.querySelectorAll('.alert');
    messages.forEach(message => {
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                message.remove();
            }, 300);
        }, 5000);
    });
});

// Highlight active page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link-enhanced');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        // Remove active class from all links
        link.classList.remove('nav-link-active');
        
        // Add active class to current page
        if (linkPath === currentPath) {
            link.classList.add('nav-link-active');
        }
        
        // Special case for home page sections
        if (currentPath === '/' && link.href.includes('#')) {
            link.classList.add('nav-link-active');
        }
    });
});

// Access Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const accessBtn = document.getElementById('access-btn');
    const accessModal = document.getElementById('access-modal');
    const closeBtn = document.getElementById('close-access-modal');
    const overlay = document.getElementById('access-overlay');
    
    if (accessBtn && accessModal) {
        // Open modal
        accessBtn.addEventListener('click', function() {
            accessModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
        
        // Close modal functions
        function closeModal() {
            accessModal.classList.add('hiding');
            setTimeout(() => {
                accessModal.classList.add('hidden');
                accessModal.classList.remove('hiding');
                document.body.style.overflow = '';
            }, 200);
        }
        
        // Close button
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }
        
        // Overlay click
        if (overlay) {
            overlay.addEventListener('click', closeModal);
        }
        
        // Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !accessModal.classList.contains('hidden')) {
                closeModal();
            }
        });
    }
});

// ===== CLIENTS CAROUSEL FUNCTIONALITY =====

class ClientsCarousel {
    constructor() {
        this.carousel = document.getElementById('clients-carousel');
        this.track = null;
        this.isVisible = false;
        this.isHovered = false;
        this.animationSpeed = 35; // seconds
        
        this.init();
    }
    
    init() {
        if (!this.carousel) return;
        
        this.track = this.carousel.querySelector('.carousel-track');
        if (!this.track) return;
        
        this.setupIntersectionObserver();
        this.setupEventListeners();
        this.setupAccessibility();
        this.optimizeForPerformance();
    }
    
    setupIntersectionObserver() {
        // Pause animation when not visible for performance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                this.isVisible = entry.isIntersecting;
                this.updateAnimationState();
            });
        }, {
            threshold: 0.1
        });
        
        observer.observe(this.carousel);
    }
    
    setupEventListeners() {
        const wrapper = this.carousel.closest('.clients-carousel-wrapper');
        if (!wrapper) return;
        
        // Hover events for pausing animation
        wrapper.addEventListener('mouseenter', () => {
            this.isHovered = true;
            this.updateAnimationState();
        });
        
        wrapper.addEventListener('mouseleave', () => {
            this.isHovered = false;
            this.updateAnimationState();
        });
        
        // Focus events for accessibility
        const logoItems = wrapper.querySelectorAll('.client-logo-item');
        logoItems.forEach(item => {
            item.addEventListener('focusin', () => {
                this.isHovered = true;
                this.updateAnimationState();
            });
            
            item.addEventListener('focusout', () => {
                this.isHovered = false;
                this.updateAnimationState();
            });
        });
        
        // Touch events for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        wrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            this.isHovered = true;
            this.updateAnimationState();
        });
        
        wrapper.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].clientX;
            this.handleSwipe(touchStartX, touchEndX);
            
            // Resume animation after touch
            setTimeout(() => {
                this.isHovered = false;
                this.updateAnimationState();
            }, 1000);
        });
    }
    
    updateAnimationState() {
        if (!this.track) return;
        
        const shouldPause = this.isHovered || !this.isVisible;
        this.track.style.animationPlayState = shouldPause ? 'paused' : 'running';
    }
    
    handleSwipe(startX, endX) {
        const threshold = 50;
        const difference = startX - endX;
        
        if (Math.abs(difference) > threshold) {
            // Add visual feedback for swipe
            const wrapper = this.carousel.closest('.clients-carousel-wrapper');
            if (wrapper) {
                wrapper.style.transform = difference > 0 ? 'translateX(-10px)' : 'translateX(10px)';
                setTimeout(() => {
                    wrapper.style.transform = 'translateX(0)';
                }, 200);
            }
        }
    }
    
    setupAccessibility() {
        const wrapper = this.carousel.closest('.clients-carousel-wrapper');
        const logoItems = wrapper.querySelectorAll('.client-logo-item');
        
        // Add ARIA labels and make items focusable
        wrapper.setAttribute('role', 'region');
        wrapper.setAttribute('aria-label', 'Clientes da CodeForge Systems');
        
        logoItems.forEach((item, index) => {
            const container = item.querySelector('.client-logo-container');
            const img = item.querySelector('.client-logo');
            const info = item.querySelector('.client-info h4');
            
            if (container && img && info) {
                container.setAttribute('tabindex', '0');
                container.setAttribute('role', 'button');
                container.setAttribute('aria-label', `Cliente: ${info.textContent}`);
                
                // Add keyboard interaction
                container.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.showClientDetails(info.textContent);
                    }
                });
            }
        });
    }
    
    showClientDetails(clientName) {
        // Optional: Add a modal or tooltip with client details
        console.log(`Mostrando detalhes do cliente: ${clientName}`);
        
        // You can implement a modal or redirect here
        // For now, just add a subtle visual feedback
        const activeItem = document.querySelector('.client-logo-item:hover .client-logo-container, .client-logo-item:focus-within .client-logo-container');
        if (activeItem) {
            activeItem.style.transform = 'translateY(-6px) scale(1.03)';
            setTimeout(() => {
                activeItem.style.transform = '';
            }, 300);
        }
    }
    
    optimizeForPerformance() {
        // Use will-change for better performance
        if (this.track) {
            this.track.style.willChange = 'transform';
        }
        
        // Optimize for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.disableAnimation();
        }
        
        // Listen for reduced motion changes
        window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
            if (e.matches) {
                this.disableAnimation();
            } else {
                this.enableAnimation();
            }
        });
    }
    
    disableAnimation() {
        if (this.track) {
            this.track.style.animation = 'none';
            this.track.style.transform = 'translateX(0)';
        }
        
        const wrapper = this.carousel.closest('.clients-carousel-wrapper');
        if (wrapper) {
            wrapper.style.overflowX = 'auto';
            wrapper.style.mask = 'none';
            wrapper.style.webkitMask = 'none';
        }
    }
    
    enableAnimation() {
        if (this.track) {
            this.track.style.animation = '';
            this.track.style.transform = '';
        }
        
        const wrapper = this.carousel.closest('.clients-carousel-wrapper');
        if (wrapper) {
            wrapper.style.overflowX = 'hidden';
            wrapper.style.mask = '';
            wrapper.style.webkitMask = '';
        }
    }
    
    // Public method to update carousel speed
    setSpeed(seconds) {
        this.animationSpeed = seconds;
        if (this.track) {
            this.track.style.animationDuration = `${seconds}s`;
        }
    }
    
    // Public method to add new client
    addClient(clientData) {
        if (!this.track) return;
        
        const clientElement = this.createClientElement(clientData);
        this.track.appendChild(clientElement);
    }
    
    createClientElement(data) {
        const item = document.createElement('div');
        item.className = 'client-logo-item';
        
        item.innerHTML = `
            <div class="client-logo-container">
                <img src="${data.logoUrl}" 
                     alt="${data.name}" 
                     class="client-logo">
                <div class="client-info">
                    <h4>${data.name}</h4>
                    <span>${data.description}</span>
                </div>
            </div>
        `;
        
        return item;
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize clients carousel
    window.clientsCarousel = new ClientsCarousel();
});

// Utility function for smooth scrolling to clients section
function scrollToClients() {
    const clientsSection = document.getElementById('clientes');
    if (clientsSection) {
        clientsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ClientsCarousel, scrollToClients };
}