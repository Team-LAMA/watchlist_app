function notificationUpdate(curUser, notificationList){
  let html = "";
  let notificationTimer = [];

    for(let k = 0; k < notificationList.length; k++){
      notificationTimer.push(notificationList[k])
      notificationTimer.sort(function(a, b){return b.lastChanged - a.lastChanged})
    }
    console.log(notificationTimer, "yo")
  for(let i = 0; i < model.users[curUser].followedUsers.length; i++){
    let followedUsers = model.users[curUser].followedUsers[i].ID;

    for(let j = 0; j < notificationList.length; j++){

      if(model.movieLists[followedUsers].name == notificationList[j].name){
          
        html += /*html*/ `
          <div class="home notification" onclick="openMovieList(${notificationList[j].ID})">
            ${notificationList[j].name}
          </div>
        `
      }
    }
  }
  
	return html;
  // model.users[curUser].notifications
}