const dropdown = document.getElementById('dropdown');
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const ul = document.getElementById('ul');
const hamburger = document.getElementById('hamburger');
const cross = document.getElementById('cross');
let displayer = "flex";
let direction = "row"
console.log(displayer);
console.log(nav);
dropdown.onclick = () => {
     if (displayer == "none") {
        displayer = "flex";
        hider = "none";
        direction = "column"  
    } else {
        displayer = "none";
        hider = "flex";
        direction = "row";
    }
    nav.style.display = displayer;
    nav.style.flexDirection = direction;
    ul.style.flexDirection = direction;
    header.style.flexDirection = direction;
    hamburger.style.display = hider;
    cross.style.display = displayer;

}