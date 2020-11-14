import React from 'react';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumAleatorio from './components/basicos/NumAleatorio'
import Card from './components/layout/Card'

import './App.css'
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';

const App = (_) => {
  return (
    <div className="App">
        <h1>Fundamentos React (Arrow)</h1>
        <div className="Cards">

          <Card titulo="#05 - Componente com Filhos" color="#F728A6">
            <Familia sobrenome="Pinto">
              <FamiliaMembro nome="Pedro" />
              <FamiliaMembro nome="João" />
              <FamiliaMembro nome="Maria" />
            </Familia>
          </Card>

          <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
            <NumAleatorio min={0} max={10} />
          </Card>

          <Card titulo="#03 - Fragmento" color="#E94C6F">
            <Fragmento />
          </Card>
          
          <Card titulo="#02 - Com Parâmetros" color="#E8871A"> 
            <ComParametro titulo={'Componentes'} subtitulo={'Com Parâmetro'} />
          </Card>
          
          <Card titulo="#01 - Primeiro Componente" color="#588C73">
            <Primeiro />
          </Card>
        </div>
    </div>
  );
}

export default App