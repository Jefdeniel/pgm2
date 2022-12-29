// function signIn(userId, data)

// je hebt 3 functies
// signIn()
// getData ()
// renderDashboard()

// getData mag pas uigevoerd worden als signIn is gelukt
// renderDashboard mag pas uitgevoerd worden als signIn is gelukt

// signIn en getData: als er iets misloopt alert je de gebruiker

// gebruik globale variabelen zoals userId en data om de data door te geven aan de volgende functie

// Path: week_3\exercises\promises.js

const userId = 1;
const data = [{ order: 1 }];

// function signIn(userId, data) {
//   return new Promise ((resolve, reject) => {
//     if (userId === 0) {
//       reject("error");
//   } else {
//     resolve(data);
//     }
//   }
//   }

function signIn() {
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      if (userId) {
        resolve(userId);
      } else {
        reject("Could not login user");
      }
    }, 1000);
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.length) {
        resolve(data.length);
      } else {
        reject("Could not get data");
      }
    }, 1000);
  });
}

function renderDashboard() {
  console.log("render dashboard");
}

signIn()
  .then(() => getData())
  .then(() => renderDashboard())
  .catch((error) => alert(error));
