//Navigationbar in bottom of every views each button/div sends you to the view it represents in the name and onclick runs the function to that view
function generateNavbarHTML(){
	let html = "";

	html += /*html*/ `<div id = "navbar">
		<div class="navbar homeBtn" onclick="go('home')">Home</div>
		<div class="navbar searchBtn" onclick="go('search')">Search</div>
		<!--Missing function for listView-->
		<div class="navbar listBtn" onclick="go('list')">List</div>
		<div class="navbar userBtn" onclick="go('user')">Profile</div>
	</div>`;

	return html;
}
