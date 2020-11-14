import React from 'react';

import alunos from '../../data/alunos'

function ListaRepeticao() {
    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                {alunos.map(aluno => {
                    return (
                        <li key={aluno.id}>
                            {aluno.nome} {'->'} <strong>{aluno.nota}</strong>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ListaRepeticao;