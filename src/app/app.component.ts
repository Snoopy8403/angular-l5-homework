import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfectionTest } from './infectionTest/infecttion-test.model';
import { CommonModule } from '@angular/common';
import { InfectionTestPipe } from './infectionTest/infection-test.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, InfectionTestPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-l5-homework';

  infections: InfectionTest[] = [
    {dayTest: 3400, newInfected: 120, inHospital: 15},
    {dayTest: 3950, newInfected: 187, inHospital: 19},
    {dayTest: 4211, newInfected: 245, inHospital: 40},
    {dayTest: 3900, newInfected: 210, inHospital: 36},
    {dayTest: 4123, newInfected: 189, inHospital: 38},
    {dayTest: 3789, newInfected: 142, inHospital: 32},
    {dayTest: 3555, newInfected: 96, inHospital: 23}
  ];
}
