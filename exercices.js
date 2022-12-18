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
    let suma = 0;
  for (const num of param){
    suma += num;
  }
  return "La SUMA de los números del array es: " + suma;
}

console.log(sumAll(numbers));


// **Iteración #4: Calcular el promedio**

// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

console.log(" ");
console.log("ITERATION#4 -------------");

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let suma = 0;
    for (const num of param){
      suma += num;
    }
    const media = suma/(param.length);
    return "La MEDIA de los números del array es: " + media;
}

console.log(average(numbers2));


// **Iteración #5: Calcular promedio de strings**

// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

console.log(" ");
console.log("ITERATION#5 -------------");

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let suma = 0;
    for (const element of param){
      if( typeof element === "number"){
        suma += element;
      } else if ( typeof element === "string"){
        suma += element.length;
      }
    }
    return "La SUMA de los números y palabras del array es: " + suma;
}

console.log(averageWord(mixedElements));