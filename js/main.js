
const dificultadSeleccionada = sessionStorage.getItem("Dificultad elegida")
let coloresSel = 4;
let savedColors = ["undefined", "undefined", "undefined", "undefined"];





// FUNCION para ir a la url del juego
const haciaPartida = (savedColors) => {
  sessionStorage.setItem("losColoresElegidos", savedColors);
  window.location.href = "./modtablero.html";
}

// 
// // FUNCION color picker
// let myColorArray = []

// const colorpicker = (x, y) => {

//   let colorInput = document.getElementById(x);
//   let colorBola = document.getElementById(y);

//   // colorInput.addEventListener("change", () => {
//   colorInput.addEventListener("change", () => {

//     // let selectColor = colorPicker.value;
//     colorBola.style.backgroundColor = colorInput.value
//   });
//     // myColorArray.push(colorInput.value);
//     myColorArray.push(colorBola.style.backgroundColor);
//     savedColors = JSON.stringify(myColorArray);

// }

// colorpicker("cp1", "circle1");
// colorpicker("cp2", "circle2");
// colorpicker("cp3", "circle3");
// colorpicker("cp4", "circle4");
// colorpicker("cp5", "circle5");
// colorpicker("cp6", "circle6");





