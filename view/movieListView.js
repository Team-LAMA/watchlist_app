function movieListView() {
	let html = "";

	// TODO: replace with function to generate a sorted list
	// Finding the correct list
	let curMovieList = null;
	for (let i = 0; i < model.movieLists.length; i++) {
		if (model.movieLists[i].ID == model.app.listID) {
			curMovieList = model.movieLists[i];
		}
	}

	curMovieList = sortMovieList(curMovieList);

	let curUser = findUserByID(model.signedInInfo.userId);

	let isEditable = false;
	if (curUser) {
		for (let i = 0; i < curUser.movieLists.length; i++) {
			if (curUser.movieLists[i] == curMovieList) {
				isEditable = true;
			}
		}
	}

	html += /*html*/ `
		<div class="movieList container">
			<div class="movieList title">
				<h2>${curMovieList.name}</h2>
				${(isEditable) ?
			'<svg class="movieList title plusBtn" onclick="newMovieElement()" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>'
			: ""
		}
			</div>
			<div class="movieList content">
				<div class="movieList box">
	`



	for (let i = 0; i < curMovieList.movies.length; i++) {
		html += generateMovieElement(curMovieList, i,
			"",
			{ expanded: (model.app.expandedIndex == i) ? true : false, editable: isEditable });
	}

	html += /*html*/ `
			</div>
		</div>
	`


	html += generateLogoHTML();
	html += generateNavbarHTML();
	document.getElementById("app").innerHTML = html;

	let movieElements = (document.getElementsByClassName('container'));

	for (let i = 1; i < movieElements.length; i++) {
		movieElements[i].addEventListener("click", element => {
			if (model.app.page == "list") {
				if (element.target.tagName !== "TEXTAREA" && element.target.tagName !== "INPUT" && element.target.tagName !== "BUTTON") {
					expandElement(i - 1);
				}
			}
		});
	}

	document.getElementsByClassName('movieList content')[0].scrollTop = model.app.scrollOffset;
}