import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
  <div>
    <Primeiro msg={'Seja bem vindo(a)'} />
    <ComParametro titulo={'Com Parametro'} subtitulo={'Componentes'} />
  </div>, 
  document.getElementById('root')
)