import {Component,OnInit} from '@angular/core';
import { DataService} from '../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Recette} from '../Recette';//pas encore mis en place utilisation d'une classe Recette
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';//pour la boite modale
import * as $ from 'jquery';//jquéry pour la boite modale
import { PatternValidator } from '@angular/forms';//pattern du formulaire

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css'],
  providers: [DataService],
})

export class PublicationComponent implements OnInit {
  recette={};
  closeResult:string;

   constructor(private dataService: DataService, private modalService:NgbModal) { 
    }

   ngOnInit() {
  }
//pour l'affichage en console(vérification de l'envoi d'un tableau)
  afficher(ingredients){
    console.log("ingredients : " + ingredients);
    ingredients=ingredients.split(',');
    console.log(ingredients);
    return ingredients;
}
//ajout de la recette  
   addRecette(recetteForm){
      recetteForm.ingredients=recetteForm.ingredients.split(',');//supprime l'espace en début et transforme en tableau pour l'envoi en bdd 
      let recette = recetteForm;
     // console.log(recette);
     this.dataService.postRecette(recette).subscribe(res=>res.json);
     alert("votre recette est en cours de publication, merci de votre participation");
     window.location.assign('/accueil');    
  } 

//boite modale
  open(recette:any,content) {
    this.recette=recette;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}

