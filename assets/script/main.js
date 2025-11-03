const slider = document.getElementById("slider");
const scrollAmount = 320;

document.getElementById("nextBtn").onclick = () =>
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });

document.getElementById("prevBtn").onclick = () =>
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });

window.addEventListener("load", () => {
    setTimeout(() => {
        const menuBtn = document.getElementById("menuBtn");
        const mobileMenu = document.getElementById("mobileMenu");
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener("click", () => {
                mobileMenu.classList.toggle("hidden");
            });
        }
    }, 50);
});