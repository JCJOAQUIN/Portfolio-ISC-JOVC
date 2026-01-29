import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { TypewriterService } from '../typerwriter.service';
import { AsyncPipe, isPlatformBrowser, ViewportScroller } from '@angular/common';
// import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  profileName = "José Carlos \nJoaquín Vazquez"
  linkedInAddress = 'https://www.linkedin.com/in/iscjovc';
  gitHubAddress = 'https://github.com/JCJOAQUIN/';

  typedText$!: Observable<string>;

  titles = ['Computer Systems Engineer', 'Software Developer', 'Web Developer', 'Backend Developer', 'Frontend Developer', 'Fullstack Developer'];

  private platformId = inject(PLATFORM_ID);
  private typewriterService = inject(TypewriterService);

  constructor(private viewportScroller: ViewportScroller){}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
    if (isPlatformBrowser(this.platformId)) {
      this.typedText$ = this.typewriterService
        .getTypewriterEffect(this.titles);
    }
  }
}