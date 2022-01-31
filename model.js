const model = {
	app: {
		page: "user",
		lastPage: "", 	// The last page type
		userID: 1,			// User ID being viewed
		listID: null,			// List ID being viewed
		expandedIndex: null, // the index of the currently expanded movieList element if there is any
	},

	// TODO: make sure all pages can be opened to a "default" view even if no user or list id is set

	signedInInfo: {
		userId: null,			// THe currently logged in UserID
	},

	idCounters: {
		userId: 3,
		listId: 3, 
		movieId: 3,
	},

	inputs: {
		makeUser: { 		// Used to make a new user
			username: "",
			password: "",
			email: "",
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
			ID: 0,
			title: "Snakes on a plane",
			image: "https://upload.wikimedia.org/wikipedia/en/4/41/SOAP_poster.jpg",
			year: 2006,
			genres: ["Action", "Thriller"],
			directors: ["David R. Ellis"],
			actors: ["Samuel L. Jackson", "Julianna Margulies", "Nathan Phillips", "Rachel Blanchard"],
			description: "Sean Jones blir fulgt av to FBI-agenter på et fly til Los Angeles. Han skal vitne mot en gangster. Til tross for streng sikkerhetskontroll, er en kasse med giftige slanger kommet med for å brukes til å kapre flyet før det når L.A.",
		},
		{
			ID: 1,
			title: "Snakes on a Train",
			image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Snakesonatrain.jpg",
			year: 2006,
			genres: ["Horror", "Thriller"],
			directors: ["Peter Mervis"],
			actors: ["A.J. Castro", "Julia Ruiz", "Giovanni Bejarano", "Al Galvez"],
			description: "Snakes on a Train er en direkte-til-video action-thriller-skrekkfilm fra 2006 utgitt av The Asylum som en mockbuster 15. august 2006. Aspekter av filmen er inspirert av filmen Snakes on a Plane, som var planlagt for teaterutgivelse tre dager senere 18. august 2006.",
		},
		{
			ID: 2,
			title: "Iron Man",
			image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
			year: 2008,
			genres: ["Action", "Adventure", "Sci-Fi"],
			directors: ["Jon Favreau"],
			actors: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard", "Jeff Bridges", "Jon Favreau"],
			description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
		},
	],

	movieLists: [			// A list over all the existing movieLists (DATA)
		{
			ID: 0,
			name: "Favos",
			movies: [
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: ["Action", "Adventure", "Sci-Fi"],
					directors: ["Jon Favreau"],
					actors: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard", "Jeff Bridges", "Jon Favreau"],
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 1,
					title: "Snakes on a Train",
					image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Snakesonatrain.jpg",
					year: 2006,
					genres: ["Horror", "Thriller"],
					directors: ["Peter Mervis", "some other guy"],
					actors: ["A.J. Castro", "Julia Ruiz", "Giovanni Bejarano", "Al Galvez"],
					description: "Snakes on a Train er en direkte-til-video action-thriller-skrekkfilm fra 2006 utgitt av The Asylum som en mockbuster 15. august 2006. Aspekter av filmen er inspirert av filmen Snakes on a Plane, som var planlagt for teaterutgivelse tre dager senere 18. august 2006.",
				},
				{
					ID: 0,
					title: "Snakes on a plane",
					image: "https://upload.wikimedia.org/wikipedia/en/4/41/SOAP_poster.jpg",
					year: 2006,
					genres: ["Action", "Thriller"],
					directors: ["David R. Ellis"],
					actors: ["Samuel L. Jackson"],
					description: "Sean Jones blir fulgt av to FBI-agenter på et fly til Los Angeles. Han skal vitne mot en gangster. Til tross for streng sikkerhetskontroll, er en kasse med giftige slanger kommet med for å brukes til å kapre flyet før det når L.A.",
				},
				{
					ID: 2,
					title: "Home alone 2: Lost in New York",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: ["Action", "Adventure", "Sci-Fi"],
					directors: ["Jon Favreau"],
					actors: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard", "Jeff Bridges", "Jon Favreau"],
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 1,
					title: "Snakes on a Train",
					image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Snakesonatrain.jpg",
					year: 2006,
					genres: ["Horror", "Thriller"],
					directors: ["Peter Mervis"],
					actors: ["A.J. Castro", "Julia Ruiz", "Giovanni Bejarano", "Al Galvez"],
					description: "Snakes on a Train er en direkte-til-video action-thriller-skrekkfilm fra 2006 utgitt av The Asylum som en mockbuster 15. august 2006. Aspekter av filmen er inspirert av filmen Snakes on a Plane, som var planlagt for teaterutgivelse tre dager senere 18. august 2006.",
				},
				{
					ID: 0,
					title: "Snakes on a plane",
					image: "https://upload.wikimedia.org/wikipedia/en/4/41/SOAP_poster.jpg",
					year: 2006,
					genres: ["Action", "Thriller"],
					directors: ["David R. Ellis"],
					actors: ["Samuel L. Jackson", "Julianna Margulies", "Nathan Phillips", "Rachel Blanchard"],
					description: "Sean Jones blir fulgt av to FBI-agenter på et fly til Los Angeles. Han skal vitne mot en gangster. Til tross for streng sikkerhetskontroll, er en kasse med giftige slanger kommet med for å brukes til å kapre flyet før det når L.A.",
				},
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: ["Action", "Adventure", "Sci-Fi"],
					directors: ["Jon Favreau"],
					actors: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard", "Jeff Bridges", "Jon Favreau"],
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 1,
					title: "Snakes on a Train",
					image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Snakesonatrain.jpg",
					year: 2006,
					genres: ["Horror", "Thriller"],
					directors: ["Peter Mervis"],
					actors: ["A.J. Castro", "Julia Ruiz", "Giovanni Bejarano", "Al Galvez"],
					description: "Snakes on a Train er en direkte-til-video action-thriller-skrekkfilm fra 2006 utgitt av The Asylum som en mockbuster 15. august 2006. Aspekter av filmen er inspirert av filmen Snakes on a Plane, som var planlagt for teaterutgivelse tre dager senere 18. august 2006.",
				},
				{
					ID: 0,
					title: "Snakes on a plane",
					image: "https://upload.wikimedia.org/wikipedia/en/4/41/SOAP_poster.jpg",
					year: 2006,
					genres: ["Action", "Thriller"],
					directors: ["David R. Ellis"],
					actors: ["Samuel L. Jackson", "Julianna Margulies", "Nathan Phillips", "Rachel Blanchard"],
					description: "Sean Jones blir fulgt av to FBI-agenter på et fly til Los Angeles. Han skal vitne mot en gangster. Til tross for streng sikkerhetskontroll, er en kasse med giftige slanger kommet med for å brukes til å kapre flyet før det når L.A.",
				},
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: ["Action", "Adventure", "Sci-Fi"],
					directors: ["Jon Favreau"],
					actors: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard", "Jeff Bridges", "Jon Favreau"],
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 1,
					title: "Snakes on a Train",
					image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Snakesonatrain.jpg",
					year: 2006,
					genres: ["Horror", "Thriller"],
					directors: ["Peter Mervis"],
					actors: ["A.J. Castro", "Julia Ruiz", "Giovanni Bejarano", "Al Galvez"],
					description: "Snakes on a Train er en direkte-til-video action-thriller-skrekkfilm fra 2006 utgitt av The Asylum som en mockbuster 15. august 2006. Aspekter av filmen er inspirert av filmen Snakes on a Plane, som var planlagt for teaterutgivelse tre dager senere 18. august 2006.",
				},
				{
					ID: 0,
					title: "Snakes on a plane",
					image: "https://upload.wikimedia.org/wikipedia/en/4/41/SOAP_poster.jpg",
					year: 2006,
					genres: ["Action", "Thriller"],
					directors: ["David R. Ellis"],
					actors: ["Samuel L. Jackson", "Julianna Margulies", "Nathan Phillips", "Rachel Blanchard"],
					description: "Sean Jones blir fulgt av to FBI-agenter på et fly til Los Angeles. Han skal vitne mot en gangster. Til tross for streng sikkerhetskontroll, er en kasse med giftige slanger kommet med for å brukes til å kapre flyet før det når L.A.",
				},
			],
			personalComments: ["SUPER BRA!!!", "Dårlig", "Liker ikke slanger"],
			ratings: [10, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
			lastChanged: Date.now() - 86435489,
		},
		{
			ID: 1,
			name: "Terje's Favoritter",
			movies: [
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: ["Action", "Adventure", "Sci-Fi"],
					directors: ["Jon Favreau"],
					actors: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard", "Jeff Bridges", "Jon Favreau"],
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 0,
					title: "Snakes on a plane",
					image: "https://upload.wikimedia.org/wikipedia/en/4/41/SOAP_poster.jpg",
					year: 2006,
					genres: ["Action", "Thriller"],
					directors: ["David R. Ellis"],
					actors: ["Samuel L. Jackson", "Julianna Margulies", "Nathan Phillips", "Rachel Blanchard"],
					description: "Sean Jones blir fulgt av to FBI-agenter på et fly til Los Angeles. Han skal vitne mot en gangster. Til tross for streng sikkerhetskontroll, er en kasse med giftige slanger kommet med for å brukes til å kapre flyet før det når L.A.",
				},
			],
			personalComments: ["Veldig tøff", "Litt tøff", "Ikke noe tøff, eller kanskje litt"],
			ratings: [9, 6.3, 3, 0, 0, 0],
			lastChanged: Date.now() - 96435489,
		},
		{
			ID: 2,
			name: "Mamma's favoritter",
			movies: [
				{
					ID: 0,
					title: "Snakes on a plane",
					image: "https://upload.wikimedia.org/wikipedia/en/4/41/SOAP_poster.jpg",
					year: 2006,
					genres: ["Action", "Thriller"],
					directors: ["David R. Ellis"],
					actors: ["Samuel L. Jackson", "Julianna Margulies", "Nathan Phillips", "Rachel Blanchard"],
					description: "Sean Jones blir fulgt av to FBI-agenter på et fly til Los Angeles. Han skal vitne mot en gangster. Til tross for streng sikkerhetskontroll, er en kasse med giftige slanger kommet med for å brukes til å kapre flyet før det når L.A.",
				},
				{
					ID: 1,
					title: "Snakes on a Train",
					image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Snakesonatrain.jpg",
					year: 2006,
					genres: ["Horror", "Thriller"],
					directors: ["Peter Mervis"],
					actors: ["A.J. Castro", "Julia Ruiz", "Giovanni Bejarano", "Al Galvez"],
					description: "Snakes on a Train er en direkte-til-video action-thriller-skrekkfilm fra 2006 utgitt av The Asylum som en mockbuster 15. august 2006. Aspekter av filmen er inspirert av filmen Snakes on a Plane, som var planlagt for teaterutgivelse tre dager senere 18. august 2006.",
				},
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: ["Action", "Adventure", "Sci-Fi"],
					directors: ["Jon Favreau"],
					actors: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard", "Jeff Bridges", "Jon Favreau"],
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: ["Action", "Adventure", "Sci-Fi"],
					directors: ["Jon Favreau"],
					actors: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard", "Jeff Bridges", "Jon Favreau"],
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: ["Action", "Adventure", "Sci-Fi"],
					directors: ["Jon Favreau"],
					actors: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard", "Jeff Bridges", "Jon Favreau"],
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: ["Action", "Adventure", "Sci-Fi"],
					directors: ["Jon Favreau"],
					actors: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard", "Jeff Bridges", "Jon Favreau"],
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
			],
			personalComments: ["Hmm", "Hmmmmmmm", "Hmmmmmmmmmmmmmmmmmm"],
			ratings: [1, 1, 1],
			lastChanged: Date.now() - 7200000,
		},
	],

	users: [					// A list over all the existing users (DATA)
		{
			ID: 0,
			username: "Team3",
			password: "321",
			eMail: "Team3@mail.no",
			movieLists: [],
			profileName: "Navn",
			profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",
			userDescription: "Beskrivelse",
			followedUsers: [],
			// followedListIDs: [],
		},
		{
			ID: 1,
			username: "Terje",
			password: "Passord1",
			eMail: "Terje@getacademy.no",
			movieLists: [],
			profileName: "Terje Kolderup",
			profilePicture: "https://seek-team-prod.s3.fr-par.scw.cloud/users/5f5f11d414cde831943944.jpg",
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
	],
}


// Just for testing
model.users[0].movieLists.push(model.movieLists[0]);
model.users[1].movieLists.push(model.movieLists[1]);
model.users[2].movieLists.push(model.movieLists[2]);

model.users[0].followedUsers.push(model.users[1]);
model.users[0].followedUsers.push(model.users[2]);

model.users[1].followedUsers.push(model.users[2]);

model.users[2].followedUsers.push(model.users[0]);
model.users[2].followedUsers.push(model.users[1]);



//model.searchResults[0].movieLists.push(model.movieLists[0]);
//model.searchResults[1].movieLists.push(model.movieLists[1]);
//model.searchResults[2].movieLists.push(model.movieLists[2]);

//model.searchResults[0].followedUsers.push(model.users[1]);
//model.searchResults[0].followedUsers.push(model.users[2]);

//model.searchResults[1].followedUsers.push(model.users[2]);

//model.searchResults[2].followedUsers.push(model.users[0]);
//model.searchResults[2].followedUsers.push(model.users[1]);