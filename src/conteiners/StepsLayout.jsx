import React from 'react'
import { Passengers } from '../Components/Passengers';
import { Search } from '../Components/Search';
import { Tickets } from '../Components/Tickets';
import { Welcome } from '../Components/Welcome'
import '../estilos/StepsLayout.css';
function StepsLayout(){
  return (
    <div className='StepsLayout'>
        <Tickets/>
    </div>
  )
}

export  {StepsLayout}