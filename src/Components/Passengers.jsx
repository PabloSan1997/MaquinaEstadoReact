import React from 'react'
import '../estilos/Passengers.css';
function Passengers() {
  return (
    <form  className='Passengers'>
    <p className='Passengers-title title'>Agrega a las personas que van a volar ✈️</p>
    <input 
      id="name" 
      name="name" 
      type="text" 
      placeholder='Escribe el nombre completo' 
      required 
    />
    <div className='Passengers-buttons'>
      <button 
        className='Passengers-add button-secondary'
        type="submit"
        id="boton1"
      >
        Agregar Pasajero
      </button>
      <button
        className='Passenger-pay button'
        id="boton"
        type="button"
      >
        Ver mi ticket
      </button>
    </div>
  </form>
  )
}

export  {Passengers}