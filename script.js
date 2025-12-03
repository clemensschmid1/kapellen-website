// Vercel Analytics
import { inject } from '@vercel/analytics';

inject();

// Scroll Progress Bar with throttling for performance
const scrollProgress = document.getElementById('scroll-progress');
if (scrollProgress) {
    let ticking = false;
    
    const updateProgress = () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        const progress = Math.min(100, Math.max(0, scrolled));
        scrollProgress.style.width = progress + '%';
        scrollProgress.setAttribute('aria-valuenow', Math.round(progress));
        ticking = false;
    };
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateProgress);
            ticking = true;
        }
    }, { passive: true });
}

// Reading Progress Indicator (based on main content)
const readingProgress = document.getElementById('reading-progress');
const mainContent = document.getElementById('main-content');
if (readingProgress && mainContent) {
    let readingTicking = false;
    
    const updateReadingProgress = () => {
        const contentTop = mainContent.offsetTop;
        const contentHeight = mainContent.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        
        // Calculate reading progress within main content
        const contentStart = contentTop;
        const contentEnd = contentTop + contentHeight;
        const viewportCenter = scrollY + windowHeight / 2;
        
        let progress = 0;
        if (viewportCenter >= contentStart && viewportCenter <= contentEnd) {
            progress = ((viewportCenter - contentStart) / contentHeight) * 100;
        } else if (viewportCenter > contentEnd) {
            progress = 100;
        }
        
        readingProgress.style.width = Math.min(100, Math.max(0, progress)) + '%';
        readingProgress.setAttribute('aria-valuenow', Math.round(progress));
        readingTicking = false;
    };
    
    window.addEventListener('scroll', () => {
        if (!readingTicking) {
            window.requestAnimationFrame(updateReadingProgress);
            readingTicking = true;
        }
    }, { passive: true });
    
    // Initial update
    updateReadingProgress();
}

// Breadcrumb Navigation
const breadcrumb = document.getElementById('breadcrumb');
const breadcrumbCurrent = breadcrumb?.querySelector('.breadcrumb-current');
const sectionTitles = {
    'home': 'Start',
    'geschichte': 'Über die Kapelle',
    'kunstwerke': 'Kunstwerke',
    'veranstaltungen': 'Veranstaltungen',
    'galerie': 'Galerie',
    'kontakt': 'Kontakt',
    'impressum': 'Impressum',
    'datenschutz': 'Datenschutz'
};

function updateBreadcrumb() {
    if (!breadcrumb || !breadcrumbCurrent) return;
    
    const scrollY = window.scrollY + 150; // Offset for better UX
    let currentSection = 'home';
    
    // Use sections variable that's defined later in the code
    const allSections = document.querySelectorAll('section[id]');
    
    allSections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = sectionId;
        }
    });
    
    // Update breadcrumb text
    const title = sectionTitles[currentSection] || 'Start';
    breadcrumbCurrent.textContent = title;
    
    // Show/hide breadcrumb based on scroll position
    if (window.scrollY > 200) {
        breadcrumb.style.opacity = '1';
        breadcrumb.style.transform = 'translateY(0)';
    } else {
        breadcrumb.style.opacity = '0';
        breadcrumb.style.transform = 'translateY(-10px)';
    }
}

if (breadcrumb) {
    breadcrumb.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    breadcrumb.style.opacity = '0';
    breadcrumb.style.transform = 'translateY(-10px)';
    
    let breadcrumbTicking = false;
    window.addEventListener('scroll', () => {
        if (!breadcrumbTicking) {
            window.requestAnimationFrame(() => {
                updateBreadcrumb();
                breadcrumbTicking = false;
            });
            breadcrumbTicking = true;
        }
    }, { passive: true });
    
    // Initial update
    updateBreadcrumb();
}

// Navigation functionality
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');

// Mobile menu toggle with accessibility
if (navToggle) {
    navToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isActive);
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navToggle && 
        !navMenu.contains(e.target) && 
        !navToggle.contains(e.target) &&
        navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

// Prevent body scroll when mobile menu is open
if (navMenu) {
    const observer = new MutationObserver(() => {
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    observer.observe(navMenu, { attributes: true, attributeFilter: ['class'] });
}

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);
window.addEventListener('load', highlightActiveSection);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.sorrow-item, .artwork-card, .statue-item, .saint-card, .votive-card, .mystery-item, .evangelist-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * 0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Lazy loading for images (if images are added later)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Add scroll to top button functionality (optional enhancement)
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.setAttribute('aria-label', 'Nach oben scrollen');
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--gold);
        color: var(--text-dark);
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.6)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.4)';
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// Add CSS for scroll to top button via JavaScript
const style = document.createElement('style');
style.textContent = `
    .scroll-to-top:hover {
        background: #E8D5A3 !important;
    }
`;
document.head.appendChild(style);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers with passive listeners
const debouncedHighlight = debounce(highlightActiveSection, 10);
window.addEventListener('scroll', debouncedHighlight, { passive: true });

// Add animation delay to cards for staggered effect (only on desktop)
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 768) {
        const cards = document.querySelectorAll('.sorrow-item, .saint-card, .votive-card, .mystery-item, .evangelist-item, .event-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }
});

// Add focus styles for accessibility
document.addEventListener('DOMContentLoaded', () => {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--gold)';
            this.style.outlineOffset = '2px';
        });
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// Add loading state management
document.addEventListener('DOMContentLoaded', () => {
    // Remove any loading classes
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
});

// Performance monitoring
if ('PerformanceObserver' in window) {
    try {
        const perfObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'navigation') {
                    const loadTime = entry.loadEventEnd - entry.fetchStart;
                    if (loadTime > 3000) {
                        console.warn('Slow page load detected:', loadTime, 'ms');
                    }
                }
            }
        });
        perfObserver.observe({ entryTypes: ['navigation'] });
    } catch (e) {
        // Performance monitoring not available
    }
}

// Mobile-specific optimizations
if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    // Prevent double-tap zoom on buttons
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Optimize scroll performance
    document.addEventListener('touchmove', (e) => {
        // Allow default scroll behavior
    }, { passive: true });
}

// Enhanced Contact Form Handling with Validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
    
    // Form submission with validation
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            // Focus first invalid field
            const firstInvalid = contactForm.querySelector('.error');
            if (firstInvalid) {
                firstInvalid.focus();
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show success message
        showFormSuccess(contactForm);
        contactForm.reset();
        
        // In production, you would use something like:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
    });
}

// Form Validation Function
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove previous error state
    field.classList.remove('error', 'valid');
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Dieses Feld ist erforderlich.';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        }
    }
    
    // Min length validation
    if (field.hasAttribute('minlength') && value.length < parseInt(field.getAttribute('minlength'))) {
        isValid = false;
        errorMessage = `Bitte geben Sie mindestens ${field.getAttribute('minlength')} Zeichen ein.`;
    }
    
    // Update field state
    if (!isValid && value) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        errorDiv.setAttribute('role', 'alert');
        field.parentElement.appendChild(errorDiv);
    } else if (isValid && value) {
        field.classList.add('valid');
    }
    
    return isValid;
}

// Show Form Success Message
function showFormSuccess(form) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.setAttribute('role', 'alert');
    successDiv.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.</span>
    `;
    
    form.parentElement.insertBefore(successDiv, form);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.style.opacity = '0';
        successDiv.style.transform = 'translateY(-10px)';
        setTimeout(() => successDiv.remove(), 300);
    }, 5000);
}

// Smooth scroll for artwork navigation links
document.querySelectorAll('.artwork-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

console.log('Kapelle Mariä Opferung Website geladen');

