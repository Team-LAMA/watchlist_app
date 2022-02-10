function notificationUpdate(curUser){
  let html = "";
  let notificationList = [];
  
  if(curUser){
    for (let i = 0; i < curUser.followedUsers.length; i++) {
      notificationList.push(curUser.followedUsers[i].movieLists[0]);
    }
  }
  notificationList.sort(function(a, b){return b.lastChanged - a.lastChanged})
  if(model.signedInInfo.userId > 0 || model.signedInInfo.userId === 0){ 
  for(let i = 0; i < notificationList.length; i++){  
        html += /*html*/ `
          <div class="home notification" onclick="openMovieList(${notificationList[i].ID})">
            <p class="notification list">${notificationList[i].name}</p>
            <div class="notificationname">
              <h1 class="notification name">User</h1>
              <p class="notification name">${model.users[i+1].profileName}</p>
            </div>
          </div>
        `
    }
  }
  if(notificationList.length == 0){
    html += /*html*/ ``;
  }
  
	return html;
  // model.users[curUser].notifications
}