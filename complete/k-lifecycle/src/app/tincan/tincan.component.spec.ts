import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TincanComponent } from './tincan.component';

describe('TincanComponent', () => {
  let component: TincanComponent;
  let fixture: ComponentFixture<TincanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TincanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TincanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
