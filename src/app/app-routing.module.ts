import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ServiceProvidersComponent } from './service-providers/service-providers.component';
import {  AdminComponent } from './admin/admin.component';
import {  ReportBusinessInfoComponent } from './report-business-info/report-business-info.component';
import { ValidateComponent } from './validate/validate.component';
import { TestingComponent } from './testing/testing.component';
import { FundingComponent } from './funding/funding.component';
import { ReportRequestComponent } from './report-request/report-request.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { ReportAdminThankyouComponent } from './report-admin-thankyou/report-admin-thankyou.component';
import { ReportThankyouComponent } from './report-thankyou/report-thankyou.component';
import { ReportPageComponent } from './report-page/report-page.component';




const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component:AboutComponent },
  {path: 'how-it-works', component:HowItWorksComponent},
  {path: 'service-providers', component:ServiceProvidersComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'report-business-info', component:ReportBusinessInfoComponent},
  {path: 'validate', component:ValidateComponent},
  {path: 'testing', component:TestingComponent},
  {path: 'funding', component:FundingComponent},
  {path: 'report-request', component:ReportRequestComponent},
  {path: 'generate-report', component:GenerateReportComponent},
  {path: 'report-admin-thankyou', component:ReportAdminThankyouComponent},
  {path: 'report-thankyou', component:ReportThankyouComponent},
  {path: 'report-page/:id', component:ReportPageComponent},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  
  
})
export class AppRoutingModule { }
