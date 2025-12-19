import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigNum',
})
export class BigNumPipe implements PipeTransform {

  transform(value: string | number): string {
    if (!value) return '';
    const num = typeof value === 'string' ? parseFloat(value) : value;
    return num.toLocaleString('fullwide', { 
      useGrouping: false,
      maximumFractionDigits: 20
    });
  }
}
