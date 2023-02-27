import { createMachine, assign } from "xstate";
import { fetchCountries } from "../utils/api";


const fillCountries = {
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: 'getCountries',
        src: () => fetchCountries,
        onDone: {
          target: 'success',
          actions: assign({
            countries: (context, event) => event.data,
          })
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: 'Fallo el request',
          })
        }
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};

const bookingMachine = createMachine(
  {
    id: "buy plane tickets",
    initial: "inicio",
    context: {
      passengers: [],
      selectedCountry: "",
      countries: [],
      error: '',
    },
    states: {
      inicio: {
        on: {
          START: {
            target: "search",
          },
        },
      },
      search: {
        on: {
          CONTINUE: {
            target: "passengers",
            actions: assign({
              selectedCountry: (context, event) => event.selectCountry,
            }),
          },
          CANCEL: "inicio",
        },
        ...fillCountries,
      },
      tickets: {
        after: {
          5000: {
            target: 'inicio',
            actions: 'cleanContext',
          }
        },
        on: {
          FINISH: "inicio",
        },
      },
      passengers: {
        on: {
          DONE: {
            target: "tickets",
            cond: "moreThanOnePassenger"
          },
          CANCEL: {
            target: "inicio",
            actions: "cleanContext",
          },
          ADD: {
            target: "passengers",
            actions: assign((context, event) =>
              context.passengers.push(event.newPassengers)
            ),
          },
        },
      },
    },
  },
  {
    actions: {
      cleanContext: assign({
        selectedCountry: "",
        passengers: [],
      }),
    },
    guards: {
      moreThanOnePassenger: (context) => {
        return context.passengers.length > 0;
      }
    },
  }
);

export {bookingMachine};