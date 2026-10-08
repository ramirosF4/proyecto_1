/* import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swal from 'sweetalert2';

import Acciones from "./Acciones.js";
import { icon } from '@fortawesome/fontawesome-svg-core';

const btn_player1 = document.getElementById("btn_player1");
const btn_player2 = document.getElementById("btn_player2"); 
let pj1 = "" , pj2 = ""; 
let jugador1, jugador2;

//creacion de una constante que tiene todo los elementos referentes al id de player1 y player2
//document.getElementById() es un metodo que nos permite obtener un elemento del DOM por su id, este hace referecia al documento primcipal de html, en este caso index.html

//querySelectorAll() es un metodo que nos permite obtener todos los elementos del DOM que cumplan con un selector especifico
//creacion de una arreglo apartir del desempaquetado de una lista de node.list que contiene todos los elementos de tipo img que se encuentran dentro del elemento player1, esto nos permite tener un arreglo de imagenes para poder iterar sobre ellas y agregarles un evento de click
//se itera con la funcion map el contenido de arreglo obtenido en el primer punto


nombre1.addEventListener("input",(event) =>{
    event.target.value = event.target.value.replace(/[^a-zA-Z0-9]+/,"");
});
nombre2.addEventListener("input",(event) =>{
    event.target.value = event.target.value.replace(/[^a-zA-Z0-9]+/,"");
});


const remover_seleccion = (...elementos) =>{ //empaquetamos los elementos que se pasan como argumentos a la funcion remover_seleccion, esto nos permite tener un arreglo de elementos para poder iterar sobre ellos y remover la clase bg-warning de todos los elementos excepto el que se esta seleccionando
    elementos.map((elemento) =>{
        elemento.classList.remove("bg-warning");
        elemento.classList.add("bg-danger");
        pj1 = event.target.alt; 
    });
}

const player1 = document.getElementById("py1");
[...player1.querySelectorAll("img")].map((imagen) => {
    //mediante una vatiable auxiliar se asigna un evento click imagen con la funcion "addEventListener" que nos permite agregar un evento a un elemento del DOM, en este caso la imagen, el evento es de tipo click y se ejecuta una funcion anonima que recibe como parametro un objeto event que contiene informacion del evento que se esta ejecutando, en este caso el click sobre la imagen
    imagen.addEventListener('click', (event) => {
        //cuando se da click a una imagen se accede a su variable la cual contiene el valor del atributo alt de la imagen, este valor es el nombre del personaje que se esta seleccionando, y se imprime en consola
        console.log(event.target.alt); 
        remover_seleccion(...player1.querySelectorAll("img")); //Desempaquetamos el arreglo de imagenes para pasarlo como argumentos a la funcion remover_seleccion, esto nos permite remover la clase bg-warning de todas las imagenes excepto la que se esta seleccionando
        event.target.classList.add("bg-warning");
        event.target.classList.remove("bg-danger");

    });
});



btn_player1.addEventListener('click', () => {//Se valida con un eveto click para que no pase vacio el nombre del jugador 1 y que seleccione un personaje, si no cumple con estas condiciones se muestra un mensaje de error con la libreria sweetalert2, si cumple con las condiciones se crea un nuevo objeto de la clase Acciones, el cual hereda de la clase Personaje, y se le pasa como parametro el valor del input de texto con id player1, este valor es el nombre del jugador 1
    //validar que solo sean numeros y letras, y que no tenga caracteres especiales, y que no sea vacio
    const nombre1 = document.getElementById("player1").value.trim();

    if (nombre1 === "" || !isAlphanumeric(nombre1)) {
        Swal.fire({
            icon: "warning",
            text: "EL jugador 1 debe ingresar solo letras y números",
            title: "Error!"
        });
        return;
    }

    if(pj1 == ""){
        Swal.fire({
            icon: "warning",
            text: "EL jugador 1 debe seleccionar un personaje",
            title: "Error!"
        });     
        return; 
    }
    jugador1 = new Acciones(document.getElementById("player1").value);//se crea un nuevo objeto de la clase Acciones, el cual hereda de la clase Personaje, y se le pasa como parametro el valor del input de texto con id player1, este valor es el nombre del jugador 1
    /* Swal.fire(`Nombre usuario: ${document.getElementById("player1").value},
    Personaje: ${pj1}
    `); */
/*
    console.log(jugador1);
    document.getElementById("player1").disabled = true;//desabilitamos el imput de nombre para que no se pueda cambiar el nombre del jugador 1 despues de haberlo ingresado
    document.getElementById("py1").classList.add("d-none"); //ocultamos los personajes cuando ya se hayan seleccionado 
    
});

/*

const player2 = document.getElementById("py2");
const remover_seleccion2 = (...elementos) =>{ 
    elementos.map((elemento) =>{
        elemento.classList.remove("bg-warning");
        elemento.classList.add("bg-primary");
        pj2 = event.target.alt; 
    });
}

[...player2.querySelectorAll("img")].map((imagen) => {
    imagen.addEventListener('click', (event) => {
        console.log(event.target.alt); 
        remover_seleccion2(...player2.querySelectorAll("img")); 
        event.target.classList.add("bg-warning");
        event.target.classList.remove("bg-primary");
        

    });
});

btn_player2.addEventListener('click', () => {
    if(document.getElementById("player2").value == ""){
        Swal.fire({
            icon: "warning",
            text: "EL jugador dos no ha ingresado un nombre de usuario",
            title: "Error!"
        });     
        return; 
    }
    else if(pj2 == ""){
        Swal.fire({
            icon: "warning",
            text: "EL jugador 2 debe seleccionar un personaje",
            title: "Error!"
        });     
        return; 
    }
    jugador2 = new Acciones(document.getElementById("player2").value);
    /* Swal.fire(`Nombre usuario: ${document.getElementById("player1").value},
    Personaje: ${pj1}
    `); */
    /*
    console.log(jugador1);
    document.getElementById("player2").disabled = true;//desabilitamos el imput de nombre para que no se pueda cambiar el nombre del jugador 1 despues de haberlo ingresado
    document.getElementById("py2").classList.add("d-none"); //ocultamos los personajes cuando ya se hayan seleccionado 
    
});
*/