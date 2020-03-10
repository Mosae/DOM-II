// Your code goes here
//Mouse over
const busImg = document.querySelector('img');
const links = document.querySelector('nav')
console.log(links)

busImg.addEventListener('mouseover', () => {
    busImg.style.transform = "rotate(" + 90 + "deg)";
    busImg.style.border = "7px dotted yellow";
});

busImg.addEventListener('dblclick', () => {
    busImg.style.transform = "rotate(" + 80 + "deg)";
    busImg.style.border = "7px dotted yellow";
});