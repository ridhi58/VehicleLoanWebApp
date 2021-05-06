import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpagesecondcardComponent } from './mainpagesecondcard.component';

describe('MainpagesecondcardComponent', () => {
  let component: MainpagesecondcardComponent;
  let fixture: ComponentFixture<MainpagesecondcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpagesecondcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpagesecondcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
