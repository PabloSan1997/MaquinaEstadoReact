import React from 'react'
import '../estilos/Search.css';
function Search() {
    return (
        <div className='Search'>
            <p className='Search-title title'>Busca tu destino</p>
            <select id="country" className='Search-select'>
                <option value="" disabled defaultValue>Escoge un país</option>
            </select>
            <button  className='Search-continue button'>Continuar</button>
        </div>
    )
}

export { Search }