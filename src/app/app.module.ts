import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

// Para cambiar a idioma espanol
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

// Para agregar un pipe personalizado
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe  // Se agrega el pipe CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide:LOCALE_ID, useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
