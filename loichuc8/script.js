document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image');
    let currentImageIndex = 0;

    setInterval(function() {
        images[currentImageIndex].style.opacity = '0';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        setTimeout(function() {
            images[currentImageIndex].style.opacity = '1';
        }, 500); // 500 milliseconds
    }, 5000); // 5000 milliseconds = 5 seconds
});
