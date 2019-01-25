import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import UrlRepository from './database/repository/UrlRepository';
import Converter from './utils/Converter';

dotenv.config();

const app = express();

app.set('views', './src/views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => {
  res.render('homepage');
});

app.get('/:shortId', (req, res) => {
  const { shortId } = req.params;
  if (shortId) {
    const repository = new UrlRepository();
    repository.findUrl(shortId).then((result) => {
      res.redirect(result.url);
    });
  } else {
    res.render('homepage');
  }
});

app.post('/', (req, res) => {
  const { url } = req.body;
  let msg = '';
  if (url) {
    const repository = new UrlRepository();
    repository.insertUrl(url).then((result) => {
      if (result) {
        const converter = new Converter();
        const shortId = converter.encode(result.id);
        const url = `${req.protocol}://${req.get('Host')}/${shortId}`;
        msg = `URL inseree avec succes <strong><a href="${url}" target="_blank">${url}</a></strong>`;
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
