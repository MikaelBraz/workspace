var numeros = [54,11,58,853,17,75,30];

console.log("antes:" + numeros);
numeros[3] = "hora do lanche"
console.log("depois:" + numeros)


// Array Bidimensional 

var matrix = [
    ["Icarly", 2010, 10],
    ["Feitiçeiross De WeveryPlace", 2009, 10],
    ["Doug", 1999, 8.7],
]

console.log(matrix)
// console.log(matrix[0][2]);


 console.log("antes" + matrix);
 matrix[2][1] = 1800
 console.log("depois" + matrix); 

 console.clear()

 var numArray = [4,5,6,31,89,65]
 console.log(numArray)
//  let receba = numArray.toString()

//  console.log(receba)
//  console.log("4,5,6,31,89,65")
 
 console.log(numArray)

//  let testeJoin = numArray.join (" . ")
//  console.log(testeJoin)

 console.log(numArray,length)

//  metodo pod (retira o ultimo numero

let retiraElemento = numArray.pop()
console.log(retiraElemento)
console.log(numArray)
 
// colocar elemento (adiciona elemento no ultimo numero)
let colocaElemento = numArray.push("kiwi")
console.log(colocaElemento)
console.log(numArray)

// retira o inicio metodo shift


var retiraInicio = numArray.shift()
console,log(numArray)
console.log(retiraInicio)

// coloca elemento no inicio, metodo unshift
var colocaInicio = numArray.unshift()
console,log(numArray)
console.log(retiraInicio)