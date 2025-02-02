// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //capturar el valor de entrada
    let nombre = document.getElementById("amigo").value;
    //se valida que el campo no esté vacío
    if(nombre.trim() === ""){
        alert("Por favor, inserte un nombre.");
        console.log(nombre);
        
    } else {
        //se agrega el nombre al array amigos
        amigos.push(nombre);
        //Se limpia la caja de texto por una cadena vacía
        document.getElementById("amigo").value = "";
        console.log(amigos);

    }
}

function actualizarListaAmigos(){
    //Obtener el elemento listaAmigos
    let lista = document.getElementById("listaAmigos");
    //se limpia la lista de amigos
    lista.innerHTML = '';
    //itera sobre el arreglo
    for (let i; i < amigos.length; i++){
        //agregar un elemento a la lista
        let li = document.createElement("li");
        //Asignar el texto al elemento de la lista
        li.textContent = amigos[i];
        //agregar el elemento a la lista
        lista.appendChild(li);
    }

}




