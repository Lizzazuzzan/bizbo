import { Component, OnInit } from '@angular/core';

import {ApiService} from "./../../services/api.service"
@Component({
  selector: 'app-report-request',
  templateUrl: './report-request.component.html',
  styleUrls: ['./report-request.component.css']
})

export class ReportRequestComponent implements OnInit {

private requests:any[];
private companyId; 
 
  
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getBusinessInfo().subscribe(
      (response: any) => {
        this.requests = response.data;
        
 
      },
      error => {
 
      }
    );
  }

  navigateGenerateReport(companyId){
    localStorage.setItem('companyId', companyId);

  }

}
