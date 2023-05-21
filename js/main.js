

// Pagina de seleecion de nivel- hacia pagina de seleccion de colores dependiendo la seleccion previa.


//funcion de nivel: inicial y 4 colores
const haciaColores4 = ( ) => {
    window.location.href="../pages/selcolorniv1.html";
}


// funcion de nivel: intermedia y 5 colores
const haciaColores5 = () => {
    
    window.location.href="../pages/selcolorniv2.html";
}


// funcion de nivel: avanzado y 6 colores
const haciaColores6 = () => {
    
    window.location.href="../pages/selcolorniv3.html";
}
//-------------------------------------------------------

//FUNCION PARA SELECCIONAR COLOR Y ASIGNAR

//COLORPICKER

// existen dos parametros (inputId y CircleId), 
// recogen el valor del ID color. 
//Se declaran entonces las variables (colorInput y circle).

function colorPicker(inputId, circleId, colorsArray) {
    let colorInput = document.getElementById(inputId);
    let circle = document.getElementById(circleId);

    colorInput.oninput = () => {
        circle.style.backgroundColor = colorInput.value;
        console.log("Color seleccionado:", colorInput.value);

        //Convertir en Array los colores elegidos por el jugador, que luego sirven de comparacion.
        colorsArray.push(colorInput.value);
        console.log("Colores almacenados:", colorsArray);

        //Almacenaje colores del jugador en sessionStorage y convertidos en un string.
        sessionStorage.setItem("almacenColores", JSON.stringify(colorsArray));
        console.log("Colores almacenados en sessionStorage: ", colorsArray);
    };
}

let seleccionColores = [];

//Guardado y converversión del string a array de los colores almacenados en el sessionStorage
// const storageColores = sessionStorage.getItem("almacenColores");
//     if (storageColores) {
//         almacenColores = JSON.parse(storageColores);
//         console.log("Colores convertidos del sessionStorage:", almacenColores);
//     }


    
// String y arrays de los colores hexadecimales
colorPicker("cp1", "circle1", seleccionColores);
colorPicker("cp2", "circle2", seleccionColores);
colorPicker("cp3", "circle3", seleccionColores);
colorPicker("cp4", "circle4", seleccionColores);
colorPicker("cp5", "circle5", seleccionColores);
colorPicker("cp6", "circle6", seleccionColores);

//-------------------------------------------------------