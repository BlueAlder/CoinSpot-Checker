import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinValueComponent } from './coin-value.component';

describe('CoinValueComponent', () => {
  let component: CoinValueComponent;
  let fixture: ComponentFixture<CoinValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
