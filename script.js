document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
const topdiv = document.querySelector(".topdiv2");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    topdiv.classList.toggle("active");
}
});


