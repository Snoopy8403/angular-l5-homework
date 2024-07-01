import { Directive, HostListener, Input } from '@angular/core';
import { InfectionTest } from './infecttion-test.model';

@Directive({
  selector: '[appInfection]',
  standalone: true
})
export class InfectionDirective {
  @Input('appInfection') set infection(infection: InfectionTest){
    console.log(infection);
  }

  constructor() { }

  @HostListener('keydown')
  onKeyDown() {
    console.log('keydown');
  }
}
