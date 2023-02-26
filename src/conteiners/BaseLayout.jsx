import { useMachine } from '@xstate/react'
import React from 'react'
import { Nav } from '../Components/Nav.jsx';
import { bookingMachine } from '../machines/bookingMachine.js'
import { StepsLayout } from './StepsLayout.jsx';
import '../estilos/BaseLayout.css';
function BaseLayout() {
    const [state, send] = useMachine(bookingMachine);
  return (
    <div className='BaseLayout'>
      <Nav />
      <StepsLayout/>
    </div>
  )
}

export  {BaseLayout}