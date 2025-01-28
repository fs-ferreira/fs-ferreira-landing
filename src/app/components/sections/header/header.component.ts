import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { LogoComponent } from '../../../shared/components/logo/logo.component';
import { ChevronDownButtonComponent } from '../../../shared/components/chevron-down-button/chevron-down-button.component';
import { WavesComponent } from '../../../shared/components/waves/waves.component';
import { ColorSelectorComponent } from '../../../shared/components/color-selector/color-selector.component';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    LogoComponent,
    ChevronDownButtonComponent,
    WavesComponent,
    ColorSelectorComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
  @Output() scrollToResume = new EventEmitter<void>();

  public onChevronClick() {
    this.scrollToResume.emit();
  }
}
