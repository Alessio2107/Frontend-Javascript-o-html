import { Component } from '@angular/core';
import { ImageSliderComponent } from "../image-slider/image-slider.component";
import { ToyListComponent } from "../toy-list/toy-list.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ImageSliderComponent, ToyListComponent]
})
export class HomeComponent {
  images: string[] = ['', '', ''];
  toys: string[] = ['Bambola', 'Macchinuccia', 'Lego', 'cellulare'];

  selectedToy: string = '';

  onToySelected(toy: string) {
    this.selectedToy = toy;
  }
}
