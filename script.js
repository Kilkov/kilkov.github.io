const images = [
    "images/art1.jpg",
    "images/art2.jpg",
    "images/art3.jpg",
    "images/art4.jpg"
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

prevButton.addEventListener("click", Image);
nextButton.addEventListener("click", Image);

// Auto-change images every 120 seconds (120000 ms)
setInterval(nextImage, 120000);
