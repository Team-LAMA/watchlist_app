function signInView() {
    let html = "";

    html += /*html*/`
    <div class="logo">My Movie List</div>
    <br/>
    <br/>
    <h1>Sign in</h1>
    <br/>
    <input onchange="setUsername(this.value)" type="text" placeholder="Username"/>
    <br/>
    <input onchange="setPassword(this.value)" type="password" placeholder="Password"/>
    <br/>
    <button class="signUp" onclick="signUp()">Sign Up</button>
    <button class="signIn" onclick="signIn()">Sign In</button>
    `;

    document.getElementById('app').innerHTML = html;
}