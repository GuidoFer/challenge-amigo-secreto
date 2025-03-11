// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Creamos una funcion para agregar amigos a la lista
function agregarAmigo(){
    const entrada = document.getElementById("amigo"); //Obtiene el campo de entrada conectando con el html id=amigo
    const listaAmigos = document.getElementById("listaAmigos"); // obtiene la lista <ul>
    const nombre = entrada.value.trim(); //creamos una variable nombre y eliminamos sus espacios adelante y atras
    

    if(nombre!==""){
        amigos.push(nombre); //agregamos un nombre al array amigos

        const li = document.createElement("li"); //Creamos un elemento li 
        li.textContent = nombre; //asignamos un "nombre ingresado" a li
        listaAmigos.appendChild(li); //agrega el <li> a la lista <ul>

        entrada.value = ""; // limpia el campo de entrada
        entrada.focus();
    }
    else{
        alert("Por favor ingresa un nombre")
    }
}
//Creamos la funcion sortear amigo 
function sortearAmigo(){
    if(amigos.length < 2){
        alert("Agrega al menos 2 amigos para hacer el sorteo.");
        return; //detiene la funcion si no se cumple la condicion
    }
    
    const amigoSorteado = document.getElementById("resultado");//apuntamos al id = resultado en el html
     
    let numeroRandom = Math.floor(Math.random()*amigos.length) ; //generamos numero random
    
    let resultado = amigos[numeroRandom]; //almacenamos la posicion random del array amigos en un a variable llamada resultado

    amigoSorteado.innerHTML = `El amigo secreto sorteado es: ${resultado}`;//mostramos el mensaje con el amigo secreto

    document.getElementById("listaAmigos").innerHTML = ""; //elimina la lista de nombres de la pantalla
        
    amigos = []; //limpia el array para que se reinicie
    
}






