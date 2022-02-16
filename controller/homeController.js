function notificationUpdate(curUser){
  notificationTimer()
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

function notificationTimer(){
  let newDate = new Date();
  newDate.setTime(model.movieLists[0].lastChanged)

    console.log(newDate.getTime());
  if(newDate.getFullYear() > 0){
    console.log(newDate.getTime() - newDate.getFullYear());
  }
  else if(newDate.getMonth() > 0){
    console.log(newDate.getMonth());
  }
  else if(newDate.getDay() > 0){
    console.log(newDate.getDay());
  }
  else if(newDate.getHours() > 0){
    console.log(newDate.getHours());
  }
  else if(newDate.getMinutes() > 0){
    console.log(newDate.getMinutes());
  }
  else if(newDate.getSeconds() > 0){
    console.log(newDate.getSeconds());
  }
  
}