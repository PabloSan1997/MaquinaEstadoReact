import React from 'react'
import '../estilos/Passengers.css';
function Passengers({send, state}) {
  const [value, changeValue] = React.useState('');

  const onChangeInput = (e) => {
    changeValue(e.target.value);
  }
  const siguiente=()=>{
    send('DONE');
  }
  const submit = (e) => {
    e.preventDefault();
    send('ADD', {newPassengers:value});
    console.log(state.context);
    changeValue('');
  }
  return (
    <form  className='Passengers' onSubmit={submit}>
    <p className='Passengers-title title'>Agrega a las personas que van a volar ✈️</p>
    <input 
      id="name" 
      name="name" 
      type="text" 
      placeholder='Escribe el nombre completo' 
      required 
      value={value}
      onChange={onChangeInput}
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
        onClick={siguiente}
      >
        Ver mi ticket
      </button>
    </div>
  </form>
  )
}

export  {Passengers}