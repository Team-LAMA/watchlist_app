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

	for(let i = 0; i < getSearchResults().length; i++) {
		html += /*html*/ `
			<div class="search result">
				<h3>${getSearchResults()[i].movieLists[0].name}</h3>
				<div class="search result user">
					<img src="${getSearchResults()[i].profilePicture}">
					<div>${getSearchResults()[i].profileName}</div>
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