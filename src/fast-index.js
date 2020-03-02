const fastify = require('fastify')({
  logger: true
});

const { fetcher } = require('./utils');

const getRandomOffset = (max = 10) => Math.floor(Math.random() * Math.floor(max));

fastify.get('/', async (request, reply) => {
  const fetcherCats = fetcher('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=100');
  const fetcherPokemon = fetcher(`https://pokeapi.co/api/v2/pokemon?offset=${getRandomOffset()}&limit=100`);
  const response = await Promise.all([fetcherCats, fetcherPokemon]);

	return { cats: response[0].data, pokemon: response[1].data.results};
})

const start = async () => {
  try {
    await fastify.listen(3001);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();
