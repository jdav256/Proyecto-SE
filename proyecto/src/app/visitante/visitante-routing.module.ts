import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaVisitanteComponent } from './vista-visitante/vista-visitante.component';

const routes: Routes = [
  {
    path: '',
    component: VistaVisitanteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitanteRoutingModule { }
