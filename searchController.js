

function getSearchResults(){
	resultList = [
		{
			ID: 0,
			username: "Team3",
			password: "321",
			eMail: "Team3@mail.no",
			movieLists: [],
			profileName: "Meg",
			profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",
			userDescription: "Lorem ipsum",
			followedUsers: [],
			// followedListIDs: [],
		},
		{
			ID: 1,
			username: "Terje",
			password: "Passord1",
			eMail: "Terje@getacademy.no",
			movieLists: [],
			profileName: "Deg",
			profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",
			userDescription: "Lærer ved GET Academy",
			followedUsers: [],
			// followedListIDs: [],
		},
		{
			ID: 2,
			username: "Mamsen0001",
			password: "LOVE",
			eMail: "mamsen0001@hotmail.com",
			movieLists: [],
			profileName: "Mamma",
			profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",
			userDescription: "Føler meg 20",
			followedUsers: [],
			// followedListIDs: [],
		},
	]

	resultList[0].movieLists.push(model.movieLists[0]);
	resultList[1].movieLists.push(model.movieLists[1]);
	resultList[2].movieLists.push(model.movieLists[2]);

	resultList[0].followedUsers.push(model.users[1]);
	resultList[0].followedUsers.push(model.users[2]);

	resultList[1].followedUsers.push(model.users[2]);

	resultList[2].followedUsers.push(model.users[0]);
	resultList[2].followedUsers.push(model.users[1]);

	return resultList;
}




