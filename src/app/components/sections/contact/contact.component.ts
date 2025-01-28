import { Component, ElementRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { MessageMeComponent } from '../../../shared/imgs/message-me/message-me.component';

@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule, MessageMeComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public linkedinUrl = 'https://www.linkedin.com/in/fs-ferreiraa/';
  public linkedinIcon = faLinkedin;

  public instagramUrl = 'https://www.instagram.com/feli_pih/';
  public instagramIcon = faInstagram;

  public githubUrl = 'https://github.com/fs-ferreira';
  public githubIcon = faGithub;

  public email = 'fsferreira.dev@gmail.com';

  constructor(public elementRef: ElementRef) {}
}
