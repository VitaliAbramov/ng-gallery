import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'imageOrder'})
export class ImageOrderPipe implements PipeTransform{
  transform(items: any[], order: any): any {

    return items.sort((item1: any, item2: any) => {
      let a:any;
      let b:any;
      if (order.name == 'date'){
        a = (new Date(item1.date)).getTime();
        b = (new Date(item2.date)).getTime();
      }
      else if (order.name == 'title') {
        a = item1.title;
        b = item2.title;
      }

      if (order.desc){
        if (a > b) return -1;
        else if (a < b) return 1;
        else return 0;
      } else {
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
      }

    });
  }
}
