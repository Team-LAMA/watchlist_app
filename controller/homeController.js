function notificationUpdate(curUser, notificationList){
  let html = "";
  let notificationTimer = [];

    for(let k = 0; k < notificationList.length; k++){
      notificationTimer.push(notificationList[k])
      notificationTimer.sort(function(a, b){return b.lastChanged - a.lastChanged})
    }
    console.log(notificationTimer)
    
	if(!(model.signedInInfo.userId >= 0) && !(model.app.userID >= 0)){
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
  }
  else{
    html += /*html*/ `
            <div class="home notification" >
              <h2 onclick="signInView()">YOURE NOT SIGNED IN, CLICK HERE TO SIGN IN OR SIGN UP</h2>
              You no follow any1
              you ar luser
            </div>
          `
  }
  
	return html;
  // model.users[curUser].notifications
}