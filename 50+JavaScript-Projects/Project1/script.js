const body = document.querySelector('.body');
const hexColorCode = document.querySelector('.hexColorCode');
const rgbColorCode = document.querySelector('.rgbColorCode');
const button = document.querySelector('.btn');

button.addEventListener('click', function(){
    body.style.backgroundColor = getRandomColor();
});

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*6)];
        console.log(color);
    }
    hexColorCode.innerHTML = (`Background Color: <span>${color}</span>`);

    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    rgbColorCode.innerHTML = (`Button Color: <span>${rgb}</span>`);

    button.style.backgroundColor = rgb;

    return color;
}