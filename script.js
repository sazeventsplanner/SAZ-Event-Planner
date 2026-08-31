// @ts-nocheck
/* eslint-disable */
/**
 * SAZ Events - Premium Luxury Event Planning Website
 * JavaScript for animations, interactions, and functionality
 */

// ============================================
// DOM Elements
// ============================================
const preloader = document.getElementById('preloader');
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');
const bookingForm = document.getElementById('bookingForm');
const successModal = document.getElementById('successModal');
const modalClose = document.getElementById('modalClose');
const modalBtn = document.getElementById('modalBtn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// ============================================
// Preloader
// ============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000);
});

// ============================================
// Initialize AOS Animation Library
// ============================================
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    delay: 0,
});

// ============================================
// Particles Animation
// ============================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        particle.style.width = (Math.random() * 3 + 2) + 'px';
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
    }
}
createParticles();

// ============================================
// Navbar Scroll Effect
// ============================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove scrolled class
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll progress bar
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (currentScroll / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';

    // Back to top button
    if (currentScroll > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

    lastScroll = currentScroll;
});

// ============================================
// Mobile Navigation Toggle
// ============================================
navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// Dashboard Sidebar Navigation
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Select elements using classes to ensure they are found
    const navToggle = document.querySelector('.nav-toggle');
    const dashboard = document.querySelector('.dashboard');
    const overlay = document.querySelector('.dashboard-overlay');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelectorAll('.dashboard-menu a');

    // 2. Safety check: Stop here if the button or dashboard is missing
    if (!navToggle || !dashboard) {
        console.error("Dashboard elements missing from HTML.");
        return;
    }

    // 3. Open Menu Function
    const openMenu = () => {
        dashboard.classList.add('active');
        if (overlay) overlay.classList.add('active');
        document.body.classList.add('sidebar-open'); // Add class to body
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    };

    // 4. Close Menu Function
    const closeMenu = () => {
        dashboard.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.classList.remove('sidebar-open'); // Remove class from body
        document.body.style.overflow = ''; // Restore background scrolling
    };

    // 5. Attach Click Events
    navToggle.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // 6. Close menu when any link inside it is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // 7. Close on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dashboard.classList.contains('active')) {
            closeMenu();
        }
    });
});

// ============================================
// Active Navigation Link on Scroll
// ============================================
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Animated Counter
// ============================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(current);
        }
    }, 16);
}

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                if (counter.textContent === '0') {
                    animateCounter(counter);
                }
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe hero stats and about stats
const heroStats = document.querySelector('.hero-stats');
const aboutStats = document.querySelector('.about-stats');

if (heroStats) counterObserver.observe(heroStats);
if (aboutStats) counterObserver.observe(aboutStats);

// ============================================
// Countdown Timer
// ============================================
function updateCountdown() {
    // Set target date to 30 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function update() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = days.toString().padStart(2, '0');
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

updateCountdown();

// ============================================
// Testimonials Swiper
// ============================================
const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});

// ============================================
// Gallery Filter
// ============================================
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ============================================
// Lightbox
// ============================================
let currentGalleryIndex = 0;
const visibleGalleryItems = () => Array.from(galleryItems).filter(item => item.style.display !== 'none');

function openLightbox(index) {
    const items = visibleGalleryItems();
    if (items.length === 0) return;

    currentGalleryIndex = index;
    const item = items[index];
    const img = item.querySelector('img');
    const title = item.querySelector('h4').textContent;
    const desc = item.querySelector('p').textContent;

    lightboxImage.src = img.src;
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = desc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function showPrevImage() {
    const items = visibleGalleryItems();
    currentGalleryIndex = (currentGalleryIndex - 1 + items.length) % items.length;
    openLightbox(currentGalleryIndex);
}

function showNextImage() {
    const items = visibleGalleryItems();
    currentGalleryIndex = (currentGalleryIndex + 1) % items.length;
    openLightbox(currentGalleryIndex);
}

// Gallery item click to open lightbox
galleryItems.forEach((item, index) => {
    const viewBtn = item.querySelector('.gallery-view');
    if (viewBtn) {
        viewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const visibleIndex = visibleGalleryItems().indexOf(item);
            openLightbox(visibleIndex);
        });
    }
});

// Lightbox controls
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-prev').addEventListener('click', showPrevImage);
document.querySelector('.lightbox-next').addEventListener('click', showNextImage);

// Close lightbox on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
});

