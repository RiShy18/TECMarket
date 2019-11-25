import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBagCartsComponent } from './edit-bag-carts.component';

describe('EditBagCartsComponent', () => {
  let component: EditBagCartsComponent;
  let fixture: ComponentFixture<EditBagCartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBagCartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBagCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
