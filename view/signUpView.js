// SignUp view

function signUpView() {
	let html = "";
	html += generateLogoHTML();
	html += /*html*/`
    <div class="signUp container">
			<h1>Sign Up</h1>
			<input onchange="updateUsernameSignUp(this)" type="text" placeholder="Create username"/>
			<input onchange="updatePasswordSignUp(this)" type="password" placeholder="Create password"/>
			<input onchange="updateEmailSignUp(this)" type="text" placeholder="Email"/>
			<div>
				<button class="signUpBtn" onclick="signUp()">Sign Up</button>
				<!--<button class="signInBtn" onclick="model.app.page = 'signIn';updateView()">Sign In</button>-->
			</div>
    </div>
  `;

	html += generateNavbarHTML();
	document.getElementById('app').innerHTML = html;
}


