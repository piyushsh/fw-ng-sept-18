
import { InjectionToken } from '@angular/core';

import { createStore } from 'redux';
import { reducer } from './redux.reducer';

export function makeStore() {
    return createStore( reducer );
}

export const TripStore = new InjectionToken('Trip.store');

export const storeProvider = [
    { provide: TripStore, useFactory: makeStore }
];
