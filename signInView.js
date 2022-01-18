function signInView() {
    let html = "";
    html += generateLogoHTML();
    html += /*html*/`
    <div class="signInView">
        <h1>Sign in</h1>
        <br/>
        <input onchange="setUsername(this.value)" type="text" placeholder="Username"/>
        <br/>
        <input onchange="setPassword(this.value)" type="password" placeholder="Password"/>
        <br/>
        <button class="signUp" onclick="signUp()">Sign Up</button>
        <button class="signIn" onclick="signIn()">Sign In</button>
    </div>
    `;

    html += generateNavbarHTML();
    document.getElementById('app').innerHTML = html;
}