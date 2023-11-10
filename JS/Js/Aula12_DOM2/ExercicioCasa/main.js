document.addEventListener("DOMContentLoaded", function() {
    const botao1 = document.getElementById("B_01");
    botao1.onclick = function() {
      const imagem = document.createElement("img");
      imagem.src = "./img/UmbrellaAcademy.jpg"; // Substitua com a URL da imagem desejada
  
      document.body.style.backgroundColor = "#262525"; // Mude a cor de fundo do body
  
      const body = document.body;
      body.appendChild(imagem); // Insira a imagem ao lado do botão
    };
  });