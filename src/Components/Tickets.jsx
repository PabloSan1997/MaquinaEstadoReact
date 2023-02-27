import React from 'react'
import '../estilos/Tickets.css';
function Tickets({send, state}) {
    const final = ()=>{
        send('FINISH');
    }
    const { passengers,  selectedCountry}= state.context;
    console.log(passengers, selectedCountry);
    
    return (
        <div className='Tickets'>
            <p className='Tickets-description description'>Gracias por volar con book a fly 💚</p>
            <div className='Tickets-ticket'>
                <div className='Tickets-country'>{ selectedCountry}</div>
                <div className='Tickets-passengers'>
                {passengers.map(elemento=>(<p className='nombre' key={elemento}>{elemento}</p>))}
                    <span>✈</span>
                </div>
            </div>
            <button  className='Tickets-finalizar button' onClick={final}>Finalizar</button>
        </div>
  );
}

export { Tickets }