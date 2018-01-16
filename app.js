const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.use(function (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
