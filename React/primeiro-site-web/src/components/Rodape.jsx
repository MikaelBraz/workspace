import React from 'react';

const Rodape = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer style={{ textAlign: 'center', marginTop: '20px' }}>
      <p>Mikael Braz</p>
      <p>© {2023} Todos os direitos reservados</p>
    </footer>
  );
};

export default Rodape;