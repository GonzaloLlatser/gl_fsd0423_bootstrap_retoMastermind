

// Pagina de seleecion de nivel- hacia pagina de seleccion de colores dependiendo la seleccion previa.


//FUNCION QUE DE ACUERDO AL NIVEL DIRIGE A LA PAGINA DE SELECCION DE COLOR ACORDE

const haciaColores = (id) => {

   
    if (id === "principiante"){
        window.location.href = "../pages/selcolorniv1.html";
    }
    else if (id === "intermedio"){
        window.location.href = "../pages/selcolorniv2.html";
    }
    else{
        window.location.href = "../pages/selcolorniv3.html";
    }
}

//-------------------------------------------------------

//FUNCION PARA SELECCIONAR COLOR Y ASIGNAR

//COLORPICKER

// existen dos parametros (inputId y CircleId), 
// recogen el valor del ID color. 
//Se declaran entonces las variables (colorInput y circle) Estos parámetros se utilizan para identificar los elementos HTML en los que se va a trabajar.Estos parámetros se utilizan para identificar los elementos HTML en los que se va a trabajar..

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