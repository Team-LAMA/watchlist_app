function homeView(){
  let html = "";

  html += `<div class="logo">My Movie List</div>`;
  
  for(let i = 0; i < model.movieLists.length; i++){
    console.log(model.movieLists[i].lastChanged)
  }

  for(let i = 0; i < model.users.followedUsers.length; i++){
    console.log(model.users[0].followedUsers[i])
  }
  document.getElementById("app").innerHTML = html;
}