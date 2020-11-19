import React, { useState } from 'react';

import "./Mega.css"
function Mega({ quantidade, ...props}) {

    const [qtde, setQtde] = useState(quantidade || 6)

    const numerosIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)

    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)
        return array.includes(aleatorio) ? 
            gerarNumeroNaoContido(min, max, array) : 
            aleatorio
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [ ...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros
    }

    return (
        <div className="Mega">
            <h2>Desafio Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qtde de Números</label>
                <input 
                    min="6"
                    max="15"
                    type="number" 
                    value={qtde} 
                    onChange={(e) => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                    }} 
                />
            </div>
            <button onClick={() => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>
        </div>
    );
}

export default Mega;