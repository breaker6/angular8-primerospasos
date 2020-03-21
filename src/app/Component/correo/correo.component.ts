import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;
  constructor() { 
    this.correo = {
      titulo: "Titulo del email",
      cuerpo: "Cuerpo del email, Cuerpo del email, Cuerpo del email, Cuerpo del email",
      emisor: "banylin@monroe.com",
      destinatario: "parla@elplan.com"
    }

  }

  ngOnInit(): void {
  }

}
