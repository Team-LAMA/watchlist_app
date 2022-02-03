
updateView();
function updateView() {
	let app = model.app;

	let curUser = {
		ID: null,
		username: "",
		password: "",
		eMail: "",
		movieLists: [],
		profileName: "",
		profilePicture: "",
		userDescription: "",
		followedUsers: [],
	}
	for (let i = 0; i < model.users.length; i++) {
		if (model.users[i].ID == model.signedInInfo.userId) {
			curUser = model.users[i];
		}
	}

	if (app.page == "") {
		app.page = "home";
		updateView();
	}
	else if (app.page == "home") {
		homeView();
	}
	else if (app.page == "signIn") {
		signInView();
	}
	else if (app.page == "signUp") {
		signUpView();
	}
	else if (app.page == "search") {
		searchView();
	}
	else if (app.page == "user") {
		if (model.signedInInfo.userId == null) {
			if (app.userID == null) {
				signInView();
			}
			else {
				userView()
			}
		}
		else {
			if (app.userID == null) {
				app.userID = model.signedInInfo.userId;
			}
			userView();
		}
	}
	else if (app.page == "list") {
		if (model.signedInInfo.userId == null) {
			if (app.listID == null) {
				signInView();
			}
			else {
				movieListView()
			}
		}
		else {
			if (app.listID == null) {
				app.listID = curUser.movieLists[0].ID;
			}
			movieListView();
		}
	}
	else {
		app.page = "";
		updateView();
	}

	window.scrollTo(0, model.app.scrollOffset);
	model.app.scrollOffset = null;
}

//homeView();
//signInView();
//signUpView();
//navbarView();
//searchView();
//userView();
