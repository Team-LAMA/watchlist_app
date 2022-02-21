const model = {
	app: {
		page: "home",
		lastPage: "", 	// The last page type
		userID: null,			// User ID being viewed
		listID: null,			// List ID being viewed
		expandedIndex: null, // the index of the currently expanded movieList element if there is any
		scrollOffset: null,
    editBio: false,
	},

	// TODO: make sure all pages can be opened to a "default" view even if no user or list id is set

	signedInInfo: {
		userId: null,			// The currently logged in UserID
	},

	idCounters: {
		userId: 5,
		listId: 5,
		movieId: 5,
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
			genres: "",
			directors: "",
			actors: "",
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
			ID: 0,
			title: "Snakes on a plane",
			image: "https://upload.wikimedia.org/wikipedia/en/4/41/SOAP_poster.jpg",
			year: 2006,
			genres: "Action, Thriller",
			directors: "David R. Ellis",
			actors: "Samuel L. Jackson, Julianna Margulies, Nathan Phillips, Rachel Blanchard",
			description: "Sean Jones blir fulgt av to FBI-agenter på et fly til Los Angeles. Han skal vitne mot en gangster. Til tross for streng sikkerhetskontroll, er en kasse med giftige slanger kommet med for å brukes til å kapre flyet før det når L.A.",
		},
		{
			ID: 1,
			title: "Snakes on a Train",
			image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Snakesonatrain.jpg",
			year: 2006,
			genres: "Horror, Thriller",
			directors: "Peter Mervis",
			actors: "A.J. Castro, Julia Ruiz, Giovanni Bejarano, Al Galvez",
			description: "Snakes on a Train er en direkte-til-video action-thriller-skrekkfilm fra 2006 utgitt av The Asylum som en mockbuster 15. august 2006. Aspekter av filmen er inspirert av filmen Snakes on a Plane, som var planlagt for teaterutgivelse tre dager senere 18. august 2006.",
		},
		{
			ID: 2,
			title: "Iron Man",
			image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
			year: 2008,
			genres: "Action, Adventure, Sci-Fi",
			directors: "Jon Favreau",
			actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard, Jeff Bridges, Jon Favreau",
			description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
		},
	],
	// a day in milliseconds = 8.64e+7 "for testing"
	movieLists: [			// A list over all the existing movieLists (DATA)
		{
			ID: 0,
			name: "Alexander",
			movies: [
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: "Action, Adventure, Sci-Fi",
					directors: "Jon Favreau",
					actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard, Jeff Bridges, Jon Favreau",
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 1,
					title: "Snakes on a Train",
					image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Snakesonatrain.jpg",
					year: 2006,
					genres: "Horror, Thriller",
					directors: "Peter Mervis, some other guy",
					actors: "A.J. Castro, Julia Ruiz, Giovanni Bejarano, Al Galvez",
					description: "Snakes on a Train er en direkte-til-video action-thriller-skrekkfilm fra 2006 utgitt av The Asylum som en mockbuster 15. august 2006. Aspekter av filmen er inspirert av filmen Snakes on a Plane, som var planlagt for teaterutgivelse tre dager senere 18. august 2006.",
				},
				{
					ID: 0,
					title: "Snakes on a plane",
					image: "https://upload.wikimedia.org/wikipedia/en/4/41/SOAP_poster.jpg",
					year: 2006,
					genres: "Action, Thriller",
					directors: "David R. Ellis",
					actors: "Samuel L. Jackson",
					description: "Sean Jones blir fulgt av to FBI-agenter på et fly til Los Angeles. Han skal vitne mot en gangster. Til tross for streng sikkerhetskontroll, er en kasse med giftige slanger kommet med for å brukes til å kapre flyet før det når L.A.",
				},
				{
					ID: 2,
					title: "Home alone 2: Lost in New York",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: "Action, Adventure, Sci-Fi",
					directors: "Jon Favreau",
					actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard, Jeff Bridges, Jon Favreau",
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 1,
					title: "Snakes on a Train",
					image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Snakesonatrain.jpg",
					year: 2006,
					genres: "Horror, Thriller",
					directors: "Peter Mervis",
					actors: "A.J. Castro, Julia Ruiz, Giovanni Bejarano, Al Galvez",
					description: "Snakes on a Train er en direkte-til-video action-thriller-skrekkfilm fra 2006 utgitt av The Asylum som en mockbuster 15. august 2006. Aspekter av filmen er inspirert av filmen Snakes on a Plane, som var planlagt for teaterutgivelse tre dager senere 18. august 2006.",
				},
				{
					ID: 0,
					title: "Snakes on a plane",
					image: "https://upload.wikimedia.org/wikipedia/en/4/41/SOAP_poster.jpg",
					year: 2006,
					genres: "Action, Thriller",
					directors: "David R. Ellis",
					actors: "Samuel L. Jackson, Julianna Margulies, Nathan Phillips, Rachel Blanchard",
					description: "Sean Jones blir fulgt av to FBI-agenter på et fly til Los Angeles. Han skal vitne mot en gangster. Til tross for streng sikkerhetskontroll, er en kasse med giftige slanger kommet med for å brukes til å kapre flyet før det når L.A.",
				},
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: "Action, Adventure, Sci-Fi",
					directors: "Jon Favreau",
					actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard, Jeff Bridges, Jon Favreau",
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 1,
					title: "Snakes on a Train",
					image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Snakesonatrain.jpg",
					year: 2006,
					genres: "Horror, Thriller",
					directors: "Peter Mervis",
					actors: "A.J. Castro, Julia Ruiz, Giovanni Bejarano, Al Galvez",
					description: "Snakes on a Train er en direkte-til-video action-thriller-skrekkfilm fra 2006 utgitt av The Asylum som en mockbuster 15. august 2006. Aspekter av filmen er inspirert av filmen Snakes on a Plane, som var planlagt for teaterutgivelse tre dager senere 18. august 2006.",
				},
				{
					ID: 0,
					title: "Snakes on a plane",
					image: "https://upload.wikimedia.org/wikipedia/en/4/41/SOAP_poster.jpg",
					year: 2006,
					genres: "Action, Thriller",
					directors: "David R. Ellis",
					actors: "Samuel L. Jackson, Julianna Margulies, Nathan Phillips, Rachel Blanchard",
					description: "Sean Jones blir fulgt av to FBI-agenter på et fly til Los Angeles. Han skal vitne mot en gangster. Til tross for streng sikkerhetskontroll, er en kasse med giftige slanger kommet med for å brukes til å kapre flyet før det når L.A.",
				},
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: "Action, Adventure, Sci-Fi",
					directors: "Jon Favreau",
					actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard, Jeff Bridges, Jon Favreau",
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 1,
					title: "Snakes on a Train",
					image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Snakesonatrain.jpg",
					year: 2006,
					genres: "Horror, Thriller",
					directors: "Peter Mervis",
					actors: "A.J. Castro, Julia Ruiz, Giovanni Bejarano, Al Galvez",
					description: "Snakes on a Train er en direkte-til-video action-thriller-skrekkfilm fra 2006 utgitt av The Asylum som en mockbuster 15. august 2006. Aspekter av filmen er inspirert av filmen Snakes on a Plane, som var planlagt for teaterutgivelse tre dager senere 18. august 2006.",
				},
				{
					ID: 0,
					title: "Snakes on a plane",
					image: "https://upload.wikimedia.org/wikipedia/en/4/41/SOAP_poster.jpg",
					year: 2006,
					genres: "Action, Thriller",
					directors: "David R. Ellis",
					actors: "Samuel L. Jackson, Julianna Margulies, Nathan Phillips, Rachel Blanchard",
					description: "Sean Jones blir fulgt av to FBI-agenter på et fly til Los Angeles. Han skal vitne mot en gangster. Til tross for streng sikkerhetskontroll, er en kasse med giftige slanger kommet med for å brukes til å kapre flyet før det når L.A.",
				},
			],
			personalComments: ["SUPER BRA!!!", "Dårlig", "Liker ikke slanger", "SUPER BRA!!!", "Dårlig", "Liker ikke slanger", "SUPER BRA!!!", "Dårlig", "Liker ikke slanger"],
			ratings: [10, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8],
			lastChanged: Date.now() - 8.64e+7,
		},
		{
			ID: 1,
			name: "Anders' Favoritter",
			movies: [
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: "Action, Adventure, Sci-Fi",
					directors: "Jon Favreau",
					actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard, Jeff Bridges, Jon Favreau",
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 0,
					title: "Snakes on a plane",
					image: "https://upload.wikimedia.org/wikipedia/en/4/41/SOAP_poster.jpg",
					year: 2006,
					genres: "Action, Thriller",
					directors: "David R. Ellis",
					actors: "Samuel L. Jackson, Julianna Margulies, Nathan Phillips, Rachel Blanchard",
					description: "Sean Jones blir fulgt av to FBI-agenter på et fly til Los Angeles. Han skal vitne mot en gangster. Til tross for streng sikkerhetskontroll, er en kasse med giftige slanger kommet med for å brukes til å kapre flyet før det når L.A.",
				},
			],
			personalComments: ["Veldig tøff", "Litt tøff", "Ikke noe tøff", "eller kanskje litt"],
			ratings: [9, 6.3, 3, 0, 0, 0],
			lastChanged: Date.now(),
		},
		{
			ID: 2,
			name: "Linn's favoritter",
			movies: [
				{
					ID: 0,
					title: "Snakes on a plane",
					image: "https://upload.wikimedia.org/wikipedia/en/4/41/SOAP_poster.jpg",
					year: 2006,
					genres: "Action, Thriller",
					directors: "David R. Ellis",
					actors: "Samuel L. Jackson, Julianna Margulies, Nathan Phillips, Rachel Blanchard",
					description: "Sean Jones blir fulgt av to FBI-agenter på et fly til Los Angeles. Han skal vitne mot en gangster. Til tross for streng sikkerhetskontroll, er en kasse med giftige slanger kommet med for å brukes til å kapre flyet før det når L.A.",
				},
				{
					ID: 1,
					title: "Snakes on a Train",
					image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Snakesonatrain.jpg",
					year: 2006,
					genres: "Horror, Thriller",
					directors: "Peter Mervis",
					actors: "A.J. Castro, Julia Ruiz, Giovanni Bejarano, Al Galvez",
					description: "Snakes on a Train er en direkte-til-video action-thriller-skrekkfilm fra 2006 utgitt av The Asylum som en mockbuster 15. august 2006. Aspekter av filmen er inspirert av filmen Snakes on a Plane, som var planlagt for teaterutgivelse tre dager senere 18. august 2006.",
				},
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: "Action, Adventure, Sci-Fi",
					directors: "Jon Favreau",
					actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard, Jeff Bridges, Jon Favreau",
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: "Action, Adventure, Sci-Fi",
					directors: "Jon Favreau",
					actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard, Jeff Bridges, Jon Favreau",
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: "Action, Adventure, Sci-Fi",
					directors: "Jon Favreau",
					actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard, Jeff Bridges, Jon Favreau",
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
				{
					ID: 2,
					title: "Iron Man",
					image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
					year: 2008,
					genres: "Action, Adventure, Sci-Fi",
					directors: "Jon Favreau",
					actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard, Jeff Bridges, Jon Favreau",
					description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				},
			],
			personalComments: ["Hmm", "Hmmmmmmm", "Hmmmmmmmmmmmmmmmmmm"],
			ratings: [1, 1, 1],
			lastChanged: Date.now() - 32000000000,
		},
		{
			ID: 3,
			name: "Magnus",
			movies: [
				{
					ID: null,
					title: "The King of Staten Island",
					image: "https://m.media-amazon.com/images/M/MV5BYzkxMzMzOTgtNmZhMS00MGM0LTk3MzUtMjE1MzI4MzU5ZjkzXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
					year: "2020",
					genres: "Comedy, Drama",
					directors: "Judd Apatow",
					actors: "Pete Davidson, Bill Burr, Steve Buscemi, Machine Gun Kelly",
					description: "Scotts liv ble satt på vent da faren, som var brannmann, døde da Scott var syv år gammel, men når moren begynner å se en høy brannmann, Ray, starter en rekke hendelser som tvinger Scott til å møte sorgen.",
				},{
					ID: null,
					title: "The Dirt",
					image: "https://upload.wikimedia.org/wikipedia/en/c/ce/The_Dirt_Movie_Poster.jpg",
					year: "2019",
					genres: "Biography, Comedy, Drama",
					directors: "Jeff Tremaine",
					actors: "Pete Davidson, Bill Burr, Steve Buscemi, Machine Gun Kelly",
					description: "I denne freidige biografiske filmen basert på den bestselgende boken til Mötley Crüe må fire personer fra Los Angeles takle gigantiske oppturer og katastrofale nedturer.",
				},{
					ID: null,
					title: "Green Book",
					image: "https://images.platekompaniet.no/49b90e/globalassets/filmcover/2019/mai/greenbook-uk.jpg",
					year: "2018",
					genres: "Biography, Comedy, Drama",
					directors: "Peter Farrelly",
					actors: "Viggo Mortensen, Magershala Ali, Linda Cardellini,",
					description: "En italiensk-amerikansk dørvakt, Tony Lip, får jobb som sjåfør for en afro-amerikansk klassisk pianist, Dr Don Shirley.",
				},
			],
			personalComments: ["Bra film, litt spesiell.","Morsom, spennende.","Veldig fin",],
			ratings: [6,7,],
			lastChanged: Date.now() - 32000000000,
		},
    {
			ID: 4,
			name: "Terje",
			movies: [
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
			personalComments: [],
			ratings: [],
			lastChanged: Date.now() - 38000000654,
		},
	],

	users: [					// A list over all the existing users (DATA)
		{
			ID: 0,
			username: "Alexander",
			password: "123",
			eMail: "AlexB@Team3.no",
			movieLists: [],
			profileName: "Alexander Bøhler",
			profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",
			age: "23",
			favGenre: "Action, Mystery, Thriller",
			userDescription: "Jeg er Alexander",
			followedUsers: [],
			// followedListIDs: [],
		},
		{
			ID: 1,
			username: "Anders",
			password: "123",
			eMail: "Andersk@Team3.no",
			movieLists: [],
			profileName: "Anders Kvålo",
			profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",
			age: "23",
			favGenre: "Thriller, Action, Comedy",
			userDescription: "Elev ved GET Academy",
			followedUsers: [],
			// followedListIDs: [],
		},
		{
			ID: 2,
			username: "Linn",
			password: "123",
			eMail: "LinnO@Team3.no",
			movieLists: [],
			profileName: "Linn Østgaard",
			profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",
			age: "23",
			favGenre: "Docu, Action, Cars",
			userDescription: "Red Bull Racing Team er best",
			followedUsers: [],
			// followedListIDs: [],
		},
		{
			ID: 3,
			username: "Magnus",
			password: "123",
			eMail: "MagnusS@Team3.no",
			movieLists: [],
			profileName: "Magnus Sandholmen",
			profilePicture: "https://pbs.twimg.com/profile_images/1435330030758993922/chmKCClT_400x400.png",
			age: "25",
			favGenre: "Komedie, Action",
			userDescription: "Jeg er Magnus.",
			followedUsers: [],
			// followedListIDs: [],
		},
    {
			ID: 4,
			username: "Terje",
			password: "123",
			eMail: "terje@getacademy.no",
			movieLists: [],
			profileName: "GetTerje",
			profilePicture: "https://pbs.twimg.com/profile_images/1359478001/Terje_Kolderup.jpg",
			age: "1",
			favGenre: "Spreke Filmer",
			userDescription: "",
			followedUsers: [],
			// followedListIDs: [],
		},
	],
}


