// HomeView
function homeView(){
  let html = "";

	let curUser = {
    ID: null,
    username: "",
    password: "",
    eMail: "",
    movieLists: [],
    profileName: "",
    profilePicture: "",
    userDescription: "",
    followedUsers: [],
    }

  for(let i = 0; i < model.users.length; i++){
    if(model.users[i].ID == model.loginInfo.userId){
      curUser = model.users[i];
    }
  }

  html += generateLogoHTML();

  

  html += /*html*/ `
    <div 
      class="home notificationList">
        <h1>Notification</h1>
        `

    for(let i = 0; i < model.movieLists.length; i++){
    html += /*html*/ `
      <div
        onclick="notificationUpdate(${curUser})"
        class="notification">notification ${i + 1}
      </div>
      `
    }

  html += /*html*/ `</div>`;



  // print the username of the followed users
  html += /*html*/ `<div class="home followedList"><h1>Following</h1>`
  for(let i = 0; i < curUser.followedUsers.length; i++){
		let followedUser = curUser.followedUsers[i];
    html += /*html*/ `
			<div
        onclick="openMovieList(${followedUser.movieLists[0].ID})"
        class="followed">
				${followedUser.username}
			</div>
		`;
  }

  html += /*html*/ `</div>`
  //Added Navigationbar
  html += generateNavbarHTML();
  document.getElementById("app").innerHTML = html;
}