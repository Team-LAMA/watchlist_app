

// Sort movieList depending on the movies' ratings
function sortMovieList(movieList, unratedOnTop = false) {
	let sortArr = [];
  let numUnrated = 0;

	if (movieList) {
		for (let i = 0; i < movieList.movies.length; i++) {
			let movie = movieList.movies[i];
			let personalComment = null;
			if (movieList.personalComments.length > i) {
				personalComment = movieList.personalComments[i];
			}
      if(unratedOnTop){
			  rating = 1000;
      }
      else {
        rating = -1
      }
			if (movieList.ratings.length > i) {
				if (movieList.ratings[i] === '') {
          if (unratedOnTop) {
					  rating = 1000;
          }
          else {
            rating = -1;
          }
				}
				else {
					rating = movieList.ratings[i];
				}
			}

			sortArr.push({ movie: movie, personalComment: personalComment, rating: rating })
		}
	}

	sortArr.sort(function (a, b) {
		return b.rating - a.rating;
	});

	for (let i = 0; i < sortArr.length; i++) {
		if (sortArr[i].rating > 10 || sortArr[i].rating < 0) {
			sortArr[i].rating = '';
      numUnrated++;
		}
	}

	for (let i = 0; i < sortArr.length; i++) {
		movieList.movies[i] = sortArr[i].movie;
		movieList.personalComments[i] = sortArr[i].personalComment;
		movieList.ratings[i] = sortArr[i].rating;
	}

  return numUnrated;
}

function updateListName(element, listID) {
  curMovieList = findMovieListByID(listID);
  curMovieList.name = element.value;
  updateView();
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

function updateMovieImage(index){
	let curUser = findUserByID(model.signedInInfo.userId);
	let curMovieList = curUser.movieLists[0];
	let curMovie = curMovieList.movies[index];
	let newImage = prompt("Please enter link to movie image", curMovie.image);

	if(newImage){
		curMovie.image = newImage;
		updateView();
	}	
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

function newMovieElement() {
	let curUser = findUserByID(model.signedInInfo.userId);
	let curMovieList = curUser.movieLists[0];

	model.app.expandedIndex = null;

	curMovieList.movies.push({
		ID: model.idCounters.movieId,
		title: "",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png",
		year: null,
		genres: "",
		directors: "",
		actors: "",
		description: "",
	});

	curMovieList.personalComments[curMovieList.movies.length - 1] = "";
	curMovieList.ratings[curMovieList.movies.length - 1] = 2000; // to get this movie sorted above all the others

	model.idCounters.movieId++;

	updateView();
}

