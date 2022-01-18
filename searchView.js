

function searchView(){

	let html = "";

	html += generateNavbarHTML();
	html += generateLogoHTML();

	html += /*html*/ `
		<div class="search searchBarBG">
			<input class="search searchBar">
			<button class="search searchButton">go</button>
		</div>
	`

	document.getElementById("app").innerHTML = html;

}