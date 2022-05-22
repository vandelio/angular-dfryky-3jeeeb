import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imageWidth = Number(window.innerWidth - 30);
  hero = {
    imagePath: 'https://picsum.photos/' + this.imageWidth + '/300',
  };
  constructor() {}

  ngOnInit(): void {}
}
