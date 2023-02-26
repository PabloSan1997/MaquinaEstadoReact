import { createMachine, assign } from 'xstate';

const bookingMachine = createMachine({
  predictableActionArguments: true,
  id:"Comprar tiket",
  initial:"inicio",
  context:{
    passengers:[],
    selectCountry:''
  },
  states:{
    inicio:{
      on:{
        START:{
          target:"search",
          actions:"imprimirInicio"
        }
      }
    },
    search:{
      on:{
        CONTINUE:{
          target:"passengers",
          actions: "asignar"
        },
        CANCELAR:"inicio"
      }
    },
    passengers:{
      on:{
        DONE:"ticket",
        CANCELAR:{
          target:"inicio",
          actions:"limpiarPasajeros"
        },
        ADD:{
          target:"passengers",
          actions:"agregar"
        }
      }
    },
    ticket:{
      on:{
        FINISH:"inicio"
      }
    },

  }
},
{
  actions:{
    imprimirInicio:()=>console.log('imprimir inicio'),
    asignar: assign({selectCountry:(context, event)=>event.selectCountry}),
    agregar: assign((context,event)=>context.passengers.push(event.newPassengers)),
    limpiarPasajeros: assign((context, event)=>{context.passengers=[], context.selectCountry=''})
  }
});
export{bookingMachine}