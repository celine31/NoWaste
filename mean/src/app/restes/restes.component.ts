import {Component,OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Recette} from '../Recette';//pas encore utilisé
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-restes',
  templateUrl: './restes.component.html',
  styleUrls: ['./restes.component.css'],
  providers: [DataService],
})
export class RestesComponent implements OnInit {
  recette:any=[];
  closeResult: string;
  listeProposition: any={};
 
  constructor(private dataService: DataService,private modalService:NgbModal) {}

  ngOnInit() {
      }
//recherche de recette en fonction du ou des ingredients
  rechercheRecette(recetteForm) {
      let recette=recetteForm.ingredients;
      console.log(recette);
      recette=recette.split(',');
      console.log(recette);
      this.dataService.getRecetteReste(recette).subscribe(res => {
      this.listeProposition = res;
      }, (err) => {
      console.log(err);
    });;
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
