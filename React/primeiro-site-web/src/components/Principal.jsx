
import React from 'react';

const Principal = () => {
  const filmes = ['Moonlight', 'Whiplash', 'Brockeback Mountain', 'Interstelar', 'Soul'];

  return (
    <main style={{ backgroundColor: 'orange', color: 'purple', padding: '20px' }}>
      <p style={{ fontSize: '2rem' }}>
        Estou participando do curso de IOS com o objetivo de adquirir conhecimentos fundamentais na área de desenvolvimento front-end. Meu intuito é aprender a colaborar eficientemente em projetos de equipe, aprimorar minhas habilidades de comunicação e, a longo prazo, evoluir como desenvolvedor.
      </p>
      <ul>
        {filmes.map((filme, index) => (
          <li key={index}>{filme}</li>
        ))}
      </ul>
      <img src="caminho_para_a_imagem_do_filme_1.jpg" alt="Filme 1" />
    </main>
  );
};

export default Principal;