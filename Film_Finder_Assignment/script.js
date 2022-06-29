// Movie Title Filter Functions

let moviesFilter = allMovies.filter(
    function(movie) {
        let newMovies = movie.year > 2013;
    }
)

let allNewMovies = allMovies.filter(
    function(movie) {
        parseInt(movie.year);
        return movie.year > 2013;
    }    
)

let allAvengerMovies = allMovies.filter(
    function(movie) {
        return movie.title.includes('Avenger');
    }
)

let allXmenMovies = allMovies.filter(
    function(movie) {
        return movie.title.includes('X-Men');
    }
)

let allBatmanMovies = allMovies.filter(
    function(movie) {
        return movie.title.includes('Batman');
    }
)

let allPrincessMovies = allMovies.filter(
    function(movie) {
        return movie.title.includes('Princess');
    }
)

// Movies To Grid Function

let addMoviesToDom = function(array) {
    array.forEach(function (movie) {

        // Creating and grabbing elements for the grid
        let movieGrid = document.getElementById("movie_grid"); 
        let movieToAdd = document.createElement("li");
        let movieTitle = document.createElement('p');
        let moviePoster = document.createElement("img");
        let movieLink = document.createElement("a");
        let movieYear = document.createElement('p');

        // Structuring the HTML grid
        movieGrid.appendChild(movieToAdd);
        movieToAdd.appendChild(movieTitle);
        movieToAdd.appendChild(movieLink);
        movieLink.appendChild(moviePoster);
        movieToAdd.appendChild(movieYear);

        // Adding the movie titles and release years
        movieTitle.innerHTML = movie.title;
        movieYear.innerHTML = ' ( ' + movie.year + ' )';

        // Adding IMDB links
        movieLink.setAttribute("href", "https://www.imdb.com/title/" + movie.imdbID);
        movieLink.setAttribute("target", "_blank");
        moviePoster.setAttribute("src", movie.poster);

        // Adding styling
        movieToAdd.classList.add('movie_grid_square');
        movieTitle.classList.add('movie_title')
        moviePoster.classList.add('movie_poster');
    })
}

// Movie Filter Buttons

let getAllButton = document.getElementById('all_btn');

getAllButton.addEventListener('click', function () {
    let movieGrid = document.getElementById("movie_grid");
    movieGrid.innerHTML = '';
    addMoviesToDom(allMovies);
})

let getNewButton = document.getElementById('new_btn');

getNewButton.addEventListener('click', function () {
    let movieGrid = document.getElementById("movie_grid");
    movieGrid.innerHTML = '';
    addMoviesToDom(allNewMovies);
})

let getAvengerButton = document.getElementById('avenger_btn');

getAvengerButton.addEventListener('click', function () {
    let movieGrid = document.getElementById("movie_grid");
    movieGrid.innerHTML = '';
    addMoviesToDom(allAvengerMovies);
})

let getXmenButton = document.getElementById('xmen_btn');

getXmenButton.addEventListener('click', function () {
    let movieGrid = document.getElementById("movie_grid");
    movieGrid.innerHTML = '';
    addMoviesToDom(allXmenMovies);
})

let getBatmanButton = document.getElementById('batman_btn');

getBatmanButton.addEventListener('click', function () {
    let movieGrid = document.getElementById("movie_grid");
    movieGrid.innerHTML = '';
    addMoviesToDom(allBatmanMovies);
})

let getPrincessButton = document.getElementById('princess_btn');

getPrincessButton.addEventListener('click', function () {
    let movieGrid = document.getElementById("movie_grid");
    movieGrid.innerHTML = '';
    addMoviesToDom(allPrincessMovies);
})

// Initial Loading Of Movies To The DOM

addMoviesToDom(allMovies);

