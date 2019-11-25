import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagCartsComponent } from './bag-carts.component';

describe('BagCartsComponent', () => {
  let component: BagCartsComponent;
  let fixture: ComponentFixture<BagCartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagCartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
