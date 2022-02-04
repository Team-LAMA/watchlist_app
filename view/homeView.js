// HomeView
function homeView() {
	let html = "";

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
	console.log("curent user", curUser)
	///////////////////////////////////////
	
	let notificationList = [];
	html += /*html*/ `
    <div 
      class="home notificationList">
        <h1>Notification</h1>
        `

	for (let i = 0; i < model.movieLists.length; i++) {
		notificationList.push(model.movieLists[i]);
	}
	
	html += notificationUpdate(curUser.ID, notificationList);
	html += /*html*/ `</div>`;

	///////////////////////////////////////

	// print the profile name of the followed users
	html += /*html*/ `<div class="home followedList"><h1>Following</h1>`
	for (let i = 0; i < curUser.followedUsers.length; i++) {
		let followedUser = curUser.followedUsers[i];
		html += /*html*/ `
			<div
							onclick="openMovieList(${followedUser.movieLists[0].ID})"
							class="home followed">
				${followedUser.profileName}
			</div>
		`;
	}

	html += /*html*/ `</div>`

	///////////////////////////////////////

	//Added Navigationbar
	html += generateLogoHTML();
	html += generateNavbarHTML();
	document.getElementById("app").innerHTML = html;
}