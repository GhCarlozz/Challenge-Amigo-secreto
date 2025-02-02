// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let numeroAleatorio = 0;

function asignarTextoElemento(elemento, texto){
    //Obtener el elemento HTML
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    //capturar el valor de entrada
    let nombre = document.getElementById("amigo").value;
    //se valida que el campo no esté vacío
    if(nombre.trim() === ""){
        alert("Por favor, inserte un nombre.");
        console.log(nombre);
        
    } else if(amigos.includes(nombre)){
        alert("Vaya, parece que este amigo ya fue agregado, ingresa otro nombre.");
        } else {
        //se agrega el nombre al array amigos
        amigos.push(nombre);
        //Se limpia la caja de texto por una cadena vacía
        document.getElementById("amigo").value = "";
        //se actualiza la lista de amigos
        actualizarListaAmigos();
        asignarTextoElemento('h2', `!Amigo "${nombre}" agregado con éxito! Puedes seguir agregando amigos.`);
        console.log(amigos);

    }
}

function actualizarListaAmigos(){
    //Obtener el elemento listaAmigos
    let lista = document.getElementById("listaAmigos");
    //se limpia la lista de amigos
    lista.innerHTML = '';
    //itera sobre el arreglo
    for (let i = 0; i < amigos.length; i++){
        //agregar un elemento a la lista
        let li = document.createElement("li");
        //Asignar el texto al elemento de la lista
        li.textContent = amigos[i];
        //agregar el elemento a la lista
        lista.appendChild(li);
        
    }

}

function sortearAmigo(){
    //validar que haya al menos 2 amigos
    if(amigos.length <2){
        alert("Se necesitan al menos 2 amigos para sortear");
    } else 
        numeroAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(numeroAleatorio);
        //asignar el texto al elemento h2
        asignarTextoElemento('h2', "Y el amigo sorteado es.... ");
        //obtener el nombre del amigo sorteado
        let amigoSorteado = document.getElementById("resultado");
        //asignar el nombre del amigo sorteado
        amigoSorteado.innerHTML = amigos[numeroAleatorio];
}

function nuevoSorteo(){
    //se limpia el array de amigos
    amigos = [];
    //se limpia la lista de amigos
    actualizarListaAmigos();
    //se limpia el resultado
    asignarTextoElemento('h2', "¡Listo para un nuevo sorteo!");
    document.getElementById("resultado").innerHTML = "";
    console.log(amigos);

}





