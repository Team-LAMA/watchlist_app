function signUpView() {
    let html ="";

    html += /*html*/`
    <div class="logo">My Movie List</div>
    <br/>
    <br/>
    <h1>Sign Up</h1>
    <br/>
    <input onchange="setUsername(this.value)" type="text" placeholder="Create username"/>
    <br/>
    <input onchange="setPassword(this.value)" type="password" placeholder="Create password"/>
    <br/>
    <input onchange="setEmail(this.value)" type="text" placeholder="Email"/>
    <br/>
    <button class="signUp" onclick="signUp()">Sign Up</button>
    `;

    document.getElementById('app').innerHTML = html;
}