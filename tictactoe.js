const container = document.getElementById('container');
const textos = document.getElementById('txts');
const mensaje = document.getElementById('msgWinner');
const btnReiniciar = document.getElementById('btnReiniciar');

let currentPlayer = "X";

const Tablero = (currentPlayer) => {

    const cells = crearTablero();
    
    const marcarCelda = (e) => {
        const cell = e.target;
        if (cell.textContent === "") {
            cell.textContent = currentPlayer;
            comprobarGanador(cells, currentPlayer);
            comprobarFull(cells, currentPlayer);
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        } else {
            alert('La casilla ya está ocupada');
        }
    };
    
    cells.forEach(cell => {
        cell.addEventListener("click", marcarCelda);
    });

    const resetearTablero = () => {
        cells.forEach(cell => {
            cell.textContent = ""
        })
        mensaje.textContent = ""
    }
    
    return {
        cells, resetearTablero
    };
};
const crearTablero = () => {
    const cells = [];
    for (a = 0; a < 3; a++) {
        for (i = 0; i < 3; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            container.appendChild(cell);
            cells.push(cell);
        }
    }
    return cells;
};

const comprobarGanador = (cells, currentPlayer) => {
    const combinacionesGanadoras = [
        [0,1,2], [3,4,5], [6,7,8], //horizontales
        [0,3,6], [1,4,7], [2,5,8], //verticales
        [0,4,8], [2,4,6] //diagonales
    ]
    for (const posibleCombinacion of combinacionesGanadoras){
        const [a, b, c] = posibleCombinacion;
        if(cells[a].textContent && cells[b].textContent === cells[a].textContent && cells[c].textContent == cells[b].textContent){
            mensajeGanador(currentPlayer);
            return true;
        }
    }

}

const mensajeGanador = (currentPlayer) => {
    mensaje.textContent = 'Game over, el ganador es ' + currentPlayer;
}

const comprobarFull = (cells, currentPlayer) =>{
    const combinacionTableroFull = [0,1,2,3,4,5,6,7,8];
    let i = 0;
    while(i < combinacionTableroFull.length){
        if (cells[i].textContent == ""){
            break;
        }else{
            i++;
        }
    }
    if (i == 9){
        if(!comprobarGanador(cells, currentPlayer)){
            mensaje.textContent = "Empate"
        };
    } 

}





const Tablero1 = Tablero(currentPlayer);
btnReiniciar.addEventListener('click', Tablero1.resetearTablero)


// const Tablero = (() => {
//     marcarCell = (e) => {
//         const cell = e.target;
//         if (cell.textContent === "") {
//             cell.textContent = currentPlayer;
//             checkWinner();
//             checkFull();
//             currentPlayer = currentPlayer === "X" ? "O" : "X";
//         }
//         else{
//             alert('La casilla ya esta ocupada')
//         }
//     };
//     reset = () => {
//         tablero.forEach(cell => {
//             cell.textContent = '';
//         });
//     };
//     checkTablero = () => {
//         tablero.forEach(cell => {
//             if(cell){
//                 console.log('ocupado')
//             }else{
//                 console.log('libre')
//             }
//         });
//     }

//     return {
//         marcarCell, reset, checkTablero
//     };
// })();


// tablero.forEach(cell => {
//     cell.addEventListener("click", Tablero.marcarCell);
// });


//     for (const combination of winningCombinations) {
//         const [a, b, c] = combination;
//         if (tablero[a].textContent && tablero[a].textContent === tablero[b].textContent && tablero[a].textContent === tablero[c].textContent) {
//             alert(currentPlayer + 'Ganador');
//             Tablero.reset();
//         }
//     }
    
//     return false; // No hay ganado
// }

// function checkFull(){
//     const fullTablero = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//     Tablero.checkTablero();
    
// }
