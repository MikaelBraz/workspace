
function alertCookie() {
    var mensagem = 'Você quer um cookie';
    alert(mensagem);
    console.log(mensagem);
}
const alertSucesso = () => {
    var mensagem = 'Mensagem gerada com sucesso';
    alert(mensagem);
    console.log(mensagem);
}

const notebook = {
    marca: 'HP',
    modelo: 'Pavilion',
    processador: 'Intel Core i7',
    ram: '16GB',
    armazenamento: '512GB SSD'
};

console.log(notebook);

function anosParaDias(anos) {
    var dias = anos * 365; 
    return dias;
}

var anos = 5;
var diasConvertidos = anosParaDias(anos);
console.log(anos + ' anos é igual a ' + diasConvertidos + ' dias.');
