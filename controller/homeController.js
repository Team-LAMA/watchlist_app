function notificationUpdate(curUser, notificationTimer){
  let html = "";

  for(let i = 0; i < model.users[curUser].followedUsers.length; i++){
    let followedUsers = model.users[curUser].followedUsers[i].ID;
    
    notificationTimer.sort(function(b, a){return b - a})
    for(let n = 0; n < notificationTimer.length; n++){
      if(model.movieLists[followedUsers].lastChanged == notificationTimer[n]){
  
        html += /*html*/ `
          <div class="home notification" onclick="openMovieList()">
            notification ${notificationTimer[n]}
          </div>
        `
      }
    }
  }
  
	return html;
  // model.users[curUser].notifications
}

