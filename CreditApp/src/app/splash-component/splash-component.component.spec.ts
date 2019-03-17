import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashComponentComponent } from './splash-component.component';

describe('SplashComponentComponent', () => {
  let component: SplashComponentComponent;
  let fixture: ComponentFixture<SplashComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
