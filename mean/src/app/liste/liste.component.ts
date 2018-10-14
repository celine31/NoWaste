import {Component,OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
  providers: [DataService],
})
export class ListeComponent implements OnInit {
  listeRecette:any;
  recetteSelectionnee:any;
  closeResult: string;
  recette:any;

  constructor(private dataService: DataService,private modalService:NgbModal) {}

  ngOnInit() {
    this.getRecettes();
  }
  //obtenir toutes les recettes
  getRecettes() {
    this.dataService.getRecettes().subscribe((res) => {
      this.listeRecette = res;
    }, (err) => {
      console.log(err);
    });
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
