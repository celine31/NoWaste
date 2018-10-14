//imports nécessaires aux fonctionnement des modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import {FormsModule, NgForm,ReactiveFormsModule} from '@angular/forms';

//les services
import {DataService} from './data.service';

//composants sur toutes les pages
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//composants en fonction des pages
import { PublicationComponent } from './publication/publication.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ListeComponent } from './liste/liste.component';
import { RestesComponent } from './restes/restes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

//gestion des routes
import { AppRoutingModule } from './app-routing.module';

//filtre créé sur mesure
import { ValueArrayPipe } from './liste/pipe';

//import boostrap
import  {NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import font-awesome pour icône
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PublicationComponent,
    ContactComponent,
    HomeComponent,
    ListeComponent,
    RestesComponent,
    ValueArrayPipe,
    AccueilComponent,
    IngredientsComponent,
    ],
   
  imports: [
    BrowserModule, 
    HttpModule, 
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
