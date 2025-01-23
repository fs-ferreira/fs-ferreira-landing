import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { ChevronDownButtonComponent } from '../../../shared/components/chevron-down-button/chevron-down-button.component';

@Component({
  selector: 'app-paths',
  imports: [ChevronDownButtonComponent],
  templateUrl: './paths.component.html',
  styleUrl: './paths.component.scss',
})
export class PathsComponent {
  @Output() scrollToContact = new EventEmitter<void>();

  public cards = [
    {
      title: 'Básico',
      items: [
        'Introdução à Programação',
        'Linguagem HTML',
        'Programação Orientada à Objetos',
        'Qual carreira quero seguir?',
        'Testes Unitários e TDD',
      ],
    },
    {
      title: 'Front-End',
      items: [
        'Conhecendo o Typescript',
        'Escolhendo seu Framework dominante',
        'Utilizando bibliotecas de estilização',
        'Boas Práticas e Testes Unitários',
      ],
    },
    {
      title: 'Back-End',
      items: [
        'Introdução ao Java',
        'APIs REST e RESTful',
        'Conhecendo o Spring',
        'Monolítos X Microserviços',
        'Boas Práticas e Testes Unitários',
      ],
    },
  ];

  constructor(public elementRef: ElementRef) {}

  public onChevronClick() {
    this.scrollToContact.emit();
  }
}
