import { Injectable} from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Http,Headers,RequestOptions,URLSearchParams,Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// on précise que notre app doit être boostrapée avec appComponent 
import { environment} from '../environments/environment'; 

//entête et options d'envoi des requêtes
const headers = new Headers({'Content-Type': 'application/json'});
const options = new RequestOptions({ headers: headers });

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

//affichage des recettes
getRecettes() {
  return this.http.get('/api')
  .map(res => res.json());
 }
  
//obtenir la recette en fonction des ingredients
getRecetteReste(recette){
  return this.http.get('/api/:' + recette)
    .map(res => res.json());
  }
   
//insertion d'une recette
postRecette(recette){
    return this.http.post('/api',recette,options)
    .map(res=>res);
    }

/*
//gestion du formulaire de contact
addContact(contact){
  return this.http.post('/api/contact',contact,options )
  .map(res=>res);
}

//test ingredients
postAfficher(ingredients){
 console.log(ingredients);
  }
*/
}