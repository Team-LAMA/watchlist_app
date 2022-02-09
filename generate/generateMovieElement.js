// function editMovieImage() {
// 	let movieImageVar = prompt("Please enter link to movie picture");
// 	if (movieImageVar != null) {
// 		model.inputs.editMovie.image =
// 			movieImageVar;
// 	}
// 	model.movies[model.signedInInfo.userId].image = model.inputs.editMovie.image;
// 	updateView();
// }

function generateMovieElement(movieList, index, onClick, options = {}) {
	/*
	* Options = {
	* 	scroll // Whether the element should be shrunk to account for a scrollbar
	*		expanded // Whether the element should be expanded or not
	* 	editable // Whether the element should be in edit mode or not	
	* }
	*/
	let html = "";

	// Chooses a class depending on whether a scrollbar should be pressent or not
	html += /*html*/ `
		<div class="movieElement container ${options.scroll ? 'scroll' : ''} ${options.expanded ? 'expanded' : ''} ${options.editable ? 'editable' : ''}" onclick="${onClick}" index='${index}'>
	`

	// Generate movieElement minimal
	html += /*html*/ `
		<div class="movieElement minimal">
			<img class="movieElement image" src="${movieList.movies[index].image}"/>
	`
	if (options.expanded && options.editable) {
		html += /*html*/`
			<div style="width: 0px;">
			<button class="movieElement movieImageBtn" onclick="editMovieImage()">IMAGE</button>
			</div>
		`
	}
	html += /*html*/`
		<div class="movieElement minimal midSection"> 
			<div class="movieElement movieTitle">
	`;

	if (options.expanded && options.editable) {
		html += /*html*/ `<textarea
						onchange="updateMovieTitle(this, ${movieList.ID}, ${index})">`
			+ /*html*/ `${movieList.movies[index].title}`
			+ /*html*/ `</textarea>`
	}
	else {
		html += /*html*/ `<span>${movieList.movies[index].title}</span>`
	}

	html += /*html*/ `
			</div>
				<div class="movieElement releaseYear">
				`;

	if (options.expanded && options.editable) {
		html += /*html*/ `<input type="number" oninput="movieYearSafety(this)"
						onchange="updateMovieYear(this, ${movieList.ID}, ${index})"
						value = "${movieList.movies[index].year}"/>`
	}
	else {
		html += /*html*/ `<div>${(!movieList.movies[index].year) ? "----" : movieList.movies[index].year}</div>`
	}

	html += /*html*/ `
				</div>
			</div>
			<div class="movieElement score">
				<div style="display: flex;">
					<div>
					`;

	if (options.expanded && options.editable) {
		html += /*html*/ `<input type="number"
						oninput="movieScoreSafety(this)"
						onchange="updateMovieScore(this, ${movieList.ID}, ${index})"
						value="${(!movieList.ratings[index]) ? "" : movieList.ratings[index]}"/>`
	}
	else {
		console.log(movieList.ratings[index]);
		html += /*html*/ `${(movieList.ratings[index] !== '') ? movieList.ratings[index] : "<div style='font-weight: normal'>-</div>"}`
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
	if (movieList.movies[index].genres || movieList.movies[index].directors) {
		html += /*html*/ `<hr/>`
	}

	// Opening movieElement detailBox
	html += /*html*/ `
		<div class="movieElement detailBox">
	`

	// Opening genre list + title
	if (movieList.movies[index].genres) {
		html += /*html*/ `
			<div>
				<u>Genres</u>
				<div>
		`

		if (options.expanded && options.editable) {
			html += /*html*/ `<textarea onchange="updateMovieGeneres(this, ${movieList.ID}, ${index})">${movieList.movies[index].genres}</textarea>`
		}
		else {
			html += movieList.movies[index].genres;
		}

		html += /*html*/ `
				</div>
			</div>
		`
	}
	// Closing genre list + title

	// Opening director list + title
	if (movieList.movies[index].directors) {
		html += /*html*/ `
			<div>
				<u>Directors</u>
				<div>
		`
		if (options.expanded && options.editable) {
			html += /*html*/ `<textarea onchange="updateMovieDirectors(this, ${movieList.ID}, ${index})">${movieList.movies[index].directors}</textarea>`
		}
		else {
			html += movieList.movies[index].directors;
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
			<div class="movieElement description">
				<u>Description</u>
			`
		if (options.expanded && options.editable) {
			html += /*html*/ `<textarea onchange="updateMovieDescription(this, ${movieList.ID}, ${index})">${movieList.movies[index].description}</textarea>`
		}
		else {
			html += `<span>${movieList.movies[index].description}<span>`
		}
		html += `</div>`
	}
	// Closing description + title

	// Opening actors + title
	if (movieList.movies[index].actors) {
		html += /*html*/ `
			<hr>
			<div class="movieElement actors">
				<u>Actors</u>
		`
		if (options.expanded && options.editable) {
			html += /*html*/ `<textarea  onchange="updateMovieActors(this, ${movieList.ID}, ${index})">${movieList.movies[index].actors}</textarea>`
		}
		else {
			html += movieList.movies[index].actors;
		}
		html += /*html*/ `
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
				`
		if (options.expanded && options.editable) {
			html += /*html*/ `<textarea  onchange="updateMoviePersonalComments(this, ${movieList.ID}, ${index})">${movieList.personalComments[index]}</textarea>`
		}
		else {
			html += movieList.movies[index].actors;
		}
		html += /*html*/`
			</div>
		`
	}
	// Closing personal comment

	// Closing movieElement expanded
	html += /*html*/ `
			<div class="movieElement padder"></div>
		</div>
	`

	// Closing movieElement container scroll? expanded? editable?
	html += /*html*/ `
		</div>
	`

	return html;
}