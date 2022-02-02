
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
    
    let curSignedInUser = null;
	  for (let i = 0; i < model.users.length; i++) {
      if (model.users[i].ID == model.signedInInfo.userId) {
        curSignedInUser = model.users[i];
      }
    }

    curSignedInUser.followedUsers.push('LISTA TIL DEN SOM BLIR SETT PÅ');
    console.log('followstar??')
    updateView();

  }
