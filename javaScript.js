const panel = document.querySelector('.panel');
const resetBtn = document.querySelector('.resetBtn');
const randomBtn = document.querySelector('.randomBtn');
const gamasBtn = document.querySelector('.gamasBtn');
let tamano = 256;


/* Grid inicial */

function creaCeldas(tamano) {
    for(var i = 0; i < tamano; i++) {
        const div = document.createElement('div');
        div.classList.add('celdas');
        panel.appendChild(div);
    }
}

creaCeldas(tamano);

let celdas = document.querySelectorAll('.celdas');
celdas.forEach(celda => celda.addEventListener('mouseover', pintar));

function pintar(e) {
    e.target.style.backgroundColor = 'red';
}



/* Botón Reset */

function clearGrid() {
    while(panel.firstChild) {
        panel.removeChild(panel.firstChild)
    }

    let tamano = Number(prompt("Nuevo panel: Ingresa cantidad de cuadros por lado"));
    panel.style.gridTemplateRows = "repeat(" + tamano + ", 1fr)";
    panel.style.gridTemplateColumns = "repeat(" + tamano + ", 1fr)";

    creaCeldas(tamano ** 2);
    let celdas = document.querySelectorAll('.celdas');
    celdas.forEach(celda => celda.addEventListener('mouseover', pintar));
}

resetBtn.addEventListener('click', clearGrid);



/* Botón Random */ 

function randomColors() {
    let celdas = document.querySelectorAll('.celdas');
    celdas.forEach(celda => celda.style.backgroundColor = '');
    celdas.forEach(celda => celda.addEventListener('mouseover', pintarRandom));
}

function pintarRandom(e) {
    var color = "rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";
    e.target.style.backgroundColor = color;
}

function randomNumber() {
    return Math.floor(Math.random() * 255);
} 

randomBtn.addEventListener('click', randomColors);



/* Botón Gamas */ 

function gamaColors() {
    let celdas = document.querySelectorAll('.celdas');
    celdas.forEach(celda => celda.style.backgroundColor = '');
    celdas.forEach((celda) => {
        celda.addEventListener('mouseover', pintarGama);
        celda.setAttribute('data-alpha', 0.1);
    });
}

function pintarGama(e) {    
    var celda = e.target;
    var alpha = Number(celda.dataset.alpha);
    if(alpha <= 1) {
        celda.style.backgroundColor = 'rgb(0, 0, 0, ' + alpha + ')';
        celda.setAttribute('data-alpha', alpha + .1);
    } else {
        celda.style.backgroundColor = 'rgb(0, 0, 0, 1)';
    }
}

gamasBtn.addEventListener('click', gamaColors);
