// SignUp Controller

function signUp() {
	let isUsernameUnique = false;
	let isEmailUnique = false;

	// Checking that the inputted username doesn't exist yet
	if (model.inputs.makeUser.username) {
		isUsernameUnique = true;
		for (let i = 0; i < model.users.length; i++) {
			if (model.inputs.makeUser.username == model.users[i].username) {
				isUsernameUnique = false;
			}
		}
	}

	// Checking that the inputted e-mail doesn't exist yet
	if (model.inputs.makeUser.email) {
		isEmailUnique = true;
		for (let i = 0; i < model.users.length; i++) {
			if (model.inputs.makeUser.email == model.users[i].email) {
				isEmailUnique = false;
			}
		}
	}

	// Making a new user if both username and e-mail is unique
	if (isUsernameUnique && isEmailUnique && model.inputs.makeUser.password) {
		makeUser();

		//Assigns the new user id to the signed in user
		for (let i = 0; i < model.users.length; i++) {
			model.signedInInfo.userId = model.users[i].ID;
		}

		// Takes you back to the page you were on before signing up
		model.app.page = model.app.lastPage;
	} else {
		model.signedInInfo.userId = -1;
	}
	updateView();
}

//Functions for the inputs
function updateUsernameSignUp(element) {
	model.inputs.makeUser.username = element.value;
}
function updatePasswordSignUp(element) {
	model.inputs.makeUser.password = element.value;
}
function updateEmailSignUp(element) {
	model.inputs.makeUser.email = element.value;
}

function somethingInInput() {
	if (model.inputs.makeUser.username.length == 0){
		return false
	} else if (model.inputs.makeUser.email.length == 0){
		return false
	} else if (model.inputs.makeUser.password.length == 0){
		return false
	} else {
		return true
	}
}


//makeuser 
function makeUser() {
	// Making the new user object
	let newUser = {
		ID: model.idCounters.userId, // Makes the ID number from the idCounters
		username: model.inputs.makeUser.username, // Sets the username from the input on signUpView
		password: model.inputs.makeUser.password, // Sets the password from the input on signUpView
		email: model.inputs.makeUser.email.toLowerCase(), // Sets the email from the input on signUpView
		// The rest will be changed by the users input in the userView/Controller
		movieLists:[],
		profileName: model.inputs.makeUser.username, //Sets the username as the default profileName
		profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",
		age:"",
		favGenre: "",
		userDescription: "",
		followedUsers: [],
		//followedListIDs: [],  
	}

	let newMovieList = {
		ID: model.idCounters.listId,
		name: newUser.username + "'s favourites",
		movies: [
			{
				ID: model.idCounters.movieId,
				title: "",
				image: "",
				year: null,
				genres: [],
				directors: [],
				actors: [],
				description: "",
			},
		],
		personalComments: [],
		ratings: [],
		lastChanged: Date.now(),
	}

	model.movieLists.push(newMovieList);
	newUser.movieLists.push(newMovieList);


	model.idCounters.listId++;
	model.idCounters.movieId++;
	model.idCounters.userId++;
	model.users.push(newUser);
	// Clearing model.inputs.makeUser (Data Security)
	model.inputs.makeUser = {username: "", password: "", email: ""};
}