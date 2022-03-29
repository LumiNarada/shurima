import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { LogInComponent } from './log-in/log-in.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'principal'},
  { path:'principal',component:PrincipalComponent},
  { path:'acercaDe',component:AcercaDeComponent},
  { path:'integrantes',component:IntegrantesComponent},
  { path:'integrantes/:integrante',component:ProfileComponent},
  { path:'login',component:LogInComponent},
  { path:'registration',component:RegisterComponent},
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
    IntegrantesComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
