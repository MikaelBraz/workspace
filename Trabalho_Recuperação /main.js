function verificarEstacao() {
    
    var mesDigitado = document.getElementById("mesInput").value.toLowerCase();

    
    var estacao = "";
    if (mesDigitado === "janeiro" || mesDigitado === "fevereiro" || mesDigitado === "março") {
        estacao = "Verão";
    } else if (mesDigitado === "abril" || mesDigitado === "maio" || mesDigitado === "junho") {
        estacao = "Outono";
    } else if (mesDigitado === "julho" || mesDigitado === "agosto" || mesDigitado === "setembro") {
        estacao = "Inverno";
    } else if (mesDigitado === "outubro" || mesDigitado === "novembro" || mesDigitado === "dezembro") {
        estacao = "Primavera";
    } else {
        alert("Digite um mês válido");
        return;
    }

  
    alert("Você escreveu o mês de " + mesDigitado + ", e a estação desse mês é " + estacao + ".");
}