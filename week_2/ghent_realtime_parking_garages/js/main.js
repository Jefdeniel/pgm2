const GHENT_PARKINGS_API =
  "https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&facet=description";

void (() => {
  const app = {
    initialize() {
      console.log("1. Application started!");
    },
    cacheElements() {
      console.log("2. Cache elements!");
    },
    registerListeners() {
      console.log("3. Register listeners!");
    },
  };
  app.initialize();
})();
