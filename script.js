const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const closeBtn = document.getElementById("closeBtn");

hamburger.onclick = function () {
    nav.classList.add("active");
};

closeBtn.onclick = function () {
    nav.classList.remove("active");
};