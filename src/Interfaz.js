import {alertAtk_basico, alertAtk_especial, alertCuracion, alertCargaEnergia, msj_error} from './alertas.js';

const atributosPersonaje = {
    "Goku": {
        "atk_basico": "¡Kame Hame Haaa!",
        "atk_especial": "¡Préstame tu energía! ¡Genkidama!",
        "fondo": 'rgba(242, 106, 0, 0.7)',
        "semilla": 'rgb(8, 96, 5)',
    },
    "Veguetta": { 
        "atk_basico": "¡Ataque Big Bang!",
        "atk_especial": "¡Muereeeeeeee INSECTO!",
        "fondo": 'rgba(11, 30, 153, 0.7)', 
        "semilla": 'rgb(8, 96, 5)',
    },
    "Gohan": {
        "atk_basico": "¡Masenko!",
        "atk_especial": "¡Ya no te lo perdonaré!", 
        "fondo": 'rgba(102, 0, 153, 0.7)', 
        "semilla": 'rgb(8, 96, 5)',
    },
    "Pikoro": { 
        "atk_basico": "¡Granada Infernal!",
        "atk_especial": "¡Makankosappo!",
        "fondo": 'rgba(45, 175, 45, 0.7)',
        "semilla": 'rgb(8, 96, 5)',
    },
    "Gogueta": { 
        "atk_basico": "¡Castigador de Almas!",
        "atk_especial": "¡No soy Goku ni Vegeta, soy el encargado de acabar contigo!",
        "fondo": 'rgba(255, 215, 0, 0.7)',
        "semilla": 'rgb(8, 96, 5)',
    }, 
    "Cell": {
        "atk_basico": "¡Kame Hame Ha Perfecto!",
        "atk_especial": "¡Temblen ante mi cuerpo perfecto!", 
        "fondo": 'rgba(132, 222, 2, 0.7)', 
        "semilla": 'rgb(8, 96, 5)',
    },
    "Trunks": {
        "atk_basico": "¡Ataque Cúpula de Calor!",
        "atk_especial": "¡No vengo a pelear, vengo a matarte!", 
        "fondo": 'rgba(153, 102, 204, 0.7)', 
        "semilla": 'rgb(8, 96, 5)',
    },
    "Veguito": { 
        "atk_basico": "¡Yoshaaa! Esto no es divertido, es triste.",
        "atk_especial": "¡Kame Hame Ha Final!",
        "fondo": 'rgba(0, 191, 255, 0.7)',
        "semilla": 'rgb(8, 96, 5)',
    },
}
const terminar_juego = (jugadorEnTurno, adversario) => {
    if (jugadorEnTurno.getVida() <= 0 || adversario.getVida() <= 0) {
        return true; 
    }
    return false; 
}
const finalizarTurno =  (jugadorEnTurno,adversario )=>{
    jugadorEnTurno.setEsSuTurno(false);
    adversario.setEsSuTurno(true);
}
//funciones de ataque, curacion y carga de energia
const atk_basico = (jugadorEnTurno, adversario) => {
    jugadorEnTurno.atkBasico(); 
    adversario.setVida((adversario.getVida() - 10) < 1 ? 0 : adversario.getVida() - 10);
    jugadorEnTurno.aumentarContadorAtk_especial(); 
    alertAtk_basico(jugadorEnTurno);
    if (terminar_juego(jugadorEnTurno, adversario)) {
        return; 
    }
    finalizarTurno(jugadorEnTurno, adversario); 
}
//funcion de ataque especial
const atk_especial = (jugadorEnTurno, adversario) => {
    if(jugadorEnTurno.getContadorAtk_especial() >= 2){
        jugadorEnTurno.setContadorAtk_especial(0); 
        jugadorEnTurno.atkEspecial(); 
        adversario.setVida((adversario.getVida() - 20) < 1 ? 0 : adversario.getVida() - 20);       
        alertAtk_especial(jugadorEnTurno);
        if (terminar_juego(jugadorEnTurno, adversario)) {
            return; 
        }
        finalizarTurno(jugadorEnTurno, adversario); 
    } else {
        const turnosFaltantes = 2 - jugadorEnTurno.getContadorAtk_especial();
        const turno = turnosFaltantes === 1 ? "1" : turnosFaltantes;
        msj_error(`Tienes que esperar ${turno} turno para poder usar el ataque especial`);
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