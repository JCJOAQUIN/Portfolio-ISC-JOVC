import { Component } from '@angular/core';
import { SubtitleComponent } from '../subtitle/subtitle.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SubtitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor( private viewportScroller: ViewportScroller){}

  titleContac = "Contact";
  
  ngOnInit(){
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
