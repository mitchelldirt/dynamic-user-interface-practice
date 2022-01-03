//TODO: create a function for removing and adding the checked radio button
//TODO: Have the picture change every 5 seconds

let radioButtons = document.getElementsByName("pictureSelector");
let image = document.getElementById("image")
let right = document.getElementById("right");
let left = document.getElementById("left");


function addPictureSliding() {
    for (let thing of radioButtons) {
        thing.addEventListener("click", () => {
            let currentImageSrc = image.getAttribute("src");
            imageNumber = +currentImageSrc[8]
            let checkedRadioButton = document.getElementById(`pic${imageNumber}`);
            checkedRadioButton.removeAttribute("checked", "");
            let pictureNumber = thing.id;
            image.setAttribute("src", `imgs/${pictureNumber}.jpeg`);
            let uncheckedRadioButton = document.getElementById(pictureNumber);
            uncheckedRadioButton.setAttribute("checked", "")
        })
    }
}

function arrows(direction) {
    let imageNumber;
    let currentImageSrc = image.getAttribute("src");
    imageNumber = +currentImageSrc[8]
    let checkedRadioButton = document.getElementById(`pic${imageNumber}`);
    checkedRadioButton.removeAttribute("checked", "");
    if (direction === "right") {
        imageNumber += 1;
        if (imageNumber === 7) {
            imageNumber = 1;
        }
    } else {
        imageNumber -= 1
        if (imageNumber === 0) {
            imageNumber = 6;
        }
    }
    let uncheckedRadioButton = document.getElementById(`pic${imageNumber}`);
    uncheckedRadioButton.setAttribute("checked", "")
    image.setAttribute("src", `imgs/pic${imageNumber}.jpeg`);
}



addPictureSliding();
right.addEventListener('click', () => {
    arrows("right");
});

left.addEventListener('click', () => {
    arrows("left");
}); 
