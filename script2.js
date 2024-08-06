/*
const fetch = require("node-fetch");

const getPeople = (fetch) => {
  return fetch("https://swapi.dev/api/people")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      return {
        count: data.count,
        results: data.results,
      };
    });
};

getPeople(fetch);
*/
//SECOND WAY OF WRITING THE FUNCTION USING PROMISE

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getPeoplePromise = (fetch) => {
  return fetch("https://swapi.dev/api/people")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return {
        count: data.count,
        results: data.results,
      };
    });
};

//getPeoplePromise(fetch);

//THIRD WAY OF WRITING THE FUNCTION
//const fetch = (...args) =>
//import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getPeople = async (fetch) => {
  const getRequest = await fetch("https://swapi.dev/api/people");
  const data = await getRequest.json();
  console.log(data);
  return {
    count: data.count,
    results: data.results,
  };
};
//getPeople(fetch);

module.exports = {
  getPeoplePromise,
  getPeople,
};
