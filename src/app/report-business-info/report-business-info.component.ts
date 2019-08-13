import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-report-business-info',
  templateUrl: './report-business-info.component.html',
  styleUrls: ['./report-business-info.component.css']
})
export class ReportBusinessInfoComponent implements OnInit {
  model: any = {};
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    
  }
  onSubmit() {
  //   console.log("heee");
  //  console.log(this.model);
  let userId = localStorage.getItem("userId");
    let businessinfos = {
      businessLocation: this.model.businessLocation,
      businessType:this.model.businessType,
      experience: this.model.experience,
      businessEntityType:this.model.businessEntityType,
      budget: this.model.budget,
      havePartners:this.model.havePartners,
      bizRegistered:this.model.bizRegistered,
      lookingInvestors:this.model.lookingInvestors,
      email:this.model.email,
     

      
    }
    console.log(businessinfos);
   this.apiService.sendBusinessinfo(businessinfos).subscribe(res=>{
      console.log(res);
  })
  }
}
