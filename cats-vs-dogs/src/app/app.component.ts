import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CatService } from './cat/cat.service';
import { DogService } from './dog/dog.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [CatService, DogService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'cats-vs-dogs';

  catFact!: string;
  catImage!: string;
  dogFact!: string;
  dogImage!: string;

  constructor(private catService: CatService, private dogService: DogService) {}

  showCat(): void {
    this.catService.getCatFact().subscribe((data: any) => {
      this.catFact = data.data[0];
    });

    this.catService.getCatImage().subscribe((data: any) => {
      this.catImage = data[0].url;
    });
  }

  showDog(): void {
    this.dogService.getDogFact().subscribe((data: any) => {
      this.dogFact = data.facts[0];
    });

    this.dogService.getDogImage().subscribe((data: any) => {
      this.dogImage = data.message;
    });
  }
}
