import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-testomonial',
  templateUrl: './testomonial.component.html',
  styleUrls: ['./testomonial.component.css']
})
export class TestomonialComponent implements OnInit {
  testomonial = {

  };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.testomonial = this.getTestomonial();

  }

  getTestomonial() {
    return this.config.getConfig().testimonial;
  }

}
