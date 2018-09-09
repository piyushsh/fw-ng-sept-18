
// redux.reducer.ts

import { Trip } from './redux.state';

import { AIRPORT, PARKING, HOTEL, HIRECAR } from './redux.actions';

const EMPTY_STATE = {
    airport : "Gatwick",
    parking : false,
    hotel : "four",
    hirecar: false
}

export let reducer = (state:Trip=EMPTY_STATE, action) :Trip => {

    switch (action.type) {
        case AIRPORT:
            return Object.assign( {} , state, { airport: action.data });
        case PARKING:
            return Object.assign( {} , state, { parking: action.data });
        case HOTEL:
            return Object.assign( {} , state, { hotel: action.data });
        case HIRECAR:
            return Object.assign( {} , state, { hirecar: action.data });

        default:
            return state;
    }

}
