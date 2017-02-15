var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 'article-one' :{
       title: 'article-one yash!',
       heading:'ARTICLE-ONE',
       content:'This is my first article'
 },   
 'article-two' :{
     title: 'article-two yash!',
       heading:'ARTICLE-TWO',
       content:'This is my second article'
 }, 
 'article-three' :{
     title: 'article-three yash!',
       heading:'ARTICLE-TWO',
       content:'This is my third article'
 }
       
};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleName',function (req, res){
    //articleName == article-one
    //articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
