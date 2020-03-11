// Your code goes here
//Mouse over
const busImg = document.querySelector('img');
const links = document.querySelector('.nav');
const letsGo = document.querySelector('.intro');
const bodycolor = document.querySelector('body');
const button1 = document.querySelector('.btn');
const dest = document.querySelector('.destination');
const footer = document.querySelector('.footer p');
const html = document.querySelector('html');
const h4 = document.querySelector('h4');
const logo = document.querySelector('.logo-heading');


busImg.addEventListener('mouseover', () => {
    busImg.style.transform = "rotate(" + 90 + "deg)";
    busImg.style.border = "7px dotted yellow";
});
logo.addEventListener('dblclick', () => {
    logo.style.transform = "rotate(" + 40 + "deg)";
    logo.style.border = "2px dotted blue";
});
links.addEventListener('mouseenter', () => {
    links.style.transform = "scale(1.5)";
    links.style.transition = "all 0.5s";
    links.style.background = "gray"
});

letsGo.addEventListener('mouseenter', () => {
    letsGo.style.transform = "scale(1.2)";
    letsGo.style.transition = "all 0.3s";
});

bodycolor.addEventListener('click', () => {
    bodycolor.style.color = 'red'
});
button1.addEventListener('mousemove', () => {
    button1.style.bodycolor = 'red';
});

dest.addEventListener('mouseout', () => {
    dest.style.border = '5px solid green';
});
footer.addEventListener('dblclick', () => {
    footer.style.background = 'orange';
});
html.addEventListener('scroll', () => {
    html.style.background = 'red';
});
h4.addEventListener('click', () => {
    h4.style.color = 'blue';
});

document.querySelector(".nav-link").addEventListener("click", function (event) {
    event.preventDefault();
});
footer.addEventListener('dblclick', event => console.log(event));

//Propagation

const topElement = document.querySelector('header');
const bottomElement = document.querySelector('.nav-container');

console.log(bottomElement);
// Prevent Default Nav Links Page Refresh
bottomElement.addEventListener('click', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = 'blue';
});