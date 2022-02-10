function notificationUpdate(curUser){
  let html = "";
  let notificationList = [];
  
  console.log(curUser)
  if(curUser){
    for (let i = 0; i < curUser.followedUsers.length; i++) {
      notificationList.push(curUser.followedUsers[i].movieLists[0]);
    }
  }

  notificationList.sort(function(a, b){return b.lastChanged - a.lastChanged})
  for(let i = 0; i < notificationList.length; i++){ 
    if(model.signedInInfo.userId >= 0){  
      console.log("a", model.signedInInfo.userId);
        html += /*html*/ `
          <div class="home notification" onclick="openMovieList(${notificationList[i].ID})">
            ${notificationList[i].name}
          </div>
        `
    }
  }
  console.log(notificationList.lenght == 0);
  if(notificationList.length == 0){
    console.log("k");
    html += /*html*/ `
            <div class="home notification" >
              <h2 onclick="signInView()">YOURE NOT SIGNED IN, CLICK HERE TO SIGN IN OR SIGN UP</h2>
              You no follow any1
              you ar luser
            </div>
          `
  }
  
  console.log(notificationList)
	return html;
  // model.users[curUser].notifications
}