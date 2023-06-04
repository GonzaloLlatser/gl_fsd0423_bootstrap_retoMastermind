
const dificultadSeleccionada = sessionStorage.getItem("Dificultad elegida")
let coloresSel = 4;
let savedColors = ["undefined", "undefined", "undefined", "undefined"];





// FUNCION para ir a la url del juego
const haciaPartida = (savedColors) => {
  sessionStorage.setItem("losColoresElegidos", savedColors);
  window.location.href = "./modtablero.html";
}





