const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerContent = document.getElementById('hamburger-content');
const norseBanner = document.getElementById('norse-banner');
const greekBanner = document.getElementById('greek-banner');
const egyptianBanner = document.getElementById('egyptian-banner');

hamburgerButton.addEventListener('click', showMenu);

function showMenu() {
    if (hamburgerContent.style.display == 'none' || hamburgerContent.style.display == '') {
        hamburgerContent.style.display = 'flex';
    } else {
        hamburgerContent.style.display = 'none';
    }
    
}

if (norseBanner) {
    norseBanner.style.backgroundImage = "url('img/norse-gods.png')";
}

if (greekBanner) {
    greekBanner.style.backgroundImage = "url('img/greekgods.jpeg')";
}

if (egyptianBanner) {
    egyptianBanner.style.backgroundImage = "url('img/egyptian-gods.webp')";
}