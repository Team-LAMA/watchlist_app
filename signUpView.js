function signUpView() {
    let html ="";
    html += generateLogoHTML();
    html += /*html*/`
    <div class="signUpView">
        <h1>Sign Up</h1>
        <input onchange="setUsername(this.value)" type="text" placeholder="Create username"/>
        <input onchange="setPassword(this.value)" type="password" placeholder="Create password"/>
        <input onchange="setEmail(this.value)" type="text" placeholder="Email"/>
				<div>
        	<button class="signUp" onclick="signUp()">Sign Up</button>
				</div>
    </div>
    `;

    html += generateNavbarHTML();
    document.getElementById('app').innerHTML = html;
}


