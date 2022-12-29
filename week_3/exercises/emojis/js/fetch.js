function loadJsonByPromise(url) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", url, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = !xhr.responseType
          ? JSON.parse(xhr.response)
          : xhr.response;
        resolve(data);
      } else {
        reject(xhr.status);
      }
    };
    xhr.onerror = () => {
      reject(Error("Network Error!"));
    };
    xhr.send(null);
  });
}
