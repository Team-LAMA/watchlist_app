// SignUp view
function signUpView() {
    let html ="";
    html += generateLogoHTML();
    html += /*html*/`
    <div class="signUpView">
        <h1>Sign Up</h1>
        <input onchange="makeUsername(this.value)" type="text" placeholder="Create username"/>
        <input onchange="makePassword(this.value)" type="password" placeholder="Create password"/>
        <input onchange="setEmail(this.value)" type="text" placeholder="Email"/>
			<div>
                <button class="signUp" onclick="signUp()">Sign Up</button>
                <button class="signIn" onclick="model.app.page = 'signIn';updateView()">Sign In</button>
			</div>
    </div>
    `;

    html += generateNavbarHTML();
    document.getElementById('app').innerHTML = html;
}


