import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametros-detalles',
  templateUrl: './parametros-detalles.page.html',
  styleUrls: ['./parametros-detalles.page.scss'],
})
export class ParametrosDetallesPage implements OnInit {
  parametro : string; 
  constructor(private ar:ActivatedRoute) { }

  ngOnInit() {
    this.parametro = this.ar.snapshot.paramMap.get('id');
  }

}
