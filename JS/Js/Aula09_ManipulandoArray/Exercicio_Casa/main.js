const numeros = [17, 43, 8, 4, 97, 56, 29];

function verificaParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + ' é um número par.');
    } else {
        console.log(numero + ' é um número ímpar.');
    }
}

numeros.forEach(verificaParOuImpar);

console.clear()

const numeritos = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61];

function verificaEntre20e80(numero) {
    return numero >= 20 && numero <= 80;
}

const valoresEntre20e80 = numeros.filter(verificaEntre20e80);

console.log(valoresEntre20e80);

