import { Component, ViewChild } from '@angular/core';
import { scrollToElement } from '../../shared/utils/scroll-utils';
import { ResumeComponent } from '../sections/resume/resume.component';
import { HeaderComponent } from '../sections/header/header.component';
import { PathsComponent } from '../sections/paths/paths.component';
import { ContactComponent } from '../sections/contact/contact.component';

@Component({
  selector: 'app-landing',
  imports: [HeaderComponent, ResumeComponent, PathsComponent, ContactComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true,
})
export class LandingComponent {
  @ViewChild('resumeContainer') resumeContainer!: ResumeComponent;
  @ViewChild('pathsContainer') pathsContainer!: PathsComponent;
  @ViewChild('contactContainer') contactContainer!: ContactComponent;

  scrollToResume() {
    if (this.resumeContainer) {
      scrollToElement(this.resumeContainer.elementRef.nativeElement, 1000);
    }
  }

  scrollToPaths() {
    if (this.pathsContainer) {
      const deviceWidth = window.innerWidth;
      const scrollScale = deviceWidth > 800 ? 1.1 : 1.02;
      scrollToElement(
        this.pathsContainer.elementRef.nativeElement,
        1000,
        scrollScale
      );
    }
  }

  scrollToContact() {
    if (this.contactContainer) {
      scrollToElement(this.contactContainer.elementRef.nativeElement, 1000, 1);
    }
  }
}
