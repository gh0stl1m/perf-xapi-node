const fetch = require("node-fetch");

const fetcher = async url => {
  let fetcherData = { error: null, data: null };

  try {
    const response = await fetch(url);
    fetcherData.data = await response.json();
  } catch (err) {
    console.error('Error requesting data: ', err);
    fetcherData.error = err.message;
  }

  return fetcherData;
}

module.exports = fetcher;
