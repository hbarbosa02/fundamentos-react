import React from 'react';

import DiretaFilho from './DiretaFilho'

function DiretaPai({...props}) {
    return (
        <div>
            <DiretaFilho nome="Pedro" idade={15} nerd={true} />
            <DiretaFilho nome="Zack" idade={20} nerd={false} />
        </div>
    );
}

export default DiretaPai;