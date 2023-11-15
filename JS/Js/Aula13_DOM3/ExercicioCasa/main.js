function calcularDivida() {
    // Obter os valores do input
    var principal = parseFloat(document.getElementById("principal").value);
    var taxa = parseFloat(document.getElementById("taxa").value);
    var parcelas = parseInt(document.getElementById("parcelas").value);

    // Verificar se os valores inseridos são válidos
    if (isNaN(principal) || isNaN(taxa) || isNaN(parcelas)) {
        alert("Por favor, insira valores válidos para calcular a dívida.");
        return;
    }

    // Calcular o montante da dívida usando a fórmula de juros simples
    var jurosSimples = principal * (1 + (taxa / 100) * parcelas);

    // Exibir o resultado na página
    document.getElementById("resultado").innerHTML = "Montante da Dívida: R$ " + jurosSimples.toFixed(2);
}