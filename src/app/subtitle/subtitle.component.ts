import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-subtitle',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './subtitle.component.html',
  styleUrl: './subtitle.component.css'
})
export class SubtitleComponent {

  subtitle = '';
  description = '';
  showSubtitle = 0;
  scrollSection = "";
  downloadResume = 0;
  downloadScrollResume = false;

  constructor(private router:Router){
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationEnd){
        this.updateSubtitle(event.urlAfterRedirects);
      }
    })
  }

  private updateSubtitle(url: string){
    switch (true) {
      case url.includes('About'):
        this.scrollSection = 'about';
        this.subtitle = 'About me';
        this.showSubtitle = 1;
        this.description = 'A quick overview of my experience, skills, and dedication to delivering high-quality web and software solutions.'
      break;
      case url.includes('Resume'):
        this.downloadResume = 1;
        this.scrollSection = 'resume';
        this.subtitle = 'Resume';
        this.showSubtitle = 1;
        this.description = 'Explore my academic background, professional experience, certifications, and technical skills. \n\nA quick overview of my journey as a developer.';
      break;
      case url.includes('Portfolio'):
        this.scrollSection = 'portfolio';
        this.subtitle = 'Portfolio';
        this.showSubtitle = 1;
        this.description = 'Take a look at some of the projects I’ve worked on — from web applications to business solutions. Each one showcases my commitment to quality, functional design, and modern technologies.';
      break;
      case url.includes('Contact'):
        this.scrollSection = 'contact';
        this.subtitle = 'Contact';
        this.showSubtitle = 1;
        this.description = 'Do you have an idea or project in mind? I’m available for collaborations, custom software development, or technical consulting. Feel free to get in touch to start working together.';
      break;
    }
  }

  scrollTo(id: string){
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', [])
    onWindowScroll() {
      this.downloadScrollResume = window.scrollY > 630;
    }
}