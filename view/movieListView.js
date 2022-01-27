function movieListView() {
	html = "";

	// Finding the correct list
	let curMovieList = null;
	for(let i = 0; i < model.movieLists.length; i++){
		if(model.movieLists[i].ID == model.app.listID){
			curMovieList = model.movieLists[i];
			console.log(curMovieList);
		}
	}

	console.log(curMovieList);

	html += /*html*/ `
		<div class="movieList container">
			<div class="movieList title">
				<h2>${curMovieList.name}<h2>
			</div>
			<div class="movieList content">
				<div class="movieList box">
	`
	console.log(curMovieList.movies.length > 2);
	for(let i = 0; i < curMovieList.movies.length; i++){
		html += generateMovieElement(curMovieList, i, "console.log('test')",{scroll: (curMovieList.movies.length > 5), expanded: false});
	}

	html += /*html*/ `
				</div>
			</div>
		</div>
	`


	html += generateLogoHTML();
	html += generateNavbarHTML();

	document.getElementById("app").innerHTML = html;
}