(async () => {
  const willIGetNewSmartphone = (isDadHappy) => {
    return new Promise((resolve, reject) => {
      if (isDadHappy) {
        resolve({
          brand: "Xiaomi",
          color: "Gradient Blue to Green",
        });
      } else {
        reject(new Error("Dad is not happy"));
      }
    });
  };

  const showOff = (phone) => {
    return new Promise((resolve, reject) => {
      const message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone.`;
      resolve(message);
    });
  };

  const askDadForSmartphone = async (isDadHappy) => {
    try {
      const phone = await willIGetNewSmartphone(isDadHappy);
      const message = await showOff(phone);

      console.log(message);
    } catch (error) {
      console.error(error);
    } finally {
      console.info("Do something for all :)");
    }
  };

  await askDadForSmartphone(true);
})();
