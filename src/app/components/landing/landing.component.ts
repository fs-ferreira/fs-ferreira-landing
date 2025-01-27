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

  private calculateScrollScale(container: any): number {
    if (container === this.pathsContainer) {
      const deviceWidth = window.innerWidth;
      return deviceWidth > 800 ? 1.15 : 1.02;
    }
    return 1;
  }

  scrollTo(container: any) {
    if (container) {
      const scale = this.calculateScrollScale(container);
      scrollToElement(container.elementRef.nativeElement, 1000, scale);
    }
  }
}
