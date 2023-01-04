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
// renderHTMLForUsers

async function fetchUsers(event) {
  // Voorkom dat de form automatisch gaat herladen
  event.preventDefault();

  // Haal de tekst uit het zoekveld
  let searchStr = document.getElementById("searchUser").value;
  console.log(searchStr);

  // maak de API call met de opgegeven zoekterm naar de API van GitHub
  await fetch(
    `https://api.github.com/search/users?sort=desc&page=1&per_page=100&q=${searchStr}`
  )
    .then(function (response) {
      if (response.status === 200) {
        return response.json();
      } else {
        return "Something went wrong";
      }
    })
    .then(function (data) {
      if (data !== null) {
        let results = data.items;
        let html = "";

        // Loop door de resultaten heen
        results.forEach((result) => {
          let username = result.login;
          let avatar_url = result.avatar_url;
          html += `
            <div class="github-users__result">
              <img class="img-fluid" src="${avatar_url}" alt="avatar" />
              <p class="username">${username}</p>
            </div>
            `;
        });

        // Voeg de resultaten toe aan de DOM
        document.querySelector(".github-users__results").innerHTML = html;
      } else {
        document.querySelector(".github-users__results").innerHTML = data;
      }
    })
    .catch((error) => {
      console.log(`There is an error: ${error}`);
    });
}

async function getUserRepos() {
  try {
    // Get the value of the clicked element
    const username = document.getElementsByClassName("username").value;

    // Construct the URL for the API request
    const url = `https://api.github.com/users/${username}/repos?page=1&per_page=50`;

    // Make the GET request to the API
    const response = await fetch(url);
    const data = await response.json();

    // Generate the HTML
    const html = data.map((repo) => `<li>${repo.full_name}</li>`).join("");

    // Insert the HTML into the DOM
    document.getElementById("repos").innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

// Add click event listeners to all elements with the class name "username"
const elements = document.getElementsByClassName("username");
for (const element of elements) {
  element.addEventListener("click", getUserRepos);
}

// url die ik nodig heb: https://api.github.com/users/${username}/repos?page=1&per_page=50
