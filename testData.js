const model = {
	app: {
		page: "",				// The current page type
		lastPage: "", 	// The last page type
		userID: null,			// User ID being viewed
		listID: null,			// List ID being viewed
	},

	idCounters: { // Counters for the next ID for each type
		userId: null,
		listId: null,
		movieId: null,
	},

	signedInInfo: {
		userId: null,			// THe currently logged in UserID
	},

	inputs: {
		makeUser: { 		// Used to make a new user
			username: "",
			password: "",
			eMail: "",
		},

		signIn: { 			// Used to log in
			username: "",
			password: "",
		},

		editMovie: {		// Used to hold temporary information for when a movie is being edited
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

		editProfile: {	// Used to hold temporary information for when user information is being edited
			image: "",
			name: "",
			description: "",
			age: "",
			favGenre: "",
		},

		editMovieList: {// Used to hold temporary information for when a movie list is being edited
			name: "",
		},

		search: {				// Used to hold information used in a search
			searchWord: "",
		},
	},

	// Otter shit
	movies: [ 				// A list over all the existing movies (DATA)
		{
			ID: null,
			title: "",
			image: "",
			year: null,
			genres: "",
			directors: "",
			actors: "",
			description: "",
		},
	],

	movieLists: [			// A list over all the existing movieLists (DATA)
		{
			ID: null,
			name: "",
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
			personalComments: [],
			ratings: [],
			lastChanged: Date.now(),
		},
	],

	users: [					// A list over all the existing users (DATA)
		{
			ID: null,
			username: "",
			password: "",
			eMail: "",
			movieLists: [],
			profileName: "",
			profilePicture: "",
			age: "",
			favGenre: "",
			userDescription: "",
			followedUsers: [],
			// followedListIDs: [],
		},
	],
}