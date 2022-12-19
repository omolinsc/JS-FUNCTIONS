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



// **Iteración #6: Valores únicos**

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

console.log(" ");
console.log("ITERATION#6 -------------");

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    const duplicatesRemoved = [];    
    for ( const word of param){
        // console.log(word);
        if (!duplicatesRemoved.includes(word)){
            duplicatesRemoved.push(word);
        }
    }
    return "El ARRAY eliminando los DUPLICADOS es: " + duplicatesRemoved;
  }

  console.log(removeDuplicates(duplicates));


//** Iteración #7: Buscador de nombres**

// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

console.log(" ");
console.log("ITERATION#7 -------------");

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, value) {
    for (let i = 0; i < param.length; i++){
        if (param[i]===value) {
            return "El nombre: " + value + " está en el índice: " + i;
        }
    }
    return false + " - El nombre: " + value + " NO está en la lista";
    }
  
    console.log(finderName(nameFinder,"Natasha"));



//** Iteration #8: Contador de repeticiones**

// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

console.log(" ");
console.log("ITERATION#8 -------------");

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];


  // function repeatCounter(param) {
  //   const string = [];
  //   const result = [];
  //   for (const element of param){
  //       if(!string.includes(element)){
  //           string.push(element);
  //       }
  //   }
  //   for (const word of string){
  //       let contador = 0;
  //       for (let i = 0; i < param.length; i++){
  //           if (word===param[i]){
  //               contador ++;
  //           }
  //       }
  //       result.push(word + " aparece : " + contador + " veces");
  //   }
  //   return result;
  // }

  // console.log(repeatCounter(counterWords));


    //! replanteamiento de la iteración 8

    function repeatCounter2 (listaDeLaCompra) {

      const blocDeNotas = {};
      for (let i = 0; i < listaDeLaCompra.length; i++) {
  
        const product = listaDeLaCompra[i];
  
        if(product in blocDeNotas){
          blocDeNotas[product]++;
        } else {
          blocDeNotas[product] = 1;
        }
        
      }
      return blocDeNotas;
    }
  
    console.log(repeatCounter2(counterWords));

  console.log(" ");
  console.log("----- END OF ITERATIONS -----");
  console.log(" ");

