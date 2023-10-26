
var numero1 = parseInt(prompt("Digite o primeiro número:"));
var numero2 = parseInt(prompt("Digite o segundo número:"));
console.clear()

if (numero1 > numero2) {
    console.log("numero1 é maior que numero2");
} else if (numero2 > numero1) {
    console.log("numero2 é maior que numero1");
} else {
    console.log("numero1 e numero2 são iguais");
}

console.clear()

if (numero1 < numero2) {
    console.log("numero1 é menor que numero2");
} else if (numero2 < numero1) {
    console.log("numero2 é menor que numero1");
} else {
    console.log("numero1 e numero2 são iguais");
}