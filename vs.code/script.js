document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Typewriter Effect for Hero Subtitle ---
    const subtitleElement = document.getElementById('subtitle');
    const textToType = "A developer building creative solutions.";
    let index = 0;
    
    function typeWriter() {
        if (index < textToType.length) {
            subtitleElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Adjust typing speed here (in ms)
        } else {
            // Optional: Add a blinking cursor at the end
            subtitleElement.innerHTML += '<span class="cursor">|</span>';
        }
    }

    // Start the effect after a short delay
    setTimeout(typeWriter, 500);

});

// Add CSS for the blinking cursor (can also be in style.css)
const style = document.createElement('style');
style.innerHTML = `
    .cursor {
        animation: blink 0.7s infinite;
    }
    @keyframes blink {
        50% { opacity: 0; }
    }
`;
document.head.appendChild(style);