import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBagCartsComponent } from './create-bag-carts.component';

describe('CreateBagCartsComponent', () => {
  let component: CreateBagCartsComponent;
  let fixture: ComponentFixture<CreateBagCartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBagCartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBagCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
