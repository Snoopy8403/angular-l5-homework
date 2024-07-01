import { Pipe, PipeTransform } from '@angular/core';
import { InfectionTest } from './infecttion-test.model';

@Pipe({
  name: 'infectionTest',
  standalone: true
})
export class InfectionTestPipe implements PipeTransform {

  transform(infection: InfectionTest, iWantTheTruth = false): any {
     
    if (iWantTheTruth) {
      return `Igaz adatok alapján a napi tesztek száma: ${infection.dayTest}, új fertőzöttek száma: ${infection.newInfected} és a korházban jelenleg ápoltak száma: ${infection.inHospital}`;      
    }else {
      return `A statisztika szerint a napi tesztek száma: ${infection.dayTest * 2}, új fertőzöttek száma: ${infection.newInfected} és a korházban jelenleg ápoltak száma: ${infection.inHospital / 3} fő amiből mindannyian oltatlan idős krónikus betegek`;      
    }
  }

}
