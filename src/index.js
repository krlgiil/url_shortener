import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
import Connection from './database/connection';
import UrlRepository from './database/repository/UrlRepository';

const app = express();

app.set('views', './src/views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.render('homepage');
});

app.post('/submit', (req, res) => {
  const { url } = req.body;
  let msg = '';
  if (url) {
    const repository = new UrlRepository();
    repository.insertUrl(url).then(result => {
      if (result) {
        const { shortId } = result;
        msg = `URL inseree avec succes "${shortId}"`;
        res.render('homepage', { msg });
      }
    });
  } else {
    res.render('homepage');
  }
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});