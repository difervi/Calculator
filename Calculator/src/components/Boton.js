import React from "react";
import '../styles/Boton.css'

function Boton(props) {
  
  const esOperador = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };

  return (
    <div
      className={`boton-container ${esOperador(props.children) ? 'operator' : null}`.trimEnd()}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Boton;
