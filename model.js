

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

	// other(oter) shit
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
			followedListIDs: [],
			//followedUserIDs: [], // spørre Therese om vi skal ha denne
		},
	],
}   