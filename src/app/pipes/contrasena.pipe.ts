import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activo:boolean=true): string {
    if (activo){
      return value;
    }
    else{
      return value.replace(/./gi,'*')
    }
  }

}
