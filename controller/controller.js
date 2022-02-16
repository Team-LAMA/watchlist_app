function openMovieList(listID) {
  model.app.listID = listID
  go("list")
}

function go(page) {
  let app = model.app;
  history.pushState(null, null, `#${app.page}/${app.lastPage}/${app.userID}/${app.listID}`);
  app.page = page;
  updateView();
}

window.onpopstate = function () {
  let app = model.app;

  const pageHash = location.hash.substring(1);
  const parts = pageHash.split('/');

  app.page = parts[0];
  app.lastPage = parts[1];
  app.userID = parseInt(parts[2]);
  app.listID = parseInt(parts[3]);

  updateView();
}

function findUserByID(ID) {
  let user = null;
  for (let i = 0; i < model.users.length; i++) {
    if (model.users[i].ID == ID) {
      user = model.users[i];
    }
  }
  return user;
}

function findMovieListByID(ID) {
  let movieList = null;
  for (let i = 0; i < model.movieLists.length; i++) {
    if (model.movieLists[i].ID == ID) {
      movieList = model.movieLists[i];
    }
  }
  return movieList;
}

function findUserByMovieListID(ID) {
  for (let i = 0; i < model.users.length; i++) {
    let curUser = model.users[i];
    for (let j = 0; j < curUser.movieLists.length; j++) {
      let curMovieList = curUser.movieLists[j];
      if (curMovieList.ID == ID) {
        return curUser;
      }
    }
  }
  console.warn("ID", ID, "is not a valid movieList ID or that movieList is not connected to a user.");
  return null;
}

function checkIsFollowing(curSignedInUser, curViewedUser) {
  if (curSignedInUser && curViewedUser) {
    for (let i = 0; i < curSignedInUser.followedUsers.length; i++) {
      if (curSignedInUser.followedUsers[i] == curViewedUser) { // Checks if the currently checked followed user is also the user we're watching
        return true;
      }
    }
  }
  return false;
}
