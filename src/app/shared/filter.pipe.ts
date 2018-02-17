import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'imageFilter'})
export class ImageFilterPipe implements PipeTransform{
  transform(items: any[], search: string): any {
    if (!search) return items;

    return items.filter(item => {
      if (item.title.indexOf(search) > -1) {
        return true;
      }
      return false;
    });

  }
}
