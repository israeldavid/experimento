import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Errores } from '../../shared/errors/errors';

@Component({
  selector: 'app-olvide',
  templateUrl: './olvide.page.html',
  styleUrls: ['./olvide.page.scss'],
})
export class OlvidePage implements OnInit {

  public olvideForm: FormGroup;
  public submitAttempt: boolean = false;

  public errorPersonalizados : Errores[] = [
    Errores.usuarioVacio,
    Errores.emailInvalido,
    Errores.claveVacia
  ];
  
  constructor(public formBuilder: FormBuilder) { 
    this.olvideForm = formBuilder.group({
      email: ['', Validators.compose([Validators.maxLength(40), Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/), Validators.required])]
    });
  }

  ngOnInit() {
  }

  enviarClave(){
    
    if(!this.olvideForm.valid){
      this.submitAttempt = true;
    }else{
      console.log("envio de email");
    }
  } 

}
