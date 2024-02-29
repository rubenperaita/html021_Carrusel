// Crear la variable global que controle la posicion
let posicion = 0;

function fMoverI(){
    // Mover la tira hacia la izquierda 1 posicion
    // posicion = posicion - 1;
    // posicion--;
    // --posicion;
    posicion -= 1;
    if (posicion < 0){
        posicion = 0;
    }
    // PINTAR
    // DONDE = QUE
    document.querySelector("#tira").style.left =
        ( -posicion * 240 ) + "px";
}
function fMoverD(){
    // Mover la tira hacia la derecha 1 posicion
    posicion += 1;
    if (posicion > 4){
        posicion = 0;
    }
    // PINTAR
    document.querySelector("#tira").style.left =
        ( -posicion * 240 ) + "px";
}