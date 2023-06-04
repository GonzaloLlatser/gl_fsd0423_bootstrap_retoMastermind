//----------------------------------------------------------------------------------------//

// COGEMOS LOS VALORES DE LA SESSION STORAGE.

let bolasPorPintar = document.getElementsByClassName("coloresseleccionados");
let arrayBolasPintar = Array.from(bolasPorPintar);
let arraydeColores = JSON.parse(sessionStorage.getItem("losColoresElegidos"));
let arrayCirculoPequeno;
let todosCirculosPequenos;

console.log(arraydeColores);
console.log(arraydeColores);

const pintarColSelec = () => {

    for (let i = 0; i < 6; i++) {

        arrayBolasPintar[i].style.backgroundColor = arraydeColores[i]
    }
}

pintarColSelec();

//----------------------------------------------------------------------------------------//

// FUNCION Tablero de juego dinamico 

const tableroContenedor = document.getElementById("tableropadre");

const createRows = (nivelValor) => {

    for (let i = 0; i < nivelValor; i++) {

        let row = document.createElement("div");
        row.classList.add("classRow");
        row.classList.add("rowBlock");
        row.id = ("classRow" + i)


        tableroContenedor.appendChild(row);

        for (let j = 0; j < 4; j++) {

            let colors = document.createElement("div");
            colors.classList.add("classColors");

            row.appendChild(colors);
        }
        for (let h = 0; h < 4; h++) {
            let checkBalls = document.createElement("div");
            checkBalls.classList.add("checkBalls");

            row.appendChild(checkBalls);
        }
    }
};
//----------------------------------------------------------------------------------------//

//FUNCION secuencia aleatoria de 4 colores

let secuencia = [];

const generarSecuenciaAleatoria = (array) => {

    //generar 4 colores aleatorios
    for (let i = 0; i < 4; i++) {
        let indiceAleatorio = Math.floor(Math.random() * array.length);
        let coloresAleatorio = array[indiceAleatorio];
        secuencia.push(coloresAleatorio);
    }
    return secuencia;
}
// ha acabado la funcion
// invoco a la funcion, con un argumento que entra por el parentesis de la declaracion
// declaro variable
generarSecuenciaAleatoria(arraydeColores);

//----------------------------------------------------------------------------------------//

//FUNCION COLORES SECRETOS EN PANTALLA

// declaro variables que necesito para esta funcion
//HTML COLLECTION

let arrayBolasSecretas = document.getElementsByClassName("coloresRandomX");

// AQUI TENGO MIS ARRAYS:

let arrayBolasX = Array.from(arrayBolasSecretas);
let arrayrandom = generarSecuenciaAleatoria(arraydeColores);
// creo mi funcion
const pintarTableroSecreto = () => {
    //  un bucle en el que el numero de vuelta del contador, se corresponde con el indice de AMBOS arrays. 
    for (let i = 0; i < 4; i++) {
        // cuando el contador= 0, el indice del array de colores es = 0 y el indice de el elemento por pintar es = 0
        // asi el primer array pintara al segundo
        arrayBolasX[i].style.backgroundColor = arrayrandom[i];
    } console.log("")
}
pintarTableroSecreto();
// pruebas

const firstRowColors = document.querySelectorAll(".row:first-child ")

//----------------------------------------------------------------------------------------//

// FUNCION GENERACION DE TABLERO (FILAS POR NIVEL)

arraydeColores.length

if (arraydeColores.length === 4) {
    createRows(10);

} else if (arraydeColores.length === 5) {
    createRows(8);

} else {
    createRows(6);
}

//----------------------------------------------------------------------------------------//

// FUNCION para lograr pintar cada circulo, haciendo click y que no coja unicamente el ultimo valor.


// const SelectorJugador = (filaActiva) => {
//     classColorsElements = filaActiva.querySelectorAll('.classColors');
//     classColorsElements.forEach((element) => {
//         // Inicializamos el contador en 0
//         let contador = 0;

//         element.addEventListener('click', () => {
//             const colorElegido = arraydeColores[contador];
//             element.style.backgroundColor = colorElegido;

//             // Incrementamos el contador
//             contador++;

