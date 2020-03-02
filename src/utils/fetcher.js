const fetch = require("node-fetch");

const fetcher = url => fetch(url)
    .then(res => res.json())
    .catch();

module.exports = fetcher;
