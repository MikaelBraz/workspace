
import React from 'react';

import Moon from '/React/primeiro-site-web/src/img/images (14).jpeg'

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
      <img src={Moon} alt="Moonlight" />
    </main>
  );
};

export default Principal;