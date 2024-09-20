document.addEventListener('DOMContentLoaded', () => {
    // Greet function
    function greet() {
        const userName = prompt("Please enter your name:");
        if (userName) {
            alert(`Hello, ${userName}, Welcome to my portfolio Website!`);
        } else {
            alert(`Hello, you didn't enter your name!`);
        }
    }

    // Call greet function on page load
    greet();

    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();  // Prevent form from submitting in the traditional way
            alert('Thank you for contacting us! Your message has been submitted successfully.');
            contactForm.reset();  // Clear the form fields after submission
        });
    }

    // Dark/Light mode toggle
    const toggleButton = document.getElementById('toggle-button');
    const body = document.body;

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            body.classList.toggle('light-mode');

            // Optional: Change button text based on the current mode
            toggleButton.textContent = body.classList.contains('dark-mode')
                ? 'Switch to Light Mode'
                : 'Switch to Dark Mode';
        });

        // Set initial mode
        if (!body.classList.contains('dark-mode')) {
            body.classList.add('light-mode');
        }
    }
});
