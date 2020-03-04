const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.htm')
    res.end(html); //Solo aqui puedo utilizar el backtick
}).listen(1337, '127.0.0.1');