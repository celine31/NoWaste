import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
  providers:[DataService],
})
export class IngredientsComponent implements OnInit {

  ngForm = new FormGroup({
    ingredients: new FormControl(false),
    });
    onFormSubmit() {
       console.log(this.ngForm)
    }
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }
 /**  afficher(){
    console.log(this.ngForm);
    }
   
for (var i;i< checkbox.length; i++){
  console.log("les cases =" + checkbox[i].value);
}**/
}
/**ajoutProduit(ingredients){
 
console.log(ingredients);
}
pour chaque produit l'ajouter dans le tableau ingredients;
afficher la liste dans la première div


supprimerProduit(name){
  enlever le produit du tableau dont la valeur=name;
  mettre à jour la liste
}
envoyer à la page recette{
ingredients [] transferer à la page recette
}**/

