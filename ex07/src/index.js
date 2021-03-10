function main() {
  // Only change code below this line

  // Variable declarations

  var studlyCapVar;
  var properCamelCase;
  var titleCaseOver;

  // variable assignments

  studlyCapVar = 10;
  properCamelCase = "A String";
  titleCaseOver = 9000;

  // Only change code above this line

  return {
    studlyCapVar,
    properCamelCase,
    titleCaseOver,
  };
}

console.log(main());

module.extract = main;
