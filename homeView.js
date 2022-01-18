function homeView(){
  let html = "";
  let userCheck = 0;

  html += `<div class="logo">My Movie List</div>`;
  
  // console.log(model.users[0].followedUsers)
  // for(let i = 0; i < model.movieLists.length; i++){
  //   console.log(model.movieLists[i].lastChanged)
  // }

  for(let i = 0; i < model.users.length; i++){
    if(model.app.userID == model.users[i].ID){
      userCheck = i;
    }
  }
  for(let i = 0; i < model.users[userCheck].followedUsers.length; i++){
    html += /*html*/ `${model.users[userCheck].followedUsers[i].username}
    </br>`;
  }
  
  document.getElementById("app").innerHTML = html;
}