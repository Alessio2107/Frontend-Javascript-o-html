import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toy-list',
  standalone: true,
  imports: [],
  templateUrl: './toy-list.component.html',
  styleUrl: './toy-list.component.css'
})
export class ToyListComponent {
  @Input() toys: string[] = [];
  @Output() toySelected: EventEmitter<string> = new EventEmitter<string>();

  selectToy(toy: string) {
    this.toySelected.emit(toy);
  }
}
