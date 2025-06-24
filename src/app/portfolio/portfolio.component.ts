import { Component } from '@angular/core';
import { SubtitleComponent } from '../subtitle/subtitle.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SubtitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  constructor( private viewportScroller: ViewportScroller){}

  ngOnInit(){
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}