// Just for testing
model.users[0].movieLists.push(model.movieLists[0]);
model.users[1].movieLists.push(model.movieLists[1]);
model.users[2].movieLists.push(model.movieLists[2]);
model.users[3].movieLists.push(model.movieLists[3]);
model.users[4].movieLists.push(model.movieLists[4]);

model.users[0].followedUsers.push(model.users[1]);
model.users[0].followedUsers.push(model.users[2]);

model.users[1].followedUsers.push(model.users[2]);
model.users[1].followedUsers.push(model.users[4]);

model.users[2].followedUsers.push(model.users[0]);
model.users[2].followedUsers.push(model.users[1]);
model.users[2].followedUsers.push(model.users[3]);

model.users[3].followedUsers.push(model.users[0]);
model.users[3].followedUsers.push(model.users[1]);
model.users[3].followedUsers.push(model.users[2]);



//model.searchResults[0].movieLists.push(model.movieLists[0]);
//model.searchResults[1].movieLists.push(model.movieLists[1]);
//model.searchResults[2].movieLists.push(model.movieLists[2]);

//model.searchResults[0].followedUsers.push(model.users[1]);
//model.searchResults[0].followedUsers.push(model.users[2]);

//model.searchResults[1].followedUsers.push(model.users[2]);

//model.searchResults[2].followedUsers.push(model.users[0]);
//model.searchResults[2].followedUsers.push(model.users[1]);