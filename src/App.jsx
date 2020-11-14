import React from 'react';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumAleatorio from './components/basicos/NumAleatorio'

const App = (_) => {
  return (
    <div id="app">
        <h1>Fundamentos React (Arrow)</h1>
        
        <NumAleatorio min={0} max={10} />
        
        <Fragmento />
        
        <ComParametro titulo={'Componentes'} subtitulo={'Com Parametro'} />
        
        <Primeiro />
    </div>
  );
}

export default App