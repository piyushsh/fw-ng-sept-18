import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Radio4Component } from './radio4.component';

describe('Radio4Component', () => {
  let component: Radio4Component;
  let fixture: ComponentFixture<Radio4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Radio4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Radio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
