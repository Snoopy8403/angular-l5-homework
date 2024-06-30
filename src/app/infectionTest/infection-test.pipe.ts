import { Pipe, PipeTransform } from '@angular/core';
import { InfectionTest } from './infecttion-test.model';

@Pipe({
  name: 'infectionTest',
  standalone: true
})
export class InfectionTestPipe implements PipeTransform {

  transform(infection: InfectionTest, ...args: unknown[]): any {
    
    
    return infection.dayTest;
  }

}
