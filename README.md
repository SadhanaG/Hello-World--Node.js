Express.js
--------------------


> Express.js is a module that you add to your node.js code in order to get benefits of 'MVC' So, basically there is no difference programmatically. Its all JS with callback type continuation passing. There will be new things which are specific to Express like routes, controllers, view model etc, but again they are simple sweet JS.


#### Express supports the following routing methods corresponding to HTTP methods:

get | post | put | head | delete | options | trace | copy lock | mkcol | move | purge | propfind | proppatch | unlock | report | mkactivity | checkout | merge | m-search | notify | subscribe | unsubscribe | patch | search | and connect.

___

Hello World
-----------

```javascript

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Express');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

```

#### Express rounting

```html

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

```

> GET method route

```javascript

app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

```

> POST method route

```javascript

app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

```
