var express = require('express');
var app = express();

app.use(express.static('./public'));

var server = app.listen(3000, function(){
  var port = server.address();
  console.log('Listening on port: ', port);
});

// --- candidates --- //


// --- routes --- //
app.get('/', function(request, response){
  response.sendfile(__dirname + '/public/index.html');
});

// --- endpoints --- //
