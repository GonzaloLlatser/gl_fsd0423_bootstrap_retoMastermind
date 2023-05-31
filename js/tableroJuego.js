

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

//FUNCION PARA SECUENCIA ALEATORIA DE 4 COLORES


//defino los colores y parametros


///////////genero la funcion

const generarSecuenciaAleatoria = (array) => {
    let secuencia= [];   
    //generar 4 colores aleatorios
    for (let i = 0; i < 4; i++) {
        let indiceAleatorio = Math.floor(Math.random() * array.length);
        let coloresAleatorio= array[indiceAleatorio];
        secuencia.push(coloresAleatorio);
    }
    return secuencia;       
}
// ha acabado la funcion
// invoco a la funcion, con un argumento que entra por el parentesis de la declaracion
generarSecuenciaAleatoria(arraydeColores);

// declaro variable

////////////////////////////////////////////////////////////////////


//funcion para que se meustren los colores random en fromato rgb 
// declaro variables que necesito para esta funcion
let arrayBolasSecretas = document.getElementsByClassName("coloresRandomX"); //HTML COLLECTION
// AQUI TENGO MIS ARRAYS:
let arrayBolasX= Array.from(arrayBolasSecretas);
let arrayrandom = generarSecuenciaAleatoria(arraydeColores);
// creo mi funcion
const pintarTableroSecreto = () => {
    //  un bucle en el que el numero de vuelta del contador, se corresponde con el indice de AMBOS arrays 
for (let i = 0; i < 4; i++) {
    // cuando el contador= 0, el indice del array de colores es = 0 y el indice de el elemento por pintar es = 0
    // asi el primer array pintara al segundo
    arrayBolasX[i].style.backgroundColor = arrayrandom[i];  
}
}
pintarTableroSecreto();

//funcion para obtener desde la anterior funcion los colores en rgb





////// funcion para de acuerdo al nivel, se generen las filas del tablero

arraydeColores. length

if (arraydeColores.length === 4) {
    createRows(10);
  
} else if (arraydeColores.length === 5) {
    createRows (8);
    
} else {
    createRows (6);
}

/////////////////////////////////////////////////

