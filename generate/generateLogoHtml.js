// Logo
function generateLogoHTML(){
	let html = "";

	html += /*html*/ `
		<div id="backBtn">
			<svg onclick="history.back()" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left-long" class="svg-inline--fa fa-arrow-left-long" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"></path></svg>
		</div>
		<div id = "logo">
			<h1>My Movie List</h1>
		</div>`;

	return html;
}