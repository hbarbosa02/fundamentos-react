import React from 'react';

function FamiliaMembro({ nome, sobrenome, ...props }) {
  return (
    <div>
        {nome} <strong>{sobrenome}</strong>
    </div>
  );
}

export default FamiliaMembro;