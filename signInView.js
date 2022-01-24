function signInView() {
    let html = "";
    html += generateLogoHTML();
    html += /*html*/`
    <div class="signInView">
        <h1>Sign in</h1>
        <input onchange="setUsername(this)" type="text" placeholder="Username"/>
        <input onchange="setPassword(this)" type="password" placeholder="Password"/>
				<div>
        	<button class="signUp" onclick="model.app.page = 'signUp';updateView()">Sign Up</button>
        	<button class="signIn" onclick="signIn()">Sign In</button>
				</div>
    </div>
    `;

    html += generateNavbarHTML();
    document.getElementById('app').innerHTML = html;
}