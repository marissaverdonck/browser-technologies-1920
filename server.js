const express = require('express')
const app = express()

const port = process.env.port || 3000



app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/', (req, res) => {

})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))