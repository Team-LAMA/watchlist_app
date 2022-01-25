function userView(){
	let html = "";
	html += /*html*/ `
			<div class="user profileInfo">
			`
	
	if(model.app.userID == model.loginInfo.userId){
		html += /*html*/ `
			<img class="user profileImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg">
			<input type="file">
            <div class="user profileDescription">NAME: 
            <input type="text" placeholder="Your name here"> <hr> <br>
             DESCRIPTION: <input type="text" placeholder="Your description here"> 
		`
	}
	else {
		html += /*html*/ `
			<img class="user profileImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg">
			<div class="user profileDescription">NAME: Therese <br> AGE: 26år <br> INTERESTS: Slangefilmer, Museskrekkfilm 
				<div class="user followStar"> ☆★⭐</div>
		`
	}

    if(model.app.userID == model.loginInfo.userId){
	html += /*html*/ `
					</div>
			</div>
			<div class="user topMoviesContainer">
					<div class="user topMoviesTitle">
							USERLIST: <input type="text" placeholder="MY FAVOURITES">
					</div>
					<div class="user topMoviesList">
							<img class="user movieImage" src="${sortMovies()[0].image}">
							<div class="user filmInfo" >TITLE: HOME ALONE ELNS<BR><BR> YEAR: 2007</div>
							<div class="user movieRating"><input type="number" min="1" max="10" placeholder="X">/10</div>
                            
					</div>
					<div class="user topMoviesList">
							<img class="user movieImage" src="${sortMovies()[1].image}">
							<div class="user filmInfo" >TITLE: HOME ALONE ELNS<BR><BR> YEAR:2006</div>
							<div class="user movieRating"><input type="number" min="1" max="10" placeholder="X">/10</div>
                            
					</div>
					<div class="user topMoviesList">
							<img class="user movieImage" src="${sortMovies()[2].image}">
							<div class="user filmInfo" >TITLE: HOME ALONE ELNS<BR><BR> YEAR:2005</div>
							<div class="user movieRating"><input type="number" min="1" max="10" placeholder="X">/10</div>
					</div>
			</div>
	`}
    else {
        html += /*html*/ `
                        </div>
                </div>
                <div class="user topMoviesContainer">
                        <div class="user topMoviesTitle">
                                USERLIST: MAMMA'S FAVOURITES
                        </div>
                        <div class="user topMoviesList">
                                <img class="user movieImage" src="${sortMovies()[0].image}">
                                <div class="user filmInfo" >TITLE: HOME ALONE ELNS<BR><BR> YEAR: OSVOSV</div>
                                <div class="user movieRating">10/10</div>
                        </div>
                        <div class="user topMoviesList">
                                <img class="user movieImage" src="${sortMovies()[1].image}">
                                <div class="user filmInfo" >TITLE: HOME ALONE ELNS<BR><BR> YEAR: OSVOSV</div>
                                <div class="user movieRating">10/10</div>
                        </div>
                        <div class="user topMoviesList">
                                <img class="user movieImage" src="${sortMovies()[2].image}">
                                <div class="user filmInfo" >TITLE: HOME ALONE ELNS<BR><BR> YEAR: OSVOSV</div>
                                <div class="user movieRating">10/10</div>
                        </div>
                </div>
        `}

	html += generateNavbarHTML();
html += generateLogoHTML();
	document.getElementById('app').innerHTML = html;
}

function sortMovies(){
	return [
			{image: "https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg"},
			{image: "https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg"}, 
			{image: "https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg"},
	]
}