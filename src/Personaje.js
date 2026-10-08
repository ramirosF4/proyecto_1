class Personaje{
    #vida = 100; 
    #nombre; 
    #ki = 100;
    #energia = 100; 
    #semilla = 2; 
    #personaje = "";  
    #turno = false; 
    constructor(nombre,personaje){
        this.#nombre = nombre;
        this.#personaje = personaje; 
        this.mostrarEstadisticas(); 
    }
    mostrarEstadisticas(){
        console.log(`
                nombre:${this.#nombre},
                *************************
                ki: ${this.#ki},
                vida: ${this.#vida},
                energia: ${this.#energia},
                semillas: ${this.#semilla}
            `);
    }
    getPersonaje(){
        return this.#personaje; 
    }
    getVida(){
        return this.#vida; 
    }
    getKi(){
        return this.#ki;
    }
    getEnergia(){
        return this.#energia; 
    }
    getSemilla(){
        return this.#semilla; 
    }
    getNombre(){
        return this.#nombre; 
    }
    setVida(vida){
        this.#vida = vida; 
    }
    setEnergia(energia){
        this.#energia = energia; 
    }

    setKi(ki){
        this.#ki = ki; 
    }
    setSemilla(semilla){
        this.#semilla = semilla; 
    }
    
}
export default Personaje; 
