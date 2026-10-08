
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/main.css';
import Acciones from "./Acciones.js";
import { atk_basico, atk_especial, curacion, cargaEnergia} from './Interfaz.js';  
import {pantalla_carga, msj_error} from './alertas.js';

const btn_player1 = document.getElementById("btn_player1");
const btn_player2 = document.getElementById("btn_player2");
const player1 = document.getElementById("py1");
const player2 = document.getElementById("py2");
const nombre1 = document.getElementById("player1");
const nombre2 = document.getElementById("player2");
const nombres = document.getElementById("nombres");
const username1 = document.getElementById("username1");
const personaje1  = document.getElementById("personaje1");
const img1  = document.getElementById("img1");
const username2 = document.getElementById("username2");
const personaje2  = document.getElementById("personaje2");
const img2  = document.getElementById("img2");
//jugadoor 1 barras
const energia1 = document.getElementById("energia1"); 
const ki1 = document.getElementById("ki1");
const vida1 = document.getElementById("vida1");
//jugador 2 barras
const energia2 = document.getElementById("energia2"); 
const ki2 = document.getElementById("ki2");
const vida2 = document.getElementById("vida2");
const btn_semilla1 = document.getElementById("btn_semilla1");  
const btn_semilla2 = document.getElementById("btn_semilla2");
const btn_py1 = document.getElementById("btn_py1").querySelectorAll("button");
const btn_py2 = document.getElementById("btn_py2").querySelectorAll("button");  

let pj1 = "", pj2 = "";
let jugador1, jugador2;

//funciones de ataque, curacion y carga de energia
const accionesPersonaje = [
    (j1,j2) => atk_basico(j1,j2),//funcion de ataque basico
    (j1,j2) => atk_especial(j1,j2),//funcion de ataque especial
    (j1,j2) => cargaEnergia(j1,j2), //funcion de carga de energia
    (j1,j2) => curacion(j1,j2),//funcion de curacion

]

const desactivar_btns = ()=> {
    btn_py1.forEach(boton => {
        boton.disabled = !jugador1.getEsSuTurno(); 
    });
    btn_py2.forEach(boton => {
        boton.disabled = !jugador2.getEsSuTurno();
    });
}

//funcion para iniciar el juego
const iniciar_juego = () =>{
    username1.innerText = nombre1.value; //mostramos el nombre de usuario y personaje seleccionado por el jugador 1
    personaje1.innerText = pj1; //mostramos el nombre de usuario y personaje seleccionado por el jugador 1
    img1.src= `./public/img/${pj1}/base.png`//mostramos el personaje seleccionado
    //MOstrar nombre de usuario y personaje seleccionado por el jugador 2
    username2.innerText = nombre2.value; 
    personaje2.innerText = pj2; 
    img2.src= `./public/img/${pj2}/base.png`
    //ocultamos las barras cuando aun no se selecciona el personaje y nombre de usuario
    document.getElementById("batalla1").classList.remove("d-none");
    document.getElementById("batalla2").classList.remove("d-none"); 
    //mostramos la pantalla de carga antes de iniciar el juego
    pantalla_carga();

}


//funcion para actualizar las barras de energia, ki y vida de los jugadores
const barras =() =>{
    //actualiza el ancho de la barra de energia 
    energia1.style.width = `${jugador1.getEnergia()}%`; 
    //actualiza el texto mostrado en la barra de energia
    energia1.innerText = `${jugador1.getEnergia()}%`; 
    //actualiza el ancho de barra de ki 
    ki1.style.width = `${jugador1.getKi()}%`; 
    ki1.innerText = `${jugador1.getKi()}%`; 

    energia2.style.width = `${jugador2.getEnergia()}%`; 
    //actualiza el texto mostrado en la barra de energia
    energia2.innerText = `${jugador2.getEnergia()}%`; 
    //actualiza el ancho de barra de ki 
    ki2.style.width = `${jugador2.getKi()}%`; 
    ki2.innerText = `${jugador2.getKi()}%`; 

    vida2.style.width = `${jugador2.getVida()}%`; 
    vida2.innerText = `${jugador2.getVida()}%`; 
    vida1.style.width = `${jugador1.getVida()}%`; 
    vida1.innerText = `${jugador1.getVida()}%`; 
    //aqui cambiamos el numero de semillas que tiene cada jugador
    btn_semilla1.querySelector("span").innerText = jugador1.getSemilla(); 
    btn_semilla2.querySelector("span").innerText = jugador2.getSemilla();
}

nombre1.addEventListener("input",(event) =>{
    event.target.value = event.target.value.replace(/[^a-zA-Z0-9]+/,"");
});
nombre2.addEventListener("input",(event) =>{
    event.target.value = event.target.value.replace(/[^a-zA-Z0-9]+/,"");
});

const remover_seleccion = (color,...elementos) =>{
    elementos.map((elemento)=>{
        elemento.classList.remove("bg-warning");
        elemento.classList.add("bg-"+color);
    });
}



[...player1.querySelectorAll("img")].map((imagen) => {
    imagen.addEventListener('click',(event)=>{
        remover_seleccion("danger",...player1.querySelectorAll("img"));
        event.target.classList.remove("bg-danger");
        event.target.classList.add("bg-warning");
        pj1 = event.target.alt;
    });
});
//
[...player2.querySelectorAll("img")].map((imagen) => {
    imagen.addEventListener('click',(event)=>{
        remover_seleccion("primary",...player2.querySelectorAll("img"));
        event.target.classList.remove("bg-danger");
        event.target.classList.add("bg-warning");
        pj2 = event.target.alt;
    });
});

btn_player1.addEventListener("click",() =>{
    if(nombre1.value == ""){
        return msj_error("El jugador 1 no ha ingresado un nombre de usuario!");
    }else if(pj1 == ""){
        return msj_error("El jugador 1 debe seleccionar un personaje!");
    }
    jugador1 = new Acciones(nombre1.value , pj1);
    nombre1.disabled=true;
    player1.classList.add("d-none");
    if(jugador1 && jugador2){
        nombres.classList.add("d-none"); 
        iniciar_juego(); 
    }
});

btn_player2.addEventListener("click",() =>{
    if(nombre2.value == ""){
        return msj_error("El jugador 2 no ha ingresado un nombre de usuario!");
    }else if(pj2 == ""){
        return msj_error("El jugador 2 debe seleccionar un personaje!");
    }
    jugador2 = new Acciones(nombre2.value , pj2);
    nombre2.disabled=true;
    player2.classList.add("d-none");
    if(jugador1 && jugador2){
        nombres.classList.add("d-none"); 
        iniciar_juego(); 
    }
});


//agregamos los eventos a los botones de ataque, curacion y carga de energia
[...document.getElementById("btn_py1").querySelectorAll("button")].map((boton,i) =>{
    boton.addEventListener("click", ()=>{
        accionesPersonaje[i](jugador1,jugador2);
        barras();
        desactivar_btns(); 
    })
});

[...document.getElementById("btn_py2").querySelectorAll("button")].map((boton,i) =>{
    boton.addEventListener("click", ()=>{
        //llamamos a la funcion correspondiente al boton presionado
        accionesPersonaje[i](jugador2,jugador1);
        barras()
        desactivar_btns(); 
        
    })
});

