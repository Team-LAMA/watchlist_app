
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
	model.app.page = page;
	updateView();
}

//homeView();
//signInView();
//signUpView();
//searchView();
//userView();
