function searchView(){
	let html = "";

	html += generateNavbarHTML();
	html += generateLogoHTML();

	document.getElementById("app").innerHTML = html;
}