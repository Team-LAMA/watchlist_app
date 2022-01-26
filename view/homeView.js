// HomeView
function homeView(){
  let html = "";
  let userCheck = 0;

	let user = null;
  //Added logo
  html += generateLogoHTML();

  html += /*html*/ `<div class="NotificationList"><h1>Notifications</h1>`;
  for(let i = 0; i < model.movieLists.length; i++){
    console.log(model.movieLists[i].lastChanged)
  }
  html += /*html*/ `</div>`
  html += /*html*/ `<div class="followedList"><h1>Following</h1>`
  for(let i = 0; i < model.users.length; i++){
    if(model.app.userID == model.users[i].ID){
			user = model.users[i];
    }
  }
  for(let i = 0; i < user.followedUsers.length; i++){
		let followedUser = user.followedUsers[i];
    html += /*html*/ `
			<div onclick="openMovieList(${followedUser.movieLists[0].ID})">
				${followedUser.username}
			</div>
    	</br>
		`;
  }
  html += /*html*/ `</div>`
  //Added Navigationbar
  html += generateNavbarHTML();
  document.getElementById("app").innerHTML = html;
}

function openMovieList(input){
  console.log(input)

}
// function insertionSort(inputArr) {
//   let n = inputArr.length;
//       for (let i = 1; i < n; i++) {
//           // Choosing the first element in our unsorted subarray
//           let current = inputArr[i];
//           // The last element of our sorted subarray
//           let j = i-1; 
//           while ((j > -1) && (current < inputArr[j])) {
//               inputArr[j+1] = inputArr[j];
//               j--;
//           }
//           inputArr[j+1] = current;
//       }
//   return inputArr;
// }