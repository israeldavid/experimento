import { Component, OnInit } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  misContactos: Contact[] = [];
  constructor(private contacts: Contacts) { }

  ngOnInit() {
  }

  listarContactos(){
    let opciones = {
      filter:'',
      multiple: true,
      hasPhoneNumber: true
    };
    
    //encuentra a todos los registros del directorio
    this.contacts.find(['*'], opciones).then((contacts: Contact[]) => {
      this.misContactos = contacts;
      console.log('Contactos: ',contacts);
    })
  }

      //Enviar SMS
      enviarSMS(contact:Contact){
        //this.sms.send(contact.phoneNumbers[ 0 ].value,'este es el mensjae de texto');
      }

      crearContacto(){
        let contact: Contact = this.contacts.create();

        contact.name = new ContactName(null, 'Smith', 'John');
        contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
        contact.save().then(
            async () => {
              console.log('Contacto Grabado!', contact)
            },
            (error: any) => console.error('Error al grabar el contacto.', error)
        )
      }

}
