const trigger: HTMLDivElement = document.querySelector(".trigger");

trigger.onclick = () => {
    trigger.classList.toggle("clicked");
}

const html: HTMLElement = document.querySelector("html");
html.onclick = () => {
    const body = document.querySelector("body")
    const box: HTMLDivElement = document.createElement("div");
    box.classList.add("box");
    body.appendChild(box);
}
