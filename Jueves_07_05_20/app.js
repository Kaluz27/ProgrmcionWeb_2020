const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const port = 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post('/person', urlencodedParser, (req, res) => {
    res.send('Thanks');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

var jsonParser = bodyParser.json();
app.post('/personjson', jsonParser, (req, res) => {
    res.send('Thanks from jsonParser');
    console.log(req.body.firstname);
    console.log(req.body.lastname);

});

//Evitar revelar el contenido de los directorios a nuestro servidor
app.use(('/assets'), express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.get('/person/:id', (req, res) => {
    res.render('person', {
    ID: req.params.id,
    Qstr: req.query.Qstr
    });});


    app.get('/', (req, res) => {
        res.render('personData');
    });
    

app.listen(port, ()=>{
    console.log("Escuchando en el puerto: "+port);
});

