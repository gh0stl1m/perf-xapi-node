const Koa = require('koa');
const app = new Koa();

const { fetcher } = require('./utils');

const getRandomOffset = (max = 10) => Math.floor(Math.random() * Math.floor(max));

app.use(async ctx => {
  const fetcherCats = fetcher('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=100');
  const fetcherPokemon = fetcher(`https://pokeapi.co/api/v2/pokemon?offset=${getRandomOffset()}&limit=100`);
  const response = await Promise.all([fetcherCats, fetcherPokemon]);

	// res.json({ cats: response[0].data, pokemon: response[1].data.results});
  ctx.body = { cats: response[0].data, pokemon: response[1].data.results };
});

app.listen(3003);