// ============================================
// Booking Form Submission -> WhatsApp
// ============================================
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();
        return;
    }

    // Collect form data
    const formData = new FormData(bookingForm);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const eventType = formData.get('event-type') || '';
    const guests = formData.get('guests') || '';
    const date = formData.get('date') || '';
    const message = formData.get('message') || '';

    // Build WhatsApp message
    let whatsappMessage = `New Booking Request\n\n`;
    whatsappMessage += `Name: ${name}\n`;
    if (email) whatsappMessage += `Email: ${email}\n`;
    if (phone) whatsappMessage += `Phone: ${phone}\n`;
    if (eventType) whatsappMessage += `Event Type: ${eventType}\n`;
    if (guests) whatsappMessage += `Number of Guests: ${guests}\n`;
    if (date) whatsappMessage += `Event Date: ${date}\n`;
    if (message) whatsappMessage += `Message: ${message}\n`;

    const whatsappNumber = '918591271894';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
    bookingForm.reset();
});

// Vendor Registration Form -> WhatsApp
const vendorForm = document.getElementById('vendorForm');

if (vendorForm) {
    vendorForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!vendorForm.checkValidity()) {
            vendorForm.reportValidity();
            return;
        }

        const name = document.getElementById('vendor-name').value.trim();
        const type = document.getElementById('vendor-type').value.trim();
        const contact = document.getElementById('vendor-contact').value.trim();
        const email = document.getElementById('vendor-email').value.trim();
        const description = document.getElementById('vendor-description').value.trim();

        let message = `New Vendor Registration\n\n`;
        message += `Vendor Name: ${name}\n`;
        message += `Type: ${type}\n`;
        message += `Contact No: ${contact}\n`;
        if (email) message += `Email: ${email}\n`;
        if (description) message += `Description: ${description}\n`;

        const whatsappNumber = '918591271894';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
        vendorForm.reset();
    });
}

// Modal controls
modalClose.addEventListener('click', () => {
    successModal.classList.remove('active');
});

modalBtn.addEventListener('click', () => {
    successModal.classList.remove('active');
});

// Close modal on background click
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.classList.remove('active');
    }
});

// ============================================
// Newsletter Form
// ============================================
const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    console.log('Newsletter subscription:', email);

    // Show a simple alert (in production, use a proper notification)
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
});

// ============================================
// Back to Top Button
// ============================================
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// Parallax Effect for Hero
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');

    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = `${Math.max(0.35, 1 - scrolled / (window.innerHeight * 1.2))}`;
    }
});

// ============================================
// Hover Effects Enhancement
// ============================================

// Service cards hover glow effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ============================================
// Lazy Loading Images
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Form Validation Enhancement
// ============================================
const formInputs = bookingForm.querySelectorAll('input, select, textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
        // Validate on blur
        validateInput(input);
    });
});

function validateInput(input) {
    const value = input.value.trim();
    let isValid = true;

    if (input.required && !value) {
        isValid = false;
    }

    if (input.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
    }

    if (input.type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        isValid = phoneRegex.test(value);
    }

    input.classList.toggle('invalid', !isValid);
    return isValid;
}

// ============================================
// Smooth Page Reveal
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// Set Minimum Date for Booking
// ============================================
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// ============================================
// WhatsApp Float Animation
// ============================================
const whatsappFloat = document.querySelector('.whatsapp-float');

if (whatsappFloat) {
    // Add pulse animation periodically
    setInterval(() => {
        whatsappFloat.style.transform = 'scale(1.1)';
        setTimeout(() => {
            whatsappFloat.style.transform = '';
        }, 200);
    }, 5000);
}

// ============================================
// Category Cards Click Handler
// ============================================
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const categoryName = card.querySelector('h3').textContent;
        // Scroll to gallery and filter
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' });

            // Find and click the matching filter button
            setTimeout(() => {
                filterBtns.forEach(btn => {
                    const filterText = btn.textContent.toLowerCase();
                    if (categoryName.toLowerCase().includes(filterText) || 
                        filterText.includes('all')) {
                        btn.click();
                    }
                });
            }, 800);
        }
    });
});

// ============================================
// Console Welcome Message
// ============================================
console.log('%c🎉 Welcome to SAZ Events!', 'font-size: 24px; font-weight: bold; color: #d4af37;');
console.log('%cCreating Unforgettable Events ✨', 'font-size: 14px; color: #f3e5ab;');
console.log('%cContact us: +91 98765 43210', 'font-size: 12px; color: #888;');

// ============================================
// Performance Optimization
// ============================================

// Debounce function for scroll events
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

// Throttle function for frequent events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimize scroll event listeners
const optimizedScroll = throttle(() => {
    highlightNavLink();
}, 100);

window.addEventListener('scroll', optimizedScroll);

