const home_button = document.getElementById('home-button');
const bio_button = document.getElementById('bio-button');
const music_button = document.getElementById('music-button');
const portfolio_button = document.getElementById('portfolio-button');
const contact_button = document.getElementById('contact-button');

const home = document.getElementById('home');
const bio = document.getElementById('bio');
const music = document.getElementById('music');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');

const bio_push = document.getElementById('bio-push');
const portfolio_push = document.getElementById('portfolio-push');
const music_push = document.getElementById('music-push');
const contact_push = document.getElementById('contact-push');

const show = "flex";
const hide = "none";
const pushed = "#ff7ebf";
const notpushed = "#faebd7";

const over = "#eba850";

home_button.onclick = () => {
    home.style.display = show;
    bio.style.display = hide;
    music.style.display = hide;
    portfolio.style.display = hide;
    contact.style.display = hide;

    contact_push.style.color = notpushed;
    portfolio_push.style.color = notpushed;
    music_push.style.color = notpushed;
    bio_push.style.color = notpushed;
}

bio_button.onclick = () => {
    home.style.display = hide;
    bio.style.display = show;
    music.style.display = hide;
    portfolio.style.display = hide;
    contact.style.display = hide;
    if (nav.style.flexDirection == 'column') {
        nav.style.display = hide;
    }
    hamburger.style.display = show;
    cross.style.display = hide;
    bio_button.style.color = pushed;
    bio_push.style.color = pushed;
    portfolio_push.style.color = notpushed;
    music_push.style.color = notpushed;
    contact_push.style.color = notpushed;
}

if (bio_push.style.color != pushed) { 
    bio_button.onmouseover = () => {
        bio_push.style.color = over;
    }
    bio_button.onmouseout = () => {
        bio_push.style.color = notpushed;
    }  
} else if (bio_push.style.color == pushed) {
    bio_button.onmouseover = () => {
        bio_push.style.color = pushed;
    };
    bio_button.onmouseout = () => {
        bio_push.style.color = pushed;
    }  
}

    

music_button.onclick = () => {
    home.style.display = hide;
    bio.style.display = hide;
    music.style.display = show;
    portfolio.style.display = hide;
    contact.style.display = hide;
    if (nav.style.flexDirection == 'column') {
        nav.style.display = hide;
    }
    hamburger.style.display = show;
    cross.style.display = hide;

    music_push.style.color = pushed;
    portfolio_push.style.color = notpushed;
    bio_push.style.color = notpushed;
    contact_push.style.color = notpushed;

    
}
portfolio_button.onclick = () => {
    home.style.display = hide;
    bio.style.display = hide;
    music.style.display = hide;
    portfolio.style.display = show;
    contact.style.display = hide;
    if (nav.style.flexDirection == 'column') {
        nav.style.display = hide;
    }
    hamburger.style.display = show;
    cross.style.display = hide;
    
    portfolio_push.style.color = pushed;
    music_push.style.color = notpushed;
    bio_push.style.color = notpushed;
    contact_push.style.color = notpushed;
}
contact_button.onclick = () => {
    home.style.display = hide;
    bio.style.display = hide;
    music.style.display = hide;
    portfolio.style.display = hide;
    contact.style.display = show;
    if (nav.style.flexDirection == 'column') {
        nav.style.display = hide;
    }
    hamburger.style.display = show;
    cross.style.display = hide;

    contact_push.style.color = pushed;
    portfolio_push.style.color = notpushed;
    music_push.style.color = notpushed;
    bio_push.style.color = notpushed;
}




portfolio_button.onmouseover = () => {
   portfolio_push.style.color = over;
}

music_button.onmouseover = () => {
    music_push.style.color = over;
}

contact_button.onmouseover = () => {
    contact_push.style.color = over;
}


portfolio_button.onmouseout = () => {
    portfolio_push.style.color = notpushed;
}

music_button.onmouseout = () => {
    music_push.style.color = notpushed;
}

contact_button.onmouseout = () => {
    contact_push.style.color = notpushed;
}
