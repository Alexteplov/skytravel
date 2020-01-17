var express = require('express');

var app = express();
// установка механизма представления handlebars
var handlebars = require('express-handlebars').create({ defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars')

var fortunes = [
  "Победи свой страх или они победят тебя.",
  "Рекам нужны истоки.",
  "Не бойся неведомого.",
  "Тебя ждет приятный сюрприз.",
  "Будь проще везде, где только можно."
];


app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
// index page
app.get('/', function(req, res){
  res.render('home');
});

//about page
app.get('/about', function(req,res){
  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', {fortune: randomFortune});
 });

// пользовательская страница 404
app.use(function(req, res, next){
  res.status(404);
  res.render('404');
});

// пользовательская страница 500
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});
app.listen(app.get('port'), function() {
  console.log('Express is run on http://localhost:'+
    app.get('port') + '; press CTRL+C for close.');
});
