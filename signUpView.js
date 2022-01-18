function signUpView() {
    let html ="";
    html += generateLogoHTML();
    html += /*html*/`
    <div class="signUpView">
        <h1>Sign Up</h1>
        <br/>
        <input onchange="setUsername(this.value)" type="text" placeholder="Create username"/>
        <br/>
        <input onchange="setPassword(this.value)" type="password" placeholder="Create password"/>
        <br/>
        <input onchange="setEmail(this.value)" type="text" placeholder="Email"/>
        <br/>
        <button class="signUp" onclick="signUp()">Sign Up</button>
    </div>
    `;

    html += generateNavbarHTML();
    document.getElementById('app').innerHTML = html;
}

