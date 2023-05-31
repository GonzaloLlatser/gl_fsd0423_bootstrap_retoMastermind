

// //TABLERO INTENTO

const tableroContenedor = document.getElementById("tableropadre");
console.log ("hola estoy aca");

const createRows = (nivelValor) => {

    for (let i = 0; i < nivelValor; i++) {

        let row = document.createElement("div");
        row.classList.add("classRow");
      
        console.log ("hola estoy aca");
        tableroContenedor.appendChild(row);  
        
        for (let i = 0; i < nivelValor; i++) {

            let row = document.createElement("div");
            row.classList.add("classRow");
          
            console.log ("hola estoy aca");
            tableroContenedor.appendChild(row);  
        }



    }
};
createRows (10);


