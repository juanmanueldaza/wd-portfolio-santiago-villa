const home_button = document.getElementById('home-button');
const bio_button = document.getElementById('bio-button');
const music_button = document.getElementById('music-button');
const portfolio_button = document.getElementById('portfolio-button');
const contact_button = document.getElementById('contact-button');

const bio = document.getElementById('bio');
const music = document.getElementById('music');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');
const show = "flex";
const hide = "none";

home_button.onclick = () => {
    bio.style.display = show;
    music.style.display = hide;
    portfolio.style.display = hide;
    contact.style.display = hide; 
}
bio_button.onclick = () => {
    bio.style.display = show;
    music.style.display = hide;
    portfolio.style.display = hide;
    contact.style.display = hide;
    if (nav.style.flexDirection == 'column') {
        nav.style.display = hide;
    }
    hamburger.style.display = show;
    cross.style.display = hide;
}
music_button.onclick = () => {
    bio.style.display = hide;
    music.style.display = show;
    portfolio.style.display = hide;
    contact.style.display = hide;
    if (nav.style.flexDirection == 'column') {
        nav.style.display = hide;
    }
    hamburger.style.display = show;
    cross.style.display = hide;
}
portfolio_button.onclick = () => {
    bio.style.display = hide;
    music.style.display = hide;
    portfolio.style.display = show;
    contact.style.display = hide;
    if (nav.style.flexDirection == 'column') {
        nav.style.display = hide;
    }
    hamburger.style.display = show;
    cross.style.display = hide;
}
contact_button.onclick = () => {
    bio.style.display = hide;
    music.style.display = hide;
    portfolio.style.display = hide;
    contact.style.display = show;
    if (nav.style.flexDirection == 'column') {
        nav.style.display = hide;
    }
    hamburger.style.display = show;
    cross.style.display = hide;
}
