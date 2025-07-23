import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { SubtitleComponent } from '../subtitle/subtitle.component';
import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import { initModals, initTabs } from 'flowbite';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SubtitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements AfterViewInit {

  constructor( private viewportScroller: ViewportScroller, @Inject(PLATFORM_ID) private platformId: Object ){}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initTabs();
      initModals();
    }
  }

  titlePortfolio = "Portfolio";
  

  ngOnInit(){
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}