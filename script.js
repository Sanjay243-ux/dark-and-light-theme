const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    // Optionally, you can store the user's preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Load the user's theme preference on page load
window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme');
    if (theme) {
        body.classList.add(theme + '-mode');
    } else {
        body.classList.add('light-mode');
    }
});
