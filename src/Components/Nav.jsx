import React from 'react';
import '../estilos/Nav.css';
const Nav = () => {
  return (
    <nav className='Nav'>
      <h1 className='Nav-logo'>Genera tu vuelo ✈</h1>
        <button  className='Nav-cancel button-secondary'>Cancelar</button>
    </nav>
  );
}; 

export{Nav}
