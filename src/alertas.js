import Swal from "sweetalert2";
import {atributosPersonaje} from './Interfaz.js';

const msj_error = (msj) =>{
    Swal.fire({
        icon:"warning",
        title:"Error!",
        text:msj
    });
}

const pantalla_carga = () =>{
    Swal.fire({
        title: 'Iniciando juego...',
        html: '<img src="./public/gif/gifPantallaCarga.gif" alt="Cargando..." style="width: 80%; height: 80%;" class="img-fluid text-center text-dark" > cargando...',
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 5000,
        timerProgressBar: true,
        width: "90%",
        heightAuto: false,
        color: "#fff",
        background: "none",
        backdrop: 'rgba(0,0,0,0.8)',
        didOpen: () => {
            Swal.showLoading();
        },
    });
}

const alertAtk_basico = (jugadorEnTurno)=>{
    Swal.fire({
            text: atributosPersonaje[jugadorEnTurno.getPersonaje()].atk_basico,
            imageUrl: `./public/img/${jugadorEnTurno.getPersonaje()}/basico.png`,
            imageWidth: 300,
            imageHeight: 300,
            position: "center-center",
            with: 600,
            color: "#fff",
            backgraund: "none",
            imageAlt: "Ataque Basico", 
            backdrop: atributosPersonaje[jugadorEnTurno.getPersonaje()].fondo,
            showConfirmButton: false,
            timer: 1500
        });
}

const alertAtk_especial = (jugadorEnTurno)=>{
    Swal.fire({
            text: atributosPersonaje[jugadorEnTurno.getPersonaje()].atk_especial,
            imageUrl: `./public/img/${jugadorEnTurno.getPersonaje()}/especial.png`,
            imageWidth: 300,
            imageHeight: 300,
            position: "center-center",
            with: 600,
            color: "#fff",
            backgraund: "none",
            imageAlt: "Ataque Especial", 
            backdrop: atributosPersonaje[jugadorEnTurno.getPersonaje()].fondo,
            showConfirmButton: false,
            timer: 1500
        });
}

const alertCuracion = (jugadorEnTurno)=>{
    Swal.fire({
        text: "Te has curado 20 de vida",
        imageUrl: `./public/img/${jugadorEnTurno.getPersonaje()}/curar.png`,
        imageWidth: 300,
        imageHeight: 300,
        position: "center-center",
        with: 600,
        color: "#fff",
        backgraund: "none",
        imageAlt: "Curacion", 
        backdrop: atributosPersonaje[jugadorEnTurno.getPersonaje()].fondo,
        showConfirmButton: false,
        timer: 1500
    });
}

const alertCargaEnergia = (jugadorEnTurno)=>{
    Swal.fire({
        text: "Has cargado ki",
        imageUrl: `./public/img/${jugadorEnTurno.getPersonaje()}/energia.png`,
        imageWidth: 300,
        imageHeight: 300,
        position: "center-center",
        with: 600,
        color: "#fff",
        backgraund: "none",
        imageAlt: "Carga de energia", 
        backdrop: atributosPersonaje[jugadorEnTurno.getPersonaje()].fondo,
        showConfirmButton: false,
        timer: 1500
    });
}
export {alertAtk_basico, alertAtk_especial, alertCuracion, alertCargaEnergia, pantalla_carga, msj_error};