import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { DuckService } from './duck.service';
import { FoxService } from './fox.service';

@Component({
  selector: 'other-animals',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [DuckService, FoxService],
  templateUrl: './other-animals.component.html',
  styleUrls: ['./other-animals.component.css'],
})
export class OtherAnimalsComponent{
  title: string = 'second-page';

  duckFact!: string;
  duckImage!: string;
  foxFact!: string;
  foxImage!: string;

  constructor(
    private duckService: DuckService,
    private foxService: FoxService,
    private router: Router
  ) {}

  showDuck(): void {
    this.duckService.getDuckFact().subscribe((data: any) => {
      this.duckFact = data.fact;
    });

    this.duckService.getDuckImage().subscribe((data: any) => {
      this.duckImage = data.url;
    });
  }

  showFox(): void {
    this.foxService.getFoxFact().subscribe((data: any) => {
      this.foxFact = data.fact;
    });

    this.foxService.getFoxImage().subscribe((data: any) => {
      this.foxImage = data.url;
    });
  }

  goToMainPage(): void {
    this.router.navigate(['/']);
  }
}
