function verificarEstacao() {
    var mesDigitado = document.getElementById("mesInput").value.toLowerCase();
    var estacao;

    switch (mesDigitado) {
        case "janeiro":
        case "fevereiro":
        case "março":
            estacao = "Verão";
            break;
        case "abril":
        case "maio":
        case "junho":
            estacao = "Outono";
            break;
        case "julho":
        case "agosto":
        case "setembro":
            estacao = "Inverno";
            break;
        case "outubro":
        case "novembro":
        case "dezembro":
            estacao = "Primavera";
            break;
        default:
            estacao = "Mês inválido";
    }

    alert("Você escreveu o mês de " + mesDigitado + ", e a estação desse mês é " + estacao + ".");
}