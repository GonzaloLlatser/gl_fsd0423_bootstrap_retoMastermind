//----------------------------------------------------------------------------------------//

//DECLARO TAMAÑO DEL ARRAY (6) Y FORMATO DE RESPUESTA. 

let coloresSel = 6;
let savedColors = [];


// FUNCION color picker
let myColorArray = [];
let IDindice = 0;
let checkButton = document.querySelector(".botonpropio");

const colorpicker = (x, y) => {
    let colorInput = document.getElementById(x);
    let colorBola = document.getElementById(y);

    colorInput.addEventListener("change", () => {
        colorBola.style.backgroundColor = colorInput.value;
        myColorArray[IDindice] = colorBola.style.backgroundColor;
        IDindice = IDindice + 1;
    });
}

colorpicker("cp1", "circle1");
colorpicker("cp2", "circle2");
colorpicker("cp3", "circle3");
colorpicker("cp4", "circle4");
colorpicker("cp5", "circle5");
colorpicker("cp6", "circle6");


checkButton.addEventListener("click", () => {
    myColorArray = myColorArray.slice(0, coloresSel); // Obtener los últimos 4 valores seleccionados
    savedColors = myColorArray; // Guardar los últimos valores en savedColors
    sessionStorage.setItem("losColoresElegidos", JSON.stringify(savedColors));
    window.location.href = "./modtablero.html"
});

//----------------------------------------------------------------------------------------//

