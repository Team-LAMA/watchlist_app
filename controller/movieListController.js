


function sortMovieList(movieList) {
	let sortArr = [];

	console.log("sorting")

	for (let i = 0; i < movieList.movies.length; i++) {
		let movie = movieList.movies[i];
		let personalComment = null;
		if (movieList.personalComments.length > i) {
			personalComment = movieList.personalComments[i];
		}
		let rating = 1000;
		if (movieList.ratings.length > i) {
			if (movieList.ratings[i] === '') {
				rating = 1000;
			}
			else {
				rating = movieList.ratings[i];
			}
		}

		sortArr.push({ movie: movie, personalComment: personalComment, rating: rating })
	}

	sortArr.sort(function (a, b) {
		return b.rating - a.rating;
	});

	for (let i = 0; i < sortArr.length; i++) {
		if (sortArr[i].rating > 10) {
			sortArr[i].rating = '';
		}
	}

	for (let i = 0; i < sortArr.length; i++) {
		movieList.movies[i] = sortArr[i].movie;
		movieList.personalComments[i] = sortArr[i].personalComment;
		movieList.ratings[i] = sortArr[i].rating;
	}

	return movieList;
}



function expandElement(index) {
	if (index == model.app.expandedIndex) {
		model.app.expandedIndex = null;
	}
	else {
		model.app.expandedIndex = index;
	}
	model.app.scrollOffset = document.getElementsByClassName('content')[0].scrollTop;
	updateView()
}

function updateMovieTitle(element, movieListID, movieIndex) {
	let movieList = findMovieListByID(movieListID);
	movieList.movies[movieIndex].title = element.value;
}

function updateMovieYear(element, movieListID, movieIndex) {
	let movieList = findMovieListByID(movieListID);
	movieList.movies[movieIndex].year = element.value;
}

function updateMovieScore(element, movieListID, movieIndex) {
	let movieList = findMovieListByID(movieListID);
	if (element.value) {
		element.value = parseFloat(parseFloat(element.value).toFixed(1));
	}
	movieList.ratings[movieIndex] = element.value;
}

function updateMovieGeneres(element, movieListID, movieIndex) {
	let movieList = findMovieListByID(movieListID);
	movieList.movies[movieIndex].genres = element.value;
}

function updateMovieDirectors(element, movieListID, movieIndex) {
	let movieList = findMovieListByID(movieListID);
	movieList.movies[movieIndex].directors = element.value;
}

function updateMovieDescription(element, movieListID, movieIndex) {
	let movieList = findMovieListByID(movieListID);
	movieList.movies[movieIndex].description = element.value;
}

function updateMovieActors(element, movieListID, movieIndex) {
	let movieList = findMovieListByID(movieListID);
	movieList.movies[movieIndex].actors = element.value;
}

function updateMoviePersonalComments(element, movieListID, movieIndex) {
	let movieList = findMovieListByID(movieListID);
	movieList.personalComments[movieIndex] = element.value;
}


function movieYearSafety(element) {
	if (element.value > 9999) {
		element.value = parseInt(element.value / 10);
	}
}

function movieScoreSafety(element) {
	if (element.value > 10) {
		element.value = 10;
	}
}
