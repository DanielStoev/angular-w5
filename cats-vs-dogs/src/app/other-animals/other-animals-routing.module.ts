import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherAnimalsComponent } from './other-animals.component';

const routes: Routes = [
  {
    path: '',
    component: OtherAnimalsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherAnimalsRoutingModule {}
