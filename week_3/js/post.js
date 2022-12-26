const getData = async () => {
  let data = {
    title: "Graduaat Programmeren",
    body: "Tijdens het Graduaat Programmeren specialiseer je je in JavaScript, HTML, CSS, UI/UX en software engineering. Naast deze technische kant, leer je ook om creatief en commercieel te denken. Als programmeur creëer je namelijk niet alleen aantrekkelijke en functionele websites, maar werk je ook samen met heel wat bedrijven. Na deze opleiding kan je aan de slag als front-end developer, CMS Themer of full-stack JavaScript developer.",
    userId: 1,
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

getData();
