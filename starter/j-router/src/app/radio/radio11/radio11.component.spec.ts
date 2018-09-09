import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Radio11Component } from './radio11.component';

describe('Radio11Component', () => {
  let component: Radio11Component;
  let fixture: ComponentFixture<Radio11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Radio11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Radio11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
