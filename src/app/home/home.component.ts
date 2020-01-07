import { Component, OnInit } from "@angular/core";
import { IImage } from "../IImage";
declare const myTest: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public imageSources;

  constructor() {}

  ngOnInit() {
    this.imageSources = [
      "../assets/images/softdev.jpg",
      "../assets/images/pro.jpg",
      "../assets/images/agile-software.jpg",
      "../assets/images/full.jpg",
      "../assets/images/dev.jpg",
      "../assets/images/com.jpg"
    ];
  }
}
