(() => {
  const app = {
    initialize() {
      console.log("1. App initialized");
      // cache
      this.cacheElements();
      // register listeners
      this.registerListeners();
      // update UI,
      this.updateUI();
    },
    cacheElements() {
      console.log("2. Cache elements");
    },
    registerListeners() {},
    async updateUI() {
      console.log("3. Update UI");
      await this.displayCurrentWeather();
      await this.getDogToilets();
    },
    async displayCurrentWeather() {
      try {
        const response = await fetch(
          "http://api.weatherapi.com/v1/current.json?key=b67bfa3fed5c439aa1883212230201&q=$ghent"
        );
        const data = await response.json();
        document.querySelector(".weather").innerHTML = `
          <div class="d-flex align-items-center"> 
          <p class="m-1">${data.current.feelslike_c}°C</p>
          <img src="${data.current.condition.icon}" alt="weather icon" />
          </div>
        `;
      } catch (error) {
        console.error(`"Error with fetching weather API data: ${error}}"`);
      }
    },
    async getDogToilets() {
      try {
        const response = await fetch(
          "https://data.stad.gent/api/records/1.0/search/?dataset=hondentoilletten-gent&q=&rows=1000&facet=soort&facet=bestaand"
        );
        const data = await response.json();
        document.querySelector(".dogtoilets").innerHTML = `
        <div class="d-flex align-items-center">
          <p class="m-2">${data.records.length}</p>
          <i class="fa-solid fa-dog m-2"></i>
        </div>
        `;
      } catch (error) {
        console.error(`Error with fetching dogtoilets API data: ${error}`);
      }
    },
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

// getDogToilets
// renderHTMLForUsers
// renderHTMLForDogToilets
