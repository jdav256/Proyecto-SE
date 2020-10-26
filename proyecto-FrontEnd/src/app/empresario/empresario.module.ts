import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresarioRoutingModule } from './empresario-routing.module';
import { VistaEmpresarioComponent } from './vista-empresario/vista-empresario.component';


@NgModule({
  declarations: [VistaEmpresarioComponent],
  imports: [
    CommonModule,
    EmpresarioRoutingModule
  ]
})
export class EmpresarioModule { }
