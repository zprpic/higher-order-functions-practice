const JSONdata = require("./JSON-data/mockturtle.json");

// data = [ {...}, {...}, {...}, ...];

// const allNamesFromArray = JSONdata.map((data) => data["full name"]); // [ "full name", "full name", "full name", ...]

/* const namesAndCities = JSONdata.map((data) => {
  return `${data["full name"]}, city: ${data.address.city}}`; // [full name, city, ...]
}); */

const namesAndCities = JSONdata.map((data) => {
  const name = data["full name"];
  const { address } = data;
  return { name, address };
});

console.log(namesAndCities);
