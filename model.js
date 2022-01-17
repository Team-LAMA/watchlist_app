

const model = {
	app: {
		page: "",
		lastPage: "",
		userID: "",
		listID: "",
	},
	idIndex: {
		userId: 1,
		movieId: 1,
		listId: 1,
	},
	inputs: {
		
		makeUser: {
			username: "",
			password: "",
			profileName: "",
			profilePicture: "",
			userDescription: "",
		},
		login: {
			username: "",
			password: "",
		},

		editMovie: {
			title: "",
			image: "",
			year: null,
			genres: [],
			directors: [],
			actors: [],
			description: "",

			personalComment: "",
			rating: "",
		},

		editProfile: {
		image: "",
		name: "",
		description: "",
		},

		editList: {
		name: "",
		},
    
		search: {
			searchWord: "",
		},
  },

	// Oter shit
	movies: [
		{
			ID: null,
			title: "",
			image: "",
			year: null,
			genres: [],
			directors: [],
			actors: [],
			description: "",
		},
	],

	movieLists: [
		{
			ID: null,
			name: "",
			movies: [],
			personalComments: [],
			ratings: [],
			lastChanged: null,
		},
	],

	users: [
		{
			ID: null,
			username: "",
			password: "",
			movieLists: [],
			profileName: "",
			profilePicture: "",
			userDescription: "",
			followedUsers: [],
			// followedListIDs: [],
		},
	],
}   