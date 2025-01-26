//Declaración de variables
let letamigo = document.getElementById("amigo"); 
let listaAmigos = document.getElementById("listaAmigos"); 
let Listaresultado = document.getElementById("resultado"); 

let amigos = [];

function agregarAmigo() {
    
    if(letamigo==""){
        
    alert("Por favor, inserte un nombre");

    }
    else
    {
  // Función agregar Amigo
  const amigo = letamigo.value;
  if (amigo && !amigos.includes(amigo.toUpperCase())) {
    amigos.push(amigo.toUpperCase());
    listaAmigos.textContent = amigos.join(", ");
    letamigo.value = "";
  }
    }

}
function sortearAmigo() {
    Listaresultado.innerHTML = "";

    ArrayListaAmigos(amigos);
  for (i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
        Listaresultado.innerHTML += `${amigos[i]} --> ${amigos[0]}<br>`;
    } else {
        Listaresultado.innerHTML += `${amigos[i]} --> ${amigos[i + 1]}<br>`;
    }
  }
}


function ArrayListaAmigos(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function reiniciar() {
  amigos.length = 0;
  Listaresultado.innerHTML = "";
  letamigo.value = "";
  listaAmigos.textContent = "";
}