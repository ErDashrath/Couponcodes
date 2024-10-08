// Ensure the JavaScript only runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working'); // Confirm that the script is running
    showSlides(); // Initialize the slideshow
});

// Initialize slide index
let slideIndex = 0;

// Function to show slides
function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Hide all slides initially
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Increment the slide index
    slideIndex++;
    
    // Reset to the first slide if the index exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = 'block';

    // Remove the 'active' class from all dots
    dots.forEach(dot => {
        dot.className = dot.className.replace(' active', '');
    });

    // Add the 'active' class to the corresponding dot
    dots[slideIndex - 1].className += ' active';

    // Automatically change the slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Function to manually set the current slide based on dot click
function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

// Example of handling a form submission (can be customized further)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    alert('Coupon submitted successfully!'); // Display a success message
});
