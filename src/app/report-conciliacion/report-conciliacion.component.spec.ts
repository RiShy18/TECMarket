import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportConciliacionComponent } from './report-conciliacion.component';

describe('ReportConciliacionComponent', () => {
  let component: ReportConciliacionComponent;
  let fixture: ComponentFixture<ReportConciliacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportConciliacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportConciliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
