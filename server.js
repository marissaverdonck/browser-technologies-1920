require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const host = '0.0.0.0';
const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');



app.get('/', (req, res) => {
  res.render('index')
})

app.get('/design/:shirtColor/:text/:shirtImage', (req, res) => {
  res.render('design')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.redirect('/design/' + req.body.shirtColor + '/' + req.body.text + '/' + req.body.shirtImage)
})



app.listen(PORT, host, function() {
  console.log(`Example app listening on port ${PORT}!`);
});