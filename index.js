const message = document.querySelector("#message");

function addMovie(event) {
    event.preventDefault();
    const inputField = document.querySelector("input");
    const movieList = document.querySelector("ul");
    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");
    const deleteBtn = document.createElement("button");

    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie);

    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", deleteMovie);

    movie.appendChild(movieTitle);
    movie.appendChild(deleteBtn);
    movieList.appendChild(movie);
}

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = "Movie deleted!";
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked");

    if (event.target.classList.contains("checked")) {
        message.textContent = "Movie watched!";
    } else {
        message.textContent = "Movie added back!";
    }
}

const form = document.querySelector("form");
form.addEventListener("submit", addMovie);