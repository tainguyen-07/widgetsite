function waitForFragments(callback) {
    const fragments = document.querySelectorAll("include-fragment");
    if (fragments.length === 0) {
        callback();
        return;
    }
    let loaded = 0;
    fragments.forEach(frag => {
        frag.addEventListener("load", () => {
            loaded++;
            if (loaded === fragments.length) callback();
        });
    });
}

function initPage() {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    waitForFragments(initPage);
});