import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-llamadas',
  templateUrl: './llamadas.page.html',
  styleUrls: ['./llamadas.page.scss'],
})
export class LlamadasPage implements OnInit {

  constructor(private llamar:CallNumber) { }

  ngOnInit() {
  }

  llamarAhora(number) {

    this.llamar.callNumber(number, true)
      .then(res => console.log('El pad ha sifo lanzado', res))
      .catch(err => console.log('error la lanzar el pad', err));
  }

}
