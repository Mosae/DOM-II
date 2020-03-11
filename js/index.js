// Your code goes here
//Mouse over
const busImg = document.querySelector('img');
const links = document.querySelector('nav');
const letsGo = document.querySelector('.intro');
const bodycolor = document.querySelector('body');
const button1 = document.querySelector('.btn');
const dest = document.querySelector('.destination');
const footer = document.querySelector('.footer');
const html = document.querySelector('html');


busImg.addEventListener('mouseover', () => {
    busImg.style.transform = "rotate(" + 90 + "deg)";
    busImg.style.border = "7px dotted yellow";
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