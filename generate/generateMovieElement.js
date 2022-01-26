

function generateMovieElement(movieList, index, onClick, options = {}){
	console.log(movieList.movies.length);
	console.log(options);
	html = "";

	// Chooses a class depending on whether a scrollbar should be pressent or not
	html += /*html*/ `
		<div class="movieElement container ${options.scroll ? 'scroll' : ''} ${options.expanded ? 'expanded' : ''}" onclick="${onClick}">
	`

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
						${movieList.ratings[index]}
					</div>
					<div style="font-size: 2vh; margin-top: 1vh; margin-right: 1vh">
						/10
					</div>
				</div>
			</div>
		</div>
	`

	html += /*html*/ `
		</div>
	`;

	return html;
}