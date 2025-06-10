import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  isScrolled = false;
  bgnavbar = 0

  constructor(private router:Router){
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationEnd){
        this.navbarBg(event.urlAfterRedirects);
      }
    })
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  private navbarBg(url: string){
    if (url.includes('Home')) {
      this.bgnavbar = 1;
    }
    else
    {
      this.bgnavbar = 0;
    }
  }
}