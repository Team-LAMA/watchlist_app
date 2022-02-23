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
					ID: 10,
					title: "The Shawshank Redemption",
					image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9964546b0ba1f6e14a6045e34b341f8ca2a3569752c5afed95b89682fcde1a68._RI_V_TTW_.jpg",
					year: 1994,
					genres: "Drama, Prison Movie, Crime Fiction",
					directors: "Frank Darabont",
					actors: "Tim Robbins, Morgan Freeman",
					description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
				},
				{
					ID: 8,
					title: "Real Steel",
					image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/166d55f2c17d0948232d45e540b9c4784c0cf618f14d11fe1313cc3f50769310._RI_V_TTW_.png",
					year: 2011,
					genres: "Action, Drama, Sci-Fi, Sport",
					directors: "Shawn Levy",
					actors: "Hugh Jackman, Evangeline Lilly, Dakota Goyo",
					description: "In the near future, robot boxing is a top sport. A struggling ex-boxer feels he's found a champion in a discarded robot.",
				},
				{
					ID: 6,
					title: "Jurassic World: Fallen Kingdom",
					image: "https://sfanytime-images-prod-http2.secure2.footprint.net/COVERM/86619dcb-65e4-4cf6-91db-a93000f18f7d_COVERM_01.jpg?w=375&ar=0.692&fit=crop&fm=pjpg&s=7cf7a2c2fec7e070a7dde83a9d8d6798",
					year: 2018,
					genres: "Action, Adventure, Sci-Fi",
					directors: "J.A. Bayona",
					actors: "Chris Pratt, Bryce Dallas Howard, Rafe Spall",
					description: "When the island's dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.",
				},
				{
					ID: 9,
					title: "Bao",
					image: "https://upload.wikimedia.org/wikipedia/en/f/fa/Bao_%28film%29_poster.jpg",
					year: 2018,
					genres: "Animation, Short, Drama, Family, Fantasy",
					directors: "Domee Shi",
					actors: "Sindy Lau(voice), Daniel Kai Lin(voice), Sharmaine Yeoh(voice)",
					description: "A Chinese-Canadian woman suffering from empty nest syndrome gets a second shot at motherhood when one of her handmade dumplings comes alive.",
				},
				{
					ID: 5,
					title: "A Whisker Away",
					image: "https://m.media-amazon.com/images/M/MV5BNDI5ODBhYzMtNDc4Yi00NjEwLWJiZWUtMGE2Mzc4MGVjN2E0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
					year: 2020,
					genres: "Animation, Adventure, Drama, Family, Fantasy, Romance",
					directors: "Jun'ichi Satô, Tomotaka Shibayama",
					actors: "Mirai Shida(voice), Natsuki Hanae(voice)",
					description: "Miyo Sasaki is in love with her classmate Kento Hinode and tries repeatedly to get Kento's attention by transforming into a cat, but at some point, the boundary between herself and the cat becomes ambiguous.",
				},
				{
					ID: 7,
					title: "The Witcher: Nightmare of the Wolf",
					image: "https://m.media-amazon.com/images/M/MV5BY2IwNjM0ODktYTZkNy00ZTA0LWEzMWYtMDE3ZDg0YmI3YzQ3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
					year: 2021,
					genres: "Animation, Action, Adventure, Drama, Fantasy, Mystery",
					directors: "Kwang Il Han",
					actors: "Theo James(voice), Mary McDonnell(voice), Lara Pulver(voice)",
					description: "Escaping from poverty to become a witcher, Vesemir slays monsters for coin and glory, but when a new menace rises, he must face the demons of his past.",
				},
				{
					ID: -1,
					title: "Spider-Man: Far from Home",
					image: "https://i-viaplay-com.akamaized.net/viaplay-prod/480/72/1569248515-e2190e56def64fc42d3765d34851e973b0a00a44.jpg?width=400&height=600",
					year: 2019,
					genres: "Action, Adventure, Sci-Fi",
					directors: "Jon Watts",
					actors: "Tom Holland, Samuel L. Jackson, Jake Gyllenhaal",
					description: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
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
			personalComments: ["SUPER BRA!!!", "Dårlig", "Liker ikke slanger", "SUPER BRA!!!", "Dårlig", "Liker ikke slanger", "SUPER BRA!!!", "Dårlig", "Liker ikke slanger"],
			ratings: [10, 8, 6, 9, 5, 7, "", 5],
			lastChanged: Date.now() - 8.64e+7,
		},
		{
			ID: 1,
			name: "Anders' Favoritter",
			movies: [
				{
					ID: 2,
					title: "The Dark Knight",
					image: "https://m.media-amazon.com/images/M/MV5BNTQwODYzMDg0NV5BMl5BanBnXkFtZTcwMzcxMTk2Mw@@._V1_UY100_CR15,0,100,100_AL_.jpg",
					year: 2008,
					genres: "Action, Crime, Drama",
					directors: "Christopher Nolan",
					actors: "Christian Bale, Heath Ledger, Michael Caine",
					description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
				},
				{
					ID: 0,
					title: "Inception",
					image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
					year: 2010,
					genres: "Action, Adventure, Sci-Fi",
					directors: "Christopher Nolan",
					actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
					description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
				},
				{
					ID: 0,
					title: "Tenet",
					image: "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX32_CR0,0,32,44_AL_.jpg",
					year: 2020,
					genres: "Action, Sci-Fi, Thriller",
					directors: "Christopher Nolan",
					actors: "John David Washington, Robert Pattinson, Elizabeth Debicki",
					description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
				},
				{
					ID: 0,
					title: "Interstellar",
					image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX148_CR0,0,148,216_AL_.jpg",
					year: 2014,
					genres: "Adventure, Sci-Fi, Drama",
					directors: "Christopher Nolan",
					actors: "Matthew McConaughey, Matthew McConaughey, Jessica Chastain",
					description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
				},
			],
			personalComments: ["Veldig tøff", "Litt tøff", "Ikke noe tøff", "eller kanskje litt"],
			ratings: [10, 10, 9, "",],
			lastChanged: Date.now(),
		},
		{
			ID: 2,
			name: "Linn's movielist",
			movies: [
				{
					ID: 5,
					title: "Shang-Chi and the Legend of the ..",
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
				{
					ID: 4,
					title: "Ant-Man and the Wasp",
					image: "https://cdn.cdon.com/media-dynamic/images/product/movie/dvd/image3/ant-man_and_the_wasp_nordic-42620635-.jpg?impolicy=product&imwidth=",
					year: 2018,
					genres: "Adventure, Comedy, Sci-Fi",
					directors: "Peyton Reed",
					actors: "Paul Rudd, Evangeline Lilly, Michelle Pfeiffer",
					description: "Scott Lang, som sjonglerer familielivet og superheltlivet, må nok en gang ta fatt på et nytt oppdrag - men nå har han The Wasp ved sin side. Sammen skal de avsløre viktige hemmeligheter fra fortiden.",
				},
				{
					ID: null,
					title: "The Eternals",
					image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSuCieUrmXLZZ1o-icOMN2FOPmR02tQVBFTVPQhDL5JGxSF4rIO",
					year: 2021,
					genres: "Action, Fantasy",
					directors: "Chloé Zhao",
					actors: "Angelina Jolie, Kit Harington, Gemma Chan, Richard Madden, Lauren Ridloff, Kumail Nanijani",
					description: "Historien om de evige, et udødelig folk som levde på jorden og formet dens historie og sivilisasjoner. Gjennom tidene har de aldri grepet inn... før nå.",
				},
				{
					ID: null,
					title: "RUSH",
					image: "https://upload.wikimedia.org/wikipedia/en/d/d0/Rush_UK_poster.jpeg",
					year: 2013,
					genres: "Action,Drama",
					directors: "Ron Howard",
					actors: "Daniel Brühl, Niki Lauda, Chris Hemsworth, James Hunt, Olivia Wilde, Alexandra Maria Lara",
					description: "I Formel 1-sportens glamorøse gullalder på 70-tallet var det to stykker som utmerket seg: den dyktige engelske kjekkasen James Hunt, og hans strålende østerrikske motstander, Niki Lauda. I deres nådeløse sammenstøt både på og utenfor banen, presser de to utøverne seg til bristepunktet, både fysisk og psykisk.",
				},
				{
					ID: null,
					title: "Now You See Me",
					image: "https://lionsgate.brightspotcdn.com/9d/b3/d6710a094ab188a8ed1fea53c72d/now-you-see-me-poster-01.jpg",
					year: 2013,
					genres: "Thriller",
					directors: "Louis Leterrier",
					actors: "Jesse Eisenberg, Mark Ruffalo, Woody Harrelson, Isla Fisher",
					description: "Four magicians each answer a mysterious summons to an obscure address with secrets inside. A year later, they are the Four Horsemen, big time stage illusionists who climax their sold-out Las Vegas show with a bank apparently robbed for real.",
				},
			],
			personalComments: ["Historien og fortellingen er så fin i denne filmen", "Morsom og en god MARVEL film", "Gråt gjennom hele filmen, for en stjerne han er", "Denne er kjempe bra, spennede hvordan det går med Tony Stark", "Helt grei film","Bra film og morsomme måter å overleve i tiden på","Denne filmen viser virkelig rivaliseringen mellom de to karene opp gjennom årene. Det ultimate venepunktet er jo skildringen av Lauda sin ulykke i Tysland 1976. Utrolig bra film","Morsom og litt spennende film"],
			ratings: [9,5,10,7,4.7,8.5,9.8,""],
			lastChanged: Date.now() - 32000000000,
		},
		{
			ID: 3,
			name: "Magnus sin liste",
			movies: [
				{
					ID: null,
					title: "Spider-Man",
					image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tNnqMFQf9D5OuQiQTKtHJx8dxAlF4iX8LYpQyzw1AAMq9YLl",
					year: 2002,
					genres: "Action, Sci-Fi",
					directors: "Sam Raimi",
					actors: "Tobey Maguire, Wilhelm Dafoe, Kirsten Dunst, James Franco, Joe Manganiello",
					description: "Nerdete Peter Parker er på skoletur når han blir bitt av en genmanipulert edderkopp. Snart har hele kroppskjemien hans endret seg, og Peter utvikler superkrefter som gjør at han kan sanse farer og klatre på en hvilken som helst overflate.",
				},
				{
					ID: null,
					title: "The Amazing Spider-Man 2",
					image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBu2CpFO3EKrS2GzgpuZjDqyQRXUQ-LEw0dtS7WXY7cKZBqplr",
					year: 2014,
					genres: "Action, Sci-Fi",
					directors: "Marc Webb",
					actors: "Andrew Garfield, Emma Stone, Jamie Foxx, Stan Lee, Dane DeHaan",
					description: "Peter Parker svinger seg mellom skyskrapere som sitt alter ego Spider-Man og tilbringer tid sammen med Gwen. Han tar opp rollen som superhelt, men når Electro dukker opp, må Peter konfrontere en fiende som er mye sterkere enn ham.",
				},
				{
					ID: null,
					title: "The Batman",
					image: "https://www.nfkino.no/sites/nfkino.no/files/movie-posters/SFN20191118_35304.jpg",
					year: 2022,
					genres: "Action, Fantasy",
					directors: "Matt Reeves",
					actors: "Robert Pattinson, Zoë Kravitz, Paul Dano, Colin Farrell",
					description: "En seriemorder prøver å lokke Gothams kriminelle til et spill mot urettferdighetene der de oppstår, men i Batmans mørke silhuett er det et gjennomtrengende blikk som metodisk ødelegger spillet for underverdenen.",
				},
				{
					ID: null,
					title: "The Incredible Hulk",
					image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSDbo9h1QIKVfLNDj0u7yZ5vMh73PS2eXUu7lN6S_l9RymQPGyS",
					year: 2008,
					genres: "Action, Sci-Fi",
					directors: "Louis Leterrier",
					actors: "Lou Ferrigno, Edward Norton, Tim Roth, Liv Tyler",
					description: "Forskeren Banner står ovenfor en stor beslutning; om han skal leve et rolig liv som forsker eller være den utrolige Hulken for evig.",
				},
				{
					ID: null,
					title: "The Godfather",
					image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ85M6zYCfdTgk-jpFCWNeCnP1JN0lYApgHwDrDMIYmgrf-_zQP",
					year: 1972,
					genres: "Crime,Drama",
					directors: "Francis Ford Coppola",
					actors: "Al Pacino, Marlon Brando, James Caan, Diane Keaton",
					description: "Mafiafamilien Corleone prøver å ta kontroll over den amerikanske forretningsverdenen etter andre verdenskrig. Den yngste sønnen, Michael, blir motvillig med i familieimperiet, og blir dratt inn i en spiral av vold og forræderi.",
				},
				{
					ID: null,
					title: "Kon-Tiki",
					image: "https://montages.no/files/2013/09/kon1.jpg",
					year: 2012,
					genres: "Fantasy, Drama",
					directors: "Petter Skavlan",
					actors: "Pål Sverre Hagen, Tobias Santelmann, Espen Sandberg, Jakob Ofterbro, Anders Baasmo, Agnes Kittelsen, Odd-Magnus Williamson, Gustaf Skarsgård",
					description: "Thor Heyerdahl og fem kamerater gjennomførte i 1947 den revolusjonerende og dristige flåteseilasen som bærer navnet Kon-Tiki-ekspedisjonen. Det er historien om 8000 kilometer over et åpent Stillehav, fra Peru til korall-øya Raroia i Polynesia. 101 eventyrlige døgn og et mannskap på seks som oppnådde det umulige.",
				},
			],
			personalComments: ["Spider-Man er skikkelig bra, så spennende tenk å bli bitt av en spider.","Denne filmen hadde en annen Peter Parker, men fortsatt spennende med utfordringene han får.","Denne filmen har ikke kommet ut enda men gleder meg skikkelig","Denne filmen viser jo Hulken sin historie, spennende og se hvordan han ble The Hulk. Mark Ruffalo er den beste HULK da :(","Det var skummelt med det hestehodet","For et norskt eventyr",],
			ratings: [10, 8.5, "", 7, 3.2, 4],
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
			profilePicture: "https://seek-team-prod.s3.fr-par.scw.cloud/users/5f5f11d414cde831943944.jpg",
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
			profilePicture: "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
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
			profilePicture: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
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
			profilePicture: "https://pbs.twimg.com/profile_images/1435330030758993922/chmKCClT_400x400.png",
			age: "25",
			favGenre: "Komedie, Action",
			userDescription: "Jeg er Magnus.",
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