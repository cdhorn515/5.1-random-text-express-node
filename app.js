const express = require('express');
var loremIpsum = require('lorem-ipsum');

const app = express();

// create variable with options for text
var output = loremIpsum({
  count: 3,
  units: "paragraphs",
  paragraphLowerBound: 4,
  paragraphUpperBound: 7,
  format: 'html'
});


app.get('/lorem', function(req, res) {
  res.send(output);
});

// app.get('/lorem/:count', function(req, res) {
//   res.send(loremIpsum({
//     count: req.params.count,
//     units: "paragraphs",
//     paragraphLowerBound: 4,
//     paragraphUpperBound: 7,
//     format: 'html'
//   });
// });
// });


app.listen(3000, function(){
  console.log("Express app listening for connection");
});
