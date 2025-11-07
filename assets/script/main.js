const slider = document.getElementById("slider");
const scrollAmount = 320;

document.getElementById("nextBtn").onclick = () =>
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });

document.getElementById("prevBtn").onclick = () =>
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });

document.querySelectorAll("include-fragment").forEach(frag => {
    frag.addEventListener("load", () => {
        initPage();
    });
});

function initPage() {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    if (menuBtn && mobileMenu) {
        menuBtn.onclick = () => mobileMenu.classList.toggle("hidden");
    }
}