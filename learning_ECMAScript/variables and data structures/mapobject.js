let course = new Map();

course.set("react", {description: "ui"});
course.set("jest", {description: "testing"});

console.log(course)
console.log(course.react) // Een map is geen object dus met de . notatie geraak je er niet aan 

console.log(course.get("react"))

let details = new Map([
[new Date(), "today"],
[2, {javascript: ["js", "node", "react"]}],
["items", [1,2]]
])

console.log(details.size) // .size geeft je het aantal items in de map

details.forEach(function(item) {
  console.log(item)
})