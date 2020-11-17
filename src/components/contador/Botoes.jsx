import React from 'react';

// import { Container } from './styles';

function Botoes({setInc, setDec}) {
    return (
        <div>
            <button onClick={setInc}>+</button>
            <button onClick={setDec}>-</button>
        </div>
    );
}

export default Botoes;