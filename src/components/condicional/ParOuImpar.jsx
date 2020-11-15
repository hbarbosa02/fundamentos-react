import React from 'react';

function ParOuImpar({ value, ...props}) {
    const isPar = value % 2 === 0;

    return (
        <div>
            <span>
                { isPar ? <span> Par </span> : <span> Impar </span> }
            </span>
        </div>
    );
}

export default ParOuImpar;