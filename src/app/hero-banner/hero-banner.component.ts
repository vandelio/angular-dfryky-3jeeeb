import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css'],
})
export class HeroBannerComponent {
  imageWidth = Number(window.innerWidth - 30);
  hero = {
    imagePath: 'https://picsum.photos/' + this.imageWidth + '/300',
  };
  constructor() {}

  ngOnInit(): void {}
}
