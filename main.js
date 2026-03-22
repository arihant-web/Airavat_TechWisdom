// ==========================
// DOM READY
// ==========================
document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // MOBILE MENU TOGGLE
    // ==========================
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Close menu on link click
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });

        // Close menu on ESC
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                navLinks.classList.remove("active");
            }
        });
    }

    // ==========================
    // SCROLL PROGRESS BAR
    // ==========================
    const progressBar = document.getElementById("progressBar");

    function updateProgressBar() {
        if (!progressBar) return;

        const scrollTop = document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrollPercent = (scrollTop / height) * 100;
        progressBar.style.width = scrollPercent + "%";
    }

    // ==========================
    // BACK TO TOP BUTTON
    // ==========================
    let topBtn = document.getElementById("topBtn");

    // Create button if missing
    if (!topBtn) {
        topBtn = document.createElement("button");
        topBtn.id = "topBtn";
        topBtn.innerHTML = "↑";
        document.body.appendChild(topBtn);
    }

    function handleScroll() {
        updateProgressBar();

        if (!topBtn) return;

        if (document.documentElement.scrollTop > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }

    window.addEventListener("scroll", handleScroll);

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // ==========================
    // SWIPER SLIDER
    // ==========================
    if (typeof Swiper !== "undefined") {
        new Swiper(".swiper", {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        });
    }

    // ==========================
    // ENQUIRY FORM
    // ==========================
    const form = document.querySelector("form");
    const successMsg = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            if (successMsg) {
                successMsg.style.display = "block";
            }

            form.reset();
        });
    }

});


document.addEventListener("DOMContentLoaded", function () {
    const enquiryForm = document.getElementById("enquiryForm");
    const successMessage = document.getElementById("success-message");
    const userName = document.getElementById("user-name");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nameInput = document.getElementById("name").value.trim();

            if (userName) {
                userName.textContent = nameInput || "Student";
            }

            enquiryForm.style.display = "none";
            successMessage.style.display = "block";
        });
    }
});