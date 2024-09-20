import {Component, Input} from '@angular/core';

@Component({
  selector: 'svg[icon]',
  standalone: true,
  imports: [],
  templateUrl: '<svg:use {attr.href]="href"></svg:use>svg>',
  styles: ['']
})
export class SvgIconComponent {
  @Input()icon = ''

  get href() {
    return `/assets/svg/${this.icon}.svg#${this.icon}`;
  }
}
