var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.format({
    'text/plain': function(){
      res.send('hey1');
    },

    'text/html': function(){
      res.send('<p>hey2</p>');
    },

    'application/json': function(){
      res.send({ message: 'hey3' });
    },

    'default': function() {
      // log the request and respond with 406
      res.status(406).send('Not Acceptable');
    }
  });
});



var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
