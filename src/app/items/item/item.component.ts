import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IItem } from './item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item:IItem;
  @Output() onDelete = new EventEmitter();

  //this.stopSort.emit({event,ui});

  constructor() { }

  ngOnInit() {
  }

  deleteItem(id:number) {
    this.onDelete.emit(id);
  }

}
