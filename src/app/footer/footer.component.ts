import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 showFooter = true;

  constructor(private router:Router){
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationEnd){
        this.updateSubtitle(event.urlAfterRedirects);
      }
    })
  }

  private updateSubtitle(url: string){
    if (url.includes('Home') || url.includes('Credits')) {
      this.showFooter = false;
    }
    else
    {
      this.showFooter = true;
    }
  }
}