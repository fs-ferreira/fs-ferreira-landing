import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { ChevronDownButtonComponent } from '../../../shared/components/chevron-down-button/chevron-down-button.component';

@Component({
  selector: 'app-resume',
  imports: [ChevronDownButtonComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  @Output() scrollToPaths = new EventEmitter<void>();

  public cards = [
    {
      intro: 'Prazer, Felipe!',
      title: '+5 Anos',
      subtitle: 'de experiência como desenvolvedor',
    },
    {
      intro: 'Sou um dev',
      title: 'Full Stack',
      subtitle: 'focado em Angular e Java',
    },
    {
      intro: 'Te ensinarei a ir',
      title: 'Do zero',
      subtitle: 'à sua primeira vaga na área de TI',
    },
    {
      intro: 'Não é novato? Que tal',
      title: 'Con-selhos',
      subtitle: 'e mentorias voltadas para o seu sucesso?',
    },
  ];

  constructor(public elementRef: ElementRef) {}

  public onChevronClick() {
    this.scrollToPaths.emit();
  }
}
