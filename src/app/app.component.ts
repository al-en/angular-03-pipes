import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = "Almendra";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  pi = Math.PI;
  a = 0.234;
  salario = 1234.5;

  persona = {
    nombre: "Carolina",
    apellido: "Torres",
    edad: 22,
    direccion: {
      calle: "Av. Ricardo Palma",
      numero: 123,
      distrito: "Lince"
    }
  }

  valorDePromesa = new Promise( (resolve,reject) => {
    setTimeout(() => resolve("Llego la data!"),3500)
  } )

  fecha = new Date();

  nombre2 = "almendRa estRAda naVaRRo";

  video = 'DyDfgMOUjCI';

  activo:boolean = true;
}
