const panel = document.querySelector('.panel');
const container = document.querySelector('.container');


for(var i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('celdas');
    panel.appendChild(div);
}

const div = document.querySelectorAll('.celdas');

function pintar(e) {
    console.log(e.target);
    e.target.style.backgroundColor = 'red';
}

div.forEach(cuadrado => cuadrado.addEventListener('mouseover', pintar));



const clearBtn = document.createElement('button');
clearBtn.classList.add('clearBtn');
clearBtn.textContent = 'clear';
container.insertBefore(clearBtn, panel);


function clearGrid() {
    console.log('borrando');
    div.forEach(cuadrado => cuadrado.style.backgroundColor = '');
}

clearBtn.addEventListener('click', clearGrid);