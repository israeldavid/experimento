//este modulo va a contener todos los componentes en nuestro caso header footer
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//aqui pongo este module para usar las etiquetas de ionic si no no funciona
import { IonicModule } from '@ionic/angular';
//Aqui llamo a los componentes
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

//Aqui en declaraciones lo llamo para exportarlo y estoy listo para usarlo
@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [HeaderComponent,FooterComponent],
})
export class ComponentsModule { }
