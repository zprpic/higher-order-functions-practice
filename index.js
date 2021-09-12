const JSONdata = require("./JSON-data/mockturtle.json");

// data = [ {...}, {...}, {...}, ...];

const allNamesFromArray = JSONdata.map((data) => data["full name"]);

console.log(allNamesFromArray);
