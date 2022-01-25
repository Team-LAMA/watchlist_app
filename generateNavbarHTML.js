//Navigationbar in bottom of every views each button/div sends you to the view it represents in the name and onclick runs the function to that view
function generateNavbarHTML(){
	let html = "";

	html += /*html*/ `<div id = "navbar">
		<div class="navbar homeBtn" onclick="homeView()">Home</div>
		<div class="navbar searchBtn" onclick="searchView()">Search</div>
		<!--Missing function for listView-->
		<div class="navbar listBtn" onclick="">List</div>
		<div class="navbar userBtn" onclick="userView()">Profile</div>
	</div>`;

	return html;
}
