import { Component } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  imports: [],
  templateUrl: './color-selector.component.html',
  styleUrl: './color-selector.component.scss',
})
export class ColorSelectorComponent {
  changePrimaryColor(newColor: string): void {
    document.documentElement.style.setProperty('--primary', newColor);
  }
}