document.querySelectorAll('.gallery-item[data-target]').forEach(item => {
    item.addEventListener('click', function () {

        const targetCategory = this.getAttribute('data-target');

        // Find the category/filter button
        const categoryButton = document.querySelector(
            `[data-filter="${targetCategory}"]`
        );

        if (categoryButton) {
            categoryButton.click();
        }

        // Scroll back to gallery
        const gallerySection = document.querySelector('#gallery');

        if (gallerySection) {
            gallerySection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
    const filterButtons = document.querySelectorAll(".filter-btn");

    // Show 6 random images on page load
    function showRandomGallery() {

        // Hide all images
        galleryItems.forEach(item => {
            item.style.display = "none";
        });

        // Shuffle images
        const shuffled = [...galleryItems].sort(() => Math.random() - 0.5);

        // Show only 6
        shuffled.slice(0, 6).forEach(item => {
            item.style.display = "block";
        });

        // Remove active button
        filterButtons.forEach(button => {
            button.classList.remove("active");
        });
    }

    // Category filtering
    filterButtons.forEach(button => {

        button.addEventListener("click", function () {

            const selectedCategory = this.getAttribute("data-filter");

            galleryItems.forEach(item => {

                const itemCategory = item.getAttribute("data-category");

                if (itemCategory === selectedCategory) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }

            });

            // Active button
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

    // Landing page
    showRandomGallery();

});
// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ============================================
// Mobile "Show More" — Categories, Gallery, Blog
// (keeps mobile view short without touching desktop
//  or removing any data; only limits what's visible)
// ============================================
(function () {
    const MOBILE_BREAKPOINT = 768;
    const isMobile = () => window.innerWidth <= MOBILE_BREAKPOINT;

    // ---- Categories & Blog: simple CSS class toggle ----
    // (their CSS already hides extra items via nth-child,
    //  we just need to flip the "show-all" class)
    function setupToggleShowMore(gridEl, btnEl) {
        if (!gridEl || !btnEl) return;
        btnEl.addEventListener('click', () => {
            const expanded = gridEl.classList.toggle('show-all');
            btnEl.classList.toggle('active', expanded);
            const label = btnEl.querySelector('span');
            if (label) label.textContent = expanded ? 'Show Less' : 'Show More';
        });
    }

    setupToggleShowMore(
        document.querySelector('.services-grid'),
        document.getElementById('servicesShowMoreBtn')
    );
    setupToggleShowMore(
        document.querySelector('.categories-grid'),
        document.getElementById('categoriesShowMoreBtn')
    );
    setupToggleShowMore(
        document.getElementById('blogGrid'),
        document.getElementById('blogShowMoreBtn')
    );

    // ---- Gallery: items are shown/hidden dynamically by the
    // filter buttons and the random-gallery script (both set
    // inline styles), so we re-apply the mobile limit every
    // time the visible set changes, instead of relying on CSS. ----
    const GALLERY_MOBILE_LIMIT = 6;
    const galleryBtn = document.getElementById('galleryShowMoreBtn');
    let galleryExpanded = false;

    function applyMobileGalleryLimit() {
        if (!galleryBtn) return;

        const allItems = Array.from(document.querySelectorAll('.gallery-item'));
        const visibleItems = allItems.filter(item => item.style.display !== 'none');

        if (!isMobile()) {
            galleryBtn.style.display = 'none';
            return;
        }

        if (!galleryExpanded) {
            visibleItems.forEach((item, index) => {
                if (index >= GALLERY_MOBILE_LIMIT) {
                    item.style.display = 'none';
                }
            });
        }

        galleryBtn.style.display = visibleItems.length > GALLERY_MOBILE_LIMIT ? 'inline-flex' : 'none';
    }

    if (galleryBtn) {
        galleryBtn.addEventListener('click', () => {
            galleryExpanded = !galleryExpanded;
            galleryBtn.classList.toggle('active', galleryExpanded);
            const label = galleryBtn.querySelector('span');
            if (label) label.textContent = galleryExpanded ? 'Show Less' : 'Show More';

            if (galleryExpanded) {
                // Reveal every item that currently matches the active filter/random set.
                // We simply re-show everything that isn't explicitly filtered out.
                const activeFilterBtn = document.querySelector('.filter-btn.active');
                const activeFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : null;

                document.querySelectorAll('.gallery-item').forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (!activeFilter || activeFilter === 'all' || category === activeFilter) {
                        item.style.display = 'block';
                    }
                });
            }

            applyMobileGalleryLimit();
        });

        // Re-apply the limit whenever a filter button is clicked
        // (runs after the existing filter click handlers, via setTimeout).
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                galleryExpanded = false;
                galleryBtn.classList.remove('active');
                const label = galleryBtn.querySelector('span');
                if (label) label.textContent = 'Show More';
                setTimeout(applyMobileGalleryLimit, 0);
            });
        });

        // Re-apply on load (after the random-gallery script has run)
        // and whenever the viewport crosses the mobile breakpoint.
        setTimeout(applyMobileGalleryLimit, 0);
        window.addEventListener('resize', () => setTimeout(applyMobileGalleryLimit, 150));
    }
})();

// ============================================
// End of JavaScript
// ============================================