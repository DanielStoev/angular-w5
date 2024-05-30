import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./cats-and-dogs/cats-and-dogs-routing.module').then(
        (mod) => mod.CatsAndDogsRountingModule
      ),
  },
  {
    path: 'other-animals',
    loadChildren: () =>
      import('./other-animals/other-animals-routing.module').then(
        (mod) => mod.OtherAnimalsRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
