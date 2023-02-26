import React from 'react'
import '../estilos/Search.css';
function Search({send}) {
    const [flight, setFlight] = React.useState('');
    const seguir = ()=>{
        send('CONTINUE', {selectCountry:flight});
    }
    const handleSelectChange = (event) => {
        setFlight(event.target.value);
      };
    const options = ['Mexico', 'Venezuela', 'Colombia', 'Peru', 'Wakanda'];
    return (
        <div className='Search'>
            <p className='Search-title title'>Busca tu destino</p>
            <select id="country" className='Search-select' onChange={handleSelectChange} value={flight}>
                <option value="" disabled defaultValue>Escoge un país</option>
                {options.map(elemento=>(
                     <option value={elemento} key={elemento}>{elemento}</option>
                ))}
            </select>
            <button  className='Search-continue button' onClick={seguir}>Continuar</button>
        </div>
    )
}

export { Search }