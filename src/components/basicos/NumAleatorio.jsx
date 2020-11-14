import React from 'react';

export default function NumAleatorio({min, max, ...props}) {
    const num = Math.floor(Math.random() * (max - min)) + min  
    return (
        <>
            <h2>Desafio do número aleatório</h2>
            <p>
                <strong>Valor Mínimo: </strong> {min}
            </p>
            <p>
                <strong>Valor Máximo: </strong> {max}
            </p>
            <p>
                <strong>Valor sorteado foi: </strong> {num}
            </p>
        </>
    )
}