import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaletasComponent } from './maletas.component';

describe('MaletasComponent', () => {
  let component: MaletasComponent;
  let fixture: ComponentFixture<MaletasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaletasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
