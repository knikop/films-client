/**
 * Implements HTTP client
 * Using FetchAPI
 * @param {*} uri 
 * @returns 
 */
async function getData(uri) {
  //Step 1: Congigure the requests
  const reqHeaders = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  //Step 2: Create and init HTTP request: GET|POST|PUT
  const request = new Request({
    method: 'GET',
    headers: reqHeaders,
    //uri: uri,

  });
  //Step 3: send the request
  //fetch(request);
  const response = await fetch(uri, request);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
}

/**
 * Fetch the shows
 */
async function fetchShows() {
  console.log("Fetching shows...");
  //https://api.tvmaze.com/shows
  const uri = 'https://api.tvmaze.com/shows';
  const shows = await getData(uri);
  //console.log(shows);
  parseShows(shows);
}

/**
 * Parse the shows data from the api and display
 * @param {} shows 
 */
function parseShows(shows) {
  console.log("Parse shows...");
  var rows = '';
  shows.forEach(show => {
    //produce a table
    //For each show
    rows += `
        <tr>
            <th>${show.name}</th>
            <th>${show.language}</th>
            <th>${show.genres.join(', ')}</th>
            <th>${show.premiered}</th>
            <th>${show.ended}</th>
            <th>${show.status}</th>
        </tr>`;

  });
  //tblShows
  var tblShows = document.getElementById('tblShows');
  tblShows.innerHTML = rows;
  //--spShowsCounter
  //Set the value of the shows counter
  var spShowsCounter = document.getElementById('spShowsCounter');
  spShowsCounter.innerHTML = shows.length;
}

/**
 * Fetch the films
 */
async function fetchFilms() {
  console.log("Fetching films...");
  const uri = 'http://localhost/films-api/films';
  const films = await getData(uri);

  //console.log(films);
  parseFilms(films);
}

/**
 * Parse the films data from the database and display
 * @param {*} films 
 */
function parseFilms(films) {
  console.log("Parse films...");
  var rows = '';
  films.data.forEach(film => {
    //produce a table
    //For each film
    rows += `
        <tr>
            <th>${film.film_id}</th>
            <th>${film.title}</th>
            <th>${film.description}</th>
            <th>${film.release_year}</th>
            <th>${film.language_id}</th>
            <th>${film.original_language_id}</th>
            <th>${film.rental_duration}</th>
            <th>${film.rental_rate}</th>
            <th>${film.length}</th>
            <th>${film.replacement_cost}</th>
            <th>${film.rating}</th>
            <th>${film.special_features}</th>
            <th>${film.last_update}</th>
        </tr>`;

  });
  //tblFilms
  var tblFilms = document.getElementById('tblFilms');
  tblFilms.innerHTML = rows;
  //--spFilmsCounter
  //Set the value of the films counter
  var spFilmsCounter = document.getElementById('spFilmsCounter');
  spFilmsCounter.innerHTML = films.length;
}

/**
 * Fetch the categories
 */
async function fetchCategoriesByFilms() {
  console.log("Fetching categories...");
  const uri = 'http://localhost/films-api/categories/{category_id}/films';
  const categories = await getData(uri);

  // console.log(categories.data);
  if (categories.data) {
    parseCategories(categories);
  }
}

/**
 * Parse the categories data from database and display
 * @param {*} categories 
 */
function parseCategories(categories) {
  console.log("Parse categories by films...");
  var rows = '';

  if (categories.data) {
    categories.data.forEach(category => {
      // produce a table
      // For each category
      rows += `
          <tr>
              <th>${category.film_id}</th>
              <th>${category.title}</th>
              <th>${category.description}</th>
              <th>${category.release_year}</th>
              <th>${category.language_id}</th>
              <th>${category.original_language_id}</th>
              <th>${category.rental_duration}</th>
              <th>${category.rental_rate}</th>
              <th>${category.length}</th>
              <th>${category.replacement_cost}</th>
              <th>${category.rating}</th>
              <th>${category.special_features.join(', ')}</th>
              <th>${category.last_update}</th>
              <th>${category.actors}</th>
          </tr>`;
    });
  }

  // tblCategories
  var tblCategories = document.getElementById('tblCategories');
  tblCategories.innerHTML = rows;
  // --spCategoriesCounter
  // Set the value of the categories counter
  var spCategoriesCounter = document.getElementById('spCategoriesCounter');
  spCategoriesCounter.innerHTML = categories.data.length;
}

/**
 * Fetch the actors
 */
async function fetchActors() {
  console.log("Fetching actors...");
  const uri = 'http://localhost/films-api/actors';
  const actors = await getData(uri);

  //console.log(actors.data);
  parseActors(actors);
}
/**
 * Parse the actors data from database and display
 * @param {*} actors 
 */
function parseActors(actors) {
  console.log("Parse actors...");
  var rows = '';
  actors.data.forEach(actor => {
    //produce a table
    //For each actor
    rows += `
        <tr>
            <th>${actor.actor_id}</th>
            <th>${actor.first_name}</th>
            <th>${actor.last_name}</th>
            <th>${actor.last_update}</th>
        </tr>`;

  });
  //tblActors
  var tblActors = document.getElementById('tblActors');
  tblActors.innerHTML = rows;
  //--spActorsCounter
  //Set the value of the actors counter
  var spActorsCounter = document.getElementById('spActorsCounter');
  spActorsCounter.innerHTML = actors.length;
}

/**
 * Fetch the actors
 */
async function fetchActorsById() {
  console.log("Fetching actors by film...");
  const uri = 'http://localhost/films-api/actors/{actor_id}/films';
  const actor_id = await getData(uri);

  //console.log(actor_id.data);
  if(actor_id.data){
      parseActorsByFilm(actor_id);
  }
}

/**
 * Parse the actors by film data from database and display
 * @param {*} actors 
 */
function parseActorsByFilm(actors) {
  console.log("Parse actors by film...");
  var rows = '';
  actors.data.forEach(actor => {
    //produce a table
    //For each actor
    rows += `
        <tr>
          <th>${actor.film_id}</th>
          <th>${actor.title}</th>
          <th>${actor.description}</th>
          <th>${actor.release_year}</th>
          <th>${actor.language_id}</th>
          <th>${actor.original_language_id}</th>
          <th>${actor.rental_duration}</th>
          <th>${actor.rental_rate}</th>
          <th>${actor.length}</th>
          <th>${actor.replacement_cost}</th>
          <th>${actor.rating}</th>
          <th>${actor.special_features}</th>
          <th>${actor.last_update}</th>
          <th>${actor.category_name}</th>
        </tr>`;

  });
  //tblActorsByFilm
  var tblActorsByFilm = document.getElementById('tblActorsByFilm');
  tblActorsByFilm.innerHTML = rows;
  //--spActorsByFilmCounter
  //Set the value of the actors by film counter
  var spActorsByFilmCounter = document.getElementById('spActorsByFilmCounter');
  spActorsByFilmCounter.innerHTML = actors.data.length;
}
