let paragrafo = document.getElementById('paragrafo01');

paragrafo.style.color = 'red';
paragrafo.style.backgroundColor = 'black';
paragrafo.style.textAlign = 'center';
paragrafo.style.margin = '20px';



let buscaClasse = document.getElementsByClassName('item');
console.log(buscaClasse)
// buscaClasse[3].style.backgroundColor = 'blue'
// buscaClasse[0].style.backgroundColor = 'blue'
// buscaClasse[2].style.backgroundColor = 'blue'

// percorra a lista utilizando repetição e altere a cor de texto
//   variavel ;    condicao;       incremento
for(let c = 0; c <= buscaClasse.length; c++){
    // buscaClasse[c].style.color = 'blue';
}

// getElementsByTagName
let acessaParagrafos = document.getElementsByTagName('p')
console.log(acessaParagrafos)

// Percorra os paragrafos e altere a cor de texto
// Enquanto i for menor que 5
for(let i = 0; i <= acessaParagrafos.length; i++){
    // acessaParagrafos[i].style.color = 'green'
}

// Acessar elemento pelo nome
let acessaName = document.getElementsByName('name_item')
console.log(acessaName)

// percorra o array e altere apenas os itens que tem a posição é par
for(let f = 0; f <= acessaName.length; f++){
    if(f % 2 == 0){
        acessaName[f].style.color = 'pink';
    }
}


let item2 = document.getElementById('item2');
item2.remove();

let lista = document.getElementById('lista');
let item5 = document.getElementById('item5')

lista.insertBefore(item2, item5.nextSibling)


let retiraEstilo = document.getElementById('messi');
retiraEstilo.style.listStyle = 'none';



const selecionar = () => {
    var teste = prompt('Por favor insira o seu nome: ');
    // Ler o prompt
    var span = document.getElementById('spanTeste')
    console.log(teste)
    span.innerHTML = `Olá ${teste} Bem-vindo a nossa academia`
}