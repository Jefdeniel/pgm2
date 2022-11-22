const id = Symbol();

const courseInfo = {
  title: "JavaScript",
  topics: [
    "strings",
    "arrays",
    "objects",
  ],
  id: 'js-course',
}

courseInfo[id] = 123456

console.log(courseInfo)