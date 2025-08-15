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
document.getElementById('seeMoreBtn').addEventListener('click', function() {
    const text = document.getElementById('aboutUsText');
    text.classList.toggle('expanded');
    this.textContent = text.classList.contains('expanded') ? 'See Less' : 'See More';
});

document.getElementById('seeMoreBtn').addEventListener('click', function() {
    const aboutText = document.getElementById('aboutText');
    aboutText.classList.toggle('expanded');
    
    if (aboutText.classList.contains('expanded')) {
        this.textContent = 'See Less ↑';
    } else {
        this.textContent = 'See More →';
    }
});