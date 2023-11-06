// Funçoes 
function somaNumeros(num1 = 1, num2 = 1){ 
    return num1 + num2;
    }
    
    let x = somaNumeros(4, 5); //chamada da função
    somaNumeros
    console.log(x);
    
    let soma = somaNumeros(10, 7, 3);
    console.log(" Essa é a variavel soma " + soma);
    
    function somaNumeros(num1, num2) {
        return num1 * num2;
    };
    
    
    var recebeFuncao = () => {
        return 'Recebe Função';
    }
    
    console.log(recebeFuncao); // aperece todo o codigo
    console.log(recebeFuncao()) // aparece só a função
    
    console.clear()
    
    function imparPar(num){
        if(num % 2 == 0){
            return '0 numero ${num} é Par';
        }else if (num % 2 == 1 ){
            return 'O numero ${num} é Impar';
        }else{
            return 'Não consegui identificar se é Impar ou Par'
        };
    }
    
    let recebePrimeiroNumero = imparPar(5)
    console.log(recebePrimeiroNumero)
    
    
    let recebeSegundoNumero = imparPar(5.75)
    console.log(recebeSegundoNumero)
    
    var contexto = 5.75 % 2;
    console.log(contexto)
    
    const celular = {
        marca: 'apple',
        modelo: 'iphone 15 pro max',
        cor: 'rosa',
        memoria: '512',
        memoriaRam: '8gb'
    }
    console.log(celular)
    
    console.clear()
    
        const boasVindas = () => {
            alert('Bem vindo a nossa pagina');
            console.log('Bem vindo a nossa pagina');
        }
    
        const eventClique = () => {
            console.log('Você clicou no botao');
        }
    
        const mouseEmCima = () => {
            console.log('Mouse está em cima do titulo!!!');
        };