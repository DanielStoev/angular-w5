import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CatService } from './cat.service';
import { DogService } from './dog.service';

@Component({
  selector: 'cats-and-dogs',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [CatService, DogService],
  templateUrl: './cats-and-dogs.component.html',
  styleUrls: ['./cats-and-dogs.component.css'],
})
export class CatsAndDogsComponent {
  title: string = 'cats-vs-dogs';

  catFact!: string;
  catImage!: string;
  dogFact!: string;
  dogImage!: string;

  constructor(
    private catService: CatService,
    private dogService: DogService,
    private router: Router
  ) {}

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

  goToSecondPage(): void {
    this.router.navigate(['/other-animals']);
  }
}
