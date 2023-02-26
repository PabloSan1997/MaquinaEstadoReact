import React from 'react';
import '../estilos/Nav.css';
const Nav = ({state, cancelar}) => {
  return (
    <nav className='Nav'>
      <h1 className='Nav-logo'>Genera tu vuelo ✈</h1>
        {!state.matches('inicio')?<button  className='Nav-cancel button-secondary' onClick={cancelar}>Cancelar</button>:null}
    </nav>
  );
}; 

export{Nav}
