import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitanteRoutingModule } from './visitante-routing.module';
import { VistaVisitanteComponent } from './vista-visitante/vista-visitante.component';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../share-module/share-module.module';
@NgModule({
  declarations: [VistaVisitanteComponent],
  imports: [
    CommonModule,
    VisitanteRoutingModule,
    FormsModule,
    ShareModule
    
    
    
  ],
  exports:[]
})
export class VisitanteModule { }
