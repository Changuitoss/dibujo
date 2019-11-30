const panel = document.querySelector('.panel');
const container = document.querySelector('.container');
const resetBtn = document.querySelector('.resetBtn');
const randomBtn = document.querySelector('.randomBtn');
let tamano = 256;

function creaCeldas(tamano) {
    for(var i = 0; i < tamano; i++) {
        const div = document.createElement('div');
        div.classList.add('celdas');
        panel.appendChild(div);
    }
}

creaCeldas(tamano);


let div = document.querySelectorAll('.celdas');

function pintar(e) {
    e.target.style.backgroundColor = 'red';
}

div.forEach(cuadrado => cuadrado.addEventListener('mouseover', pintar));



function clearGrid() {
    while(panel.firstChild) {
        panel.removeChild(panel.firstChild)
    }

    let tamano = Number(prompt("Nuevo panel: Ingresa cantidad de cuadros por lado"));
    panel.style.gridTemplateRows = "repeat(" + tamano + ", 1fr)";
    panel.style.gridTemplateColumns = "repeat(" + tamano + ", 1fr)";

    creaCeldas(tamano ** 2);
    let div = document.querySelectorAll('.celdas');
    div.forEach(cuadrado => cuadrado.addEventListener('mouseover', pintar));
}

/* Botón Random*/

function randomNumber() {
    return Math.floor(Math.random() * 255);
}  

function pintarRandom(e) {
    var color = "rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";
    e.target.style.backgroundColor = color;
}

function randomColors() {
    div.forEach(cuadrado => cuadrado.style.backgroundColor = '');
    div.forEach(cuadrado => cuadrado.addEventListener('mouseover', pintarRandom));
}

resetBtn.addEventListener('click', clearGrid);
randomBtn.addEventListener('click', randomColors);