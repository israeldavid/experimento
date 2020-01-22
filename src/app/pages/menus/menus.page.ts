import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
//Servicio de Banner
import { ServiciomenuService} from '../../core/services/serviciomenu.service';
import { menu} from '../../core/interfaces/menu.interface';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.page.html',
  styleUrls: ['./menus.page.scss'],
})
export class MenusPage implements OnInit {

  menuOpciones: menu;

  constructor(private menu: MenuController,private sg:ServiciomenuService) { }

  ngOnInit() {
  }

  consultarOpciones(){
    this.sg.obtenerMenus().subscribe(data => { 
      this.menuOpciones=data;
      console.log(this.menuOpciones);
    });
  }

}
