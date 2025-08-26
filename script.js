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
//theme button
const toggleButton = document.getElementById('theme-toggle');
const themeImage = document.getElementById('theme-image'); // optional

toggleButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');

    // Swap icon and image
    toggleButton.textContent = isDark ? '☀️' : '🌙';
    if (themeImage) themeImage.src = isDark ? 'pics/logo-dark.png' : 'pics/logo-light.png';
});

