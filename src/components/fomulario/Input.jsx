import React, { useState } from 'react';

import './Input.css'

function Input(props) {
    const [valor, setValor] = useState('Inicial')

    return (
        <div>
            <h2>{valor}</h2>
            <div className="input-container">
                <input value={valor} onChange={(e) => setValor(e.target.value)} />
                <input value={valor} readOnly />
                <input value={undefined} />
            </div>
        </div>
    );
}

export default Input;