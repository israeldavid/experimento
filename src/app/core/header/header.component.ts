import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  //Inicio la variable del titulo
  @Input('titulo') titulo : string;
  
  constructor() { }

  ngOnInit() {}

}
