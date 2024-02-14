
import './App.css';
import Boton from './components/Boton';
import DiferviLogo from './images/logo-removebg-preview.png'
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import './styles/MediaQuery.css'

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value)
  };

  const result = () => {
    if (input){
      setInput(evaluate(input));
    } else {
      alert ('debes ingresar valores antes de continuar')
    }
   
  }


  return (
    <div className="App">
      <div className='logo-container'>
        <img 
          src={DiferviLogo}
          className='difervi-logo'
          alt='logo-difervi' />
      </div>
      <div className='calculator-container'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton handleClick={addInput}>1</Boton>
          <Boton handleClick={addInput}>2</Boton>
          <Boton handleClick={addInput}>3</Boton>
          <Boton handleClick={addInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton handleClick={addInput}>4</Boton>
        <Boton handleClick={addInput}>5</Boton>
        <Boton handleClick={addInput}>6</Boton>
        <Boton handleClick={addInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton handleClick={addInput}>7</Boton>
        <Boton handleClick={addInput}>8</Boton>
        <Boton handleClick={addInput}>9</Boton>
        <Boton handleClick={addInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton handleClick={result}>=</Boton>
        <Boton handleClick={addInput}>0</Boton>
        <Boton handleClick={addInput}>.</Boton>
        <Boton handleClick={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear handleClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
