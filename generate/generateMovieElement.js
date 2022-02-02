

function generateMovieElement(movieList, index, onClick, options = {}) {
	/*
	* Options = {
	* 	scroll // Whether the element should be shrunk to account for a scrollbar
	*		expanded // Whether the element should be expanded or not
	* 	editable // Whether the element should be in edit mode or not	
	* }
	*/
	//console.log(movieList.movies.length);
	//console.log(options);
	let html = "";

	// Chooses a class depending on whether a scrollbar should be pressent or not
	html += /*html*/ `
		<div class="movieElement container ${options.scroll ? 'scroll' : ''} ${options.expanded ? 'expanded' : ''} ${options.editable ? 'editable' : ''}" onclick="${onClick}" index='${index}'>
	`

	// Generate movieElement minimal
	html += /*html*/ `
		<div class="movieElement minimal">
			<img class="movieElement image" src="${movieList.movies[index].image}"/>
			<div class="movieElement minimal midSection"> 
				<div class="movieElement movieTitle">
	`;

	if (options.expanded && options.editable) {
		html += /*html*/ `<textarea onchange="updateMovieName(this)" >${movieList.movies[index].title}</textarea>`
	}
	else {
		html += /*html*/ `<span>${movieList.movies[index].title}</span>`
	}

	html += /*html*/ `
			</div>
				<div class="movieElement releaseYear">
				`;

	if (options.expanded && options.editable) {
		html += /*html*/ `<input type="number" onchange="updateMovieYear(this)" value = "${movieList.movies[index].year}"/>`
	}
	else {
		html += /*html*/ `<div>${movieList.movies[index].year}</div>`
	}

	html += /*html*/ `
				</div>
			</div>
			<div class="movieElement score">
				<div style="display: flex;">
					<div >
					`;

	if (options.expanded && options.editable) {
		html += /*html*/ `<input type="number" onchange="updateMovieYear(this)" value="${(!movieList.ratings[index]) ? 0 : movieList.ratings[index]}"/>`
	}
	else {
		html += /*html*/ `${(!movieList.ratings[index]) ? 0 : movieList.ratings[index]}`
	}

	html += /*html*/ `
					</div>
					<div class="movieElement score outOf">
						/10
					</div>
				</div>
			</div>
		</div>
	`
	// End of movieElement minimal

	// Generate movieElement expanded
	html += /*html*/ `
		<div class="movieElement expanded">
	`

	// Adding <hr> for genre/directors
	if (movieList.movies[index].genres.length > 0 || movieList.movies[index].directors.length > 0) {
		html += /*html*/ `<hr/>`
	}

	// Opening movieElement detailBox
	html += /*html*/ `
		<div class="movieElement detailBox">
	`

	// Opening genre list + title
	if (movieList.movies[index].genres.length > 0) {
		html += /*html*/ `
			<div>
				<u>Genre${(movieList.movies[index].genres.length > 1) ? "s" : ""}</u>
				<div>
		`

		if (options.expanded && options.editable) {
			html += /*html*/ `<textarea></textarea>`
		}
		else{
			html += movieList.movies[index].genres[0];
			for (let i = 1; i < movieList.movies[index].genres.length; i++) {
				html += ", " + movieList.movies[index].genres[i];
			}
		}

		html += /*html*/ `
				</div>
			</div>
		`
	}
	// Closing genre list + title

	// Opening director list + title
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
	// Closing director list + title

	// Closing movieElement detailBox (genre/director)
	html += /*html*/ `
		</div>
	`

	// Opening  description + title
	if (movieList.movies[index].description) {
		html += /*html*/ `
			<hr/>
			<div class="movieElement description title">Description</div>
			<div class="movieElement description">${movieList.movies[index].description}</div>
		`
	}
	// Closing description + title

	// Opening actors + title
	if (movieList.movies[index].actors.length > 0) {
		html += /*html*/ `
			<hr>
			<div class="movieElement actors">
				<u>Actor${(movieList.movies[index].actors.length > 1) ? "s" : ""}</u>
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
	// Closing actors + title

	// Opening personal comment
	if (movieList.personalComments[index]) {
		html += /*html*/ `
			<hr/>
			<div class="movieElement personalComments">
				<u>Personal Comments</u>
				<div>${movieList.personalComments[index]}</div>
			</div>
		`
	}
	// Closing personal comment

	// Closing movieElement expanded
	html += /*html*/ `
		</div>
	`

	// Closing movieElement container scroll? expanded? editable?
	html += /*html*/ `
		</div>
	`

	return html;
}