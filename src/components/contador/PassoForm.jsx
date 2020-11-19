import React from 'react';

function PassoForm({passo, setPasso}) {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input 
                id="passoInput" 
                type="number" 
                value={passo} 
                onChange={(e) => setPasso(+e.target.value)} 
            />
        </div>
    );
}

export default PassoForm;