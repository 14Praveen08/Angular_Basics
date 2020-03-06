import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt'
})
export class CustompipePipe implements PipeTransform {
  discount=0;
  total=0;
  transform(value: any, ...args: any[]): any {
     this.discount=((value*50)/100);
     this.total = value-this.discount;

    return this.total;
    }

}
