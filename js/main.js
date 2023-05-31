
// funcion para ir a la url del juego
const haciaPartida = () => {
  window.location.href = "./modtablero.html";
}

// funcion color picker
let myColorArray = [];

const colorpicker = (x, y) => {

  let colorInput = document.getElementById(x);
  let colorBola = document.getElementById(y);

  // colorInput.addEventListener("change", () => {
  colorInput.addEventListener("change", () => {

    // let selectColor = colorPicker.value;
    colorBola.style.backgroundColor = colorInput.value

    // myColorArray.push(colorInput.value);
    console.log("colores seleccionados por el usuario", colorInput.value);
    myColorArray.push(colorInput.value);
    console.log(myColorArray);
    let savedColors = JSON.stringify(myColorArray);
    sessionStorage.setItem("losColoresElegidos", savedColors);
  });
  console.log("colores seleccionados por el usuario", colorInput.value);
  console.log(myColorArray);

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




