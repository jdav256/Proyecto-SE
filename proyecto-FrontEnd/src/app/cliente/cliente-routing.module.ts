import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaComponent } from './vista/vista.component';

const routes: Routes = [
  {
    path: '',
    component: VistaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
