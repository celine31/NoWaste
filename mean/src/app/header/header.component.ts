import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 public isCollapsed:boolean;
  constructor() { 
 this.isCollapsed=true;
  }
  ngOnInit() {
  }

}
