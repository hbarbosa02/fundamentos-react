import React from 'react';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumAleatorio from './components/basicos/NumAleatorio'
import Card from './components/layout/Card'

import './App.css'

const App = (_) => {
  return (
    <div className="App">
        <h1>Fundamentos React (Arrow)</h1>
        <div className="Cards">
          <Card titulo="#04 - Desafio Aleatório">
            <NumAleatorio min={0} max={10} />
          </Card>

          <Card titulo="#03 - Fragmento">
            <Fragmento />
          </Card>
          
          <Card titulo="#02 - Com Parâmetros"> 
            <ComParametro titulo={'Componentes'} subtitulo={'Com Parâmetro'} />
          </Card>
          
          <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
          </Card>
        </div>
    </div>
  );
}

export default App