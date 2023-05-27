

//--------------------- FUNCIONA CORRECTAMENTE ------------------------------------------------//

// FUNCION COLOR PICKER 



//ELECCION DE COLOR EN PAGINA COLORRES

//paso argumentos que seran ID.
let myColorArray = [];

const colorpicker = (x, y) => {

  let colorPicker = document.getElementById(x);
  let colorBola = document.getElementById(y);

  colorPicker.addEventListener("change", () => {
    //utilizo un elemento intermedio para almacenar el color, llamado selectColor. Almacena el color seleccionado por el usuario en la variable selectColor a partir del valor del elemento colorPicker.
    // Establece el color de fondo del elemento colorBola (asociado a y) utilizando selectColor.
    // Agrega el color seleccionado (colorPicker.value) al array myColorArray.
    // Imprime myColorArray en la consola.

    let selectColor = colorPicker.value;
    colorBola.style.backgroundColor = selectColor

    myColorArray.push(colorPicker.value);
    console.log(myColorArray);
  });
}

// hacer esta misma funcion para cada elemento en cada pagina de sel. de colores
colorpicker("cp1", "circle1");
colorpicker("cp2", "circle2");
colorpicker("cp3", "circle3");
colorpicker("cp4", "circle4");
colorpicker("cp5", "circle5");
colorpicker("cp6", "circle6");
//reconoce cada color de los elegidos.
//(x, y)

//--------------------- FUNCIONA CORRECTAMENTE ------------------------------------------------//

//FUNCION QUE ALMACENE EL COLOR DEL PICKET EN SESSION STORAGE

function haciaPartida() {
  // Lógica de la función haciaPartida, cuando quiero convertir a funcion flecha no me deja.
  console.log("HASTA ACA FUNCIONA");

  sessionStorage.setItem("losColoresElegidos", JSON.stringify(myColorArray));

  console.log(coloSelectUsu)
}
//--------------------- FUNCIONA CORRECTAMENTE ------------------------------------------------//

// FUNCION PARA ALMACENAR COLORES O DATOS 



//uso json para convertir el array en una cadena de texto y almacenando con 
//la clave de coloresElegidos.

let coloresElegidosPorElJugador = ['azul', 'rojo', 'verde', 'amarillo', "1", "$"];

console.log(coloresElegidosPorElJugador);
console.log(typeof coloresElegidosPorElJugador);

//convertir el array en una cadena de texto, para poder almacenarla.

let arrayComoCadena = JSON.stringify(coloresElegidosPorElJugador);

console.log(arrayComoCadena);
console.log(typeof arrayComoCadena);

//guardar la cadena de texto en session storage

sessionStorage.setItem('coloresElegidosPorElJugador', arrayComoCadena);


//2) funcion para recuperar los colores almacenados
let coloresRecuperados = JSON.parse(sessionStorage.getItem('coloresAlmacenados'));
console.log(typeof coloresRecuperados);


//--------------------- FUNCIONA CORRECTAMENTE ------------------------------------------------//


//FUNCION PARA SECUENCIA ALEATORIA DE 4 COLORES


//defino los colores y parametros
let coloresElegidos = ["azul", "rojo", "verde", "amarillo"];

//genero la funcion
const generarSecuenciaAleatoria = (coloresElegidos) => {
    let secuencia= [];
    
//generar 4 colores aleatorios
    for (let i = 0; i < 4; i++) {

        let indiceAleatorio = Math.floor(Math.random() * coloresElegidos.length);
        let coloresAleatorio= coloresElegidos[indiceAleatorio];
        secuencia.push(coloresAleatorio);
        
    }
    return secuencia;       
}

//llama a la funcion
let secuenciaAleato = generarSecuenciaAleatoria(coloresElegidos);
console.log(secuenciaAleato);

//--------------------- FUNCIONA CORRECTAMENTE ------------------------------------------------//

//FUNCION PARA COMPROBAR SI DOS ARRAYS SON IGUALES. APLICADO A LA COMBINACION DE
//COLORES AL MOMENTO DE VER SI ES GANADOR O NO.

let arrayOne = ['blue', 'white', 'yellow', 'green'];
let arrayTwo = ['blue', 'white', 'yellow', 'black'];


const compararColores = (arrayOne, arrayTwo) => {

    for (let i = 0; i < arrayOne.length; i++) {
        

        if (arrayOne[i] !== arrayTwo[i]) {
            return false + (", los arrays no son iguales");
            

        }
    } 
    return true +(", los arrays si son iguales");

}
console.log (compararColores(arrayOne, arrayTwo));

//--------------------- FUNCIONA CORRECTAMENTE ------------------------------------------------//



//FUNCION DE COMBINACION GANADORAS FICHAS BLANCAS Y NEGRAS


//cuando un elemento esta en la misma posicion (azul- azul) enera ficha negra, 
//si hay 4 fichas negras, se gana la partida y se redirecciona a la pagina.
let combinacionJugada = ['naranja', 'rosa', 'verde', 'azul'];
let arrayGanador = ['rosa', 'verde', 'rosa', 'azul'];
let blancas = 0;
let negras = 0;

console.log(combinacionJugada, " soy la que juega");



for (let i = 0; i < combinacionJugada.length; i++) {

    if (arrayGanador[i] === combinacionJugada[i]) {
        //esto es para obtener fichas negras (mismo color en la misma posicion).
        negras += 1;

        console.log("he ganado ....", negras, " fichas negras");
        console.log(arrayGanador, " soy la que Gana....");

        if (negras === 4) {
            //partida ganaday redirecc a la otra pagina.
            window.location.href = "#"
            console.log("GANASTE")
        }

    } else if (arrayGanador.includes(combinacionJugada[i])) {
        // Esto es para obtener fichas blancas( el coloresta en ambas, pero en distintas posiciones)
        blancas += 1;
        console.log("he ganado ...", blancas, " fichas blancas");
    }
}
//--------------------- FUNCIONA CORRECTAMENTE ------------------------------------------------//
