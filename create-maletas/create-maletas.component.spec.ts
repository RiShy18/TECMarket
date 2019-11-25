import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaletasComponent } from './create-maletas.component';

describe('CreateMaletasComponent', () => {
  let component: CreateMaletasComponent;
  let fixture: ComponentFixture<CreateMaletasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMaletasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMaletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
