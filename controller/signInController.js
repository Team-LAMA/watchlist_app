// SingInController
function signIn() {
  for (let i = 0; i < model.users.length; i++) {
    if (model.inputs.signIn.username === model.users[i].username) {
      if (model.inputs.signIn.password === model.users[i].password) {
        // model.app.page = model.app.lastPage;
        //updateView();
        console.log('Funka')
      }
    }
  }
} 

function updateUsernameSignIn(element) {
	model.inputs.signIn.username = element.value;
}
function updatePasswordSignIn(element) {
	model.inputs.signIn.password = element.value;
}