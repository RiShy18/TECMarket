import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMaletasComponent } from './edit-maletas.component';

describe('EditMaletasComponent', () => {
  let component: EditMaletasComponent;
  let fixture: ComponentFixture<EditMaletasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMaletasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMaletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
