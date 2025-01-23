import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public linkedinUrl = 'https://www.linkedin.com/in/fs-ferreiraa/';
  public instagramUrl = 'https://www.instagram.com/feli_pih/';
  public githubUrl = 'https://github.com/fs-ferreira';

  public email = 'fsferreira.dev@gmail.com';

  constructor(public elementRef: ElementRef) {}
}
