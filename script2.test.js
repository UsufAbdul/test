/*
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const swapi = require("./script2");

it("calls swapi to get people", () => {
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
  });
});
*/

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const { getPeople } = require("./script2"); // Adjust this line if using ES modules

it("calls swapi to get people", async () => {
  const data = await getPeople(fetch);
  expect(data.count).toEqual(82);
});
