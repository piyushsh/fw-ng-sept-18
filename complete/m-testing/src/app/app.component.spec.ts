import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DoublePipe } from './double.pipe';
import { testData } from './testdata';

describe('AppComponent', () => {

	let componentClass;
	let component;

	// let testData = {
	// 	street : "150 Minories, the City of London",
	// 	hypenStreet : "150-minories,-the-city-of-london",
	// 	value : 25,
    //     doubleValue : 50
	// }

	beforeEach(async(() => {

		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				DoublePipe
			],
		}).compileComponents();

		componentClass = TestBed.createComponent(AppComponent);
		component = componentClass.debugElement.componentInstance;

	}));

	it('should create an instance of the component', async(() => {
		expect(component).toBeTruthy();
	}));

	it('should create a street property', async(() => {
		expect(component.property.street).toEqual(testData.street);
	}));

	it('should hypenate() strings', async(() => {
		expect(component.hypenate(component.property.street)).toEqual(testData.hypenStreet);
	}));

	it('should render the street number in an <h1>', async(() => {

		componentClass.detectChanges();
		let heading = componentClass.debugElement.nativeElement.querySelector('h1');
		expect(heading.textContent).toContain(testData.street);

	}));

	it('should render the value using the double PIPE', async(() => {

		componentClass.detectChanges();
		let heading = componentClass.debugElement.nativeElement.querySelector('.double');
		expect(heading.textContent).toContain(testData.doubleValue);

	}));

});
