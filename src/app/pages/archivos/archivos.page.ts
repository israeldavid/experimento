import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.page.html',
  styleUrls: ['./archivos.page.scss'],
})
export class ArchivosPage implements OnInit {

  constructor(private archivos : File) { }

  ngOnInit() {
  }

  validarCarpeta(){
    this.archivos.checkDir(this.archivos.dataDirectory, 'mydir').then(_ =>
      console.log('Directorio ya existe')).catch(err =>
      console.log('Directorio no existe'));
  }

}
