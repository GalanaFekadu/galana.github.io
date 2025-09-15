// ===== Smooth Scrolling for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===== Fade-In Animation When Scrolling =====
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// ===== Lightbox for Gallery =====
const galleryImages = document.querySelectorAll(".gallery-container img");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.classList.add("active");
        const img = document.createElement("img");
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});
