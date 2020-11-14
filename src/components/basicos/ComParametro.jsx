import React from 'react'

export default function ComParametro({titulo, subtitulo}) {
    return ( 
        <div>
            <h2>
                <strong>{titulo}</strong>
            </h2>
            <h3>{subtitulo}</h3> 
        </div>
    )
}