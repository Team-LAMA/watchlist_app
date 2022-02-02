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
	if (model.signedInInfo.userId) {
		for (let i = 0; i < curSignedInUser.followedUsers.length; i++) {
			if (curSignedInUser.followedUsers[i].ID == model.app.userID) {
				isFollowed = true;
			}
		}
	}


	if (model.app.userID == model.signedInInfo.userId) { //edit profile?
		html += /*html*/ `
				<img class="user profileImage" src="${curViewedUser.profilePicture}"/>
				<input type="file"/> <!-- HJELP OSS ALEX  HER SKAL DET EN FUNKSJON-->
				<div class="user profileDescription">
					Name: 
					<input onchange="editProfileName(this)" type="text" placeholder="${curViewedUser.profileName}" />
					<hr />
					Description:
					<input onchange="editUserDescription(this)" type="text" placeholder="${curViewedUser.userDescription}" /> 
				</div>
		`
	}
	else {//vise en annens profil
		console.log(curViewedUser);
		html += /*html*/ `
			<img class="user profileImage" src="${curViewedUser.profilePicture}"/>
			<div class="user profileDescription">
				Name: ${curViewedUser.profileName}
				<br/>
				<br/>
				Description: ${curViewedUser.userDescription}
				<div class="user followStar" onclick="followStar()"> <!--Lage function og flytte stjernen riktig css-->
		`
		if (isFollowed) {
			html += /*html*/ `
				<div class="user followStar">
				<img src="./img/64px-Full_Star_Yellow.svg.png"/>
				</div>
			`;
		}
		else {
			html += /*html*/ `
				<div class="user followStar">
				<img src="./img/64px-Empty_Star.svg.png"/>
				</div>
			`;
		}
		html += /*html*/`
				</div>
			</div>
		`;
	}

	html += /*html*/ `</div>`;

	// Lista og listenavn
  if(model.app.userID == model.signedInInfo.userId){
		html += /*html*/ `
			<div class="user topMoviesContainer">
				<div class="user topMoviesTitle">
					<input type="text" onchange="updateMovieListName" placeholder="${curViewedUser.movieLists[0].name}"/>
				</div>
				${(curViewedUser.movieLists[0].movies[0]) ? generateMovieElement(curViewedUser.movieLists[0], 0, "model.app.expandedIndex = 0; model.app.listID = 0; go('list')") : ""}
				${(curViewedUser.movieLists[0].movies[1]) ? generateMovieElement(curViewedUser.movieLists[0], 1, "model.app.expandedIndex = 0; model.app.listID = 0; go('list')") : ""}
				${(curViewedUser.movieLists[0].movies[2]) ? generateMovieElement(curViewedUser.movieLists[0], 2, "model.app.expandedIndex = 0; model.app.listID = 0; go('list')") : ""}
			</div>
		`}
	else {
		html += /*html*/ `
			<div class="user topMoviesContainer">
				<div class="user topMoviesTitle">
				${curViewedUser.name}
				</div>
				${(curViewedUser.movieLists[0].movies[0]) ? generateMovieElement(curViewedUser.movieLists[0], 0, "") : ""}
				${(curViewedUser.movieLists[0].movies[1]) ? generateMovieElement(curViewedUser.movieLists[0], 1, "") : ""}
				${(curViewedUser.movieLists[0].movies[2]) ? generateMovieElement(curViewedUser.movieLists[0], 2, "") : ""}
			</div>
        `}

	html += generateNavbarHTML();
	html += generateLogoHTML();
	document.getElementById('app').innerHTML = html;
}