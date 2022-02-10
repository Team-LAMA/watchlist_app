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
		<h1 style="
		position: fixed;
		top: 7vh;">Notifications</h1>
    <div 
      class="home notificationList">
        `

	
	
	html += notificationUpdate(curUser);
	html += /*html*/ `</div>`;

	///////////////////////////////////////

	// print the profile name of the followed users
	html += /*html*/ `
	<h1 style="position: fixed;top: 39vh;">Following</h1>
	<div class="home followedList">`;
	if(curUser){
		for (let i = 0; i < curUser.followedUsers.length; i++) {
			let followedUser = curUser.followedUsers[i];
			html += /*html*/ `
				<div
								onclick="openMovieList(${followedUser.movieLists[0].ID})"
								class="home followed">
					${followedUser.profileName}
				</div>
		`};
	}

	html += /*html*/ `</div>`

	///////////////////////////////////////

	//Added Navigationbar
	html += generateLogoHTML();
	html += generateNavbarHTML();
	document.getElementById("app").innerHTML = html;
}