import React from 'react'
import { Passengers } from '../Components/Passengers';
import { Search } from '../Components/Search';
import { Tickets } from '../Components/Tickets';
import { Welcome } from '../Components/Welcome'
import '../estilos/StepsLayout.css';
function StepsLayout({state, send}){
  const ver = (texto) =>{
    return state.matches(texto);
  }
  return (
    <div className='StepsLayout'>
     {ver('inicio')? <Welcome send={send}/>:null}
     {ver('search')? <Search send={send} />:null}
     {ver('passengers')? <Passengers send={send}/>:null}
     {ver('ticket')? <Tickets send={send} state={state}/>:null}
    </div>
  )
}

export  {StepsLayout}