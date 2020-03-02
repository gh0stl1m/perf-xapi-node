const fetch = require("node-fetch");
const https = require('https');

const agent = new https.Agent({
    keepAlive: true,
});

const fetcher = url => fetch(url, { agent })
    .then(res => res.json())
    .catch();

module.exports = fetcher;
