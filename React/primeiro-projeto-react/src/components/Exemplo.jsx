import React from "react";

let estilo = {color: "blue", backgroundColor: "pink", listStyle: "none"}

let Exemplo = () => {
    return (
        <>
            <h1>Sofrendo nessa sexta</h1>
            <h2>Alunos Reprovados</h2>
            <ul style={estilo}>
                <li>Ana Clara</li>
                <li>Dani</li>
                <li>Mikael</li>
                <li>Jhun</li>
            </ul>
        </>
    );
}

export default Exemplo;