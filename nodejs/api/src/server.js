// importação das bibliotecas necessárias
const restify = require('restify');
const  server = restify.createServer();
const bodyParser = require('body-parser');

// conexão com o bd e com controllers
//const  db = require('./model/db')
const  packages = require('./controllers/packages')



server.use(restify.plugins.bodyParser());
//importando modulo
packages(server); 

server.listen(8888, function() {
    console.log('%s listening at %s', server.name, server.url);
  });
