function guardarDato(){
    var nombre = document.getElementById('nombre').value;
    var movil = document.getElementById('movil').value;
    localStorage.setItem(nombre, movil);
    document.getElementById('nombre').value = "";
    document.getElementById('movil').value = "";
    actualizarDatos();
}

function recuperarDato(){
     // Capturando el nombre
     var nombre = document.getElementById("nombre").value;
    localStorage.getItem(nombre);
     document.getElementById("movil").value = localStorage.getItem(nombre);
 }

function eliminarDato(){
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos() {
    var registro = "";
    // Verificando si existen datos
    if (localStorage.length === 0) {
        registro += '<li>Vacío</li>';
    } else {
        // Enriqueciendo "elementos" con cada par de valores almacenados
        for (var i = 0; i <= localStorage.length - 1; i++) {
            var key = localStorage.key(i);
            // Enriqueciendo los datos con HTML
            registro += '<li>' + '<span class="nom">' + key + '</span>'
            + '<span class="nom">' + localStorage.getItem(key) + '</span>' + '</li><br>';
        }
    }
    // Actualizando "#contactos" con los "elementos" previamente enriquecidos
    document.getElementById('contactos').innerHTML = registro;
}