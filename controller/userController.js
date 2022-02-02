
function editProfileName(element) {
  model.inputs.editProfile.name = element.value;
  model.users[model.signedInInfo.userId].profileName = model.inputs.editProfile.name;
};

function editUserDescription(element) {
    //asigned (=) det man skriver
    model.inputs.editProfile.description = element.value;
    model.users[model.signedInInfo.userId].userDescription = model.inputs.editProfile.description;
  };

  function editProfileImage(element) {
    //HJELP OSS ALEX VOL.2
  };

  function toggleFollow() {
    //userView();
    
    let curViewedUser = null;
    for (let i = 0; i < model.users.length; i++) {
      if (model.users[i].ID == model.app.userID) {
        curViewedUser = model.users[i];
      }
    }

    let curSignedInUser = null;
	  for (let i = 0; i < model.users.length; i++) {
      if (model.users[i].ID == model.signedInInfo.userId) {
        curSignedInUser = model.users[i];
      }
    }

    let isFollowing = false;
    let followedIndex = null;
    if (model.signedInInfo.userId >= 0) { // checks if a user is logged in
      for (let i = 0; i < curSignedInUser.followedUsers.length; i++) { //goes through all followedUsers of the logged in user
        if (curSignedInUser.followedUsers[i].ID == curViewedUser.ID) { // Checks if the currently checked followed user is also the user we're watching
          isFollowing = true;
          followedIndex = i;
        }
      }
    }

    if (isFollowing){
      curSignedInUser.followedUsers.splice(followedIndex, 1);
    }
    else {
      curSignedInUser.followedUsers.push(curViewedUser);
    }

    updateView();
  }
