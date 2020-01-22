import { Component, OnInit } from '@angular/core';
//Servicio de Slides
import { ServicioslidersService} from '../../core/services/serviciosliders.service';
import { sliders} from '../../core/interfaces/slides.interface';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})

export class SlidesPage implements OnInit {

  responsesliders: sliders;

  slides:{img:string, titulo:string, descripcion:string } [] = 
  [
    {
      img:'https://via.placeholder.com/468x60',
      titulo:'Primera Imagen',
      descripcion:'Prueba de placehokder'
    },
    {
      img:'https://via.placeholder.com/468x60',
      titulo:'Segunda Imagen',
      descripcion:'Prueba de placehokder'
    },
    {
      img:'https://via.placeholder.com/468x60',
      titulo:'Tercera Imagen',
      descripcion:'Prueba de placehokder'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
