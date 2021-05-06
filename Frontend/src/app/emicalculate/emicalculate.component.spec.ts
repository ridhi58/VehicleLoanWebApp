import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMIcalculateComponent } from './emicalculate.component';

describe('EMIcalculateComponent', () => {
  let component: EMIcalculateComponent;
  let fixture: ComponentFixture<EMIcalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMIcalculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMIcalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
