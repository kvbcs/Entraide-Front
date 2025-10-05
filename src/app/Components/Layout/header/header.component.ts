import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ListItemComponent } from "../../Shared/list-item/list-item.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatMenuModule, MatIconModule, ListItemComponent, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
