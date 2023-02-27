import React from 'react'
import '../estilos/Search.css';
function Search({send, state}) {
    const [flight, setFlight] = React.useState('');
    const seguir = ()=>{
        send('CONTINUE', {selectCountry:flight});
    }
    const handleSelectChange = (event) => {
        setFlight(event.target.value);
      };
      const options = state.context.countries;
    return (
        <div className='Search'>
            <p className='Search-title title'>Busca tu destino</p>
            <select id="country" className='Search-select' onChange={handleSelectChange} value={flight}>
                <option value="" disabled defaultValue>Escoge un país</option>
                {options.map(elemento=>(
                     <option value={elemento.name.common} key={elemento.name.common}>{elemento.name.common}</option>
                ))}
            </select>
            <button  className='Search-continue button' onClick={seguir}>Continuar</button>
        </div>
    )
}

export { Search }