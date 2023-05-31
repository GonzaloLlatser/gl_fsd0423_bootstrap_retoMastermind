// //almacenar colores elegidos por el jugador, guardarlos como un array.


// //FUNCION QUE ALMACENE EL COLOR DEL PICKET EN SESSION STORAGE

// const haciaPartida = ()  => {
//     // Lógica de la función haciaPartida, cuando quiero convertir a funcion flecha no me deja.

//     const squares = document.getElementsByClassName ("square-cp");

//     const seleccionColores = [];

//     Array.from(squares).forEach(colorBola => {
//         const color = colorBola.style.background;

//         seleccionColores.push(color);
        
//     });
  
//     sessionStorage.setItem("seleccionColores", JSON.stringify(seleccionColores));
  
//     console.log(JSON.parse(sessionStorage.getItem("seleccionColores")));
// };

// window.addEventListener("DOMContentLoaded", () => {
//     const botonPlay = document.querySelector(".btn-cp");

//     if (botonPlay) {
//         botonPlay.addEventListener("click", haciaPartida);
//     }
// });


// let coloresGuardados = JSON.parse(sessionStorage.getItem("seleccionColores"));

//     document.addEventListener("DOMContentLoaded", () => {
//     const circles = document.querySelectorAll(".userColors");
//         // console.log(coloresGuardados);
//     if (sessionStorage.getItem("seleccionColores")) {
//         coloresGuardados = JSON.parse(sessionStorage.getItem("seleccionColores"));
        
//         circles.forEach((circle, index) => {
//         circle.style.backgroundColor = coloresGuardados[index] || "transparent";
//         });
//     }

// });


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