import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-dropdown',
  templateUrl: './ng-dropdown.component.html',
  styleUrls: ['./ng-dropdown.component.css']
})
export class NgDropdownComponent implements OnInit {
  @Input() keys: Array<any> = [];
  @Input() selectedKey: any;
  isOpen = true;
  constructor() { }

  ngOnInit(): void {
    if(!this.selectedKey) {
      this.selectedKey = this.keys[0];
    }
  }

  changeSelectedKey(item: any): void {
    this.selectedKey = item;
    this.isOpen = false;
  }

}
