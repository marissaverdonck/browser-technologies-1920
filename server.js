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
app.set('views', 'views');


app.get('/', (req, res) => {})

app.post('/', (req, res) => {
  console.log('Form ontvangen')

  console.log(req.body)


  res.redirect('/design.html')
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))