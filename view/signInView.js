//SignIn view
function signInView() {
	let html = "";
	html += generateLogoHTML();
	html += /*html*/`
    <div class="signIn container">
        <h1>Sign in</h1>
        <input onchange="updateUsernameSignIn(this)" type="text" placeholder="Username"/>
        <input onchange="updatePasswordSignIn(this)" type="password" placeholder="Password"/>
				<div>
        	<button class="signUpBtn" onclick="go('signUp')">Sign Up</button>
        	<button class="signInBtn" onclick="signIn()">Sign In</button>
				</div>
	`;
	if(model.signedInInfo.userId === -1){	
		html +=	`<h4 class="failMessage">Wrong username or password</h4>`;
		model.signedInInfo.userId = null;
	}

	html +=  `</div>
	`;

	html += generateNavbarHTML();
	document.getElementById('app').innerHTML = html;
}