document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Dynamic text effect for the home section
    const textElement = document.querySelector("#home p");
    const textArray = ["Aspiring Python Developer", "Passionate Data Analyst", "Tech Enthusiast"];
    let textIndex = 0;

    function changeText() {
        textElement.textContent = textArray[textIndex];
        textIndex = (textIndex + 1) % textArray.length;
    }
    setInterval(changeText, 3000);

    // Button hover effect
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s ease-in-out";
        });
        button.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});