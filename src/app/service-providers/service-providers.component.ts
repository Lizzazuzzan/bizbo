import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.css']
})
export class ServiceProvidersComponent implements OnInit {
image:string='';
content:string= "";
  constructor() { }

  ngOnInit() {
    this.image='../../assets/images/providers/patent-lawyer.jpg';
    this.content="A patent lawyer is an attorney who has the specialized qualifications necessary for representing clients in obtaining patents and acting in all matters and procedures relating to patent law and practice, such as filing an opposition. The term is used differently in different countries, and thus may or may not require the same legal qualifications as a general legal practitioner.";
  }

  isFunction(value:string){
  
    switch(value){
      case "patent-lawyer":
        this.function1();
        break;
         case "lawyer":
         this.function2();
         break;
         case "marketing-coach":
         this.function3();
         break;
         case "online-marketing-coach":
         this.function4();
         break;
         case "website-developer":
         this.function5();
         break;
         case "software-engineer":
         this.function6();
         break;
         case "general-business-coach":
         this.function7();
         break;
         case "management-coach":
         this.function8();
         break;
         case "business-startup-coach":
         this.function9();
         break;
         case "investor":
         this.function10();
         break;
    }

  }
  function1(){
this.image = "../../assets/images/providers/patent-lawyer.jpg";
this.content="A patent lawyer is an attorney who has the specialized qualifications necessary for representing clients in obtaining patents and acting in all matters and procedures relating to patent law and practice, such as filing an opposition. The term is used differently in different countries, and thus may or may not require the same legal qualifications as a general legal practitioner.";
  }
  function2(){
    this.image = "../../assets/images/providers/lawyer.jpg";
    this.content=" A lawyer or attorney is a person who practices law, as an advocate, attorney, attorney at law, barrister, barrister-at-law, bar-at-law, counsel, counselor, counsellor, counselor at law, or solicitor, but not as a paralegal or charter executive secretary.[1] Working as a lawyer involves the practical application of abstract legal theories and knowledge to solve specific individualized problems, or to advance the interests of those who hire lawyers to perform legal services.";
      }
      function3(){
        this.image = "../../assets/images/providers/marketing-coach.jpg";
        this.content="A marketing coach provides the leadership team with the data, analysis and practical recommendations your leadership team needs in order to make well informed decisions that drive the business towards short-term and long-term goals.";
          }
          function4(){
            this.image = "../../assets/images/providers/online-marketing-coach.jpg";
            this.content="The online marketing coach combines our expertise in internet marketing with your in-depth knowledge of your business to define your online sales funnel and formulate a strategic internet marketing plan that will actually convert website visitors to leads and customers.";
              }
              function5(){
                this.image = "../../assets/images/providers/web-developer.jpg";
                this.content="A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications, or applications that are run over HTTP from a web server to a web browser.";
                  }
                  function6(){
                    this.image = "../../assets/images/providers/software_engineer.png";
                    this.content="A software engineer is a person who applies the principles of software engineering to the design, development, maintenance, testing, and evaluation of computer software. We have a long list of software engineers associated with us. ";
                      }
                      function7(){
                        this.image = "../../assets/images/providers/coach.jpg";
                        this.content="Business coaching is the process of engaging in regular, structured conversation with a client: an individual or team who is within a business, profit or nonprofit organization, institution or government and who is the recipient of business coaching.";
                          }
                          function8(){
                            this.image = "../../assets/images/providers/coach.jpg";
                            this.content="Management business coaching is the process of engaging in regular, structured conversation with a client: an individual or team who is within a business, profit or nonprofit organization, institution or government and who is the recipient of business coaching.";
                              }
                              function9(){
                                this.image = "../../assets/images/providers/coach.jpg";
                                this.content="Startup business coaching is the process of engaging in regular, structured conversation with a client: an individual or team who is within a business, profit or nonprofit organization, institution or government and who is the recipient of business coaching.";
                                  }
                                  function10(){
                                    this.image = "../../assets/images/providers/coach.jpg";
                                    this.content="Think of the various types of investments as tools that can help you achieve your financial goals. Each broad investment type—from bank products to stocks and bonds—has its own general set of features, risk factors and ways in which they can be used by investors.";
                                      }
}
