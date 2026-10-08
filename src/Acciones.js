import Personaje from "./Personaje";

class Acciones extends Personaje{
    #turno = false;
    #contadorAtk_especial = 2; 
    constructor(nombre, personaje){
        super(nombre, personaje); 

    }
    getContadorAtk_especial() {
        return this.#contadorAtk_especial;
    }
    setContadorAtk_especial(valor) {
        this.#contadorAtk_especial = valor;
    }
    aumentarContadorAtk_especial() {
        this.#contadorAtk_especial++;
    }
    getEsSuTurno(){
        return this.#turno; 
    }
    setEsSuTurno(turno){
        this.#turno = turno; 
    }
    atkBasico(){
        this.setEnergia(parseInt(this.getEnergia()- 5));
        this.setKi(parseInt(this.getKi()- 10));
        this.mostrarEstadisticas(); 
        
    }
    atkEspecial(){
        this.setEnergia(parseInt(this.getEnergia()- 15 ));
        this.setKi(parseInt(this.getKi()- 20));
        this.mostrarEstadisticas(); 
    }
    curacion(){
        this.setEnergia(100); 
        this.setKi(100); 
        this.setVida(100); 
        this.setSemilla(this.getSemilla() - 1); 

    }
    cargaEnergia(){
        this.setEnergia((this.getEnergia() + 15) > 100 ? 100 : (this.getEnergia() + 15));
        this.setKi((this.getKi() + 10) > 100 ? 100 : (this.getKi() + 10));

        this.mostrarEstadisticas(); 
    }
    defensa(){

    }

}
export default Acciones; 