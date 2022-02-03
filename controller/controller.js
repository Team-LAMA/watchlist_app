function openMovieList(listID){
  model.app.listID = listID
  go("list")
}

function go(page) {
	let app = model.app;
	history.pushState(null, null, `#${app.page}/${app.lastPage}/${app.userID}/${app.listID}`);
	app.page = page;
	updateView();
}

window.onpopstate = function () {
	let app = model.app;

	const pageHash = location.hash.substring(1);
	const parts = pageHash.split('/');

	app.page = parts[0];
	app.lastPage = parts[1];
	app.userID = parseInt(parts[2]);
	app.listID = parseInt(parts[3]);

	updateView();
}

function findUserByID(ID){
	let user = null;
	for (let i = 0; i < model.users.length; i++) {
		if (model.users[i].ID == ID) {
			user = model.users[i];
		}
	}
	return user;
}

function findMovieListByID(ID){
	let movieList = null;
	for (let i = 0; i < model.movieLists.length; i++) {
		if (model.movieLists[i].ID == ID) {
			movieList = model.movieLists[i];
		}
	}
	return movieList;
}