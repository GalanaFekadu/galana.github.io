document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for nav links
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

    // Skills toggle
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const allSkills = document.querySelector('.skills-grid');
    const categorized = document.querySelector('.skill-categories');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            if (this.textContent === 'All') {
                allSkills.style.display = 'grid';
                categorized.style.display = 'none';
            } else {
                allSkills.style.display = 'none';
                categorized.style.display = 'block';
            }
        });
    });

    // Typing effect for name
    const typedText = document.getElementById('typed-text');
    const cursor = document.getElementById('cursor');
    const text = "Hi, I'm Galana Fekadu...";
    let index = 0;
    let speed = 100; // Typing speed in milliseconds

    function type() {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    function blinkCursor() {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        setTimeout(blinkCursor, 500); // Blink every 0.5 seconds
    }

    // Start typing and cursor blink when the home section is in view
    const homeSection = document.getElementById('home');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                type();
                blinkCursor();
                sectionObserver.unobserve(homeSection); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.5 });
    sectionObserver.observe(homeSection);

    // Dark mode toggle
    const darkModeBtn = document.getElementById('dark-mode-btn');
    darkModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.textContent = document.body.classList.contains('dark-mode') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    });

    // Fade-in animation for sections on scroll
    const sections = document.querySelectorAll('.fade-in');
    const fadeOptions = {
        threshold: 0.1
    };
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    }, fadeOptions);
    sections.forEach(section => {
        fadeObserver.observe(section);
    });

    // Abstract toggle for publications
    document.querySelectorAll('.pub-link[data-toggle="abstract"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const abstract = this.nextElementSibling;
            if (abstract) {
                abstract.style.display = abstract.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    document.querySelectorAll('.close-abstract').forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.style.display = 'none';
        });
    });
});