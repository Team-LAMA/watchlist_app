function movieListView() {
	let curViewedUser = findUserByMovieListID(model.app.listID);
	let html = "";

	// TODO: replace with function to generate a sorted list
	// Finding the correct list
	let curMovieList = findMovieListByID(model.app.listID)
	let curUser = findUserByID(model.signedInInfo.userId);
  let unratedOffset = 0;

	let isEditable = false;
	if (curUser) {
		for (let i = 0; i < curUser.movieLists.length; i++) {
			if (curUser.movieLists[i] == curMovieList) {
				isEditable = true;
			}
		}
	}

  if(isEditable){
    unratedOffset = sortMovieList(curMovieList, true);
    if(model.app.expandedIndex != null){
      model.app.expandedIndex += unratedOffset;
    }
  }
  else{
    sortMovieList(curMovieList);
  }

	html += /*html*/ `
	<div class="movieList container">
	<div class="movieList title">
		<div>
			<img class="movieList profileImage" onclick="goToProfile(${curViewedUser.ID})" src="${curViewedUser.profilePicture}">
		</div>
  `

  if(isEditable){
    html += /*html*/ `
      <input value="${curMovieList.name}" onchange="updateListName(this, ${curMovieList.ID})"/>
    `
  }
  else {
  html += /*html*/ `
		<h2>${curMovieList.name}</h2>
  `
  }


  if(isEditable){
    html += /*html*/ `
      <svg class="movieList plusBtn" onclick="newMovieElement()" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
    `
  } else {
    html += /*html*/ `<div class="movieList followStar" onclick="toggleFollow()">`;
    if (checkIsFollowing(curUser, findUserByMovieListID(model.app.listID))) {
      html += /*html*/ `
          <img src="./img/64px-Full_Star_Yellow.svg.png"/>
        </div>
      `;
    } else {
      html += /*html*/ `    
          <img src="./img/64px-Empty_Star.svg.png"/>
        </div>
      `;
    }
    html += /*html*/ `</div>`
  }


  html += /*html*/ `
			</div>
			<div class="movieList content">
				<div class="movieList box">
	`


  
	for (let i = 0; i < curMovieList.movies.length; i++) {
		html += generateMovieElement(curMovieList, i,
			"",
			{expanded: (model.app.expandedIndex == i) ? true : false, editable: isEditable });
	}

	html += /*html*/ `
			</div>
		</div>
	`


	html += generateLogoHTML();
	html += generateNavbarHTML();
	document.getElementById("app").innerHTML = html;

	let movieElements = (document.getElementsByClassName('container'));

	for (let i = 1; i < movieElements.length; i++) {
		movieElements[i].addEventListener("click", element => {
			if (model.app.page == "list") {
				if (element.target.tagName !== "TEXTAREA" && element.target.tagName !== "INPUT" && element.target.tagName !== "BUTTON") {
					expandElement(i - 1, unratedOffset);
				}
			}
		});
	}

	document.getElementsByClassName('movieList content')[0].scrollTop = model.app.scrollOffset;
}