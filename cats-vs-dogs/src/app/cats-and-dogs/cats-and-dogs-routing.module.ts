import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsAndDogsComponent } from './cats-and-dogs.component';

const routes: Routes = [
  {
    path: '',
    component: CatsAndDogsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatsAndDogsRountingModule {}
