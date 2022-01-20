function userView(){
    let html = "";
    html += /*html*/ `
        <div class="profileInfo">
            <img class="profileImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg">
            <div class="profileDescription">NAME: Therese <br> AGE: 26år <br> INTERESTS: Slangefilmer, Museskrekkfilm </div>
        </div>
        <div class="topMoviesContainer">
            <div class="topMoviesTitle">
                USERLIST: list
            </div>
            <div class="topMoviesList">
                <img class="profileImage" src="${sortMovies()[0].image}">
                placeholder for blokken
            </div>
            <div class="topMoviesList">
                <img class="profileImage" src="${sortMovies()[1].image}">
                placeholder for blokken
            </div>
            <div class="topMoviesList">
                <img class="profileImage" src="${sortMovies()[2].image}">
                placeholder for blokken
            </div>
        </div>
    `;
    html += generateNavbarHTML();
	html += generateLogoHTML();
    document.getElementById('app').innerHTML += html;
}

function sortMovies(){
    return [
        {image: "1"},
        {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg"},
        {image: "./img/someImage.jpg"},
    ]
}