// SingInController
function signIn() {
  let isSignedIn = false;
  for (let i = 0; i < model.users.length; i++) {
    if (model.inputs.signIn.username === model.users[i].username) {
      if (model.inputs.signIn.password === model.users[i].password) {
        model.signedInInfo.userId = model.users[i].ID;
        model.app.page = model.app.lastPage;
        isSignedIn = true;
      }
    }
   
  }
  if(!isSignedIn) {
    model.signedInInfo.userId = -1;
    model.inputs.signIn.password = "";
    signInView();
  }
  else{
    updateView();
  }
} 

function updateUsernameSignIn(element) {
	model.inputs.signIn.username = element.value;
}
function updatePasswordSignIn(element) {
	model.inputs.signIn.password = element.value;
}