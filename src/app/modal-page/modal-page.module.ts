import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPageComponent } from './modal-page.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ModalPageComponent
  ],
  exports: [
    ModalPageComponent,
  ],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ModalPageModule { }
