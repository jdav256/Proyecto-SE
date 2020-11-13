import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { VistaComponent } from './vista/vista.component';
import { ShareModule } from '../share-module/share-module.module';


@NgModule({
  declarations: [ VistaComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ShareModule
  ]
})
export class ClienteModule { }
