import { Component, OnInit } from '@angular/core';
declare const myTest: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  public imagesUrl;

  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
      '../assets/images/dev.jpg',
      '../assets/images/com.jpg',
      '../assets/images/softdev.jpg',
      '../assets/images/key.jpg'
    ];
  }

}
