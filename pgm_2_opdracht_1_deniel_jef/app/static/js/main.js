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

function getUserRepos() {
  let username = document.querySelectorAll(".github__username");
  console.log(username);
  username.forEach((element) => {
    element.addEventListener("click", (event) => {
      let html = "";

      html += `
      <div class="row">
        <div class="col-12">
        <p>test</p>
        </div>
      </div>
      `;

      document.querySelector(".repos__results").innerHTML = html;
    });
  });

  const getRepo = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?page=1&per_page=50`
      );
      console.log(response);
      if (response.status === 200) {
        const jsonData = await response.json();
        console.log(jsonData);
      }
      throw Error("Something went wrong!");
    } catch (error) {
      console.log(`Catch: ${error}`);
    }
  };
}

// // url die ik nodig heb: https://api.github.com/users/${username}/repos?page=1&per_page=50

// const getData = async () => {
//   try {
//     const response = await fetch(
//       "http://127.0.0.1:5500/app/static/data/pgm.json",
//       {}
//     );
//     if (response.status === 200) {
//       const jsonData = await response.json();
//       console.log(jsonData);

//       jsonData.forEach((element) => {
//         let firstName = response.firstName;
//       });
//     }
//     throw Error("Something went wrong!");
//   } catch (error) {
//     console.log(`Catch: ${error}`);
//   }
// };

// getData();

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

// KOPIE FUNCTIE
// async function getUserRepos() {
//   try {
//     // Get the value of the clicked element (username)
//     // de username haal ik uit het klikken op een foto van een opgezochte gebruiker

//     let username = document.getElementsByClassName("github__username");
//     username.forEach((user) => {
//       user.addEventListener("click", (event) => {
//         console.log(event.innerHTML);
//       });
//     });
//     // Construct the URL for the API request
//     const url = `https://api.github.com/users/${username}/repos?page=1&per_page=50`;

//     // Make the GET request to the API
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);

//     // HTML genereren
//     let html = data.map((repo) => `<li>${repo.full_name}</li>`).join("");

//     // Insert the HTML into the DOM
//     document.getElementsByClassName("repos").innerHTML = html;
//   } catch (error) {
//     console.error(error);
//   }
// }
