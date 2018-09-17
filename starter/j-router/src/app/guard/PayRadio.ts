import { CanActivate } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()
export class PayRadio implements CanActivate {

	constructor() { }

	canActivate = () => {
		return localStorage.payRadio ? Number(localStorage.payRadio) === 1 : false;
	}
}
