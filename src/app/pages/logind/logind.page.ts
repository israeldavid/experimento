import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Errores } from '../../shared/errors/errors';

@Component({
  selector: 'app-logind',
  templateUrl: './logind.page.html',
  styleUrls: ['./logind.page.scss'],
})
export class LogindPage implements OnInit {

  public loginForm: FormGroup;
  public submitAttempt: boolean = false;
  public errorPersonalizados : Errores[] = [
    Errores.usuarioVacio,
    Errores.emailInvalido,
    Errores.claveVacia
  ];

  constructor(public formBuilder: FormBuilder) { 
    this.loginForm = formBuilder.group({
      usuario: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      password: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });
    
  }

  ngOnInit() {
  }

  enviarLogin(){
    if(!this.loginForm.valid){
      this.submitAttempt = true;
    }else{
      console.log("envio hacer login");
    }
  }

}
