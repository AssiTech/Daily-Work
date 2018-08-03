import { Component } from '@angular/core';
import { EmployeeServices} from './Services/services.service';
import {StudServices1} from './Services/student.service';
import {CountryService} from './Services/country.service';
@Component({
  selector: 'namrata',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeServices,StudServices1,CountryService]
})
export class AppComponent {  

  title = 'Assimilate Technology';

  constructor(private em2:EmployeeServices, private stud2:StudServices1, private cs:CountryService){}
  number=5;
  name='AssiMilaTe tEchNolOGy';

  
   showData=true;
   names=[
     {name: "Raj", city: "Pune"},
     {name: "Simran", city: "Nagar"},
   ]

   data=[
     {name:'Aish',
     salary:'5000'}
   ]

   position="first";

    myst={
      'color': 'red',
      'font-size':'24px',
    }
    today=new Date(); 

    public name1:String='Assimilate';
    public get(){
      this.name1="Technosys";
    }
    emprollno:any;
    empobj:String[]=[];
    public DisplayEmpData(){
      this.empobj=this.em2.get(this.emprollno)
    }
    studid:any;
    studobj:String[]=[];
    public DisplayStudData(){
      this.studobj=this.stud2.getStud(this.studid)
    }

    country:String;
    ctrobj:any[]=[];
    getCountryInfo(){
            this.cs.getCountryDetails(this.country).subscribe(res=>this.ctrobj=res.json()[0]);
    }
    ctrobj1:any[]=[];
    getCountriesInfo(){
            this.cs.getCountriesDetails().subscribe(res=>this.ctrobj1=res.json());
    }

    user: any={name:" ",job:"  ",city:" "};
    getData(){
       this.cs.saveProfile().subscribe(res=>this.user=res.json());
       console.log(this.user);
    }

}

