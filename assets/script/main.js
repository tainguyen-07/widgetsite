const slider = document.getElementById("slider");
const scrollAmount = 320;

document.getElementById("nextBtn").onclick = () =>
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });

document.getElementById("prevBtn").onclick = () =>
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });