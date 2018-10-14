
export class Recette{
    private _nom: string;
    private _categorie:string;
    private _duree:number;
    private _ingredients:string[];
    private _difficulte:number;
    private _instructions:string;

    constructor (nom:string,categorie:string,duree:number,ingredients:string[],difficulte:number,instructions:string){
        this._nom=nom;
        this._categorie=categorie;
        this._duree=duree;
        this._ingredients=ingredients;
        this._difficulte=difficulte;
        this._instructions=instructions;
    }

    get nom(): string {return this._nom;}
    set nom(nom:string){ this._nom=nom;}

    get categorie():string{return this._categorie;}
    set categorie(categorie:string){this._categorie=categorie;}

    get duree():number{return this._duree;}
    set duree(duree:number){this._duree=duree;}

    get ingredients():string[]{return this._ingredients;}
    set ingredients(ingredients:string[]){this._ingredients=ingredients;}

    get difficulte():number{return this._difficulte;}
    set difficulte(difficulte:number){this._difficulte=difficulte;}

    get instructions():string{return this._instructions;}
    set instructions(instructions:string){this._instructions=instructions;}
    

}