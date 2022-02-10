function notificationUpdate(curUser){
  let html = "";
  let notificationList = [];
  
  console.log(curUser)
  if(curUser){
    for (let i = 0; i < curUser.followedUsers.length; i++) {
      notificationList.push(curUser.followedUsers[i].movieLists[0]);
    }
  }
  console.log(notificationList.ID);
  notificationList.sort(function(a, b){return b.lastChanged - a.lastChanged})
  if(model.signedInInfo.userId >= 0){ 
  for(let i = 0; i < notificationList.length; i++){  
      console.log("a", model.signedInInfo.userId);
        html += /*html*/ `
          <div class="home notification" onclick="openMovieList(${notificationList[i].ID})">
            <p class="notification list">${notificationList[i].name}</p>
            <div class="notification name">
              <h1 class="notification name">User</h1>
              <p class="notification name">${model.users[i].profileName}</p>
            </div>
          </div>
        `
    }
  }
  console.log(notificationList.lenght == 0);
  if(notificationList.length == 0){
    console.log("k");
    html += /*html*/ ``;
  }
  
  console.log(notificationList)
	return html;
  // model.users[curUser].notifications
}