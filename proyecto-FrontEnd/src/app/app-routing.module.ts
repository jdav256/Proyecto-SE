import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./visitante/visitante.module').then(m =>m.VisitanteModule)
    
  },
  {
    path:'cliente',
    loadChildren: () => import('./cliente/cliente.module').then(m =>m.ClienteModule)
    
  },
  {
    path:'empresario',
    loadChildren: () => import('./empresario/empresario.module').then(m =>m.EmpresarioModule)
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
