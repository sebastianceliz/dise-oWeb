
function mostrar_dia(){
    var numero_dia = document.getElementById("numero_dia").value;
    numero_dia = parseInt(numero_dia);

    switch(numero_dia){
        case 1:
            document.getElementById("resultado_dia").innerHTML = "El dia es: Lunes";
        break;
        case 2:
            document.getElementById("resultado_dia").innerHTML = "El dia es: Martes";

        break;
        case 3:
            document.getElementById("resultado_dia").innerHTML = "El dia es: Miercoles";

        break;
        case 4:
            document.getElementById("resultado_dia").innerHTML = "El dia es: Jueves";
        break;

        case 5:
            document.getElementById("resultado_dia").innerHTML = "El dia es: Viernes";
        break;

        case 6:
            document.getElementById("resultado_dia").innerHTML = "El dia es: Sabado";

        break;
        case 7:
            document.getElementById("resultado_dia").innerHTML = "El dia es: Domingo";

        break;
        default:
            document.getElementById("resultado_dia").innerHTML = "No existe este dia";
    }
}