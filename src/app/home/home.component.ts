import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { TypewriterService } from '../typerwriter.service';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  profileName = "José Carlos Joaquín Vazquez"

  typedText$!: Observable<string>;

  titles = ['Computer Systems Engineer', 'Software Developer', 'Web Developer'];

  private platformId = inject(PLATFORM_ID);
  private typewriterService = inject(TypewriterService);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.typedText$ = this.typewriterService
        .getTypewriterEffect(this.titles);
    }
  }
}