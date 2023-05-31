

// //TABLERO INTENTO

const tableroContenedor = document.getElementById("tableropadre");
console.log("hola estoy aca");

const createRows = (nivelValor) => {

    for (let i = 0; i < nivelValor; i++) {

        let row = document.createElement("div");
        row.classList.add("classRow");

        console.log("hola estoy aca");
        tableroContenedor.appendChild(row);

        for (let i = 0; i < 4; i++) {

            let colors = document.createElement("div");
            colors.classList.add("classColors");

            console.log("hola estoy aca");
            row.appendChild(colors);
        }
    }
};
createRows(10);


/////////////////////////////////////////////////////////////////

//pintar colores elegidos por el jugador


let bolasPorPintar = document.getElementsByClassName("coloresseleccionados");
let arrayBolasPintar = Array.from (bolasPorPintar);
let arraydeColores = JSON.parse(sessionStorage.getItem ("losColoresElegidos"));

console.log(arraydeColores);

const pintarColSelec = () => {

    for (let i = 0; i < 6; i++) {
        // arrayBolasPintar[i];
        // arraydeColores[i];
        
        arrayBolasPintar[i].style.backgroundColor = arraydeColores[i]
    }

}

pintarColSelec();