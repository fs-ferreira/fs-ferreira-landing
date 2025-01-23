import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'chevron-down',
  imports: [],
  templateUrl: './chevron-down-button.component.html',
  styleUrl: './chevron-down-button.component.scss',
})
export class ChevronDownButtonComponent {
  @Input('isPrimary')
  public isPrimary = true;
}
