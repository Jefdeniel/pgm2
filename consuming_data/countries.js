const countriesPromise = fetch("https://restcountries.com/v3.1/all", {})
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw Error("Something went wrong!");
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((error) => {
    console.log(`Catch: ${error}`);
  });
