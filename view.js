
updateView();
function updateView(){
	let app = model.app;

	if(app.page == ""){
		app.page = "home";
		updateView();
	}
	else if(app.page == "home"){
		homeView();
	}
	else if(app.page == "signIn"){
		signInView();
	}
	else if(app.page == "signUp"){
		signUpView();
	}
	else if(app.page == "search"){
		searchView();
	}
	else if(app.page == "user"){
		userView();
	}
	else{
		app.page = "";
		updateView();
	}
}

function go(page){
	let app = model.app;
	history.pushState(null, null, `#${app.page}/${app.lastPage}/${app.userID}/${app.listID}`);
	app.page = page;
	updateView();
}

window.onpopstate = function() {
	let app = model.app;

	const pageHash = location.hash.substring(1);
	const parts = pageHash.split('/');


	app.page = parts[0];
	app.lastPage = parts[1];
	app.userID = parseInt(parts[2]);
	app.listID = parseInt(parts[3]);
	
	updateView();
}

//homeView();
//signInView();
//signUpView();
//searchView();
//userView();
