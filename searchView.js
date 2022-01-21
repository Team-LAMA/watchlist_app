

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
		<div class="search results">
	`;

	

	html += /*html*/ `	
		</div>
	`;

	html += generateNavbarHTML();
	html += generateLogoHTML();

	document.getElementById("app").innerHTML = html;
}