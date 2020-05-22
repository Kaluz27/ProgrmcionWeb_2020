const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const mongoose = require('mongoose');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

mongoose.connect('mongodb+srv://eduardo:123@cluster0-mapcn.mongodb.net/test?retryWrites=true&w=majority');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: String,
    password: String
});

//Evitar revelar el contenido de los directorios a nuestro servidor

app.use(('/assets'), express.static(__dirname + '/public'));


app.set('view engine','ejs');


app.get('/', (req, res) => {
    res.render('personData');
});



app.get('/person/:id', (req, res) => {
    res.render('person', {
    ID: req.params.id,
    Qstr: req.query.Qstr
    });});



app.post('/person', urlencodedParser, (req, res) => {
    // res.send('Thanks');
    console.log(req.body.userName);
    // console.log(req.body.lastname);
    //aqui empieza la busqueda
    var user = mongoose.model('User', userSchema);
    user.find({ userName: req.body.userName }, function (err, data) {
        // doc is a Document
        if (err) {
            console.log('Hubo un error');
        } else {
            if (data.length > 0) {
                // console.log(data);
                res.render('results', { data });
                // console.log(doc);
            } else { res.send('no hay coincidencias para el criterio de busqueda'); }
        }
    });
});



app.post('/personjson', jsonParser, (req, res) => {
    res.send('Thanks from jsonParser');
    console.log(req.body.userName);
 
    
    });

app.listen(port, ()=>{
    console.log( `Escuchando en el puerto ${port}`);
    
})


