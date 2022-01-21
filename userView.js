function userView(){
    let html = "";
    html += /*html*/ `
        <div class="profileInfo">
            <img class="profileImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg">
            <div class="profileDescription">NAME: Therese <br> AGE: 26år <br> INTERESTS: Slangefilmer, Museskrekkfilm 
                <div class="followStar"> ☆★⭐</div>
            </div>
        </div>
        <div class="topMoviesContainer">
            <div class="topMoviesTitle">
                USERLIST: MAMMA'S FAVOURITES
            </div>
            <div class="topMoviesList">
                <img class="movieImage" src="${sortMovies()[0].image}">
                <div class="filmInfo" >TITLE: HOME ALONE ELNS<BR><BR> YEAR: OSVOSV</div>
                <div class="movieRating">10/10</div>
            </div>
            <div class="topMoviesList">
                <img class="movieImage" src="${sortMovies()[1].image}">
                <div class="filmInfo" >TITLE: HOME ALONE ELNS<BR><BR> YEAR: OSVOSV</div>
                <div class="movieRating">10/10</div>
            </div>
            <div class="topMoviesList">
                <img class="movieImage" src="${sortMovies()[2].image}">
                <div class="filmInfo" >TITLE: HOME ALONE ELNS<BR><BR> YEAR: OSVOSV</div>
                <div class="movieRating">10/10</div>
            </div>
        </div>
    `;
    html += generateNavbarHTML();
	html += generateLogoHTML();
    document.getElementById('app').innerHTML += html;
}

function sortMovies(){
    return [
        {image: "https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg"},
        {image: "https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg"}, 
        {image: "https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg"},
    ]
}