function movieListView() {
  let html;
  let userCompare;
  let listChooser;

  html += generateLogoHTML();
  
  // Check witch user is loged in
  for(let i = 0; i < model.users.length; i++) {
    if(model.users[i].ID == model.app.userID) {
      userCompare = model.users[i].profileName;
    }
  }
  // Title of the list you are watching
  for(let i = 0; i < model.movieLists.length; i++) {
    if(model.movieLists[i].name == userCompare)
    html += /*html*/ `
      <div class="userFavouriteTitle">
        ${userCompare}
      </div>
    `;
  }
  for(let i = 0; i < model.movieLists.length; i++) {
    if(model.movieLists[i].name == userCompare) {
      listChooser = model.movieLists[i].movies;
    }
  }
  html += /*html*/ `<div class="movieListContainer">`;
  for(let i = 0; i < listChooser.length; i++) {
    html += /*html*/ `
      <div class="movieList">
        ${listChooser[i].title}
      </div>`;
  }
  html += /*html*/ `</div>`

  html += generateNavbarHTML();
  document.getElementById('app').innerHTML = html;
}