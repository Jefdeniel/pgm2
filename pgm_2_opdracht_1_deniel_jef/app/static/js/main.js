(() => {
  const app = {
    initialize() {
      // cache
      this.cacheElements();
      // register listeners
      this.registerListeners();
      // update UI,
      this.updateUI();
    },
    cacheElements() {},
    registerListeners() {},
    async updateUI() {},
  };
  app.initialize();
})();

// Mogelijke functies om jullie op weg te helpen
// Hier zijn enkele functienamen om jullie een idee te geven hoe je de code structureert.

// API
// fetchData (async)
// Parameters: URL

// APP
// getUsers
// Parameters: Zoekopdracht (Standaard leeg)
// getUserDetail
// getUserRepos
// getUserFollowers
// getCurrentWeather

async function getCurrentWeather(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

const url =
  "http://api.weatherapi.com/v1/current.json?key=b67bfa3fed5c439aa1883212230201&q=$ghent";
getCurrentWeather(url).then((data) => {
  // return `
  //   <h2>Current weather in ${data.location.name}</h2>`;
  console.log(data);
});

// getDogToilets
// renderHTMLForUsers
// renderHTMLForDogToilets
