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
            'Iniciando sistema...',
            'Carregando módulos...',
            'Conectando APIs...',
            'Sistema online ✓',
            'Pronto para inovar!'
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
    // Palavras rotativas para o typewriter
    const rotatingWords = [
        'o futuro',
        'seu negócio', 
        'soluções',
        'resultados',
        'sua visão',
        'inovação',
        'transformação'
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
    
    // Inicializar Particles.js
    if (document.getElementById('particles-js')) {
        initParticles();
    }
});

// WhatsApp Function
function openWhatsApp() {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de saber mais sobre os serviços da CodeForge Systems.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Particles.js Configuration
function initParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#a855f7", "#06d6a0", "#3b82f6", "#10b981", "#f59e0b"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.6,
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
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
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
                        "opacity": 0.8
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

// CTAs com eventos
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Solicite uma Proposta') || 
        button.textContent.includes('Fale Conosco Agora') ||
        button.textContent.includes('Fale Conosco')) {
        button.addEventListener('click', () => {
            // Aqui você pode adicionar integração com formulário ou WhatsApp
            openWhatsApp();
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