import { Pipe, PipeTransform } from '@angular/core';
import {Materiau} from './materiau';
import {Imprimante } from './imprimante';

function hasMat(item: Imprimante, filter: Materiau) {
  let hasMaterial: boolean = false;
  item.materiaux.map( next => {
    if (next.id === filter.id) {
      hasMaterial = true;
    }
    }
  )
  return hasMaterial;
}

@Pipe({
  name: 'matFilter',
  pure : false
})
export class MatFilterPipe implements PipeTransform {

  transform(items: Imprimante[] , filter: Materiau): Imprimante[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => hasMat(item, filter));
  }
}
