import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpagefirstcardComponent } from './mainpagefirstcard.component';

describe('MainpagefirstcardComponent', () => {
  let component: MainpagefirstcardComponent;
  let fixture: ComponentFixture<MainpagefirstcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpagefirstcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpagefirstcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
