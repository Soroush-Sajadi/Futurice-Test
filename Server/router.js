const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
require('dotenv').config();


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/:user', async (req, res) => {
    const user = req.params.user
    const fetchData = await fetch(`https://api.github.com/users/${user}/repos`);
    const starsData = await fetchData.json();
    if (starsData.message === undefined) {
    res.json(starsData);
    } else {
      res.json(starsData.message);
    }
  });
app.get('/followers/:user', async (req, res) => {
  const user = req.params.user
  const fetchData = await fetch(`https://api.github.com/users/${user}/followers`);
  const starsData = await fetchData.json();
  res.json(starsData);
});
app.get('/following/:user', async (req, res) => {
  const user = req.params.user
  const fetchData = await fetch(`https://api.github.com/users/${user}/following`);
  const starsData = await fetchData.json();
  res.json(starsData);
});
app.get('/api/stars/', async (req, res) => {
  const user = req.params.user
  const fetchData = await fetch(`https://api.github.com/search/repositories?q=stars:>160000`);
  const starsData = await fetchData.json();
  res.json(starsData);
});

module.exports = app;
const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}!`))