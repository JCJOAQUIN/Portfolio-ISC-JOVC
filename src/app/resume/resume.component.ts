import { Component } from '@angular/core';
import { SubtitleComponent } from '../subtitle/subtitle.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SubtitleComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  sumary = 'Summary';
  titleSkills = 'Skills';
  titleExperience = 'Work experience';
  titleEducation = 'Education';
  titleLaguages = 'Languages';
  titleCertifications = 'Courses and certifications';
  resumeDescription = 'Full Stack Software Developer with over 4 years of experience designing, building, and deploying scalable and secure web applications. Proficient in technologies such as Angular, .NET, PHP, Laravel, and SQL databases. Familiar with CI/CD pipelines, Agile methodologies (Scrum), and tools like Azure DevOps and Git. Strong problem-solving skills, team collaboration, and passion for delivering user-focused software solutions.';

  constructor( private viewportScroller: ViewportScroller){}

  ngOnInit(){
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}