//             // Si llegamos al final de arraydeColores, volvemos al principio
//             if (contador === arraydeColores.length) {
//                 contador = 0;
//             }
//         });
//     });
// }


const SelectorJugador = (filaActiva) => {
    let classColorsElements = filaActiva.querySelectorAll('.classColors');
    classColorsElements.forEach((element) => {
        // Inicializamos el contador en 0
        let contador = 0;

        element.addEventListener('click', () => {
            const colorElegido = arraydeColores[contador];
            element.style.backgroundColor = colorElegido;
            // Incrementamos el contador
            contador++;
            // Si llegamos al final de arraydeColores, volvemos al principio
            if (contador === arraydeColores.length) {
                contador = 0;
            }
        });
    });
    guardarColores();
}

//----------------------------------------------------------------------------------------//

// FUNCION PARA GUARDAR COLORES ELEGIDOS PARA JUGAR



let coloresElegidosFila = [];

const guardarColores = () => {
    coloresElegidosFila = ["undefined", "undefined", "undefined", "undefined"]
    const classColorsElements = document.querySelectorAll('.classColors');
    classColorsElements.forEach((element, index) => {

        coloresElegidosFila[index] = element.style.backgroundColor
    })

    coloresElegidosFila.length = 4;
    console.log("estos son los colores elegidos para la primera fila ", coloresElegidosFila)
}


//----------------------------------------------------------------------------------------//

// FUNCION DE COMPARAR COLORES CON RESPUESTA GANADORA
let arrayCirculosComparacion
todosCirculosPequenos = document.getElementsByClassName("checkBalls");
arrayCirculoPequeno = Array.from(todosCirculosPequenos);


const comparar = () => {

    arrayCirculosComparacion = coloresElegidosFila.map((element, index) => {

        if (element === secuencia[index]) {
            return "rgb(255, 0, 0)"
        } else if (secuencia.includes(element)) {
            return "rgb(255, 255, 255)"
        } else {
            return "transparent";
        }

    })

    console.log(" hola soy colores circulos pequeños", arrayCirculosComparacion);

    arrayCirculoPequeno.forEach((element, i) => {

        element.style.backgroundColor = arrayCirculosComparacion[i]
    })
}

//----------------------------------------------------------------------------------------//

// FUNCION PINTAR CIRCULOS PEQUEÑOS

//----------------------------------------------------------------------------------------//
// FUNCION GANAR, cuando las checkBals sean todas de un mismo color (rojo) la partida acabo.

const ganar = () => {
    let todosPintados = true;
    for (let i = 0; i < 4; i++) {
        if (arrayCirculoPequeno[i].style.backgroundColor !== "rgb(255, 0, 0)") {
            todosPintados = false;
            break;
        }
    }
    if (todosPintados) {
        alert("¡Has ganado!");
    }
}

//----------------------------------------------------------------------------------------//
let arrayFilas = Array.from(document.querySelectorAll('.classRow')).reverse();
console.log("esto es el array de las filas ", arrayFilas)
let filaContador = 0;
let checkButton = document.getElementById("btnabout")
let filaActiva;

const iteracion = () => {
    coloresElegidosFila = []
    console.log("esto es el array de las filas ", arrayFilas.length)
    filaActiva = document.getElementById(`classRow${filaContador}`);
    filaActiva.classList.add("filaActiva");
    SelectorJugador(filaActiva)
    guardarColores()
}

iteracion();

checkButton.addEventListener('click', () => {
    guardarColores()
    if (!coloresElegidosFila[0] || !coloresElegidosFila[1] || !coloresElegidosFila[2] || !coloresElegidosFila[3]) {
        return;
    } else {
        if (filaContador < arrayFilas.length - 1) {
            console.log("Esto es el contador de filas ", filaContador)
            filaActiva.classList.remove("filaActiva");
            let filaSiguiente = document.getElementById(`classRow${filaContador + 1}`);
            filaSiguiente.classList.add("filaActiva");

            comparar(filaActiva, coloresElegidosFila);
            filaContador++;
            iteracion();
        } else {
            alert("Has perdido");
        }
    }

})

//----------------------------------------------------------------------------------------//


