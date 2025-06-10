import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-subtitle',
  standalone: true,
  imports: [NgIf],
  templateUrl: './subtitle.component.html',
  styleUrl: './subtitle.component.css'
})
export class SubtitleComponent {

  subtitle = '';
  description = '';
  showSubtitle = 0;
  scrollSection = "";

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
        this.scrollSection = 'resume';
        this.subtitle = 'Resume';
        this.showSubtitle = 1;
      break;
      case url.includes('Portfolio'):
        this.scrollSection = 'portfolio';
        this.subtitle = 'Portfolio';
        this.showSubtitle = 1;
      break;
      case url.includes('Contact'):
        this.scrollSection = 'contact';
        this.subtitle = 'Contact';
        this.showSubtitle = 1;
      break;
    }
  }

  scrollTo(id: string){
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}