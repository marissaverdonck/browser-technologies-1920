const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const port = process.env.port || 3000


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('public', 'public');


app.get('/design/:shirtColor/:text/:shirtImage', (req, res) => {
  res.render('design')
  console.log(req.params.shirtColor)
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.redirect('/design/' + req.body.shirtColor + '/' + req.body.text + '/' + req.body.shirtImage)
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))