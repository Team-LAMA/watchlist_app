function userView() {
	let html = "";

	let curViewedUser = findUserByID(model.app.userID);
	let curSignedInUser = findUserByID(model.signedInInfo.userId);
	let isFollowing = checkIsFollowing(curSignedInUser, curViewedUser);

  html += /*html*/ `
		<div class="user profileInfo">
      <div class="user profileInfo left">
        <img class="user profileImage" src="${curViewedUser.profilePicture}" onclick="editProfileImage()"/>
	`


  // Star
  if (model.app.userID == model.signedInInfo.userId){
    html += /*html*/ `
    <div class="user profileStar">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" onclick="toggleFollow()">
        <!-- Modified from -->
        <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path stroke="black" stroke-width="35" fill="black" d=" M 287.9 78.95 L 235.4 187.2 C 231.9 194.3 225.1 199.3 217.3 200.5 L 98.98 217.9 L 184.9 303 C 190.4 308.5 192.9 316.4 191.6 324.1 L 171.4 443.7 L 276.6 387.5 C 283.7 383.7 292.2 383.7 299.2 387.5 L 404.4 443.7 L 384.2 324.1 C 382.9 316.4 385.5 308.5 391 303 L 476.9 217.9 L 358.6 200.5 C 350.7 199.3 343.9 194.3 340.5 187.2 L 287.9 78.95 z"/> 
      </svg>
    </div>
    `
  } else {
    if (isFollowing) {
      html += /*html*/ `
        <div class="user profileStar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" onclick="toggleFollow()">
            <!-- Modified from -->
            <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path stroke="black" stroke-width="35" fill="yellow" d=" M 287.9 78.95 L 235.4 187.2 C 231.9 194.3 225.1 199.3 217.3 200.5 L 98.98 217.9 L 184.9 303 C 190.4 308.5 192.9 316.4 191.6 324.1 L 171.4 443.7 L 276.6 387.5 C 283.7 383.7 292.2 383.7 299.2 387.5 L 404.4 443.7 L 384.2 324.1 C 382.9 316.4 385.5 308.5 391 303 L 476.9 217.9 L 358.6 200.5 C 350.7 199.3 343.9 194.3 340.5 187.2 L 287.9 78.95 z"/> 
          </svg>
        </div>
      `;
    } else {
      html += /*html*/ `
        <div class="user profileStar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" onclick="toggleFollow()">
            <!-- Modified from -->
            <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path stroke="black" stroke-width="35" fill="lightgrey" d=" M 287.9 78.95 L 235.4 187.2 C 231.9 194.3 225.1 199.3 217.3 200.5 L 98.98 217.9 L 184.9 303 C 190.4 308.5 192.9 316.4 191.6 324.1 L 171.4 443.7 L 276.6 387.5 C 283.7 383.7 292.2 383.7 299.2 387.5 L 404.4 443.7 L 384.2 324.1 C 382.9 316.4 385.5 308.5 391 303 L 476.9 217.9 L 358.6 200.5 C 350.7 199.3 343.9 194.3 340.5 187.2 L 287.9 78.95 z"/> 
          </svg>
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
    html += /*html*/ `<span><input value="${curViewedUser.age}" onchange="editAge(this)"/></span>`
    html += /*html*/ `<span><input value="${curViewedUser.favGenre}" onchange="editFavGenre(this)"/></span>`
    html += /*html*/ `<span><input value="${curViewedUser.userDescription}" onchange="editUserDescription(this)"/></span>`
  } else {
    html += /*html*/ `
      <span class="user nameSpan">
        <span>
          <span class="user profileInfo name">${curViewedUser.profileName}</span>
        </span>
        ${(curSignedInUser == curViewedUser) ? '<div><button class="user signoutBtn" >Log out</button></div>' : ''}
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

  document.getElementsByClassName("user profileInfo right")[0].addEventListener("click", element => {
    console.log("test");
    if (model.app.page == "user"){
      if (element.target.tagName !== "TEXTAREA" && element.target.tagName !== "INPUT" && element.target.tagName !== "BUTTON"){
        toggleEditProfile();
      }
    }
  });
}