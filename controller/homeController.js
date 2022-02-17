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
            <img class="home profilePic" src="${model.users[notificationList[i].ID].profilePicture}">`
            html += `<div class="notification timer">`
            html += notificationTimer(notificationList[i].lastChanged);
            html += "</div>"
            html += "</div>"
    }
  }
  if(notificationList.length == 0){
    html += /*html*/ ``;
  }
	return html;
  // model.users[curUser].notifications
}

function notificationTimer(list){
  let html = "";
  let newDate = new Date();

  newDate.setTime(list)

  if(newDate.getFullYear() < new Date().getFullYear()){
    html = new Date().getFullYear() - newDate.getFullYear();
    html += " Years ago";
  }
  else if(newDate.getMonth() < new Date().getMonth()){
    html = new Date().getMonth() - newDate.getMonth();
    html += " Months ago";
  }
  else if(newDate.getDate() < new Date().getDate()){
    // Using getDate instead of getDay, because getDay only returns the weekday
    //   (a number between 0 and 6) so the if has a pass-through 4 times a month,
    //   while getDate return the day of the month (number between 1 and 31).
    // minus 1 because getDate is the only one to start counting at 1
    html = new Date().getDate() - newDate.getDate();
    if(html == 1) {html += " Day ago";}
    else {html += " Days ago";}
  }
  else if(newDate.getHours() < new Date().getHours()){
    html = new Date().getHours() - newDate.getHours();
    html += " Hours ago";
  }
  else if(newDate.getMinutes() < new Date().getMinutes()){
    html = new Date().getMinutes() - newDate.getMinutes();
    html += " Minutes ago";
  }
  else{
    html = new Date().getSeconds() - newDate.getSeconds();
    html += " Seconds ago";
  }
  return html;
}

function testNotificationTimer() {

  if(n){}
}