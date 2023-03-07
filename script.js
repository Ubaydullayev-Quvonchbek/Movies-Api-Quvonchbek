const key = "8c8e1a50-6322-4135-8875-5d40a5420d86";
const popular_movies =
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=13`;
const search =
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=`;
getMovies(popular_movies);
async function getMovies(url) {
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": key,
        },
    });
    const data = await response.json();
    showMovies(data);
    console.log(data.films);
    let body = document.querySelector("body");
    body.style.padding = "0";
}
function showMovies(data) {
    let row = document.querySelector(".row");
    row.innerHTML = "";
    data.films.forEach(element => {
        let col = document.createElement("div");
        col.classList.add("col-3");
        col.classList.add("d-flex");
        col.classList.add("justify-content-center")
        col.innerHTML = `
            <div class="card1">
                <div class="image">
                    <img src="${element.posterUrl}" alt="png">
                </div>
                <h1 class="film-name">${element.nameRu}</h1>
                <p class="genres">${element.genres[0].genre}</p>
                <div class="df">
                    <h1 class="film-year">Year: ${element.year}</h1>
                    <h1 class="film-rating">Rating: ${element.rating}</h1>
                </div>
            </div>`;
        row.appendChild(col);
    })
};

let input = document.querySelector("input");
let button = document.querySelector("button");
button.onclick = () => {
    let searchMovies = `${search}${input.value}`;
    if (input.value) {
        getMovies(searchMovies);
    }
    input.value = "";
}