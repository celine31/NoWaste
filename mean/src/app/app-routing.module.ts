import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import {PublicationComponent} from './publication/publication.component';
import {ContactComponent} from './contact/contact.component';
import {ListeComponent} from './liste/liste.component';
import {RestesComponent} from './restes/restes.component';
import {AccueilComponent} from './accueil/accueil.component';
import {IngredientsComponent} from './ingredients/ingredients.component';

const routes:Routes =[
  {path:'', redirectTo: '/accueil', pathMatch:'full'},
  {path:'accueil', component:AccueilComponent},
  {path:'publication', component : PublicationComponent},
  {path:'restes',component:RestesComponent},
  {path:'liste', component:ListeComponent},
  {path:'contact', component:ContactComponent},
  {path:'ingredients',component:IngredientsComponent}, 
  {path:'**',redirectTo:'/accueil'},//gestion des routes non définies renvoi à l'accueil
 ]
 
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
  providers:[]
})
export class AppRoutingModule { }
