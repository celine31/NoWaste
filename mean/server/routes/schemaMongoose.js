const mongoose=require('mongoose');

//création d'un modèle en mongoose pour vérifier les données:
let RecetteSchema= new mongoose.Schema({
    nom:{type:String, maxlength:200},
    categorie:{type:String},
    duree:{type:Number},
    ingredients:{type:Array},
    difficulte:{type:Number},
    instructions:{type:String},
    });

RecetteSchema.methods.toDo=function(){
    return{
        nom:this.nom,
        categorie:this.categorie,
        duree:this.categorie,
        ingredients:this.ingredients,
        difficulte:this.difficulte,
        instructions:this.instructions
    }
}
mongoose.model('Recette', RecetteSchema);
    