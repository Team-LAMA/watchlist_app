// SignUp view

function signUpView() {
  let html = "";
  html += generateLogoHTML();
  html += /*html*/`
    <div class="signUp container">
			<h1>Sign Up</h1>
			<input onchange="updateUsernameSignUp(this)" type="text" placeholder="Create username" autofocus/>
			<input onchange="updatePasswordSignUp(this)" type="password" placeholder="Create password"/>
			<input onchange="updateEmailSignUp(this)" type="text" placeholder="Email"/>
			<div>
				<button class="signUpBtn" onclick="signUp()">Sign Up</button>
			</div>
  `;
	
	if(model.signedInInfo.userId === -1){	
		html +=	/*html*/ `<h4 class="failMessage">Username or Email is already used</h4>`;
		model.signedInInfo.userId = null;
	}

	html +=/*html*/ `</div>`;

  html += generateNavbarHTML();
  document.getElementById('app').innerHTML = html;

  document.getElementsByClassName("signUpBtn")[0].addEventListener("keyup", event => {
    if (event.keyCode === 13) { // 13 = enter
      event.preventDefault();
      document.getElementsByClassName("signUpBtn")[0].click();
    }
  });
  document.getElementsByClassName("signUp container")[0].getElementsByTagName("input")[0].addEventListener("keyup", event => {
    if (event.keyCode === 13) { // 13 = enter
      event.preventDefault();
      document.getElementsByClassName("signUpBtn")[0].click();
    }
  });
  document.getElementsByClassName("signUp container")[0].getElementsByTagName("input")[1].addEventListener("keyup", event => {
    if (event.keyCode === 13) { // 13 = enter
      event.preventDefault();
      document.getElementsByClassName("signUpBtn")[0].click();
    }
  });
  document.getElementsByClassName("signUp container")[0].getElementsByTagName("input")[2].addEventListener("keyup", event => {
    if (event.keyCode === 13) { // 13 = enter
      event.preventDefault();
      document.getElementsByClassName("signUpBtn")[0].click();
    }
  });

  document.getElementsByClassName("signUpBtn")[0].focus();
}


