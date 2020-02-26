const connection = require('../model/db.js')
const errors = require('restify-errors');
const server = require('../server');


module.exports = function(server) {

//list packages
server.get('/packages', function (request, response, next) {
    connection.query('select * from offer order by Id desc', function (error, results, fields) {
        if (error) 
        {
             next(error); 
             return; 
        }
        response.end(JSON.stringify(results));
    });
});

// create packages
server.post('/packages', function (request, response, next) {
    if(!request.body) 
    { 
        return next(new errors.BadRequestError("texto inválido")); 
    }
    connection.query('insert into packages.offer (Text) values ("?")', [request.body], function (error, results, fields) 
    {
        if (error) 
        {
             next(error); 
             return; 
        }
          response.end("Ok");
    });
});

// delete packages
server.del('/packages/:id', function (request, response, next) {
    var id = request.params.id;
    if(!id || id <= 0) 
    { 
        return next(new errors.BadRequestError("id inválido")); 
    }
    connection.query('delete from packages.offer WHERE Id=?', [id], function (error, results, fields) 
    {
        if (error || !results.affectedRows) 
        {
            return response.send(new errors.BadRequestError("id inválido"));
        }
        response.end("Ok");
    });

});

};
