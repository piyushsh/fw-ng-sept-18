import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DoublePipe } from './double.pipe';
import { testData } from './testdata';
import { ReversePipe } from './pipes/reverse.pipe';
import { CapitalPipe } from './pipes/capital.pipe';
import { DataService, FakeService } from './services/data.service';

describe('AppComponent', () => {

	let cpClass;
	let cpInstance;

	beforeEach(async(() => {

		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				DoublePipe,
				ReversePipe,
				CapitalPipe
			],
			providers: [{
				provide: DataService,
				useClass: FakeService
			}]
		}).compileComponents();

		cpClass = TestBed.createComponent(AppComponent);
		cpInstance = cpClass.debugElement.componentInstance;

	}));

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		//Refresh component DOM 
		fixture.detectChanges();
		const app = fixture.debugElement.componentInstance;
		console.log(app);
		console.log(fixture.debugElement.nativeElement);
		//Assert
		expect(app).toBeTruthy();
		expect(app.ads.getName()).toEqual("Fake Service Name")
	}));

});
