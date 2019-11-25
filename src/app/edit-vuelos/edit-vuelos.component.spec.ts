import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVuelosComponent } from './edit-vuelos.component';

describe('EditVuelosComponent', () => {
  let component: EditVuelosComponent;
  let fixture: ComponentFixture<EditVuelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVuelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
