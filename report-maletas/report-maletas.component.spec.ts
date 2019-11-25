import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMaletasComponent } from './report-maletas.component';

describe('ReportMaletasComponent', () => {
  let component: ReportMaletasComponent;
  let fixture: ComponentFixture<ReportMaletasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMaletasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMaletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
