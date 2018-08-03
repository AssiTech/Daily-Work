import {Pipe, PipeTransform} from '@angular/core';

@Pipe({

     name:'cube'
})

export class CustomPipe implements PipeTransform{
    transform(value:number){
    return value*value*value;
}
}