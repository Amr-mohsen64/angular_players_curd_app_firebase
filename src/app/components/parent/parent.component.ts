import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<div class="border">
            <h1 class="text-danger">parnet</h1>
            <button (click)="increment()">incremnt</button>
            <button (click)="decrement()">decrement</button>
            <ul>
              <li *ngFor="let item of items">{{ item }}</li>
          </ul>
            <app-child [childCount] = "counter" (newItemEvent)="addItem($event)"></app-child>
              
      </div>`,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  counter: number = 5

  items = ['item1', 'item2', 'item3', 'item4'];
  addItem(newItem: string) {
    this.items.push(newItem);
  }


  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }
}
