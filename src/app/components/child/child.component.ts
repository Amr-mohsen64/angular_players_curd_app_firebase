import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div class="border">
              <h1 class="text-info">child</h1>
              <h1 class="text-info">counter from parent: {{childCount}}</h1>
          </div>
          
          <label for="item-input">Add an item: fromchild</label>
          <input type="text" id="item-input" #newItem>
          <button type="button" (click)="addNewItem(newItem.value)">Add to parent's list</button>
          `,
  styleUrls: ['./child.component.css']
})


export class ChildComponent {
  @Input() childCount!: number

  @Output() newItemEvent: EventEmitter<any> = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
