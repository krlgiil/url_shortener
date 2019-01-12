import express from 'express';

const app = express();

app.set('views', './src/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('homepage');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});