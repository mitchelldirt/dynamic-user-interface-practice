let isOpen = false;

const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const xIcon = document.getElementById("x-icon");
const hamIcon = document.getElementById("ham-icon")

hamburger.onclick = () => {
    if (isOpen === false) {
        isOpen = true;
    } else {
        isOpen = false;
    }
    xIcon.classList.toggle("hidden");
    hamIcon.classList.toggle("hidden");
    menu.classList.toggle("block");
    menu.classList.toggle("hidden");
};