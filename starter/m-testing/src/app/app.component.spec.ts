import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DoublePipe } from './double.pipe';
import { testData } from './testdata';

describe('AppComponent', () => {

	let cpClass;
	let cpInstance;

	beforeEach(async(() => {

		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				DoublePipe
			],
		}).compileComponents();

		cpClass = TestBed.createComponent(AppComponent);
		cpInstance = cpClass.debugElement.componentInstance;

	}));

	it('should..', async(() => {
		// expect..
	}));

});
