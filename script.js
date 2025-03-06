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
const artworkContainer = document.getElementById("artwork-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function showMedia(index) {
    artworkContainer.innerHTML = ""; // Clear previous content
    const mediaSrc = media[index];
    if (mediaSrc.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.src = mediaSrc;
        video.controls = true;
        video.autoplay = true;
        video.loop = true;
        video.style.maxWidth = "100%";
        artworkContainer.appendChild(video);
    } else {
        const img = document.createElement("img");
        img.src = mediaSrc;
        img.style.maxWidth = "100%";
        artworkContainer.appendChild(img);
    }
}

function nextMedia() {
    currentIndex = (currentIndex + 1) % media.length;
    showMedia(currentIndex);
}

function prevMedia() {
    currentIndex = (currentIndex - 1 + media.length) % media.length;
    showMedia(currentIndex);
}

prevButton.addEventListener("click", prevMedia);
nextButton.addEventListener("click", nextMedia);

// Auto-change media every 60 seconds
setInterval(nextMedia, 60000);

// Show the first media item initially
showMedia(currentIndex);
