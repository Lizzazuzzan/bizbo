import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessInfoComponent } from './report-business-info.component';

describe('ReportBusinessInfoComponent', () => {
  let component: ReportBusinessInfoComponent;
  let fixture: ComponentFixture<ReportBusinessInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBusinessInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
