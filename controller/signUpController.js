// SignUp Controller

function signUp() {
  let isUsernameUnique = true;
  let isEmailUnique = true;
  console.log('kjørr')
  console.log(model.inputs.makeUser.username)
  if(model.inputs.makeUser.username) {
    console.log('hvis som atte dersom atte da')
    for (let i = 0; i < model.users.length; i++){
      if(model.inputs.makeUser.username === model.users.username)
      isUsernameUnique = false;
    } console.log('hvis som atte dersom atte da så')
  }
  if (model.inputs.makeUser.email){
    console.log('if email')
    for (let i = 0; i < model.users.length; i++){
      if(model.inputs.makeUser.email === model.users.email)
      isEmailUnique = false;
    } console.log('hvis som atte dersom atte da så da ja')
  if (isUsernameUnique && isEmailUnique){
    console.log('mekke bruker')
    makeUser();
  }
  }
}
//Functions for the inputs
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
  // Making the new user object
  console.log('kjørr makeos mundos')
  let newUser = { 
    ID: model.idCounters.userId, // Makes the ID number from the idCounters
    username: model.inputs.makeUser.username, // Sets the username from the input on signUpView
    password: model.inputs.makeUser.password, // Sets the password from the input on signUpView
    email: model.inputs.makeUser.email, // Sets the email from the input on signUpView
    // The rest will be changed by the users input in the userView/Controller
    movieLists: [],
    profileName: "",
    profilePicture: "",
    userDescription: "",
    followedUsers: [],
    //followedListIDs: [],  
  }
  model.idCounters.userId ++;
  model.users.push(newUser); 
}