

function cadenas(){
	var textos = "Diseño web";
	// var textos = ["Diseño web", "Procesos","DAE","Inteligencia Artificial"];
    var contador = textos.length;

    document.write(contador)
}










function buscar(){
    var nombresArray = ["juan", "pedro", "luis", "julia"];
	var usuario = prompt("Introduce un nombre: ");
	// usuario = usuario.toUpperCase();
	// nombresArray.forEach(function(usuario,2,nombresArrays))
	posicion = nombresArray.indexOf(usuario);

		if(posicion == -1){
		alert("No se ha encontrado el nombre introducido");
		}
		else{
		alert(nombresArrays.indexOf(usuario));
		}
}