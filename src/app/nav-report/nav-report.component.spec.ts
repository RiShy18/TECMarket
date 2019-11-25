import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavReportComponent } from './nav-report.component';

describe('NavReportComponent', () => {
  let component: NavReportComponent;
  let fixture: ComponentFixture<NavReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
