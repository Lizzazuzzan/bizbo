import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
declare var $: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  model: any = {};
  
  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }
  onSubmit() {
   
    let feedback = {
      feedback: this.model.feedback,
      email:this.model.email
    }
    this.apiService.sendFeedback(feedback).subscribe(res=>{
      console.log(res);
  })
  }

  openModal(){
    
  }
 
}
