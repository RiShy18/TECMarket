import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportdestinosComponent } from './report-destinos.component';

describe('ReportdestinosComponent', () => {
  let component: ReportdestinosComponent;
  let fixture: ComponentFixture<ReportdestinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportdestinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportdestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
