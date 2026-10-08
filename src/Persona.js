


/* /* 
//variables
let numero = 0; 

numero = "cadena";

//constantes

const unico  = "info";



alert(unico);

//funciones

function saludar(nombre){
    alert("Hola");
    return true; 
}

const saludo = (nombre)=> alert(`hola ${nombre}`)
saludo("Ramiro"); 


//desestructuracion 

const arreglo1 = ["ramiro" , "jose"]; 

let [nom1 , nom2 ] = arreglo1;
alert(nom2); 




const objeto ={
    nombre : "ramiro", 
    edad : 22,
    carrera: "Sistemas"
}

let {nombre, carrera, edad} = objeto;

alert(carrera); 
*/

/* const usuarios = [
    {
        usuario:"test1",
        email:"test1@mail.com",
        semestres: [1,2,3]
    },
    {
        usuario: "test2",
        email:"test2@gmail.com",
        semestres: [1,3,5]
    },
    {
        usuario: "test3",
        email:"test3@mail.com",
        semestres: [5,8]
    }

] */

/* 
//let  [usuario1, usuario2, usuario3]= usuarios;   

alert (usuario1.email); 
alert (usuario2.email); 
alert (usuario3.email); 
alert (usuario1.usuario); 

/*  
let [dato1, dato2, dato3] = usuarios; 
const mostrar = (usuarioData) =>{
    let {usuario, email, semestres} = usuarioData;
    let[s1,s2,s3] = semestres; 
    alert (`${usuario}, ${email}, ${s1}-${s2} ${semestres.length > 2 ? '-'+s3: ''}`); 

}
mostrar(dato1);
mostrar(dato2); 
mostrar(dato3);  


//operador ternario

if((2+2)>4){
    console.log("Es mayor a 4");
    
}else{
    console.log("es menor o igual a 4");
    
}

const resultado = (2 + 2) > 4 ? "Es mayor a 4" :(2+2) == 4 ? "Es igual a 4": "Es menor a 4"; 

console.log(resultado);  */


//parametros rest spread 


//rest 
//empaqueta variables o datos en un arreglo 

/* const funciondatos = (...datos)=> {
    //spred 
    //se encarga de desempaquetar un arreglo 
    console.log(...datos);
}

funciondatos("Ramiro","pedro"); 

const frutas = ["mango", "sandia", "manzana"]; 
let frutas_verduras = [...frutas, "calabaza", "agucate"];

console.log("arreglo original:",frutas);
console.log("arreglo copia:",frutas_verduras);

frutas_verduras.push("Zanahoria"); 

console.log("arreglo origunal",frutas);
console.log("arreglo copia:", frutas_verduras);


//funcion map
//permite iterr el contenido de un arreglo 
frutas_verduras.map((dato)=>{
    console.log(dato);
}); 
//crar un nuevo arreglo modificado con map

let mayusculas = frutas_verduras.map((dato)=>{
    return dato.toUpperCase();
});
console.log(frutas_verduras);
console.log(mayusculas);

const usuarios = [
    {
        usuario:"test1",
        email:"test1@mail.com",
        semestres: [1,2,3]
    },
    {
        usuario: "test2",
        email:"test2@gmail.com",
        semestres: [1,3,5]
    },
    {
        usuario: "test3",
        email:"test3@mail.com",
        semestres: [5,8]
    }

]; 

usuarios.map((data)=>{
    let {usuario, email, semestres} = data; 
    console.log(`${usuario} , ${email}`, ...semestres);
    

});
 */
//funciones con argumento por defecto

/* const info =(nombre)=>{

    console.log(`Hola ${nombre}`);
}
info("ramiro"); 
const datos_persona = (nombre="no", apellido="no", nacionalidad = "peruano", edad="sin edad")=>{
    console.log
    (`
        nombre: ${nombre},
        apellido: ${apellido},
        nacionalidad: ${nacionalidad},
        edad: ${edad}
        `);
}
datos_persona("juan", "perez", "Mexicana", 18); 
 */
//let nombre = "";

/* import Index from "./Persona.js";


let persona1 = new Index("ramiro"); 
persona1.mostrarDatos();  */