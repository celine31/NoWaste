
const express=require('express');
const router=express.Router();
const MongoClient=require ('mongodb').MongoClient;
const ObjectID=require('mongodb').ObjectID;
//const mongoose=require('./schemaMongoose');//TODO

const connection=(closure)=>{
    return MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err) throw err;

    var db=client.db('applicationRecette');  
       
   db.collection('recettes').findOne({},function(findErr,result){
       if(findErr) throw findErr;
       
       client.close();
   });
   closure(db);
    })
};
const sendError=(err,res)=>{
    response.status=501;
    response.message=typeof err =='object'? err.message:err;
    res.status(501).json(response);
};

let response={
    status:200,
    data:[],
    message:null
};

//pour la consultation de toutes les recettes 
router.get('/',(req, res)=> { 
    connection((db)=>{
        db.collection('recettes')
            .find() 
            .toArray()
            .then((recettes)=>{
                response.data=recettes;
                res.json(response.data);
            })
            .catch((err)=>{
                sendError(err,res);
        });
     });
});

//pour la recherche d'une recette en fonction des ingredients
router.get('/:recette',(req, res)=> { 
    connection((db)=>{
let recette=(req.params.recette).substr(1);
recette=recette.split(',');
    db.collection('recettes')
            .find({ingredients:{$in:[recette[0],recette[1],recette[2],recette[3]]}}) 
            .toArray()
            .then((recettes)=>{
                response.data=recettes
                 res.json(response.data);
            })
            .catch((err)=>{
                sendError(err,res);
        });
     });
});

/*pour la consultation d'une recette en fonction du titre=détail //TODO
router.get(':_id',(req, res)=> { 
    connection((db)=>{
        db.collection('recettes')
            .findById({},{ingredients:req.query._id}) 
            .toArray()
            .then((recettes)=>{
                response.data=recettes;
                res.json("vous accédez à la recette ...");
            })
            .catch((err)=>{
                sendError(err,res);
        });
     });
});
*/

//pour l'insertion d'une recette
router.post('/',(req, res)=> { 
    connection((db)=>{
            db.collection('recettes')
            .insert(req.body); 
        res.status(200).send;
     });
});

//pour la mise à jour d'une recette //TODO

//pour la suppression d'une recette //TODO

//pour l'envoi de mail avec le module nodemailer non fini
router.post('/contact', function (req, res) {
    //création d'un service de transport SMTP 
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,//false si autre port?
        auth: {
            user: 'xxxxxx@gmail.com',
            pass: 'xxxx'
        }
    });
    let mailOptions = {
        //configuration du détail du courrier
        from:req.body.inputEmail4, // expéditeur
        to: req.body.inputName, // destinataire
        adressel:req.body.inputAddress,
        city:req.body.inputCity,
        country:req.body.inputState,
        subject: req.body.inputSujet, // Sujet de l'envoi
        text: req.body.exampleTextarea, // texte
        html: '<b>NodeJS Email </b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        //utilisation de la méthode sendMail de transporter
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
            res.render('index');
        });
    });


 module.exports=router;