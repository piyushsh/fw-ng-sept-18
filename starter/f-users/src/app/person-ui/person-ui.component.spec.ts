import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonUiComponent } from './person-ui.component';

describe('PersonUiComponent', () => {
  let component: PersonUiComponent;
  let fixture: ComponentFixture<PersonUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
