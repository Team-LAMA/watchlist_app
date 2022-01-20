


function generateNavbarHTML(){
	let html = "";

	html += /*html*/ `<div id = "navbar">
		<div class="homeBtn" onclick="homeView()">Home</div>
		<div class="searchBtn" onclick="searchView()">Search</div>
		<div class="listBtn" onclick="">List</div>
		<div class="userBtn" onclick="userView()">Profile</div>
	</div>`;

	return html;
}