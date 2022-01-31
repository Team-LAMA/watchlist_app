
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