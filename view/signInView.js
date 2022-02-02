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
    </div>
  `;

	html += generateNavbarHTML();
	document.getElementById('app').innerHTML = html;
}