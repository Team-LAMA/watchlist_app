


function doSearch(){
	getSearchResults(model.inputs.search.searchWord)
}


function updateSearchWord(element){
	model.inputs.search.searchWord = element.value;
}


// Searches usernames
function getSearchResults(searchWord = ""){
	let resultList = [];
	searchWord = searchWord.toLowerCase();

  // Searches through all users and checking user-specific data to see if the
  //   list should be added to the list shown after the search
	for(let i = 0; i < model.users.length; i++){
		if(model.users[i].profileName.toLowerCase().search(searchWord) != -1
			|| model.users[i].movieLists[0].name.toLowerCase().search(searchWord) != -1
      || model.users[i].favGenre.toLowerCase().search(searchWord) != -1){
			resultList.push(model.users[i]);
		} else {
      // Searches through all movies in all user-lists and checking all
      //   movie-specific data to see if the list should be added to the list
      //   shown after the search
      let curUser = model.users[i];
      let isAdded = false;
      for(let n = 0; n < curUser.movieLists[0].movies.length && isAdded == false; n++){
        let curMovie = curUser.movieLists[0].movies[n];          
        if(curMovie.genres){
          if(curMovie.genres.toLowerCase().search(searchWord) != -1
          || curMovie.actors.toLowerCase().search(searchWord) != -1
          || curMovie.directors.toLowerCase().search(searchWord) != -1){
            isAdded = true;
            resultList.push(curUser);
          }
        }
      } 
    }
	}

	let html = "";

	for (let i = 0; i < resultList.length; i++) {
		let listID = resultList[i].ID;
		html += /*html*/ `
			<div onclick="openMovieList(${listID})" class="search result">
				<h3>${resultList[i].movieLists[0].name}</h3>
				<div class="search result username"> 
					<img src="${resultList[i].profilePicture}">
					<div>${resultList[i].profileName}</div>
				</div>
			</div>
		`
	}
//onclick="goToProfile(${resultList[i].ID})
	document.getElementsByClassName("resultContainer")[0].innerHTML = html
	let searchResults = document.getElementsByClassName("search result");
	for (let i= 0; i < searchResults.length; i++){
		if (i%2==0){
			searchResults[i].addEventListener("click", element => {
				if (element.target != element.currentTarget && element.target.tagName !== "H3") {
					goToProfile(resultList[parseInt(i/2)].ID);
				}
			})
		}
	}
	return resultList;
}

function goToProfile(ID){
	model.app.userID = ID
	go("user");
}
