import React from 'react';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumAleatorio from './components/basicos/NumAleatorio'
import Card from './components/layout/Card'

import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';

import ListaRepeticao from './components/repetição/ListaAlunos';
import TabelaProdutos from './components/repetição/TabelaProdutos';

import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';

import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';

import Input from './components/fomulario/Input';

import Contador from './components/contador/Contador';

import Mega from './components/mega/Mega';

import './App.css'

const App = (_) => {
  return (
    <div className="App">
        <h1>Fundamentos React (Arrow)</h1>
  
        <div className="Cards">
          <Card titulo="#13 - Desafio Mega" color="#FF1857">
            <Mega quantidade={8} />
          </Card>

          <Card titulo="#12 - Contador" color="#E45F82">
            <Contador numeroInicial={0} />
          </Card>

          <Card titulo="#11 - Componente Controlado (Input)" color="#784126">
            <Input />
          </Card>

          <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
            <IndiretaPai />
          </Card>

          <Card titulo="#09 - Comunicação Direta" color="#225813">
            <DiretaPai />
          </Card>

          <Card titulo="#08 - Par ou Impar" color="#315849">
            <UsuarioInfo usuario={{ nome: "Pedro Silva" }} />
            <UsuarioInfo usuario={{ email: "hiran@test.com" }} />
            <ParOuImpar value={11} />
          </Card>

          <Card titulo="#07 - Desafio Tabela" color="#279458">
            <TabelaProdutos />
          </Card>

          <Card titulo="#06 - Lista Repetição" color="#051849">
            <ListaRepeticao />
          </Card>

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