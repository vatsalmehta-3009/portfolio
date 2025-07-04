// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

function initApp() {
    // Initialize sidebar navigation
    initSidebar();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize animations
    initAnimations();
    
    // Initialize floating elements
    initFloatingElements();
    
    // Initialize skill bars
    initSkillBars();
    
    // Initialize language bars
    initLanguageBars();
}

// Sidebar Navigation
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Mobile toggle functionality
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Navigation link click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target section
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Close mobile sidebar
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
            if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
                sidebar.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            sidebar.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
}

// Smooth Scrolling and Section Navigation
function initSmoothScrolling() {
    // Add smooth scrolling to all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    console.log('Found internal links:', internalLinks.length);
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            console.log('Button clicked, target:', targetId);
            
            // Find the corresponding nav link and trigger it
            const navLink = document.querySelector(`.sidebar-nav .nav-link[href="#${targetId}"]`);
            if (navLink) {
                console.log('Found nav link, triggering click');
                navLink.click();
            } else {
                console.log('Nav link not found for target:', targetId);
            }
        });
    });
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        console.log('Contact form found and initialized');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            console.log('Form data:', formData);
            
            // Validate form
            if (!validateForm(formData)) {
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Send form data
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                showNotification(data.message, 'success');
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
            })
            .finally(() => {
                // Reset button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
        });
    } else {
        console.log('Contact form not found');
    }
}

// Form Validation
function validateForm(data) {
    const errors = [];
    
    if (!data.name.trim()) {
        errors.push('Name is required');
    }
    
    if (!data.email.trim()) {
        errors.push('Email is required');
    } else if (!isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!data.subject.trim()) {
        errors.push('Subject is required');
    }
    
    if (!data.message.trim()) {
        errors.push('Message is required');
    }
    
    if (errors.length > 0) {
        showNotification(errors.join(', '), 'error');
        return false;
    }
    
    return true;
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Animations
function initAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.about-card, .timeline-content, .skill-category, .project-card, .achievement-card, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Typing animation for hero section
    const heroTitle = document.querySelector('.hero-title .name');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing animation after a short delay
        setTimeout(typeWriter, 1000);
    }
}

// Floating Elements
function initFloatingElements() {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach(card => {
        const speed = parseFloat(card.getAttribute('data-speed')) || 1;
        
        // Add parallax effect on mouse move
        document.addEventListener('mousemove', function(e) {
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            
            card.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    });
}

// Skill Bars
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill');
    
    console.log('Found skill bars:', skillBars.length);
    
    skillBars.forEach(bar => {
        console.log('Skill bar width:', bar.style.width);
        // Just ensure the width is set correctly without animation
        if (bar.style.width) {
            // Keep the original width, don't reset to 0%
            console.log('Setting skill bar to:', bar.style.width);
        }
    });
}

// Language Bars
function initLanguageBars() {
    const languageBars = document.querySelectorAll('.language-fill');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    languageBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        border: 1px solid ${type === 'success' ? '#1e7e34' : '#c82333'};
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
    
    .mobile-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(notificationStyles);

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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll-related functions can be added here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add click to copy email functionality
    const emailElements = document.querySelectorAll('.contact-details p');
    emailElements.forEach(element => {
        if (element.textContent.includes('@')) {
            element.style.cursor = 'pointer';
            element.title = 'Click to copy email';
            
            element.addEventListener('click', function() {
                const email = this.textContent.trim();
                navigator.clipboard.writeText(email).then(() => {
                    showNotification('Email copied to clipboard!', 'success');
                }).catch(() => {
                    showNotification('Failed to copy email', 'error');
                });
            });
        }
    });
    
    // Add hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add hover effects for achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add hover effects for skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.background = 'rgba(102, 126, 234, 0.1)';
            this.style.borderRadius = '10px';
            this.style.padding = '0.5rem';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.background = 'transparent';
            this.style.borderRadius = '0';
            this.style.padding = '0';
        });
    });
});

// Initialize the app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
} 