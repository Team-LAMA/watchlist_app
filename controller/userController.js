function user(){

}

function editProfileName(element) {
  //asigned (=) det man skriver
  model.inputs.editProfile.name = element.value;
  model.users[model.signedInInfo.userId].profileName = model.inputs.editProfile.name ;
}