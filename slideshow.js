document.addEventListener("DOMContentLoaded", () => {
    const images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png"];
    const totalImages = images.length;
    let currentIndex = 0;

    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    // Initial setup
    img1.src = `/resources/slideshow/${images[currentIndex]}`;
    img2.src = `/resources/slideshow/${images[(currentIndex + 1) % totalImages]}`;

    function changeImage() {
        // Fade in img2
        img2.style.opacity = 1;

        // Wait for the fade-in to complete
        setTimeout(() => {
            // Swap: Make img1 hold img2's image
            img1.src = img2.src;

            // Reset img2
            img2.style.opacity = 0;

            // Wait for fade-out before changing img2's src
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % totalImages;
                img2.src = `/resources/slideshow/${images[(currentIndex + 1) % totalImages]}`;
            }, 1000); // Matches transition time
        }, 1000); // Matches transition time
    }

    setInterval(changeImage, 7000); // Change image every 3 seconds
});
