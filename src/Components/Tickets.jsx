import React from 'react'
import '../estilos/Tickets.css';
function Tickets() {
    return (
        <div className='Tickets'>
            <p className='Tickets-description description'>Gracias por volar con book a fly 💚</p>
            <div className='Tickets-ticket'>
                <div className='Tickets-country'>Colombia</div>
                <div className='Tickets-passengers'>
                    <span>✈</span>
                </div>
            </div>
            <button  className='Tickets-finalizar button'>Finalizar</button>
        </div>
  );
}

export { Tickets }