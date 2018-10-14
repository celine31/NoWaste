const express = require('express');//permet de gérer les routes
const bodyParser = require('body-parser');//permet de parcourir le body
const path = require('path');
const http=require('http');
const api = require('./server/routes/api');
//permet la gestion des emails
const nodemailer=require('nodemailer');

//gestion des routes avec express
const app = express();

//on précise l'utilisation de bodyparser
app.use(bodyParser.urlencoded({
    extended: true
})); //objet de configuration en paramètre pour éviter message d'info d'erreur en console
app.use(bodyParser.json());

//pour angular
app.use(express.static(path.join(__dirname , 'dist')));
app.use('/api',api);

app.get('*',(req, res)=> { 
       res.sendFile(path.join(__dirname, 'dist/index.html'));
    });

//définition du port soit saisi en ligne de commandes soit 3000
const port = process.env.PORT ||3000 ;
app.set('port',port);

const server=http.createServer(app);
server.listen(port, ()=> {
    console.log("l'application écoute sur le port :" + port);
});

module.exports=app;


