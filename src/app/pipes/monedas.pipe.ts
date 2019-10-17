import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monedas'
})
export class MonedasPipe implements PipeTransform {

  transform(value: any, tipoMoneda: string): any {
    if (tipoMoneda === 'Euro') {
      return value + ' €';
    } else {
      return '$ ' + value;
    }
  }  

}
