


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

	for(let i = 0; i < model.users.length; i++){
		if(model.users[i].profileName.toLowerCase().search(searchWord) != -1
			|| model.users[i].movieLists[0].name.toLowerCase().search(searchWord) != -1){
			resultList.push(model.users[i]);
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


//function getSearchResults(){
//	resultList = [
//		{
//			ID: 0,
//			username: "Team3",
//			password: "321",
//			eMail: "Team3@mail.no",
//			movieLists: [],
//			profileName: "Meg",
//			profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",
//			userDescription: "Lorem ipsum",
//			followedUsers: [],
//			// followedListIDs: [],
//		},
//		{
//			ID: 1,
//			username: "Terje",
//			password: "Passord1",
//			eMail: "Terje@getacademy.no",
//			movieLists: [],
//			profileName: "Deg",
//			profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",
//			userDescription: "Lærer ved GET Academy",
//			followedUsers: [],
//			// followedListIDs: [],
//		},
//		{
//			ID: 2,
//			username: "Mamsen0001",
//			password: "LOVE",
//			eMail: "mamsen0001@hotmail.com",
//			movieLists: [],
//			profileName: "Mamma",
//			profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",
//			userDescription: "Føler meg 20",
//			followedUsers: [],
//			// followedListIDs: [],
//		},
//	]

//	resultList[0].movieLists.push(model.movieLists[0]);
//	resultList[1].movieLists.push(model.movieLists[1]);
//	resultList[2].movieLists.push(model.movieLists[2]);

//	resultList[0].followedUsers.push(model.users[1]);
//	resultList[0].followedUsers.push(model.users[2]);

//	resultList[1].followedUsers.push(model.users[2]);

//	resultList[2].followedUsers.push(model.users[0]);
//	resultList[2].followedUsers.push(model.users[1]);

//	return resultList;
//}




