import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  ngOnInit() {
    
    const stickyElm = document.querySelectorAll('mat-expansion-panel-header');

    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
      {threshold: [1]}
    );


    stickyElm.forEach(element => {
      observer.observe(element);
    });
    
  }
}
