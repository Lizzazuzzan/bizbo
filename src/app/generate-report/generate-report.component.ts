import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {
  model: any = {};

  constructor(private apiService:ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  onSubmit() {
   
   let companyId = localStorage.getItem("companyId");
   
   let businessdata = []
   businessdata.push(this.model.relevance)
   businessdata.push(this.model.team)
   businessdata.push(this.model.capital)
   businessdata.push(this.model.expertise)
   businessdata.push(this.model.investment)
   businessdata.push(this.model.competition)
    let marketvalue = []
    marketvalue.push(this.model. marketvalue1)
    marketvalue.push(this.model. marketvalue2)
    marketvalue.push(this.model. marketvalue3)
    marketvalue.push(this.model. marketvalue4)
    marketvalue.push(this.model. marketvalue5)
    console.log(marketvalue);
    console.log(businessdata);
    let businessinform = {
      businessdata : businessdata,
      marketvalue: marketvalue,
      companyId: companyId,
      
     
      yaxislabel:this.model.yaxislabel,
      comments:this.model.comments,
      recommendations:this.model.recommendations
      
    }
    
    
   this.apiService.sendReport(businessinform).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/report-page/'+companyId], { relativeTo: this.route });
      let companydetails = {
        companyId : companyId
        
      }
      this.apiService.sendEmaill(companydetails).subscribe(res=>{
        console.log(res);
        this.router.navigate(['/report-page'], { relativeTo: this.route });
    })
  })

}
}
