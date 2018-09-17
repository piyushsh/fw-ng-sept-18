export interface IPerson {
    fname: string,
    lname: string,
    city: string,
    email: string,
    photo: string
}

export class Person implements IPerson {

    constructor(public fname, public lname,
        public city, public email, public photo) {

    }
}