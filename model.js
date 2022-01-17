

const model = {
	app: {
		page: "",
		lastPage: "",
		userID: "",
		listID: "",
	},

	inputs: {
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
			movieIDs: [],
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
			movieListIDs: [],
			profileName: "",
			profilePicture: "",
			userDescription: "",
			followedUserIDs: [],
			// followedListIDs: [],
		},
	],
}   