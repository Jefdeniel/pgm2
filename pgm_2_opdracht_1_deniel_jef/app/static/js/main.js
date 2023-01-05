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
    const response = await fetch(
      "http://127.0.0.1:5500/app/static/data/pgm.json"
    );
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
    }

    let username = document.querySelectorAll(".github__username");
    username.forEach((element) => {
      element.addEventListener("click", (event) => {
        getRepo(event.target.innerText);
      });
    });

    const getRepo = async (username) => {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?page=1&per_page=50`
      );
      console.log(response);
      if (response.status === 200) {
        const jsonData = await response.json();
        console.log(jsonData);
      } else {
        console.log("Something went wrong!");
      }
    };
  } catch (error) {
    console.log(`There is an error: ${error}`);
  }
}

getUserRepos();

async function generatePgmTeam() {
  try {
    const response = await fetch(
      "http://127.0.0.1:5500/app/static/data/pgm.json"
    );

    if (response.status === 200) {
      const data = await response.json();
      let html = "";

      data.forEach((result) => {
        let linkedin = result.portfolio.linkedin;
        let github = result.portfolio.github;
        let thumbnail = result.thumbnail;
        html += `
            <div class="pgm-team__result">
              <span class="d-flex flex-row align-items-center">
                <img class="img-fluid avatar" src="${thumbnail}" alt="avatar" />
                <p class="github__username ml-3"> ${github} </p>
              </span>
                <p class="p-linkedin"> ${linkedin} </p>
            </div>
            `;
      });

      document.querySelector(".pgm-team__results").innerHTML = html;
      getUserRepos();
    } else {
      document.querySelector(".pgm-team__results").innerHTML =
        "Something went wrong";
    }
  } catch (error) {
    console.log(`There is an error: ${error}`);
  }
}

generatePgmTeam();
