import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaTiendasComponent } from './components/categoria-tiendas/categoria-tiendas.component';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [CategoriaTiendasComponent],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule
  ],
  exports:[CategoriaTiendasComponent]
})
export class ShareModule { }
