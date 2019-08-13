import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {ApiService} from "./../../services/api.service";

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})

export class ReportPageComponent implements OnInit {

private getbarcharts;
private getpiecharts;
private getuserdata:any[];
private businesstype:any[];
private businesslocation:any[];
private capital:any[];
private businessentity:any[];
private lookinginvestors:any[];
private experience:any[];



  constructor(private apiService:ApiService) { }

  ngOnInit() {

    var path = window.location.pathname;
   var id = path.split("/")[path.split("/").length-1];
   alert(id); 
   
      this.getbarcharts = "";
      let companyId = localStorage.getItem("companyId");
      console.log("--");
      console.log(companyId);
      

    this.apiService.getChartData(companyId).subscribe(
        (response: any) => {
          this.getbarcharts = response.data["marketvalue"];
          console.log(this.getbarcharts);
          this.barChart();

      },
      error => {
 
      }
    );
    this.getpiecharts = "";
   
    this.apiService.getPieChart(companyId).subscribe(
        (response: any) => {
          this.getpiecharts = response.data["businessdata"];
          console.log(this.getpiecharts);
          this.pieChart();

      },
      error => {
 
      }
    );
    
      
    this.apiService.getUserData(companyId).subscribe(
        (response: any) => {
          this.getuserdata = response.data;
          console.log(this.getuserdata);
          this.businesstype = this.getuserdata["businessType"];
          this.businesslocation = this.getuserdata["businessLocation"];
          this.capital = this.getuserdata["budget"];
          this.businessentity = this.getuserdata["businessEntityType"];
          this.lookinginvestors = this.getuserdata["lookingInvestors"];
          this.experience = this.getuserdata["experience"];
          
          },
        error => {
   
        }
      );



  }
  barChart(){

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2018", "2017", "2016", "2015", "2014"],
        datasets: [{
            label: 'Growth percentage',
            data: this.getbarcharts,
            backgroundColor: [
                'rgba(	255, 207, 162)',
                'rgba(	255, 207, 162)',
                'rgba(	255, 207, 162)',
                'rgba(	255, 207, 162)',
                'rgba(	255, 207, 162)',
                
                
            ],
            borderColor: [
                'rgba(	255, 207, 162)',
                'rgba(	255, 207, 162)',
                'rgba(	255, 207, 162)',
                'rgba(	255, 207, 162)',
                'rgba(	255, 207, 162)',
                
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                barPercentage: 0.3
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
  }
  pieChart(){
    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx,{
      type: 'pie',
      data: {
        labels: ["Capital", "Competition", "Relevance", "Team", "Expertise", "Investment"],
            datasets: [{
                label: '# of Votes',
                data: this.getpiecharts,
                backgroundColor: [
                    'rgba(75, 192, 192)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 99, 131)',
                    'rgba(255, 159, 64)',
                    'rgba(255, 205, 86)',
                    'rgba(253,87,57)',
                ],
                borderColor: [
                    'rgba(75, 192, 192)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 99, 131)',
                    'rgba(255, 159, 64)',
                    'rgba(255, 205, 86)',
                    'rgba(253,87,57)',
                ],
                borderWidth: 1
            }]
      },
      options:{
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
    });
  }
}



