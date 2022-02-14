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
            <h1 class="notification list">${notificationList[i].name}</h1>
            <img class="home profilePic" src="${model.users[notificationList[i].ID].profilePicture}">
          </div>
        `
    }
  }
  if(notificationList.length == 0){
    html += /*html*/ ``;
  }
  console.log(notificationList);
	return html;
  // model.users[curUser].notifications
}