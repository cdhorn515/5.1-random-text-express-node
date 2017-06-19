const express = require('express');
const readline = require('readline');
var loremIpsum = require('lorem-ipsum');

const app = express();

//create variable with options for text
var output = loremIpsum({
  count: 3,
  units: "paragraphs",
  paragraphLowerBound: 4,
  paragraphUpperBound: 7,
  format: 'html'
});

//
app.get('/lorem/', function(req, res) {
  res.send(output);
});

app.listen(3000, function(){
  console.log("Express app listening for connection");
});
