/* const JSONdata = require("./JSON-data/mockturtle.json"); */

// data = [ {...}, {...}, {...}, ...];

// const allNamesFromArray = JSONdata.map((data) => data["full name"]); // [ "full name", "full name", "full name", ...]

/* const namesAndCities = JSONdata.map((data) => {
  return `${data["full name"]}, city: ${data.address.city}}`; // [full name, city, ...]
}); */

/* const namesAndCities = JSONdata.map((data) => {
  const name = data["full name"];
  const { address } = data;  // [{full name:, address: {}}, ...]
  return { name, address };
}); */

/* const shortCitiesAndSortedByLength = JSONdata.filter((data) => {
  return data.address.city.length <= 4;
}).sort((c1, c2) => {
  if (c1["full name"].length > c2["full name"].length) {
    return -1;
  } else {
    return 1;
  }
});

*/

//sort companies by categories

const companies = require("./JSON-data/companies/companies");

const newCompanies = (data) => {
  let arrayOfCompaniesByCategory = data.reduce((groupedCompanies, company) => {
    const { category } = company;

    if (!groupedCompanies[`${category}`]) {
      groupedCompanies[`${category}`] = [];
    }

    groupedCompanies[`${category}`].push(company);

    return groupedCompanies;
  }, {});

  return arrayOfCompaniesByCategory;
};

console.log(newCompanies(companies));
