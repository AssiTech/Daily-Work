import {Injectable} from '@angular/core';

@Injectable()

export class EmployeeServices{
    public emp=[
        {rollno:"1",name:"Namrata",dept:"IT",salary:"50000"},
        {rollno:"2",name:"Aishwarya",dept:"DM",salary:"56000"},
        {rollno:"3",name:"Akshay",dept:"PM",salary:"60000"},
        {rollno:"4",name:"Pankaj",dept:"PD",salary:"65000"},
        {rollno:"5",name:"Ankita",dept:"IT",salary:"50000"},
    ]
    public get(rollno:String):any{
    let em1:any;
        for(let i=0;i<this.emp.length;i++)
        {
            if(rollno===this.emp[i].rollno){
                em1=this.emp[i];
            }
        }
        return em1;
    }
}