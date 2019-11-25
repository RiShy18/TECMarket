import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarBagCartsComponent } from './cerrar-bag-carts.component';

describe('CerrarBagCartsComponent', () => {
  let component: CerrarBagCartsComponent;
  let fixture: ComponentFixture<CerrarBagCartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerrarBagCartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerrarBagCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
