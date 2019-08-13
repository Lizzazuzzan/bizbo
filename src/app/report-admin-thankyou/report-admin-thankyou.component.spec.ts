import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAdminThankyouComponent } from './report-admin-thankyou.component';

describe('ReportAdminThankyouComponent', () => {
  let component: ReportAdminThankyouComponent;
  let fixture: ComponentFixture<ReportAdminThankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAdminThankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAdminThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
