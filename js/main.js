/* ========================================
   Kingdom Midwives - Main JavaScript
   Interactive functionality for the website
   ======================================== */

// ========================================
// Mobile Menu Toggle
// ========================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    // Toggle active class on menu
    navMenu.classList.toggle('active');

    // Toggle button animation
    mobileMenuBtn.classList.toggle('active');

    // Update aria-expanded for accessibility
    const isExpanded = navMenu.classList.contains('active');
    mobileMenuBtn.setAttribute('aria-expanded', isExpanded);

    // Prevent body scroll when menu is open
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Close mobile menu when clicking on a nav link
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// ========================================
// Smooth Scrolling for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Skip if href is just "#"
    if (href === '#') return;

    e.preventDefault();

    const targetId = href.substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      // Get navbar height for offset
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      // Calculate position with offset
      const targetPosition = target.offsetTop - navbarHeight - 20;

      // Smooth scroll to target
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ========================================
// Active Navigation Link Highlighting
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightActiveNav() {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Check if section is in viewport (with 100px offset for navbar)
    if (window.scrollY >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');

    // Check if link href matches current section
    const href = link.getAttribute('href');
    if (href && href.includes(current) && current !== '') {
      link.classList.add('active');
    }

    // Highlight based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Run on scroll
window.addEventListener('scroll', highlightActiveNav);

// Run on page load
document.addEventListener('DOMContentLoaded', highlightActiveNav);

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.querySelector('.navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ========================================
// Scroll Animations (Intersection Observer)
// ========================================
const animatedElements = document.querySelectorAll('.animate-on-scroll');

if (animatedElements.length > 0) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');

        // Optionally unobserve after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// ========================================
// Back to Top Button (Optional Enhancement)
// ========================================
// Create back to top button dynamically
const createBackToTopButton = () => {
  const button = document.createElement('button');
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  button.className = 'back-to-top';
  button.setAttribute('aria-label', 'Back to top');
  button.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient-primary);
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(128, 0, 128, 0.3);
  `;

  document.body.appendChild(button);

  // Show/hide based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      button.style.opacity = '1';
      button.style.visibility = 'visible';
    } else {
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
    }
  });

  // Scroll to top on click
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Hover effect
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-5px)';
    button.style.boxShadow = '0 6px 20px rgba(128, 0, 128, 0.4)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = '0 4px 15px rgba(128, 0, 128, 0.3)';
  });
};

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTopButton);

// ========================================
// Lazy Loading Images (Performance Enhancement)
// ========================================
if ('loading' in HTMLImageElement.prototype) {
  // Native lazy loading supported
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
} else {
  // Fallback for browsers that don't support native lazy loading
  const images = document.querySelectorAll('img');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// ========================================
// Console Welcome Message
// ========================================
console.log(
  '%c Kingdom Midwives %c Empowering Women Through Faith ',
  'background: linear-gradient(135deg, hsl(270 60% 35%), hsl(270 60% 65%)); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold;',
  'background: linear-gradient(135deg, hsl(45 100% 51%), hsl(45 95% 60%)); color: hsl(270 60% 20%); padding: 10px 20px; font-size: 14px;'
);

console.log('%c Built with love and purpose 💜', 'color: hsl(270 60% 35%); font-size: 12px; font-style: italic;');

// ========================================
// Prevent FOUC (Flash of Unstyled Content)
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.visibility = 'visible';
});

// ========================================
// Page Load Performance Monitoring
// ========================================
window.addEventListener('load', () => {
  // Log page load time
  if (window.performance) {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`%c Page loaded in ${loadTime}ms`, 'color: #10b981; font-weight: bold;');
  }
});
