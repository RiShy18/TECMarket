import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBoletosComponent } from './report-rango.component';

describe('ReportBoletosComponent', () => {
  let component: ReportBoletosComponent;
  let fixture: ComponentFixture<ReportBoletosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBoletosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
