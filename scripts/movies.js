




document.addEventListener('DOMContentLoaded', ()=>{
    const movieList = document.getElementById("main-movie-list");

    axios.get("http://localhost/assignments/cinema-backend/controllers/get_movies.php")
        .then(response=>{
            movieList.innerHTML = '';
            response.data.movies.forEach(movie=> {
                createMovieSchedule(movie,movieList);
        });
    });
    
});

function createMovieSchedule(movie,movieList){
    const dv = document.createElement('div');
    dv.className = 'movie_card';
    dv.innerHTML= `
        <h2>${movie["title"]}</h2>
        <img src="http://localhost/assignments/cinema-backend/assets/images/${movie["poster"]}">
        `;
    movieList.appendChild(dv);
}