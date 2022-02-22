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
		movieId: 6,
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
					ID: 5,
					title: "Shang-Chi and the Legend of the Ten Rings",
					image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwI96_vboie8MGY7AbmF8pWf0Q-6eJDf6JFX3FtHRNsZhyBnUc",
					year: 2021,
					genres: "Action, Adventure, Fantasy, Sci-Fi",
					directors: "Destin Daniel Cretton",
					actors: "Simu Liu, Awkwafina, Florian Munteanu, Benedict Wong",
					description: "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
				},
				{
					ID: 4,
					title: "Guardians of the Galaxy",
					image: "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_.jpg",
					year: 2014,
					genres: "Action, Adventure, Comedy, Sci-Fi",
					directors: "James Gunn",
					actors: "Chris Pratt, Vin Diesel, Bradley Cooper, Zoe Saldana",
					description: "After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth is now the main target of a manhunt led by the villain known as Ronan the Accuser. To help fight Ronan and his team and save the galaxy from his power, Quill creates a team of space heroes known as the 'Guardians of the Galaxy' to save the galaxy.",
				},
				{
					ID: 3,
					title: "Schumacher",
					image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1gkpxj3Id-_PcIswDsRHKbZ7686BTGlvD2bZGpk9mHkd8DK3p",
					year: 2021,
					genres: "Documentary, Biography, Sport",
					directors: "Hanns-Bruno Kammertöns, Michael Wech, Vanessa Nöcker",
					actors: "Michael Schumacher, Ross Brawn, David Coulthard, Bernie Ecclestone",
					description: "Followed by millions worldwide. His strong will and triumphant fight to win against all odds put Michael Schumacher at the centre of global attention. Michael Schumacher's journey has captured the imagination of millions, but there is a lot more than motor racing to the success of this very private man. However, it is not only his fighting spirit and striving for perfection that define Michael Schumacher as a person; his self-doubt and insecurities complete the picture of a sensitive and reflected man. At the heart of Michael's story are his parents, his children and Corinna Schumacher, his childhood sweetheart and the love of his life. They are now ready to tell his story.",
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
			personalComments: ["Historien og fortellingen er så fin i denne filmen", "Morsom", "Gråt gjennom hele filmen, for en stjerne han er", "Denne er kjempe bra, spennede hvordan det går med Tony Stark"],
			ratings: [9,5,10,7],
			lastChanged: Date.now() - 32000000000,
		},
		{
			ID: 3,
			name: "Magnus",
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
			username: "linn",
			password: "123",
			eMail: "LinnO@Team3.no",
			movieLists: [],
			profileName: "Linn",
			profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",
			age: "23",
			favGenre: "Docu, Action, Cars",
			userDescription: "Jeg liker å se på filmer",
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
			profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",
			age: "25",
			favGenre: "",
			userDescription: "",
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