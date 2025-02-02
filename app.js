// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let numeroAleatorio = 0;

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

function sortearAmigo(){
    //validar que haya al menos 2 amigos
    if(amigos.length <2){
        alert("Se necesitan al menos 2 amigos para sortear");
    } else 
        numeroAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(numeroAleatorio);
        //obtener el nombre del amigo sorteado
        let amigoSorteado = document.getElementById("resultado");
        //asignar el nombre del amigo sorteado
        amigoSorteado.innerHTML = amigos[numeroAleatorio];
        
}





