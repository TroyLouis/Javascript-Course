"use strict";
//https://restcountries.com/v2/

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

///////////////////////////////////////

// oldschool AJAX call

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} million</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};
/*
const getCountryDataAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    // convert to JS object
    const [data] = JSON.parse(this.responseText);

    //Render country 1
    renderCountry(data);

    // Get neighbor Country 2
    const [neighbour] = data.borders;
    if (!neighbour) return;

    // AJAX CALL 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);

      //Render country 2
      renderCountry(data2, "neighbour");
    });
  });
};

// modern AJAX calls
// a promise is a container for an asychnronously delivered value

const getJSON = function (url, errmsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errmsg} ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    "Country not found"
  )
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error("No neighbour found!");

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        "Country not found"
      );
    })

    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("mozambique");
});

getCountryData("australia");
*/

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}.`);
    })
    .catch((err) => console.log(`${err.message} TROY`));
};

whereAmI(52.508, 13.381);
whereAmI(-33.933, 18.474);
whereAmI(19.037, 72.873);
