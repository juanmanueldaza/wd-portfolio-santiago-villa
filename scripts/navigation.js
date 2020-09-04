const home_button = document.getElementById('home-button');
const bio_button = document.getElementById('bio-button');
const music_button = document.getElementById('music-button');
const portfolio_button = document.getElementById('portfolio-button');
const educational_button = document.getElementById('educational-button');
const contact_button = document.getElementById('contact-button');

const home = document.getElementById('home');
const bio = document.getElementById('bio');
const music = document.getElementById('music');
const portfolio = document.getElementById('portfolio');
const educational = document.getElementById('educational');
const contact = document.getElementById('contact');
const show = "flex";
const hide = "none";

home_button.onclick = () => {
    home.style.display = show;
    bio.style.display = hide;
    music.style.display = hide;
    portfolio.style.display = hide;
    educational.style.display = hide;
    contact.style.display = hide;
}
bio_button.onclick = () => {
    home.style.display = hide;
    bio.style.display = show;
    music.style.display = hide;
    portfolio.style.display = hide;
    educational.style.display = hide;
    contact.style.display = hide;
}
music_button.onclick = () => {
    home.style.display = hide;
    bio.style.display = hide;
    music.style.display = show;
    portfolio.style.display = hide;
    educational.style.display = hide;
    contact.style.display = hide;
}
portfolio_button.onclick = () => {
    home.style.display = hide;
    bio.style.display = hide;
    music.style.display = hide;
    portfolio.style.display = show;
    educational.style.display = hide;
    contact.style.display = hide;
}
educational_button.onclick = () => {
    home.style.display = hide;
    bio.style.display = hide;
    music.style.display = hide;
    portfolio.style.display = hide;
    educational.style.display = show;
    contact.style.display = hide;
}
contact_button.onclick = () => {
    home.style.display = hide;
    bio.style.display = hide;
    music.style.display = hide;
    portfolio.style.display = hide;
    educational.style.display = hide;
    contact.style.display = show;
}
