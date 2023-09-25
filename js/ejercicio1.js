//Ejercicio 1//
// Solicitar al usuario un numero a travez de un prompt
// empezando desde 1 e ir incrementando este valor de 1
// A medida que recorremos todos los numeros enteros anterior e
// incluido el ingresado por el usuario quiero hacer un log de aquellos
// numeros que son multiplos de 7

// El log debe ser el siguiente
// * El numero  X es multiplo de 7

const numero=parseInt(prompt("imgrese un numero"))
let contar=1;
while(contar <= numero){
    if(contar % 7 === 0){
       console.log(`El numero ${contar} es multiplo de 7`)
    }
    contar = contar+1;
}







