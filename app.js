const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const routes = require('./routes');
const app = express(); // creates an instance of an express application
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.use('/', routes);

app.use(function (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/', (req, res) => res.render( 'index', {title: 'Hall of Fame', people: people} ));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
  ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
  console.log(output);
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// res.render( 'index', {title: 'Hall of Fame', people: people} );

// An Initial Route

// app.get('../public/stylesheets/', function (req, res) {
//   res.sendFile('/stylesheets/style.css');
// });
