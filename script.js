const googleDatabase = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "catpictures.com",
  "myfavouritecats.com",
  "myfavouritecats2.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.toLowerCase().includes(searchInput);
  });
  return matches.length > 3 ? matches.splice(0, 3) : matches;
};

//console.log(googleSearch("cats", googleDatabase));

module.exports = googleSearch;
