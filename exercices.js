// **Iteración #1: Buscar el máximo**

// Completa la función que tomando dos números como argumento devuelva el más alto.

console.log(" ");
console.log("ITERATION#1 -------------")

function sum(numberOne , numberTwo) {
    if( numberOne > numberTwo ){
        return "El número más alto es: " + numberOne;
    } else {
        return "El número más alto es: " + numberTwo;
    }
  }

  console.log(sum(17,24));


//**Iteración #2: Buscar la palabra más larga**

// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

console.log(" ");
console.log("ITERATION#2 -------------")

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    let largestName = [];
    let wordLength = 0;
  for (const word of param){
    if (word.length > wordLength){
        wordLength = word.length;
        largestName.length = 0;
        largestName.push(word);
    }
  }
  return "EL nombre más largo es: " + largestName;
}

console.log(findLongestWord(avengers));



//**Iteración #3: Calcular la suma**

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

// Puedes usar este array para probar tu función:

console.log(" ");
console.log("ITERATION#3 -------------")

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  // insert code
}
