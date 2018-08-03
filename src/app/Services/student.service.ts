import {Injectable} from '@angular/core';

@Injectable()

export class StudServices1{
   public stud=[
        {id:"1", name:"Namrata", branch:"CSE", marks:"60%" },
        {id:"2", name:"Akshara", branch:"CO", marks:"69%" },
        {id:"3", name:"Nobita", branch:"ETC", marks:"80%" },
        {id:"4", name:"Champ", branch:"IT", marks:"90%" },
        {id:"5", name:"Nimu", branch:"ME", marks:"100%" },
    ]
    public getStud(id:String):any{
    let stud1:any;
    for(let i=0;i<this.stud.length;i++){
        if(id===this.stud[i].id){
            stud1=this.stud[i];
        }
    }return stud1;
    }
}