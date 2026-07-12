window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.display = "none";
    }
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.dataset.target;
        const count = +counter.innerText;

        const increment = Math.max(1, Math.ceil(target / 100));

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

/* Hero Slider */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide() {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    slides[currentSlide].classList.add("active");

}

setInterval(showSlide,4000);

/* Scroll To Top */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.onscroll = function () {

        if (document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }
    };

    topBtn.onclick = function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

}

// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Gallery Lightbox
alert("JavaScript Loaded");
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

if (galleryImages.length > 0 && lightbox && lightboxImg && closeBtn) {

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "block";
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

