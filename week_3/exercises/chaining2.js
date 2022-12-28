const userId = "1234";
const data = [{ order: 1 }];
const authToken = "1234";

const signIn = (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token) {
        resolve({
          id: token,
          firstName: "John",
          lastName: "Doe",
        });
        return;
      }
      reject("Could not login");
    }, 1000);
  });
};

const getData = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        orders: 5,
        total: 100,
      };
      if (user && Object.keys(data).length) {
        resolve({
          ...user,
          ...data,
        });
        return;
      }
      reject("Could not fetch data");
    }, 1000);
  });
};

const renderDashboard = ({ firstName, lastName, orders, total }) => {
  console.log(
    `Je hebt het dashboard van ${firstName} ${lastName} gerenderd, hij heeft ${orders} bestellingen en heeft ${total} euro uitgegeven.`
  );
};

const init = async () => {
  try {
    const userId = await signIn(authToken);
    const data = await getData(userId);
    const render = await renderDashboard(data);
  } catch (error) {
    console.log(error);
  }
};

init();
