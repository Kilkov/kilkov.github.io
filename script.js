const images = [
    "images/art1.jpg",
    "images/art2.jpg",
    "images/art3.jpg",
    "images/art4.jpg",
    "images/art5.jpg",
    "images/art6.jpg",
    "images/art7.jpg",
    "images/art8.jpg",
    "images/art9.jpg",
    "images/art10.jpg"
];

let currentIndex = 0;
const artwork = document.getElementById("artwork");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function showImage(index) {
    artwork.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

// Auto-change images every 60 seconds (120000 ms)
setInterval(nextImage, 60000);
