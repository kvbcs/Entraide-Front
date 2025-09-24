import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ListItemComponent } from "../../Shared/list-item/list-item.component";

@Component({
  selector: 'app-header',
  imports: [MatMenuModule, MatIconModule, ListItemComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
