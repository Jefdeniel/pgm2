const GHENT_PARKINGS_API =
  "https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&facet=description";

void (() => {
  const app = {
    initialize() {
      console.log("1. Application started!");
      this.cacheElements();
    },
    cacheElements() {
      console.log("2. Cache elements!");
      this.$parkingList = document.querySelector(".parking-list");
    },
    registerListeners() {
      console.log("3. Register listeners!");
    },
    getDataFromGhentRealtimePargingStatesAPIEndpoint() {
      console.log("4. Get data from API endpoint!");
    },
     updateGhentRealtimePargingStatesUI() {
       console.log("5. Update UI!");
     }
  };
  app.initialize();
})();

// 1. Maap een app object met de methoden initialize(), cacheElements(), getDataFromGhentRealtimePargingStatesAPIEndpoint(), updateGhentRealtimePargingStatesUI().

// 2. Cache het element met klassenaam parking-list in de variabele $parkingList via de methode cacheElements().

// 3. Laad de externe data (JSON) API-endpoint https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&facet=description via de methode getDataFromGhentRealtimePargingStatesAPIEndpoint().

// 4. Update de gebruikersinterface op basis van de ingeladen data via de methode updateGhentRealtimePargingStatesUI().

const getDataFromGhentRealtimePargingStatesAPIEndpoint = async () => {
  try {
    const response = await fetch(GHENT_PARKINGS_API);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getDataFromGhentRealtimePargingStatesAPIEndpoint();

updateGhentRealtimePargingStatesUI() {
  const parkingList = document.querySelector(".parking-list");
  console.log(parkingList)
  const parkingListItems = parkingList.querySelectorAll("li");
  parkingListItems.forEach((parkingListItem) => {
    parkingListItem.remove();
  });
}






