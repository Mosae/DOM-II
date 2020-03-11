// Your code goes here
//Mouse over
const busImg = document.querySelector('img');
const links = document.querySelector('nav');
const letsGo = document.querySelector('.intro');
const bodycolor = document.querySelector('body')


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
})