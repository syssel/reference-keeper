var cors = require('cors');
var express = require('express');

var app = express();


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use(cors({ origin: 'https://trello.com' }));

// http://expressjs.com/en/starter/basic-routing.html
app.get("*", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
