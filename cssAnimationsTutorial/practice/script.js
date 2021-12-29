var trigger = document.querySelector(".trigger");
trigger.onclick = function () {
    trigger.classList.toggle("clicked");
};
var html = document.querySelector("html");
html.onclick = function () {
    var body = document.querySelector("body");
    var box = document.createElement("div");
    box.classList.add("box");
    body.appendChild(box);
};
