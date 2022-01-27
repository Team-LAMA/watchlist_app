

function generateMovieElement(movieList, index, onClick, options = {}) {
	/*
	* Options = {
	* 	scroll // Whether the element should be shrunk to account for a scrollbar
	*		expanded // Whether the element should be expanded or not
	* 	editable // Whether the element should be in edit mode or not	
	* }
	*/
	console.log(movieList.movies.length);
	console.log(options);
	html = "";

	// Chooses a class depending on whether a scrollbar should be pressent or not
	html += /*html*/ `
		<div class="movieElement container ${options.scroll ? 'scroll' : ''} ${options.expanded ? 'expanded' : ''} ${options.editable ? 'editable' : ''}" onclick="${onClick}" index='${index}'>
	`

	// Generate the "minimal" or collapsed view of the element
	html += /*html*/ `
		<div class="movieElement minimal">
			<img class="movieElement image" src="${movieList.movies[index].image}"/>
			<div class="movieElement minimal midSection"> 
				<div class="movieElement movieTitle">
					<div style="text-align: center">${movieList.movies[index].title}</div>
				</div>
				<div class="movieElement releaseYear">
					<div>${movieList.movies[index].year}</div>
				</div>
			</div>
			<div class="movieElement score ${options.scroll ? 'scroll' : ''}">
				<div style="display: flex;">
					<div style="font-size: 3vh">
						${(!movieList.ratings[index]) ? 0 : movieList.ratings[index]}
					</div>
					<div style="font-size: 2vh; margin-top: 1vh; margin-right: 1vh">
						/10
					</div>
				</div>
			</div>
		</div>
	`

	html += /*html*/ `
		<div class="movieElement expanded">
	`

	if (movieList.movies[index].directors.length > 0 || movieList.movies[index].actors.length > 0) {
		html += /*html*/ `<hr/>`
	}

	html += /*html*/ `
		<div class="movieElement detailBox ${options.scroll ? 'scroll' : ''}">
	`

	// Adding in the Genere(s) section
	if (movieList.movies[index].genres.length > 0) {
		html += /*html*/ `
			<div>
				<u>Genre${(movieList.movies[index].genres.length > 1) ? "s" : ""}</u>
				<div>
		`
		html += movieList.movies[index].genres[0];
		for (let i = 1; i < movieList.movies[index].genres.length; i++) {
			html += ", " + movieList.movies[index].genres[i];
		}
		html += /*html*/ `
				</div>
			</div>
		`
	}

	// Adding in the Director(s) section
	if (movieList.movies[index].directors.length > 0) {
		html += /*html*/ `
			<div>
				<u>Director${(movieList.movies[index].directors.length > 1) ? "s" : ""}</u>
				<div>
		`
		html += movieList.movies[index].directors[0];
		for (let i = 1; i < movieList.movies[index].directors.length; i++) {
			html += ", " + movieList.movies[index].directors[i];
		}
		html += /*html*/ `
				</div>
			</div>
		`
	}

	// closing detailBox
	html += /*html*/ `
		</div>
	`

	if (movieList.movies[index].description){
		html += /*html*/ `
			<hr/>
			<div class="movieElement description">
				<div class="movieElement description title">
					<u>
						Description
					</u>
				</div>
				<div>${movieList.movies[index].description}<div>
			</div>
		`
	}

	// Adding in the Actor(s) section
	if (movieList.movies[index].actors.length > 0) {
		html += /*html*/ `
			<hr>
			<div class="movieElement directors">
				<u>Director${(movieList.movies[index].actors.length > 1) ? "s" : ""}</u>
				<div>
		`
		html += movieList.movies[index].actors[0];
		for (let i = 1; i < movieList.movies[index].actors.length; i++) {
			html += ", " + movieList.movies[index].actors[i];
		}
		html += /*html*/ `
				</div>
			</div>
		`
	}

	// closing expanded
	html += /*html*/ `
		</div>
	`

	html += /*html*/ `
		</div>
	`;

	return html;
}