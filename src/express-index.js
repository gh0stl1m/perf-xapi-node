const express = require('express');
const app = express();
const port = 3002;

const { fetcher } = require('./utils');

const getRandomOffset = (max = 10) => Math.floor(Math.random() * Math.floor(max));

app.get('/', async (req, res) => {
  const fetcherCats = fetcher('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=100');
  const fetcherPokemon = fetcher(`https://pokeapi.co/api/v2/pokemon?offset=${getRandomOffset()}&limit=100`);
  const response = await Promise.all([fetcherCats, fetcherPokemon]);

	return res.json({ cats: response[0].data, pokemon: response[1].data.results});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));