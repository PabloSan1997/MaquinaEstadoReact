import { createMachine, assign } from 'xstate';

const bookingMachine = createMachine({
  id:"Comprar tiket",
  initial:"inicio",
  states:{
    inicio:{
      on:{
        START:"search"
      }
    },
    search:{
      on:{
        CONTINUE:"passengers",
        CANCELAR:"inicio"
      }
    },
    passengers:{
      on:{
        DONE:"ticket",
        CANCELAR:"inicio"
      }
    },
    ticket:{
      on:{
        FINISH:"inicio"
      }
    },

  }
});
export{bookingMachine}