import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  header = {

  };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.header = this.getHeader();
  }

  getHeader() {
    return this.config.getConfig().content;
  }

}
