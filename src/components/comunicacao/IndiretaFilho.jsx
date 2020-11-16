import React from 'react';

function IndiretaFilho({ ...props }) {
    const click = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick= { () => click('João', gerarIdade(), true)}> 
                Fornercer Informações 
            </button>
        </div>
    );
}

export default IndiretaFilho;