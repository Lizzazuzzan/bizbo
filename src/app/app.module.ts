import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ApiService} from './../services/api.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceProvidersComponent } from './service-providers/service-providers.component';
import { AppRoutingModule } from './/app-routing.module';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportBusinessInfoComponent } from './report-business-info/report-business-info.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { ValidateComponent } from './validate/validate.component';
import { TestingComponent } from './testing/testing.component';
import { FundingComponent } from './funding/funding.component';
import { ReportRequestComponent } from './report-request/report-request.component';
import { ReportAdminThankyouComponent } from './report-admin-thankyou/report-admin-thankyou.component';
import { ReportThankyouComponent } from './report-thankyou/report-thankyou.component';
import { ReportPageComponent } from './report-page/report-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceProvidersComponent,
    HowItWorksComponent,
    AdminComponent,
    IndexComponent,
    NavbarComponent,
    ReportBusinessInfoComponent,
    GenerateReportComponent,
    ValidateComponent,
    TestingComponent,
    FundingComponent,
    ReportRequestComponent,
    ReportAdminThankyouComponent,
    ReportThankyouComponent,
    ReportPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
