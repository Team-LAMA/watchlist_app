
function editProfileName(element) {
	model.inputs.editProfile.name = element.value;
	model.users[model.signedInInfo.userId].profileName = model.inputs.editProfile.name;
};

function editUserDescription(element) {
	//asigned (=) det man skriver
	model.inputs.editProfile.description = element.value;
	model.users[model.signedInInfo.userId].userDescription = model.inputs.editProfile.description;
};

function editAge(element) {
	model.inputs.editProfile.age = element.value;
	model.users[model.signedInInfo.userId].age = model.inputs.editProfile.age;
};

function editFavGenre(element) {
	model.inputs.editProfile.favGenre = element.value;
	model.users[model.signedInInfo.userId].favGenre = model.inputs.editProfile.favGenre;
};

function editProfileImage() {
	let curUser = findUserByID(model.app.userID);
	let newImage = prompt("Please enter link to profile picture", curUser.profilePicture);

	if (newImage) {
		curUser.profilePicture = newImage
		updateView();
	}
}

function toggleFollow() {
	//userView();

	let curViewedUser = null;
	for (let i = 0; i < model.users.length; i++) {
		if (model.users[i].ID == model.app.userID) {
			curViewedUser = model.users[i];
		}
	}

	let curSignedInUser = null;
	for (let i = 0; i < model.users.length; i++) {
		if (model.users[i].ID == model.signedInInfo.userId) {
			curSignedInUser = model.users[i];
		}
	}

	// Finding out whether or not the logged in user is following the viewed user
	let isFollowing = false;
	let followedIndex = null;
	if (model.signedInInfo.userId > 0 || model.signedInInfo.userId === 0) { // checks if a user is logged in
		for (let i = 0; i < curSignedInUser.followedUsers.length; i++) { //goes through all followedUsers of the logged in user
			if (curSignedInUser.followedUsers[i].ID == curViewedUser.ID) { // Checks if the currently checked followed user is also the user we're watching
				isFollowing = true;
				followedIndex = i;
			}
		}

		if (isFollowing) {
			curSignedInUser.followedUsers.splice(followedIndex, 1);
		}
		else {
			curSignedInUser.followedUsers.push(curViewedUser);
		}
	}
	else {
		model.app.lastPage = model.app.page;
		model.app.page = "signIn";
		updateView();
	}

	updateView();
}

function signOut() {
	model.signedInInfo.userId = null
	model.app.page = model.app.lastPage;
	updateView();
}