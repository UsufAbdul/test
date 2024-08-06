const fetch = require("node-fetch");

const swapi = require("./script2");

it("calls swapi to get people", () => {
    expect.assertions(1)
  return (
    swapi.getPeople(fetch).then((data) => {
      expect(data.count).toEqual(87);
    }),
    
  );
});

it("calls swapi to get people with a promise", () => {
  swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual();
    expect(data.results.length).toBeGreaterThen(5);
  });
});
