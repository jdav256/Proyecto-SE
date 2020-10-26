import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaEmpresarioComponent } from './vista-empresario/vista-empresario.component';

const routes: Routes = [
  {
    path: '',
    component: VistaEmpresarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresarioRoutingModule { }
