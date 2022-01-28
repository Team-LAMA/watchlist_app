function userView(){
	let html = "";
	
	html += /*html*/ `
			<div class="user profileInfo">
		`

	let curUser = null;
	for(let i = 0; i < model.users.length; i++){
		if(model.users[i].ID == model.loginInfo.userId){
			curUser = model.users[i];
		}
	}

	let isFollowed = false;
	for(let i = 0; i < curUser.followedUsers.length; i++){
		if(curUser.followedUsers[i].ID == model.app.userID){
			isFollowed = true;
		}
	}
	
	if(model.app.userID == model.loginInfo.userId){ //edit profile?
		html += /*html*/ `
				<img class="user profileImage" src="${model.users[model.loginInfo.userId].profilePicture}"/>
				<input type="file"/>
				<div class="user profileDescription">
					NAME: 
					<input onchange="editProfileName()" type="text" placeholder="${model.users[model.loginInfo.userId].profileName}" />
					<hr />
					DESCRIPTION:
					<input onchange="editUserDescription()" type="text" placeholder="${model.users[model.loginInfo.userId].userDescription}" /> 
				</div>
		`
	}
	else  {//vise en annens profil
		html += /*html*/ `
			<img class="user profileImage" src="${curUser.profilePicture}"/>
			<div class="user profileDescription">
				NAME: ${curUser.profileName}
				<br/>
				<br/>
				DESCRIPTION: ${curUser.userDescription} 
				<div class="user followStar" onclick="whiteStar()">
		`
		if (isFollowed){
			html += /*html*/ `
				<div class="user followStar">
				<img src="./img/64px-Full_Star_Yellow.svg.png"/>
				</div>
			`;
		}
		else{
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

  if(model.app.userID == model.loginInfo.userId){
	html += /*html*/ `
		<div class="user topMoviesContainer">
			<div class="user topMoviesTitle">
				USERLIST: <input type="text" placeholder="MY FAVOURITES"/>
			</div>
			${generateMovieElement(curUser.movieLists[0], 0, "model.app.expandedIndex = 0; model.app.listID = 0; go('list')")}
			${generateMovieElement(curUser.movieLists[0], 0, "model.app.expandedIndex = 0; model.app.listID = 0; go('list')")}
			${generateMovieElement(curUser.movieLists[0], 0, "model.app.expandedIndex = 0; model.app.listID = 0; go('list')")}
		</div>
	`}
    else {
        html += /*html*/ `
			<div class="user topMoviesContainer">
				<div class="user topMoviesTitle">
					USERLIST: FAVOURITES
				</div>
				${generateMovieElement(curUser.movieLists[0], 0, "")}
				${generateMovieElement(curUser.movieLists[0], 1, "")}
				${generateMovieElement(curUser.movieLists[0], 3, "")}
			</div>
        `}

	html += generateNavbarHTML();
	html += generateLogoHTML();
	document.getElementById('app').innerHTML = html;
}

function sortMovies(){
	return [
			{image: "https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg"},
			{image: "https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg"}, 
			{image: "https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg"},
	]
}