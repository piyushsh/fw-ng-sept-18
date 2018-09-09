
// redux.actions.ts

export const AIRPORT : string = "airport" ;
export const PARKING : string = "parking" ;
export const HOTEL : string = "hotel" ;
export const HIRECAR : string = "hirecar" ;

export let setAirport = ( airport:string ) => ({ type: AIRPORT,data: airport }) ;
export let setParking = ( parking:boolean ) => ({ type: PARKING,data: parking }) ;
export let setHotel = ( hotel:string ) => ({ type: HOTEL,data: hotel }) ;
export let setHireCar = ( hirecar:boolean ) => ({ type: HIRECAR,data: hirecar }) ;
