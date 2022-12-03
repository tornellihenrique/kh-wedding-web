import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanizedDatetime',
})
export class HumanizedDatetimePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    }

    const date = new Date(value);

    if (!date) {
      return null;
    }

    return `${date.getDate()} de ${this.getMonthName(
      date.getMonth()
    )} de ${date.getFullYear()} às ${
      date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    }:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
  }

  private getMonthName(month: number) {
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    return months[month];
  }
}
