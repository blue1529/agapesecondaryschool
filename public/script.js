const container = document.querySelector('.scroll-container');

    // Remove or comment out the autoscroll code below
    /*
    let scrollAmount = 0;
    setInterval(() => {
        if (scrollAmount < container.scrollWidth - container.clientWidth) {
            scrollAmount += 210; // width + gap
        } else {
            scrollAmount = 0;
        }
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 4000); // change slide every 3s
    */

function toggleGallery(tile) {
  tile.classList.toggle('active');
}
//opening the hamburger
    const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

    
    //changing hamburger shape
    hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.textContent = navLinks.classList.contains('show') ? '✖' : '☰';
});
document.addEventListener('click', function(event) {
    const isClickInsideNav = navLinks.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInsideNav) {
        navLinks.classList.remove('show');
        hamburger.textContent = '☰'; // Reset to hamburger icon
    }
});



//for the left and right buttons
document.querySelectorAll('.scroll-section').forEach(section => {
    const leftBtn = section.querySelector('.scroll-btn.left');
    const rightBtn = section.querySelector('.scroll-btn.right');
    const container = section.querySelector('.scroll-wrapper');

    leftBtn.addEventListener('click', () => container.scrollBy({ left: -300, behavior: 'smooth' }));
    rightBtn.addEventListener('click', () => container.scrollBy({ left: 300, behavior: 'smooth' }));
});


const toggleButton = document.getElementById('theme-toggle');
    const themeImage = document.getElementById('theme-image'); // optional
    const savedTheme = localStorage.getItem('theme');

    // Step 1: Apply saved preference OR system preference
    if (savedTheme) {
      document.body.classList.toggle('dark-theme', savedTheme === 'dark');
      toggleButton.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
      if (themeImage) themeImage.src = savedTheme === 'dark' ? 'pics/logo-dark.png' : 'pics/logo-light.png';
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.body.classList.toggle('dark-theme', prefersDark);
      toggleButton.textContent = prefersDark ? '☀️' : '🌙';
      if (themeImage) themeImage.src = prefersDark ? 'pics/logo-dark.png' : 'pics/logo-light.png';
    }

    // Step 2: Toggle on button click
    toggleButton.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-theme');
      toggleButton.textContent = isDark ? '☀️' : '🌙';
      if (themeImage) themeImage.src = isDark ? 'pics/logo-dark.png' : 'pics/logo-light.png';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Step 3 (optional): React to system changes only if user hasn't overridden
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
      if (!localStorage.getItem('theme')) {
        document.body.classList.toggle("dark-theme", e.matches);
        toggleButton.textContent = e.matches ? '☀️' : '🌙';
        if (themeImage) themeImage.src = e.matches ? 'pics/logo-dark.png' : 'pics/logo-light.png';
      }
    });

