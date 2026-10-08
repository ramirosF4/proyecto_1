import {alertAtk_basico, alertAtk_especial, alertCuracion, alertCargaEnergia, msj_error} from './alertas.js';

const atributosPersonaje = {
    "Goku" :{
        "atk_basico" : "Kame Kame Haaa!!",
        "atk_especial": "Muereeeeeeee!!",
        "fondo": 'rgba(7, 196, 238, 0.7)',
        "semilla": 'rgb(8, 96, 5)',
    },
    "Veguetta": {
        "atk_basico" : "AAAAAAAAAAAH!!",
        "atk_especial": "Muereeeeeeee INSECTO!!",
        "fondo": 'rgb(238, 211, 7)',
        "semilla": 'rgb(8, 96, 5)',
    },
    "Gohan": {
        "atk_basico" : "Kame Hame Haaa!!",
        "atk_especial": "Muereeeeeeee!!",
        "fondo": 'rgba(0, 17, 255, 0.7)',
        "semilla": 'rgb(8, 96, 5)',
    },
    "Pikoro": {
        "atk_basico" : "Makankosappo!!",
        "atk_especial": "Muereeeeeeee!!",
        "fondo": 'rgba(0, 255, 0, 0.7)',
        "semilla": 'rgb(8, 96, 5)',
    },
    "Gogueta": {
        "atk_basico" : "Kame Hame Haaa!!",
        "atk_especial": "Muereeeeeeee!!",
        "fondo": 'rgba(0, 17, 255, 0.7)',
        "semilla": 'rgb(8, 96, 5)',
    }, 
    "Cell": {
        "atk_basico" : "La perfección no es una meta... es la distancia que existe entre tú y yo!!",
        "atk_especial": "Muereeeeeeee!!",
        "fondo": 'rgba(0, 17, 255, 0.7)',
        "semilla": 'rgb(8, 96, 5)',
    },
    "Trunks": {
        "atk_basico" : "No, yo vengo a matarte!!",
        "atk_especial": "Muereeeeeeee!!",
        "fondo": 'rgba(0, 17, 255, 0.7)',
        "semilla": 'rgb(8, 96, 5)',
    },
    "Veguito": {
        "atk_basico" : "Esto no es divertido, es triste!!",
        "atk_especial": "Muereeeeeeee!!",
        "fondo": 'rgba(0, 17, 255, 0.7)',
        "semilla": 'rgb(8, 96, 5)',
    },
}
const finalizarTurno =  (jugadorEnTurno,adversario )=>{
    jugadorEnTurno.setEsSuTurno(false);
    adversario.setEsSuTurno(true);
}

//funciones de ataque, curacion y carga de energia
const atk_basico = (jugadorEnTurno, adversario) => {
    jugadorEnTurno.atkBasico(); 
    adversario.setVida((adversario.getVida() - 10 ) < 1 ? 0 : adversario.getVida() - 10);
    jugadorEnTurno.aumentarContadorAtk_especial(); 
    alertAtk_basico(jugadorEnTurno);
    finalizarTurno(jugadorEnTurno, adversario); 
}
//funcion de ataque especial
const atk_especial = (jugadorEnTurno, adversario) => {
    if(jugadorEnTurno.getContadorAtk_especial() >= 2){
        jugadorEnTurno.setContadorAtk_especial(0); 
        jugadorEnTurno.atkEspecial(); 
        adversario.setVida((adversario.getVida() - 20 ) < 1 ? 0 : adversario.getVida() - 20); 
        
        alertAtk_especial(jugadorEnTurno);
        finalizarTurno(jugadorEnTurno, adversario); 

    }else{
        const turnosFaltantes = 2 - jugadorEnTurno.getContadorAtk_especial();
        const turno = turnosFaltantes === 1 ? "1" : turnosFaltantes;
        msj_error(`Tienes que esperar ${turno}  turnos para poder usar el ataque especial`);
    }
}
//funcion de curacion
const curacion = (jugadorEnTurno, adversario) => { 
    if(jugadorEnTurno.getSemilla() > 0){
        if(jugadorEnTurno.getVida() < 100){
            jugadorEnTurno.curacion();
            jugadorEnTurno.aumentarContadorAtk_especial(); 
            
            alertCuracion(jugadorEnTurno);
            finalizarTurno(jugadorEnTurno, adversario); // Cede el turno
        }else{
            msj_error("Tu vida ya esta al maximo");
        }
    }else{
        msj_error("No tienes semillas para curarte");
    }
}
//funcion de carga de energia
const cargaEnergia = (jugadorEnTurno, adversario) => { 
    if(jugadorEnTurno.getEnergia() < 100 || jugadorEnTurno.getKi() < 100){
        jugadorEnTurno.cargaEnergia(); 
        jugadorEnTurno.aumentarContadorAtk_especial(); // Carga la habilidad especial
        
        alertCargaEnergia(jugadorEnTurno);
        finalizarTurno(jugadorEnTurno, adversario); // Cede el turno
    }else{
        msj_error("Tu energia y ki ya estan al maximo");
    }
}

export {atk_basico, atk_especial, curacion, cargaEnergia, atributosPersonaje}; 