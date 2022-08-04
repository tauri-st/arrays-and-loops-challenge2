var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

//Loop each element thru string
for (var language of programmingLanguages) {
  console.log(`I can't wait to learn ${language}`);
}

//Perform indexing function on each element called item  and logout in uppercase
programmingLanguages.forEach(function (item, index) {
  console.log(`The ${item.toUpperCase()} element is at position ${index + 1}`);
});

//Only return languages that have a Y in them
var updatedLanguages = programmingLanguages.filter(function (item) {
  return item.includes("y");
});