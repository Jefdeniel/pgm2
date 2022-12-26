// Description: Fetching data from an API

// const countries = fetch("https://restcountries.com/v3.1/all");

// console.log(countries);

// setTimeout(() => {
//   console.log(countries);
// }, 1000);

// Description: promise.then() and promise.catch() are used to handle the promise

const countriesPromise = fetch("https://restcountries.com/v3.1/all")
  .then((response) => {
    return response.json(); // Dit zeker niet vergeten, anders werkt het niet goed denk ik (json)
  })
  .then((data) => {
    console.log(data);
  });

// Nu proberen met asyncs en awaits

const getData = async () => {
  const countriesPromise2 = await fetch(
    "https://restcountries.com/v3.1/name/belgium",
    {
      method: "GET",
    }
  );

  const data = await countriesPromise2.json();
  console.log(data);
};

getData();
// await getData(); // Dit werkt niet, want je kan geen await gebruiken buiten een async functie
