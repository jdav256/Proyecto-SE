import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitanteRoutingModule } from './visitante-routing.module';
import { VistaVisitanteComponent } from './vista-visitante/vista-visitante.component';


@NgModule({
  declarations: [VistaVisitanteComponent],
  imports: [
    CommonModule,
    VisitanteRoutingModule
  ]
})
export class VisitanteModule { }
