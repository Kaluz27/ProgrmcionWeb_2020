const express = require('express');

const app = express();

const port = 3000;

//Evitar revelar el contenido de los directorios a nuestro servidor
app.use(('/assets'), express.static(__dirname + '/public'));
app.set('view engine','ejs');

//route handler para la raiz
/*app.get('/', (req,res)=>{
    res.render('index');
    //send('<html><head> <link href=/assets/style.css type=text/css rel=stylesheet> </head><title>Page title</title><body><h1>My first Heading</h1><p>My first paragraph</p></body></html>');
})*/

app.get('/person/:id', (req,res)=>{
    res.render('index', { ID: req.params.id})    
});

app.listen(port, ()=>{
    console.log("Escuchando en el puerto: "+port);
});

