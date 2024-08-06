/*
const fetch = require("node-fetch");

const getPeoplePromise = (fetch) => {
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

//getPeoplePromise(fetch);

//const fetch = require("node-fetch");

const getPeople = async (fetch) => {
  const getRequest = await fetch("https://swapi.dev/api/people");
  const data = getRequest.json();
  console.log(data);
  return {
    count: data.count,
    results: data.results,
  };
};

getPeople(fetch);

module.exports = {
  getPeoplePromise,
  getPeople,
};
*/
/*
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
*/

const fetch = require("node-fetch");

// Function using promises
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

// Function using async/await
const getPeople = async (fetch) => {
  try {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json(); // Await here as well
    console.log(data);
    return {
      count: data.count,
      results: data.results,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw error to handle it in the calling function
  }
};

// Export both functions
module.exports = {
  getPeoplePromise,
  getPeople,
};
