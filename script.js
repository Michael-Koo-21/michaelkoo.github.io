// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to navigation links on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Mobile navigation toggle
    const createMobileNav = () => {
        const nav = document.querySelector('.nav-container');
        const menuBtn = document.createElement('button');
        menuBtn.classList.add('mobile-menu-btn');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        
        menuBtn.addEventListener('click', () => {
            document.querySelector('.nav-menu').classList.toggle('show-mobile');
        });
        
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-btn')) {
                nav.appendChild(menuBtn);
            }
        } else {
            const existingBtn = document.querySelector('.mobile-menu-btn');
            if (existingBtn) {
                existingBtn.remove();
            }
        }
    };

    createMobileNav();
    window.addEventListener('resize', createMobileNav);
});