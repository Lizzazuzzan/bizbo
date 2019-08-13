import { Injectable } from '@angular/core';   
import { HttpClient } from  '@angular/common/http';
// import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
// import { Observable } from 'rxjs/Observable';  
// import 'rxjs/add/operator/map';  
// import 'rxjs/add/operator/do';  
var baseURL = "http://52.8.38.50" 

@Injectable()  
export class ApiService {  
  
  
  constructor(private http:HttpClient) { }  
  
  sendFeedback(feedbacks){
      return this.http.post(baseURL+'/feedback',feedbacks)
  }
  sendBusinessinfo(businessinfo){
    return this.http.post(baseURL+'/businessinfo',businessinfo)
}
sendReport(generatereport){
  return this.http.post(baseURL+'/generate-report',generatereport)
}  
getBusinessInfo(){      
     return this.http.get(baseURL+'/businessinfo')  
               
  }  
  getChartData(companyId){      
    return this.http.get(baseURL+'/generate-report?companyId='+companyId)  
              
 }  
 getPieChart(companyId){
   return this.http.get(baseURL+'/generate-report?companyId='+companyId)
 }
 getUserData(userId){ 
      
  return this.http.get(baseURL+'/businessdata?companyId='+userId)  
            
} 
sendEmaill(companyId){
  return this.http.post(baseURL+'/send-email',companyId)
}  


}