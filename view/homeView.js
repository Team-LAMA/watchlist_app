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
	
	curUser = findUserByID(model.signedInInfo.userId)

	///////////////////////////////////////
	
	html += /*html*/ `
		<h1 style="position: fixed;top: 6vh;font-size: 5vh">Notifications</h1>
    <div 
      class="home notificationList">
        `

	
	
	html += notificationUpdate(curUser);
	html += /*html*/ `</div>`;

	///////////////////////////////////////

	// print the profile name of the followed users
	html += /*html*/ `
	<h1 style="position: fixed;top: 43vh;font-size: 5vh">Following</h1>
	<div class="home followedList">`;
	if(curUser){
		for (let i = 0; i < curUser.followedUsers.length; i++) {
			let followedUser = curUser.followedUsers[i];
			html += /*html*/ `
				<div
								onclick="openMovieList(${followedUser.movieLists[0].ID})"
								class="home followed">
					<h1>${followedUser.profileName}</h1>
					<img class="home profilePic" src="${followedUser.profilePicture}">
				</div>
		`};
		html += /*html*/ `</div>`
	}
	else {
		html += /*html*/ `
		<div class="signinPromt">
			<h1 class="signinPromt">You are not following anyone yet</h1>
				<button class="signinPromt" onclick="signInView()">Sign in</button>
			<h1 class="signinPromt">To continue</h1>
		</div>
			`;
	}


	///////////////////////////////////////

	//Added Navigationbar
	html += generateLogoHTML();
	html += generateNavbarHTML();
	document.getElementById("app").innerHTML = html;
}