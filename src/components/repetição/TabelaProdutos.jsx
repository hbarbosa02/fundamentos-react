import React from 'react';

import produtos from '../../data/produtos'

import "./TabelaProdutos.css"

function TabelaProdutos() {
    const tableRows = produtos.map((produto,i) => {
        const className = i % 2 === 0 ? 'Par' : 'Impar' 
        
        return (
            <tr key={produto.id} className={className}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.valor.toFixed(2).replace('.',',')}</td>
            </tr>
        );
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    );
}

export default TabelaProdutos;