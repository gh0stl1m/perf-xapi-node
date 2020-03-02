const { fetcher } = require('./utils');

const getRandomOffset = (max = 10) => Math.floor(Math.random() * Math.floor(max));

module.exports = async () => {
  // const { data: catData } = await fetcher('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=100');
  // const { data: pokemonData } = await fetcher(`https://pokeapi.co/api/v2/pokemon?offset=${getRandomOffset()}&limit=100`);

  // return { cats: catData, pokemons: [...pokemonData.results] };
  const fetcherCats = fetcher('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=100');
  const fetcherPokemon = fetcher(`https://pokeapi.co/api/v2/pokemon?offset=${getRandomOffset()}&limit=100`);
  const response = await Promise.all([fetcherCats, fetcherPokemon]);

	return { cats: response[0].data, pokemon: response[1].data.results};
};