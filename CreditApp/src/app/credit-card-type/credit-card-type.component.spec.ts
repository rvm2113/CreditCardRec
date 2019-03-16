import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardTypeComponent } from './credit-card-type.component';

describe('CreditCardTypeComponent', () => {
  let component: CreditCardTypeComponent;
  let fixture: ComponentFixture<CreditCardTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
