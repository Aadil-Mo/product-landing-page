// Smooth scrolling for navigation links
document.querySelectorAll('header nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Scroll smoothly to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Aligns the top of the target element to the top of the viewport
            });
        }
    });
});

// Smooth scrolling for hero button
document.querySelector('.hero-section .btn[href^="#"]').addEventListener('click', function(e) {
     e.preventDefault(); // Prevent default jump
     const targetId = this.getAttribute('href');
     const targetElement = document.querySelector(targetId);
      if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
     }
});

// Note: A sticky navigation bar would require more JS (scroll event listener)
// and CSS adjustments, adding a bit more complexity.
