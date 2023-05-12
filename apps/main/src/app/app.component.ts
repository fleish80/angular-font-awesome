import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faCoffee} from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  imports: [
    FontAwesomeModule,
    AsyncPipe,
    NgIf
  ],
  selector: 'df-root',
  template: `
    <fa-icon [icon]="faCoffee"/>

    <fa-icon *ngIf="faHouse" [icon]="faHouse"/>

  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  faCoffee = faCoffee;
  faHouse!: IconDefinition;

  constructor() {
    console.log('faCoffee', faCoffee);
    this.setIcon();
  }

  async setIcon() {
    const res = await import('@fortawesome/free-solid-svg-icons/faHouse');
    console.log('res',res);
    this.faHouse = res.faHouse;
  }
}
