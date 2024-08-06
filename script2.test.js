const { getPeoplePromise, getPeople } = require("./script2");

const swapi = require("./script2");

it("calls swapi to get people", () => {
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
  });
});

it("calls swapi to get people with a promise", () => {
  swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(82);
  });
});
