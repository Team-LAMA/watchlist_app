

function searchView(){

	let html = "";

	html += generateNavbarHTML();
	html += generateLogoHTML();

	// Searchbar
	html += /*html*/ `
		<div class="search searchBarBG">
			<input class="search searchBar">
			<button class="search searchButton">go</button>
		</div>
	`

	// Results
	html += /*html*/ `
		<div class="search resultContainer">
	`;

	for(let i = 0; i < model.searchResults.length; i++) {
		html += /*html*/ `
			<div class="search result">
				<h3>${model.searchResults[i].movieLists[0].name}</h3>
				<div class="search result user">
					<img src="${model.searchResults[i].profilePicture}">
					<div>${model.searchResults[i].profileName}</div>
				</div>
			</div>
		`
	}

	html += /*html*/ `	
		</div>
	`;

	html += generateNavbarHTML();
	html += generateLogoHTML();

	document.getElementById("app").innerHTML = html;
}