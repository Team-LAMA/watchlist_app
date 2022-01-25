// SignUp Controller

function signUp() {
  for (let i = 0; i < model.users.length; i++){
   if (model.inputs.makeUser.username != model.users[i].username){
      if(model.inputs.makeUser.setEmail != model.users[i].password){
        makeUser();
        // model.app.page = model.app.lastPage;
        //updateView();
        console.log('Funka');
      }
   } else {
     console.log('fail');
   }
  }
}

function makeUsername(element){
  model.inputs.makeUser.username = element.value;
}

function setEmail(element) {
  model.inputs.makeUser.email = element.value;
}

function makePassword(element){
  model.inputs.makeUser.password = element.value;
}
