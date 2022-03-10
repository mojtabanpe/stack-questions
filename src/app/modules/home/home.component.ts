import { Component, OnInit } from '@angular/core';
import dataset from '../../data/dataset.json';  

export interface item {
  Date: string;
  VIXClose: number;
  VIXHigh: number;
  VIXLow: number;
  VIXOpen: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items = ['item1', 'item2', 'item3', 'item4'];
  
  constructor() { }

  ngOnInit(): void {
        
  }

}
