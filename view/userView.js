function userView() {
	let html = "";

	let curViewedUser = findUserByID(model.app.userID);
	let curSignedInUser = findUserByID(model.signedInInfo.userId);
	let isFollowing = checkIsFollowing(curSignedInUser, curViewedUser);

  if(curSignedInUser != curViewedUser) {
    model.app.editBio = false;
  }


  html += /*html*/ `
		<div class="user profileInfo">
      <div class="user profileInfo left">
        <img class="user profileImage" src="${curViewedUser.profilePicture}"/>
  `
  if(model.app.editBio){
    html += /*html*/ `
      <button class="user profileImageBtn" onclick="editProfileImage()">Change Image</button>
	  `
  }

  // Star
  if (model.app.userID == model.signedInInfo.userId){
    html += /*html*/ `
    <div class="user profileStar">
      ${generateFollowStar("black", false)}
    </div>
    `
  } else {
    if (isFollowing) {
      html += /*html*/ `
        <div class="user profileStar">
          ${generateFollowStar("yellow")}
        </div>
      `;
    } else {
      html += /*html*/ `
        <div class="user profileStar">
          ${generateFollowStar("lightgrey")}
        </div>
      `;
    }
  }

  // Closing profile info left
  html += /*html*/ `
    </div>
  `

  html += /*html*/ `<div class="user profileInfo right">`

  if (model.app.editBio) {
    html += /*html*/ `
      <span class="user nameSpan">
        <span><input class="user profileInfo name" value="${curViewedUser.profileName}" onchange="editProfileName(this)"></span>
        <div>
          <button class="user signoutBtn" onclick="signOut()">Sign out</button>
        </div>
      </span>
    `
    html += /*html*/ `<span><input value="${curViewedUser.age}" onchange="editAge(this)" placeholder="Age"/></span>`
    html += /*html*/ `<span><input value="${curViewedUser.favGenre}" onchange="editFavGenre(this)"placeholder="Favorite genre"/></span>`
    html += /*html*/ `<span><textarea onchange="editUserDescription(this)"placeholder="Description">${curViewedUser.userDescription}</textarea></span>`
  } else {
    html += /*html*/ `
      <span class="user nameSpan">
        <span>
          <span class="user profileInfo name ${(curSignedInUser != curViewedUser) ? "noBtn" : ""}">${curViewedUser.profileName}</span>
        </span>
        ${(curSignedInUser == curViewedUser) 
            ? '<div><button class="user signoutBtn" onclick="signOut()">Sign out</button></div>'
            : '<span class="user signoutBtn" style="background-color: transparent; border: 0px"></span>'
        }
      </span>
    `
    html += /*html*/ `<span>${curViewedUser.age ? curViewedUser.age : ""}</span>`
    html += /*html*/ `<span>${curViewedUser.favGenre ? curViewedUser.favGenre : ""}</span>`
    html += /*html*/ `<span>${curViewedUser.userDescription ? curViewedUser.userDescription : ""}</span>`
  }
  
  // Closing profile info
  html += /*html*/ `
    </div></div>
  `;

	//if (model.app.userID == model.signedInInfo.userId && model.app.editBio) { //edit profile?
	//	html += /*html*/ `
	//			<img class="user profileImage" src="${curViewedUser.profilePicture}"/>
	//			<button class="user profileImageBtn" onclick="editProfileImage()">Edit Picture</button>

				
	//			<div class="user profileDescription">
	//				<!--Name-->
	//				<input onchange="editProfileName(this)" type="text" value="${curViewedUser.profileName}" placeholder="Profile name"/>
	//				<br/>
	//				<!--Age--> 
	//				<input onchange="editAge(this)" type="numbers" value="${curViewedUser.age}" placeholder="Age" min="1" max="99"/>
	//				<br/>
	//				<!--Genre-->
	//				<input onchange="editFavGenre(this)" type="text" value="${curViewedUser.favGenre}" placeholder="Your favorite genres" />
	//				<br/>
	//				<!--Description-->
	//				<input onchange="editUserDescription(this)" type="text" value="${curViewedUser.userDescription}" placeholder="Bio"/> 
	//			</div>
	//			<!--SignOut-->
	//			<button class="user signOutBtn" onclick="signOut()">Sign Out</button>
	//			<!--Star-->
	//			<div class="user profileStar">
	//					<img src="./img/18427.png"/>
	//			</div>
	//	`
	//}
	//else {//vise en annens profil
	//	html += /*html*/ `
	//		<img class="user profileImage" src="${curViewedUser.profilePicture}"/>
	//		<div class="user profileDescription">
	//			<!--Name--> ${curViewedUser.profileName}
	//			<br/>
	//			<!--Description--> <!-- Endre så den ikke synes hvis den er tom-->
	//			${(curViewedUser.age)? curViewedUser.age + "<br/>" : ''}
	//			${(curViewedUser.favGenre) ? curViewedUser.favGenre + "<br/>" : ''} 
	//			${(curViewedUser.userDescription) ? curViewedUser.userDescription + "<br/>" : ''}
	//		</div>
	//		<!--Star-->`
    
  //  if(model.app.userID == model.signedInInfo.userId){
  //    html += /*html*/ `
  //      <div class="user profileStar">
  //        <img src="./img/18427.png"/>
  //      </div>
  //      <!--SignOut-->
	//			<button class="user signOutBtn" onclick="signOut()">Sign Out</button>
  //    `;
  //  }
  //  else {
  //    html += /*html*/ `
  //      <div class="user followStar" onclick="toggleFollow()">
  //    `
  //    if (isFollowed) {
  //      html += /*html*/ `
          
  //          <img src="./img/64px-Full_Star_Yellow.svg.png"/>
  //        </div>
  //      `;
  //    }
        
  //    else {
  //      html += /*html*/ `
          
  //          <img src="./img/64px-Empty_Star.svg.png"/>
  //        </div>
  //      `;
  //    }
  //  }
	//	html += /*html*/`
	//		</div>
	//	`;
	//}

	// Lista og listenavn
  sortMovieList(curViewedUser.movieLists[0]);
  html += /*html*/ `
    <div class="user topMoviesContainer">
      <div class="user topMoviesTitle">
        ${curViewedUser.movieLists[0].name}
      </div>
      ${(curViewedUser.movieLists[0].movies[0]) ? generateMovieElement(curViewedUser.movieLists[0], 0, `model.app.expandedIndex = 0; model.app.listID = ${curViewedUser.movieLists[0].ID}; go('list')`) : ""}
      ${(curViewedUser.movieLists[0].movies[1]) ? generateMovieElement(curViewedUser.movieLists[0], 1, `model.app.expandedIndex = 1; model.app.listID = ${curViewedUser.movieLists[0].ID}; go('list')`) : ""}
      ${(curViewedUser.movieLists[0].movies[2]) ? generateMovieElement(curViewedUser.movieLists[0], 2, `model.app.expandedIndex = 2; model.app.listID = ${curViewedUser.movieLists[0].ID}; go('list')`) : ""}
    </div>
  `


	html += generateNavbarHTML();
	html += generateLogoHTML();
	document.getElementById('app').innerHTML = html;

  document.getElementsByClassName("user profileInfo")[0].addEventListener("click", element => {
    if (model.app.page == "user"){
      if (element.target.tagName !== "TEXTAREA" && element.target.tagName !== "INPUT" && element.target.tagName !== "BUTTON"){
        toggleEditProfile();
      }
    }
  });
}