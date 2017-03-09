var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
  
  user: 'yashwanthsharma',
  database: 'yashwanthsharma',
  host:'db.imad.hasura-app.io',
  port:'5432',
  password:'db-yashwanthsharma-59517'

 };

var app = express();
app.use(morgan('combined'));

var articles = {
 'article-one' :{
       title:'article-one yash!',
       heading:'ARTICLE-ONE',
       content:`
          <p>
              This is my first article
          </p>`      
 },   
 'article-two' :{
       title: 'article-two yash!',
       heading:'ARTICLE-TWO',
       content:`
          <p>
             This is my second article
          </p>`
 }, 
 'article-three' :{
       title: 'article-three yash!',
       heading:'ARTICLE-THREE',
       content:`
           <p>
             This is my third article
           </p>`
 }      
};
function createTemplate (data) {
    
    var title   = data.title;
    var heading = data.heading;
    var content = data.content;
         var htmlTemplate = `
         <html>
    <head>
        <title>
              ${title}
        </title>
         <meta name ="viewport" content ="width=device-width, initial-scale-1" />
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
              <a href="/">Home</a>
            </div>
              <hr/>
              <h1>${heading}</h1>
              <div>
                 <p>
                    ${content}
                 </p>
              </div>    
        </div>
    </body>
</html>
`;
  return htmlTemplate;       
}


var pool = new Pool(config);
app.get('/test-db', function (req, res) {
    pool.query('SELECT * FROM test',function (err, result) {
       if(err){
           res.status(500).send(err.toString());
       } 
       else
       {
           res.send(JSON.stringfy(result));
       }
});

});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var counter = 0;
app.get('/counter',function(req, res){
 counter = counter + 1;
 res.send(counter.toString());
 });
 
 var names =[];
app.get('/submit-name', function (req, res) {  //url /submit-name?name=xxxx
 //get the name from the request
  var name = req.query.name;
  
  names.push(name);
  //JSON java script object notation
  
  res.send(JSON.stringify(names));
});

 app.get('/:articleName',function (req, res){
    //articleName == article-one
    //articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
