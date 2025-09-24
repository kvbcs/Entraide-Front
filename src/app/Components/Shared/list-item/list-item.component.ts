import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-item',
  imports: [MatIconModule],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {
  @Input() label: string = 'Texte';
  @Input() disabled: boolean = false;
  @Input() icon?: string;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
