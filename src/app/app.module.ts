import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./componentes/header/header.component";
import { FormularioComponent } from "./componentes/formulario/formulario.component";
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FormularioComponent,
        FooterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class AppModule { }
