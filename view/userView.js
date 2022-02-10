function userView() {
	let html = "";

	html += /*html*/ `
			<div class="user profileInfo">
		`

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

	let isFollowed = false;
	if (model.signedInInfo.userId > 0 || model.signedInInfo.userId === 0){ // checks if a user is logged in
		for (let i = 0; i < curSignedInUser.followedUsers.length; i++) { //goes through all followedUsers of the logged in user
			if (curSignedInUser.followedUsers[i].ID == curViewedUser.ID) { // Checks if the currently checked followed user is also the user we're watching
				isFollowed = true;
			}
		}
	}


	if (model.app.userID == model.signedInInfo.userId) { //edit profile?
		html += /*html*/ `
				<img class="user profileImage" src="${curViewedUser.profilePicture}"/>
				<button class="user profileImageBtn" onclick="editProfileImage()">Edit Picture</button>

				
				<div class="user profileDescription">
					<!--Name-->
					<input onchange="editProfileName(this)" type="text" value="${curViewedUser.profileName}" placeholder="Profile name"/>
					<br/>
					<!--Age--> 
					<input onchange="editAge(this)" type="numbers" value="${curViewedUser.age} years old" placeholder="Age" min="1" max="99"/>
					<br/>
					<!--Genre-->
					<input onchange="editFavGenre(this)" type="text" value="${curViewedUser.favGenre}" placeholder="Your favorite genres" />
					<br/>
					<!--Description-->
					<input onchange="editUserDescription(this)" type="text" value="${curViewedUser.userDescription}" placeholder="User description"/> 
				</div>
				<!--Star-->
				<div class="user profileStar">
						<img src="./img/18427.png"/>
				</div>
		`
	}
	else {//vise en annens profil
		html += /*html*/ `
			<img class="user profileImage" src="${curViewedUser.profilePicture}"/>
			<div class="user profileDescription">
				<!--Name--> ${curViewedUser.profileName}
				<br/>
				<!--Description--> ${curViewedUser.userDescription}
			</div>
			<!--Star-->
			<div class="user followStar" onclick="toggleFollow()">
		`
		if (isFollowed) {
			html += /*html*/ `
				
					<img src="./img/64px-Full_Star_Yellow.svg.png"/>
				</div>
			`;
		}
			
		else {
			html += /*html*/ `
				
					<img src="./img/64px-Empty_Star.svg.png"/>
				</div>
			`;
		}
		html += /*html*/`
				
			</div>
		`;
	}

	html += /*html*/ `</div>`;

	// Lista og listenavn
  if(model.app.userID == model.signedInInfo.userId){
	  
		html += /*html*/ `
			<div class="user topMoviesContainer">
				<div class="user topMoviesTitle">
					<input type="text" onchange="updateMovieListName" value="${curViewedUser.movieLists[0].name}" placeholder="List name"/>
				</div>
				${(curViewedUser.movieLists[0].movies[0]) ? generateMovieElement(curViewedUser.movieLists[0], 0, `model.app.expandedIndex = 0; model.app.listID = ${curViewedUser.movieLists[0].ID}; go('list')`) : ""}
				${(curViewedUser.movieLists[0].movies[1]) ? generateMovieElement(curViewedUser.movieLists[0], 1, `model.app.expandedIndex = 1; model.app.listID = ${curViewedUser.movieLists[0].ID}; go('list')`) : ""}
				${(curViewedUser.movieLists[0].movies[2]) ? generateMovieElement(curViewedUser.movieLists[0], 2, `model.app.expandedIndex = 2; model.app.listID = ${curViewedUser.movieLists[0].ID}; go('list')`) : ""}
			</div>
		`}
	else {
		html += /*html*/ `
			<div class="user topMoviesContainer">
				<div class="user topMoviesTitle">
					${curViewedUser.movieLists[0].name}
				</div>
				${(curViewedUser.movieLists[0].movies[0]) ? generateMovieElement(curViewedUser.movieLists[0], 0, `model.app.expandedIndex = 0; model.app.listID = ${curViewedUser.movieLists[0].ID}; go('list')`) : ""}
				${(curViewedUser.movieLists[0].movies[1]) ? generateMovieElement(curViewedUser.movieLists[0], 1, `model.app.expandedIndex = 1; model.app.listID = ${curViewedUser.movieLists[0].ID}; go('list')`) : ""}
				${(curViewedUser.movieLists[0].movies[2]) ? generateMovieElement(curViewedUser.movieLists[0], 2, `model.app.expandedIndex = 2; model.app.listID = ${curViewedUser.movieLists[0].ID}; go('list')`) : ""}
			</div>
        `}



	html += generateNavbarHTML();
	html += generateLogoHTML();
	document.getElementById('app').innerHTML = html;
}