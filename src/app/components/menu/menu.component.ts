import { Component, Input } from '@angular/core';
import { MenuData } from './data/menu.data';
import { Menu } from './models/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() content: Menu = MenuData

}
