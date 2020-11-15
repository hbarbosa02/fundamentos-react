import React from 'react';

function DiretaFilho({ nome, idade, nerd, ...props }) {
    return (
        <div>
            <span>{nome} </span>
            <span>{idade} anos </span>
            <span>{nerd ? 'é nerd' : 'não é nerd'}!</span>
        </div>
    );
}

export default DiretaFilho;