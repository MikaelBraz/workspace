const alunos = [
    { nome: 'Ana', idade: 17, nota: 8, ano: '2°B' },
    { nome: 'Bruno', idade: 16, nota: 6, ano: '2°B' },
    { nome: 'Veronica', idade: 16, nota: 9, ano: '2°B' },
    { nome: 'Marta', idade: 15, nota: 5, ano: '2°B' },
    { nome: 'Brenno', idade: 19, nota: 6, ano: '2°B' },
    { nome: 'Maria', idade: 14, nota: 4, ano: '2°B' }
];

// Retornar todo o array de objetos
console.log(alunos);

// Retornar todas as informações do aluno Brunno
const alunoBrunno = alunos.find(aluno => aluno.nome === 'Bruno');
console.log(alunoBrunno);

// Retornar apenas a nota da Maria
const notaMaria = alunos.find(aluno => aluno.nome === 'Maria').nota;
console.log(`Nota da Maria: ${notaMaria}`);

// Retornar todo o array de objetos em formato JSON
const alunosJSON = JSON.stringify(alunos);
console.log(alunosJSON);