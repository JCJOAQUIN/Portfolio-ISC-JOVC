import { Component } from '@angular/core';
import { SubtitleComponent } from '../subtitle/subtitle.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SubtitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  subtitle = 'About me';
  aboutMeDescription = 'I\'m José Carlos Joaquín Vazquez, a Full Stack Software Developer from Veracruz, México, with over 4 years of experience building scalable and responsive web applications.I specialize in Angular 18, .NET, PHP, Laravel, and SQL-based systems.\n\nI’m passionate about crafting high-quality user experiences, solving complex problems, and continuously learning new technologies. I’ve worked in both corporate teams and freelance environments, always delivering performant and maintainable solutions.';
}