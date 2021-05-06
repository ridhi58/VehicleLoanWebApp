import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpagethirdcardComponent } from './mainpagethirdcard.component';

describe('MainpagethirdcardComponent', () => {
  let component: MainpagethirdcardComponent;
  let fixture: ComponentFixture<MainpagethirdcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpagethirdcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpagethirdcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
