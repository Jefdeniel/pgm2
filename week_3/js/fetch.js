const countriesPromise = fetch("https://restcountries.eu/rest/v3.1/all")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
