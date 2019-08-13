import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportThankyouComponent } from './report-thankyou.component';

describe('ReportThankyouComponent', () => {
  let component: ReportThankyouComponent;
  let fixture: ComponentFixture<ReportThankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportThankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
