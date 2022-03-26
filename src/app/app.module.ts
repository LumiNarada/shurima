import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { LogInComponent } from './log-in/log-in.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'principal'},
  { path:'principal',component:PrincipalComponent},
  { path:'acercaDe',component:AcercaDeComponent},
  { path:'integrantes',component:IntegrantesComponent},
  { path:'login',component:LogInComponent},
  { path:'**',component:PrincipalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    AcercaDeComponent,
    LogInComponent,
    IntegrantesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
