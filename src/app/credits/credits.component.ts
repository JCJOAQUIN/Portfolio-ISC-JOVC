import { Component } from '@angular/core';
import { SubtitleComponent } from '../subtitle/subtitle.component';

@Component({
  selector: 'app-credits',
  standalone: true,
  imports: [SubtitleComponent],
  templateUrl: './credits.component.html',
  styleUrl: './credits.component.css'
})
export class CreditsComponent {

}
