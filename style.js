// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load GitHub projects dynamically (placeholder)
document.addEventListener('DOMContentLoaded', function() {
    // Replace with actual GitHub API call if desired
    console.log("GitHub projects would be loaded here via API.");
});
