// SignUp Controller

function signUp() {
  for (let i = 0; i < model.users.length; i++){
   if (model.inputs.makeUser.username != model.users[i].username){
      if(model.inputs.makeUser.email != model.users[i].email){
        makeUser();
        model.app.page = model.app.lastPage;
        updateView();
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

//makeuser 
function makeUser(){
  let newUser = { 
    ID: model.users[indexOf], //Sette plassen til objektet i users til ID'en til denne brukeren
    username: model.inputs.makeUser.username, //Sette brukernavnet fra input
    password: model.inputs.makeUser.password, //Sette passordet fra input
    email: model.inputs.makeUser.email, //Sette emailen fra input
    movieLists: [],  //La resten stå tomme siden de blir formet av user
    profileName: "",
    profilePicture: "",
    userDescription: "",
    followedUsers: [],
    //followedListIDs: [],  
  }

  model.users.push(newUser);
}