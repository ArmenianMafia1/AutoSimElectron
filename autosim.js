function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path+'/'+file).isDirectory();
    });
}

function autosim() {


    class Game {
        constructor() {
            this.carlist = new Array();
            this.schedule = new Array();
            this.champions = new Array();
            this.orglist = new Array();
            this.freeAgents = new Array();
            this.freeAgentsEncouraged = new Array();
            this.freeAgentsLegal = new Array();
            this.newTeams = new Array();
            this.sponsorlist = new Array();
            this.retired = new Array();
            this.week = 1;
            this.points = 2000;
            this.year = 2000;
            this.carsInRace = 43;
            this.numRaces = 37;
            this.silly = false;


        }

        randomName() {
            let first = ["John", "Jack", "Adam", "Kenny", "Dave", "Ryan", "Joseph", "Johnny", "JJ", "Jeremy", "Jake", "Alex", "Allen", "Aiden", "Ricky", "Bobby", "Robert", "Alexander", "Jimmie", "Kurt", "Rick", "Darren", "Michael", "Colby", "David", "Scott", "Robby", "Henry", "Will", "Ron", "Jon", "Marc", "Mitch", "Mitchell", "Bill", "Barry", "Reed", "Sterling", "Wes", "J.J.", "Blake", "Justin", "Dustin", "Patrick", "Pat", "Will", "Casey", "Larry", "Matthew", "Matt", "Tyler", "Dale", "Louis", "Mark", "Tony", "Joe", "Kyle", "AJ", "Steven", "Jimmy", "Kevin"]
            let last = ['Abbott',
                'Acevedo',
                'Acosta',
                'Adams',
                'Adkins',
                'Aguilar',
                'Aguirre',
                'Albert',
                'Alexander',
                'Alford',
                'Allen',
                'Allison',
                'Alston',
                'Alvarado',
                'Alvarez',
                'Anderson',
                'Andrews',
                'Anthony',
                'Armstrong',
                'Arnold',
                'Ashley',
                'Atkins',
                'Atkinson',
                'Austin',
                'Avery',
                'Avila',
                'Ayala',
                'Ayers',
                'Bailey',
                'Baird',
                'Baker',
                'Baldwin',
                'Ball',
                'Ballard',
                'Banks',
                'Barber',
                'Barker',
                'Barlow',
                'Barnes',
                'Barnett',
                'Barr',
                'Barrera',
                'Barrett',
                'Barron',
                'Barry',
                'Bartlett',
                'Barton',
                'Bass',
                'Bates',
                'Battle',
                'Bauer',
                'Baxter',
                'Beach',
                'Bean',
                'Beard',
                'Beasley',
                'Beck',
                'Becker',
                'Bell',
                'Bender',
                'Benjamin',
                'Bennett',
                'Benson',
                'Bentley',
                'Benton',
                'Berg',
                'Berger',
                'Bernard',
                'Berry',
                'Best',
                'Bird',
                'Bishop',
                'Black',
                'Blackburn',
                'Blackwell',
                'Blair',
                'Blake',
                'Blanchard',
                'Blankenship',
                'Blevins',
                'Bolton',
                'Bond',
                'Bonner',
                'Booker',
                'Boone',
                'Booth',
                'Bowen',
                'Bowers',
                'Bowman',
                'Boyd',
                'Boyer',
                'Boyle',
                'Bradford',
                'Bradley',
                'Bradshaw',
                'Brady',
                'Branch',
                'Bray',
                'Brennan',
                'Brewer',
                'Bridges',
                'Briggs',
                'Bright',
                'Britt',
                'Brock',
                'Brooks',
                'Brown',
                'Browning',
                'Bruce',
                'Bryan',
                'Bryant',
                'Buchanan',
                'Buck',
                'Buckley',
                'Buckner',
                'Bullock',
                'Burch',
                'Burgess',
                'Burke',
                'Burks',
                'Burnett',
                'Burns',
                'Burris',
                'Burt',
                'Burton',
                'Bush',
                'Butler',
                'Byers',
                'Byrd',
                'Cabrera',
                'Cain',
                'Calderon',
                'Caldwell',
                'Calhoun',
                'Callahan',
                'Camacho',
                'Cameron',
                'Campbell',
                'Campos',
                'Cannon',
                'Cantrell',
                'Cantu',
                'Cardenas',
                'Carey',
                'Carlson',
                'Carney',
                'Carpenter',
                'Carr',
                'Carrillo',
                'Carroll',
                'Carson',
                'Carter',
                'Carver',
                'Case',
                'Casey',
                'Cash',
                'Castaneda',
                'Castillo',
                'Castro',
                'Cervantes',
                'Chambers',
                'Chan',
                'Chandler',
                'Chaney',
                'Chang',
                'Chapman',
                'Charles',
                'Chase',
                'Chavez',
                'Chen',
                'Cherry',
                'Christensen',
                'Christian',
                'Church',
                'Clark',
                'Clarke',
                'Clay',
                'Clayton',
                'Clements',
                'Clemons',
                'Cleveland',
                'Cline',
                'Cobb',
                'Cochran',
                'Coffey',
                'Cohen',
                'Cole',
                'Coleman',
                'Collier',
                'Collins',
                'Colon',
                'Combs',
                'Compton',
                'Conley',
                'Conner',
                'Conrad',
                'Contreras',
                'Conway',
                'Cook',
                'Cooke',
                'Cooley',
                'Cooper',
                'Copeland',
                'Cortez',
                'Cote',
                'Cotton',
                'Cox',
                'Craft',
                'Craig',
                'Crane',
                'Crawford',
                'Crosby',
                'Cross',
                'Cruz',
                'Cummings',
                'Cunningham',
                'Curry',
                'Curtis',
                'Dale',
                'Dalton',
                'Daniel',
                'Daniels',
                'Daugherty',
                'Davenport',
                'David',
                'Davidson',
                'Davis',
                'Dawson',
                'Day',
                'Dean',
                'Decker',
                'Dejesus',
                'Delacruz',
                'Delaney',
                'Deleon',
                'Delgado',
                'Dennis',
                'Diaz',
                'Dickerson',
                'Dickson',
                'Dillard',
                'Dillon',
                'Dixon',
                'Dodson',
                'Dominguez',
                'Donaldson',
                'Donovan',
                'Dorsey',
                'Dotson',
                'Douglas',
                'Downs',
                'Doyle',
                'Drake',
                'Dudley',
                'Duffy',
                'Duke',
                'Duncan',
                'Dunlap',
                'Dunn',
                'Duran',
                'Durham',
                'Dyer',
                'Eaton',
                'Edwards',
                'Elliott',
                'Ellis',
                'Ellison',
                'Emerson',
                'England',
                'English',
                'Erickson',
                'Espinoza',
                'Estes',
                'Estrada',
                'Evans',
                'Everett',
                'Ewing',
                'Farley',
                'Farmer',
                'Farrell',
                'Faulkner',
                'Ferguson',
                'Fernandez',
                'Ferrell',
                'Fields',
                'Figueroa',
                'Finch',
                'Finley',
                'Fischer',
                'Fisher',
                'Fitzgerald',
                'Fitzpatrick',
                'Fleming',
                'Fletcher',
                'Flores',
                'Flowers',
                'Floyd',
                'Flynn',
                'Foley',
                'Forbes',
                'Ford',
                'Foreman',
                'Foster',
                'Fowler',
                'Fox',
                'Francis',
                'Franco',
                'Frank',
                'Franklin',
                'Franks',
                'Frazier',
                'Frederick',
                'Freeman',
                'French',
                'Frost',
                'Fry',
                'Frye',
                'Fuentes',
                'Fuller',
                'Fulton',
                'Gaines',
                'Gallagher',
                'Gallegos',
                'Galloway',
                'Gamble',
                'Garcia',
                'Gardner',
                'Garner',
                'Garrett',
                'Garrison',
                'Garza',
                'Gates',
                'Gay',
                'Gentry',
                'George',
                'Gibbs',
                'Gibson',
                'Gilbert',
                'Giles',
                'Gill',
                'Gillespie',
                'Gilliam',
                'Gilmore',
                'Glass',
                'Glenn',
                'Glover',
                'Goff',
                'Golden',
                'Gomez',
                'Gonzales',
                'Gonzalez',
                'Good',
                'Goodman',
                'Goodwin',
                'Gordon',
                'Gould',
                'Graham',
                'Grant',
                'Graves',
                'Gray',
                'Green',
                'Greene',
                'Greer',
                'Gregory',
                'Griffin',
                'Griffith',
                'Grimes',
                'Gross',
                'Guerra',
                'Guerrero',
                'Guthrie',
                'Gutierrez',
                'Guy',
                'Guzman',
                'Hahn',
                'Hale',
                'Haley',
                'Hall',
                'Hamilton',
                'Hammond',
                'Hampton',
                'Hancock',
                'Haney',
                'Hansen',
                'Hanson',
                'Hardin',
                'Harding',
                'Hardy',
                'Harmon',
                'Harper',
                'Harrell',
                'Harrington',
                'Harris',
                'Harrison',
                'Hart',
                'Hartman',
                'Harvey',
                'Hatfield',
                'Hawkins',
                'Hayden',
                'Hayes',
                'Haynes',
                'Hays',
                'Head',
                'Heath',
                'Hebert',
                'Henderson',
                'Hendricks',
                'Hendrix',
                'Henry',
                'Hensley',
                'Henson',
                'Herman',
                'Hernandez',
                'Herrera',
                'Herring',
                'Hess',
                'Hester',
                'Hewitt',
                'Hickman',
                'Hicks',
                'Higgins',
                'Hill',
                'Hines',
                'Hinton',
                'Hobbs',
                'Hodge',
                'Hodges',
                'Hoffman',
                'Hogan',
                'Holcomb',
                'Holden',
                'Holder',
                'Holland',
                'Holloway',
                'Holman',
                'Holmes',
                'Holt',
                'Hood',
                'Hooper',
                'Hoover',
                'Hopkins',
                'Hopper',
                'Horn',
                'Horne',
                'Horton',
                'House',
                'Houston',
                'Howard',
                'Howe',
                'Howell',
                'Hubbard',
                'Huber',
                'Hudson',
                'Huff',
                'Huffman',
                'Hughes',
                'Hull',
                'Humphrey',
                'Hunt',
                'Hunter',
                'Hurley',
                'Hurst',
                'Hutchinson',
                'Hyde',
                'Ingram',
                'Irwin',
                'Jackson',
                'Jacobs',
                'Jacobson',
                'James',
                'Jarvis',
                'Jefferson',
                'Jenkins',
                'Jennings',
                'Jensen',
                'Jimenez',
                'Johns',
                'Johnson',
                'Johnston',
                'Jones',
                'Jordan',
                'Joseph',
                'Joyce',
                'Joyner',
                'Juarez',
                'Justice',
                'Kane',
                'Kaufman',
                'Keith',
                'Keller',
                'Kelley',
                'Kelly',
                'Kemp',
                'Kennedy',
                'Kent',
                'Kerr',
                'Key',
                'Kidd',
                'Kim',
                'King',
                'Kinney',
                'Kirby',
                'Kirk',
                'Kirkland',
                'Klein',
                'Kline',
                'Knapp',
                'Knight',
                'Knowles',
                'Knox',
                'Koch',
                'Kramer',
                'Lamb',
                'Lambert',
                'Lancaster',
                'Landry',
                'Lane',
                'Lang',
                'Langley',
                'Lara',
                'Larsen',
                'Larson',
                'Lawrence',
                'Lawson',
                'Le',
                'Leach',
                'Leblanc',
                'Lee',
                'Leon',
                'Leonard',
                'Lester',
                'Levine',
                'Levy',
                'Lewis',
                'Lindsay',
                'Lindsey',
                'Little',
                'Livingston',
                'Lloyd',
                'Logan',
                'Long',
                'Lopez',
                'Lott',
                'Love',
                'Lowe',
                'Lowery',
                'Lucas',
                'Luna',
                'Lynch',
                'Lynn',
                'Lyons',
                'Macdonald',
                'Macias',
                'Mack',
                'Madden',
                'Maddox',
                'Maldonado',
                'Malone',
                'Mann',
                'Manning',
                'Marks',
                'Marquez',
                'Marsh',
                'Marshall',
                'Martin',
                'Martinez',
                'Mason',
                'Massey',
                'Mathews',
                'Mathis',
                'Matthews',
                'Maxwell',
                'May',
                'Mayer',
                'Maynard',
                'Mayo',
                'Mays',
                'Mcbride',
                'Mccall',
                'Mccarthy',
                'Mccarty',
                'Mcclain',
                'Mcclure',
                'Mcconnell',
                'Mccormick',
                'Mccoy',
                'Mccray',
                'Mccullough',
                'Mcdaniel',
                'Mcdonald',
                'Mcdowell',
                'Mcfadden',
                'Mcfarland',
                'Mcgee',
                'Mcgowan',
                'Mcguire',
                'Mcintosh',
                'Mcintyre',
                'Mckay',
                'Mckee',
                'Mckenzie',
                'Mckinney',
                'Mcknight',
                'Mclaughlin',
                'Mclean',
                'Mcleod',
                'Mcmahon',
                'Mcmillan',
                'Mcneil',
                'Mcpherson',
                'Meadows',
                'Medina',
                'Mejia',
                'Melendez',
                'Melton',
                'Mendez',
                'Mendoza',
                'Mercado',
                'Mercer',
                'Merrill',
                'Merritt',
                'Meyer',
                'Meyers',
                'Michael',
                'Middleton',
                'Miles',
                'Miller',
                'Mills',
                'Miranda',
                'Mitchell',
                'Molina',
                'Monroe',
                'Montgomery',
                'Montoya',
                'Moody',
                'Moon',
                'Mooney',
                'Moore',
                'Morales',
                'Moran',
                'Moreno',
                'Morgan',
                'Morin',
                'Morris',
                'Morrison',
                'Morrow',
                'Morse',
                'Morton',
                'Moses',
                'Mosley',
                'Moss',
                'Mueller',
                'Mullen',
                'Mullins',
                'Munoz',
                'Murphy',
                'Murray',
                'Myers',
                'Nash',
                'Navarro',
                'Neal',
                'Nelson',
                'Newman',
                'Newton',
                'Nguyen',
                'Nichols',
                'Nicholson',
                'Nielsen',
                'Nieves',
                'Nixon',
                'Noble',
                'Noel',
                'Nolan',
                'Norman',
                'Norris',
                'Norton',
                'Nunez',
                'Obrien',
                'Ochoa',
                'Oconnor',
                'Odom',
                'Odonnell',
                'Oliver',
                'Olsen',
                'Olson',
                'Oneal',
                'Oneil',
                'Oneill',
                'Orr',
                'Ortega',
                'Ortiz',
                'Osborn',
                'Osborne',
                'Owen',
                'Owens',
                'Pace',
                'Pacheco',
                'Padilla',
                'Page',
                'Palmer',
                'Park',
                'Parker',
                'Parks',
                'Parrish',
                'Parsons',
                'Pate',
                'Patel',
                'Patrick',
                'Patterson',
                'Patton',
                'Paul',
                'Payne',
                'Pearson',
                'Peck',
                'Pena',
                'Pennington',
                'Perez',
                'Perkins',
                'Perry',
                'Peters',
                'Petersen',
                'Peterson',
                'Petty',
                'Phelps',
                'Phillips',
                'Pickett',
                'Pierce',
                'Pittman',
                'Pitts',
                'Pollard',
                'Poole',
                'Pope',
                'Porter',
                'Potter',
                'Potts',
                'Powell',
                'Powers',
                'Pratt',
                'Preston',
                'Price',
                'Prince',
                'Pruitt',
                'Puckett',
                'Pugh',
                'Quinn',
                'Ramirez',
                'Ramos',
                'Ramsey',
                'Randall',
                'Randolph',
                'Rasmussen',
                'Ratliff',
                'Ray',
                'Raymond',
                'Reed',
                'Reese',
                'Reeves',
                'Reid',
                'Reilly',
                'Reyes',
                'Reynolds',
                'Rhodes',
                'Rice',
                'Rich',
                'Richard',
                'Richards',
                'Richardson',
                'Richmond',
                'Riddle',
                'Riggs',
                'Riley',
                'Rios',
                'Rivas',
                'Rivera',
                'Rivers',
                'Roach',
                'Robbins',
                'Roberson',
                'Roberts',
                'Robertson',
                'Robinson',
                'Robles',
                'Rocha',
                'Rodgers',
                'Rodriguez',
                'Rodriquez',
                'Rogers',
                'Rojas',
                'Rollins',
                'Roman',
                'Romero',
                'Rosa',
                'Rosales',
                'Rosario',
                'Rose',
                'Ross',
                'Roth',
                'Rowe',
                'Rowland',
                'Roy',
                'Ruiz',
                'Rush',
                'Russell',
                'Russo',
                'Rutledge',
                'Ryan',
                'Salas',
                'Salazar',
                'Salinas',
                'Sampson',
                'Sanchez',
                'Sanders',
                'Sandoval',
                'Sanford',
                'Santana',
                'Santiago',
                'Santos',
                'Sargent',
                'Saunders',
                'Savage',
                'Sawyer',
                'Schmidt',
                'Schneider',
                'Schroeder',
                'Schultz',
                'Schwartz',
                'Scott',
                'Sears',
                'Sellers',
                'Serrano',
                'Sexton',
                'Shaffer',
                'Shannon',
                'Sharp',
                'Sharpe',
                'Shaw',
                'Shelton',
                'Shepard',
                'Shepherd',
                'Sheppard',
                'Sherman',
                'Shields',
                'Short',
                'Silva',
                'Simmons',
                'Simon',
                'Simpson',
                'Sims',
                'Singleton',
                'Skinner',
                'Slater',
                'Sloan',
                'Small',
                'Smith',
                'Snider',
                'Snow',
                'Snyder',
                'Solis',
                'Solomon',
                'Sosa',
                'Soto',
                'Sparks',
                'Spears',
                'Spence',
                'Spencer',
                'Stafford',
                'Stanley',
                'Stanton',
                'Stark',
                'Steele',
                'Stein',
                'Stephens',
                'Stephenson',
                'Stevens',
                'Stevenson',
                'Stewart',
                'Stokes',
                'Stone',
                'Stout',
                'Strickland',
                'Strong',
                'Stuart',
                'Suarez',
                'Sullivan',
                'Summers',
                'Sutton',
                'Swanson',
                'Sweeney',
                'Sweet',
                'Sykes',
                'Talley',
                'Tanner',
                'Tate',
                'Taylor',
                'Terrell',
                'Terry',
                'Thomas',
                'Thompson',
                'Thornton',
                'Tillman',
                'Todd',
                'Torres',
                'Townsend',
                'Tran',
                'Travis',
                'Trevino',
                'Trujillo',
                'Tucker',
                'Turner',
                'Tyler',
                'Tyson',
                'Underwood',
                'Valdez',
                'Valencia',
                'Valentine',
                'Valenzuela',
                'Vance',
                'Vang',
                'Vargas',
                'Vasquez',
                'Vaughan',
                'Vaughn',
                'Vazquez',
                'Vega',
                'Velasquez',
                'Velazquez',
                'Velez',
                'Villarreal',
                'Vincent',
                'Vinson',
                'Wade',
                'Wagner',
                'Walker',
                'Wall',
                'Wallace',
                'Waller',
                'Walls',
                'Walsh',
                'Walter',
                'Walters',
                'Walton',
                'Ward',
                'Ware',
                'Warner',
                'Warren',
                'Washington',
                'Waters',
                'Watkins',
                'Watson',
                'Watts',
                'Weaver',
                'Webb',
                'Weber',
                'Webster',
                'Weeks',
                'Weiss',
                'Welch',
                'Wells',
                'West',
                'Wheeler',
                'Whitaker',
                'White',
                'Whitehead',
                'Whitfield',
                'Whitley',
                'Whitney',
                'Wiggins',
                'Wilcox',
                'Wilder',
                'Wiley',
                'Wilkerson',
                'Wilkins',
                'Wilkinson',
                'William',
                'Williams',
                'Williamson',
                'Willis',
                'Wilson',
                'Winters',
                'Wise',
                'Witt',
                'Wolf',
                'Wolfe',
                'Wong',
                'Wood',
                'Woodard',
                'Woods',
                'Woodward',
                'Wooten',
                'Workman',
                'Wright',
                'Wyatt',
                'Wynn',
                'Yang',
                'Yates',
                'York',
                'Young',
                'Zamora',
                'Zimmerman'];
            var index = Math.floor(Math.random() * first.length);
            var firstname = first[index];
            index = Math.floor(Math.random() * last.length);
            var lastname = last[index];
            var fullname = firstname + " " + lastname;
            return fullname;


        }

        sillySeason() {

            game.carlist = game.displayStandings();

            var retiredString = "";

            for (var i = 0; i < game.carlist.length; i++) {

                var car = game.carlist[i];

                if (game.year == 2004) {
                    if (car.organization.manufacture == "Pontiac") {
                        car.organization.manufacture = "Chevrolet";
                    }
                    if (car.organization.manufacture == "Oldsmobile") {
                        car.organization.manufacture = "Chevrolet"
                    }
                }


                car.driver.age += 1;

                if (car.driver.age < 24) {
                    car.driver.superspeedway += 4;
                    car.driver.intermediate += 4;
                    car.driver.flat += 4;
                    car.driver.shortTrack += 4;
                    car.driver.roadCourse += 4;

                }

                if (car.driver.age < 32) {
                    car.driver.superspeedway += 2;
                    car.driver.intermediate += 2;
                    car.driver.flat += 2;
                    car.driver.shortTrack += 2;
                    car.driver.roadCourse += 2;

                }

                if (car.driver.topTens < 4 && car.driver.wins < 1) {
                    var odds = Math.floor(Math.random() * 100);

                    if (car.driver.age < 27) {
                        if (odds > 75) {
                            game.freeAgents.push(car.driver);
                            car.driver = new Driver("N/A");
                        }

                    } else {
                        if (odds > 55) {
                            game.freeAgents.push(car.driver);
                            car.driver = new Driver("N/A");
                        }
                    }

                }

                /*
                for( var i = 0; i < game.carlist.length; i++) {
                    var odds = Math.floor( Math.random()*100 );
                    console.log("HAS SHUT DOWN!", game.carlist[i], game.carlist[i].number);
                    if (game.carlist[i].driver.name == "N/A" && odds > 50) {
                        console.log("HAS SHUT DOWN2!", game.carlist[i], game.carlist[i].number);
                        var retiredString2 = "#" + game.carlist[i].number + " " + game.carlist[i].organization.name + " "
                            + " has shut down.<br>"

                        retiredString += retiredString2;
                        game.carlist.splice(i, 1);
                        i--;

                    }
                }*/



                if (car.driver.age > 39) {
                    car.driver.superspeedway -= 4;
                    car.driver.intermediate -= 4;
                    car.driver.flat -= 4;
                    car.driver.shortTrack -= 4;
                    car.driver.roadCourse -= 4;

                }

                if (car.driver.age > 45) {
                    car.driver.superspeedway -= 6;
                    car.driver.intermediate -= 6;
                    car.driver.flat -= 6;
                    car.driver.shortTrack -= 6;
                    car.driver.roadCourse -= 6;

                }

                if (car.driver.age > 51) {

                    game.retired.push(car.driver);

                    retiredString += car.driver.name + " has retired!<br>"

                    var retiredString2 = car.driver.name + " | Final stats | Titles: "
                        + car.driver.careerTitles + " | Wins: "
                        + car.driver.careerWins + " | Top Fives: "
                        + car.driver.careerTopFives + " | Top Tens: "
                        + car.driver.careerTopTens + " | Races: "
                        + car.driver.careerRaces + "<br>"

                    retiredString += retiredString2;

                    car.driver = new Driver("N/A");
                }

            }


            for (var t = 0; t < game.newTeams.length; t++) {
                var notCopy = true;
                if (game.newTeams[t][0] == game.year) {
                    for (var t1 = 0; t1 < game.carlist.length; t1++) {
                        if (game.newTeams[t][1].number == game.carlist[t1].number) {
                            notCopy = false;
                        }
                    }
                    if (notCopy) {
                        game.carlist.push(game.newTeams[t][1]);

                        var retiredString2 = "#" + game.newTeams[t][1].number + " " + game.newTeams[t][1].organization.name + " "
                            + game.newTeams[t][1].organization.manufacture
                            + " will be making their debut this upcoming season!<br>"

                        retiredString += retiredString2;
                    }


                }

            }

            var testEncouraged = [];

            game.freeAgentsEncouraged = [];

            game.freeAgentsLegal = [];

            for (var f = 0; f < game.freeAgents.length; f++) {

                var FA = game.freeAgents[f];

                if (FA.age > 22 && FA.age < 36 && (FA.superspeedway + FA.intermediate + FA.roadCourse + FA.shortTrack) / 4 > 73) {

                    game.freeAgentsEncouraged.push(FA);
                }

                if (FA.age > 21 && FA.age < 48 && (FA.superspeedway + FA.intermediate + FA.roadCourse + FA.shortTrack) / 4 > 62) {

                    game.freeAgentsLegal.push(FA);
                }





                FA.age += 1;

                if (FA.age < 18) {
                    FA.superspeedway += 5;
                    FA.intermediate += 5;
                    FA.flat += 5;
                    FA.roadCourse += 5;
                    FA.superspeedway += 5;

                }

                if (FA.age < 25) {
                    FA.superspeedway += 3;
                    FA.intermediate += 3;
                    FA.flat += 3;
                    FA.roadCourse += 3;
                    FA.superspeedway += 3;

                }

                if (FA.age > 39) {
                    FA.superspeedway -= 4;
                    FA.intermediate -= 4;
                    FA.flat -= 4;
                    FA.roadCourse -= 4;
                    FA.superspeedway -= 4;

                }

            }

            console.log("encouraged", game.freeAgentsEncouraged);

            console.log("allowed", game.freeAgentsLegal);

            game.freeAgentsLegal = game.freeAgentsLegal.filter( function( el ) {
                return !game.freeAgentsEncouraged.includes( el );
            } );


            console.log("encouraged2", game.freeAgentsEncouraged);

            console.log("allowed2", game.freeAgentsLegal);

            game.carlist.sort((a, b) => (a.engine < b.engine) ? 1 : -1);

            for (var i = 0; i < game.carlist.length; i++) {

                var car = game.carlist[i];

                if (car.driver.name == "N/A") {
                    if (game.freeAgentsLegal.length > 0) {
                        var odds = Math.floor(Math.random() * 100);



                        if (odds < 20 && (game.carlist.length + 2 > game.carsInRace)) {


                            var retiredString2 = "#" + game.carlist[i].number + " " + game.carlist[i].organization.name + " "
                                + " has shut down.<br>"
                            retiredString += retiredString2;

                            for(var o = 0; o < game.carlist.length; o++) {
                                if (game.carlist[i].organization.name == game.carlist[o].organization.name) {
                                    game.carlist[o].engine += 6;
                                    game.carlist[o].aero += 6;
                                    game.carlist[o].chassis += 6;
                                    game.carlist[o].pitCrew += 6;
                                    console.log("UPDATED", game.carlist[o].name);

                                }
                            }


                        } else {
                            if(game.freeAgentsEncouraged.length > 0 && car.engine > 69) {
                                var index = Math.floor(Math.random() * game.freeAgentsEncouraged.length);
                                car.driver = game.freeAgentsEncouraged[index];
                                retiredString2 = car.driver.name + " has signed with " + car.organization.name + " to drive the #" + car.number + " " + car.organization.manufacture + "<br>";
                                retiredString += retiredString2;
                                game.freeAgentsEncouraged.splice(index, 1); // Remove the item from the array
                                var index1 = game.freeAgents.indexOf(car.driver);
                                if (index1 > -1) {
                                    game.freeAgents.splice(index1, 1);
                                }
                            }
                            else {
                                var index = Math.floor(Math.random() * game.freeAgentsLegal.length);
                                car.driver = game.freeAgentsLegal[index];
                                retiredString2 = car.driver.name + " has signed with " + car.organization.name + " to drive the #" + car.number + " " + car.organization.manufacture + "<br>";
                                retiredString += retiredString2;
                                game.freeAgentsLegal.splice(index, 1); // Remove the item from the array
                                var index1 = game.freeAgents.indexOf(car.driver);
                                if (index1 > -1) {
                                    game.freeAgents.splice(index1, 1);
                                }
                            }


                        }

                    } else {
                        car.driver = new Driver(game.randomName());
                        car.driver.age = 21;
                        car.driver.superspeedway = 65;
                        car.driver.intermediate = 65;
                        car.driver.flat = 65;
                        car.driver.shortTrack = 65;
                        car.driver.roadCourse = 65;
                        retiredString2 = car.driver.name + " has signed with " + car.organization.name + " to drive the #" + car.number + " " + car.organization.manufacture + "<br>";
                        retiredString += retiredString2;
                    }

                }


            }


            for (var i = game.carlist.length - 1; i >= 0; --i) {
                if (game.carlist[i].driver.name == "N/A") {
                    game.carlist.splice(i, 1);
                }
            }

            console.log(game.carlist);
            console.log(game.retired);
            return retiredString;
        }

        runRace() {

            document.getElementById('uploads').innerHTML = "";



            var carlist2 = [...this.carlist];

            var elite = Array();
            var great = Array();
            var good = Array();
            var average = Array();
            var backup = Array()

            var carlist3 = Array();
            var points = 180;


            console.log("game run races", game.numRaces);




            for (var line = 0; line < game.carlist.length; line++) {
                game.carlist[line].driver.formula = game.carlist[line].driver.points + (game.carlist[line].driver.races * 24) + (game.carlist[line].driver.topTens * 11) + (game.carlist[line].driver.careerTopTens * 6) + (game.carlist[line].driver.wins * 25) + (game.carlist[line].driver.careerWins * 10) + (game.carlist[line].engine * 9) + (game.carlist[line].chassis * 8) + (game.carlist[line].prestige * 8)
                if (game.carlist[line].sponsor1 == "random") {
                    var odds = Math.floor(Math.random() * game.sponsorlist.length);
                    game.carlist[line].sponsor1 = game.sponsorlist[odds];
                }
            }

            console.log("game week -1!!!!!! ", game.schedule[game.week-2])
            if (game.schedule[game.week - 2].trackType == "Superspeedway") {
                console.log(game.schedule[game.week - 2].trackType);
                console.log("did it the superspeedway way");
                var arraychances = [80, 78, 76, 75, 74, 72, 70, 68]

                var odds = Math.floor(Math.random() * arraychances.length);


                for (var line = 0; line < carlist2.length; line++) {

                    if (((carlist2[line].engine + carlist2[line].aero + carlist2[line].driver.superspeedway) / 3) > arraychances[odds]) {
                        console.log(carlist2[line]);

                        elite.push(carlist2[line]);
                    } else {
                        if (((carlist2[line].engine + carlist2[line].aero + carlist2[line].driver.superspeedway) / 3) > arraychances[odds] - 10) {
                            console.log(carlist2[line]);
                            great.push(carlist2[line]);
                        } else {
                            good.push(carlist2[line]);
                        }

                    }
                    console.log("elite cars", elite);
                }
                console.log("elite cars!!!", elite, great, good);
            } else if (game.schedule[game.week - 2].trackType == "Short Track") {
                console.log(game.schedule[game.week - 1].trackType);
                var arraychances = [86, 83, 82, 81, 80]
                if (game.year < 2015) {
                    arraychances = [84, 83, 82, 81, 80, 78, 76, 75, 74]
                }


                var odds = Math.floor(Math.random() * arraychances.length);

                for (var line = 0; line < carlist2.length; line++) {
                    //
                    // console.log("did it the short way");
                    if (((carlist2[line].aero + carlist2[line].driver.shortTrack) / 2) > arraychances[odds] || (game.week > 3 && game.week < 8 && carlist2[line].driver.wins > 0) || (game.week > 24 && game.week < 33 && carlist2[line].driver.wins > 2)) {


                        elite.push(carlist2[line]);
                    } else {
                        if (((carlist2[line].aero + carlist2[line].driver.shortTrack) / 2) > arraychances[odds] - 7) {


                            great.push(carlist2[line]);
                        } else {
                            if (((carlist2[line].aero + carlist2[line].driver.shortTrack) / 2) > arraychances[odds] - 11) {


                                good.push(carlist2[line]);
                            } else {
                                average.push(carlist2[line]);
                            }

                        }

                    }
                }
            } else if (game.schedule[game.week - 2].trackType == "Road Course") {

                for (var line = 0; line < carlist2.length; line++) {


                    if (((carlist2[line].chassis + carlist2[line].engine + carlist2[line].driver.roadCourse +
                        carlist2[line].driver.roadCourse + carlist2[line].driver.roadCourse) / 5) > 82) {

                        elite.push(carlist2[line]);
                    } else {
                        if (((carlist2[line].chassis + carlist2[line].engine + carlist2[line].driver.roadCourse +
                            carlist2[line].driver.roadCourse + carlist2[line].driver.roadCourse) / 5) > 75) {

                            great.push(carlist2[line]);
                        } else {
                            good.push(carlist2[line]);
                        }

                    }
                }
            } else {
                for (var line = 0; line < carlist2.length; line++) {
                    //console.log("did it the normal way");
                    // console.log((carlist2[line].engine + carlist2[line].chassis + carlist2[line].driver.intermediate + carlist2[line].driver.flat) / 4 );

                    var odds = Math.floor(Math.random() * 100);


                    var car = carlist2[line];

                    if (carlist2[line].status == "Part Time" && carlist2[line].driver.races > 15) {
                        if (odds > 98 && !containsObject(car, average)) {
                            average.push(carlist2[line]);
                        }
                    } else {
                        if (carlist2[line].driver.topTens > 18 && game.week > 21) {
                            if (odds > 60) {
                                great.push(carlist2[line]);
                            } else {
                                good.push(carlist2[line]);
                            }

                        } else {
                            if (((carlist2[line].engine + carlist2[line].chassis + carlist2[line].driver.intermediate) / 3) > 86 && !containsObject(car, elite)) {

                                elite.push(carlist2[line]);
                            } else if (((carlist2[line].engine + carlist2[line].chassis + carlist2[line].driver.intermediate) / 3) > 78 && !containsObject(car, great)) {
                                great.push(carlist2[line]);
                            } else if (((carlist2[line].engine + carlist2[line].chassis + carlist2[line].driver.intermediate) / 3) > 70 && !containsObject(car, good)) {
                                good.push(carlist2[line]);
                            } else {
                                if (!containsObject(car, average)) {
                                    average.push(carlist2[line]);
                                }

                            }
                        }
                    }


                }
            }

            var array3 = game.returnTopCars();

            for (line = 0; line < array3.length; line++) {
                var odds1 = Math.floor(Math.random() * 100);
                if (array3[line].status != "Part Time" || game.schedule[game.week - 1].trackType == "Superspeedway") {
                    backup.push(array3[line]);
                } else {
                    if (odds1 < 60) {
                        backup.push(array3[line]);
                    }
                }

            }




            if (game.week > 5) {

                for (var line = 0; line < game.carsInRace - 8; line++) {

                    var car = new Car();

                    var driver = new Driver("first last");

                    var odds = Math.floor(Math.random() * 100);

                    if (elite.length > 0) {
                        var index = Math.floor(Math.random() * elite.length);
                        carlist3.push(elite[index]);
                        car = elite[index];
                        driver = elite[index].driver;
                        elite.splice(index, 1); // Remove the item from the array
                    } else {
                        if (great.length > 0) {
                            var index = Math.floor(Math.random() * great.length);
                            carlist3.push(great[index]);
                            car = great[index];
                            driver = great[index].driver;
                            great.splice(index, 1); // Remove the item from the array
                        } else {
                            if (good.length > 0) {
                                var index = Math.floor(Math.random() * good.length);
                                carlist3.push(good[index]);
                                car = good[index];
                                driver = good[index].driver;
                                good.splice(index, 1); // Remove the item from the array
                            } else {
                                if (average.length > 0) {
                                    var index = Math.floor(Math.random() * average.length);
                                    carlist3.push(average[index]);
                                    car = average[index];
                                    driver = average[index].driver;
                                    average.splice(index, 1); // Remove the item from the array
                                }
                            }
                        }
                    }


                    if (line == 0) {
                        if (driver.careerWins < 8 && driver.age < 40) {
                            driver.intermediate += 4;
                            driver.superspeedway += 4;
                            driver.flat += 4;
                            driver.shortTrack += 4;
                            driver.roadCourse += 4;

                        }



                        driver.wins += 1;
                        driver.careerWins += 1;
                        driver.topFives += 1;
                        driver.careerTopFives += 1;
                        driver.topTens += 1;
                        driver.careerTopTens += 1;

                        var winningStr = "#" + car.number + " " + driver.name + " | " + car.organization.name + " | Win #: " + driver.wins;
                        game.schedule[this.week - 2].raceWinner = winningStr;
                    }

                    if (line > 0 && line < 5) {
                        driver.topFives += 1;
                        driver.careerTopFives += 1;
                        driver.topTens += 1;
                        driver.careerTopTens += 1;
                    }

                    if (line > 4 && line < 10) {
                        driver.topTens += 1;
                        driver.careerTopTens += 1;
                    }

                    if (line < 5 && (car.engine < 90 || car.aero < 90)) {
                        car.engine += 4;
                        car.chassis += 4;
                        car.aero += 4;
                        car.pitcrew += 4;
                    }

                    if (line < 28 && (car.engine < 70 || car.aero < 74)) {
                        car.engine += 4;
                        car.chassis += 4;
                        car.aero += 4;
                        car.pitcrew += 4;
                    }


                    driver.races += 1
                    driver.careerRaces += 1;
                    driver.points += points;

                    if (points > 150) {
                        points -= 5;
                    } else {
                        points -= 3;
                    }


                }

                var idx = 0;

                for (line; line <= game.carsInRace - 1; line++) {

                    var driver = new Driver("first last");

                    var notFound = true;

                    var filteredArray = backup.filter(function (x) {
                        return carlist3.indexOf(x) < 0;
                    });

                    console.log("filtered array", filteredArray);

                    var randIdx = Math.floor(Math.random() * filteredArray.length);

                    if (line < game.carsInRace - 2) {
                        if (filteredArray[randIdx]) {
                            carlist3.push(filteredArray[idx])
                            var driver = filteredArray[idx].driver;
                        }
                    } else {
                            if (filteredArray[randIdx]) {
                                var driver = filteredArray[randIdx].driver;
                                carlist3.push(filteredArray[randIdx])
                            }

                    }


                    driver.races += 1
                    driver.careerRaces += 1;
                    driver.points += points;

                    if (points > 150) {
                        points -= 5;
                    } else {
                        points -= 3;
                    }

                    if (carlist3[line]) {
                        console.log("pushed to carlist new week " + carlist3[line].driver.name) + " " + line;
                    }

                    notFound = true;


                }

            } else {
                for (var line = 0; line < game.carsInRace; line++) {

                    var driver = new Driver("N/A");

                    var car = new Car("100", "N/A", driver, "N/A");

                    var odds = Math.floor(Math.random() * 100);

                    if (elite.length > 0) {
                        var index = Math.floor(Math.random() * elite.length);
                        carlist3.push(elite[index]);
                        var driver = elite[index].driver;
                        var car = elite[index];
                        elite.splice(index, 1); // Remove the item from the array
                    } else {
                        if (great.length > 0) {
                            var index = Math.floor(Math.random() * great.length);
                            carlist3.push(great[index]);
                            var driver = great[index].driver;
                            var car =  great[index];
                            great.splice(index, 1); // Remove the item from the array
                        } else {
                            if (good.length > 0) {
                                var index = Math.floor(Math.random() * good.length);
                                carlist3.push(good[index]);
                                var driver = good[index].driver;
                                var car = good[index];
                                good.splice(index, 1); // Remove the item from the array
                            } else {
                                if (average.length > 0) {
                                    var index = Math.floor(Math.random() * average.length);
                                    carlist3.push(average[index]);
                                    var driver = average[index].driver;
                                    var car = average[index];
                                    average.splice(index, 1); // Remove the item from the array
                                }
                            }
                        }
                    }


                    if (line == 0) {
                        if (driver.careerWins < 8 && driver.age < 40) {
                            driver.intermediate += 4;
                            driver.superspeedway += 4;
                            driver.flat += 4;
                            driver.shortTrack += 4;
                            driver.roadCourse += 4;



                        }




                        driver.wins += 1;
                        driver.careerWins += 1;
                        driver.topFives += 1;
                        driver.careerTopFives += 1;
                        driver.topTens += 1;
                        driver.careerTopTens += 1;


                        var winningStr = "#" + carlist3[0].number + " " + driver.name + " | " + carlist3[0].organization.name + " | Win #: " + driver.wins;
                        game.schedule[game.week - 2].raceWinner = winningStr;
                    }

                    if (line > 0 && line < 5) {
                        driver.topFives += 1;
                        driver.careerTopFives += 1;
                        driver.topTens += 1;
                        driver.careerTopTens += 1;
                    }

                    if (line > 4 && line < 10) {
                        driver.topTens += 1;
                        driver.careerTopTens += 1;
                    }

                    if (line < 12) {
                        if (car.engine < 88) {
                            car.engine += 4;
                            car.aero += 4;
                            car.chassis += 4;
                            car.pitCrew += 4;
                        }
                    }


                    driver.races += 1
                    driver.careerRaces += 1;
                    driver.points += points;

                    if (points > 150) {
                        points -= 5;
                    } else {
                        points -= 3;
                    }


                }
            }


            console.log("pushed!!!" + carlist3);
            return carlist3;
        }

        displayStandings() {
            var carlist2 = [...this.carlist];
            var carlist3 = Array();

            carlist2.sort((a, b) => (a.driver.points < b.driver.points) ? 1 : -1);

            return carlist2;

        }

        displayDrivers() {
            var carlist2 = [...this.carlist];

            carlist2.sort((a, b) => (a.driver.name > b.driver.name) ? 1 : -1);

            return carlist2;

        }

        displayFreeAgents() {
            var carlist3 = Array();

            for (var i = 0; i < game.freeAgents.length; i++) {
                if (game.freeAgents[i].age > 20 && game.freeAgents[i].name != "N/A") {
                    carlist3.push(game.freeAgents[i]);
                }
            }


            carlist3.sort((a, b) => (a.name > b.name) ? 1 : -1);

            return carlist3;

        }

        returnTopCars() {
            var carlist2 = [...this.carlist];


            carlist2.sort((a, b) => (a.driver.formula < b.driver.formula) ? 1 : -1);

            return carlist2;

        }

        displayChampion() {

            return game.champions;

        }
    }

    class Car {
        constructor(number, sponsor1, driver, organization) {
            this.number = number;
            this.sponsor1 = sponsor1;
            this.driver = driver;
            this.organization = organization;
            this.engine = 0;
            this.chassis = 0;
            this.aero = 0;
            this.pitCrew = 0;
            this.prestige = 0;
            this.status = "Full Time";


        }
    }


    class Driver {
        constructor(name) {
            this.name = name;
            this.wins = 0;
            this.topFives = 0;
            this.topTens = 0;
            this.races = 0;
            this.careerTitles = 0;
            this.careerWins = 0;
            this.careerTopFives = 0;
            this.careerTopTens = 0;
            this.careerRaces = 0;
            this.points = 0;
            this.superspeedway = 0;
            this.intermediate = 0;
            this.flat = 0;
            this.shortTrack = 0;
            this.roadCourse = 0;
            this.age = 0;
            this.formula = 0;

        }
    }

    class Organization {
        constructor(name, manufacture) {
            this.name = name;
            this.manufacture = manufacture;
        }
    }

    class Race {
        constructor(raceName, trackName, trackType, raceWinner) {
            this.raceName = raceName
            this.trackName = trackName
            this.trackType = trackType
            this.raceWinner = raceWinner
        }
    }

    /*var xhr=new XMLHttpRequest();
    xhr.open("GET","roster.tsv");
    xhr.onload=function(){
        console.log(xhr.responseText);
    }
    xhr.send();*/
    var game = new Game();

    //readTextFile("file:C://Users//steve//Desktop//Autosim Web//roster.tsv");



    document.getElementById('gamemode').onchange = function(){

        var file = this.files[0];

        var reader = new FileReader();
        reader.onload = function(progressEvent){
            // Entire file
            var roster = true;
            var gameinfo = false;
            var sched = false;
            var freeA = false;
            var yearIDX = 1000;
            var newSponsors = false;
            var startraces = false;
            var newT = false;
            // By lines
            var lines = this.result.split('\n');
            for(var line = 1; line < lines.length; line++) {
                //console.log(lines[line]);

                var data = lines[line].split('~');


                if(startraces == true) {
                    if(data[0] == "Race Name") {
                        console.log('skip');
                    }
                    game.numRaces = parseInt(data[0]);
                    startraces = false;
                }



                if (sched) {

                    if (data[0] == "New Races") {
                        console.log("stopped making new races", game)
                        game.numRaces = game.schedule.length;
                        sched = false;
                    } else {
                        if(data[0] != "Race Name") {
                            var race = new Race(data[1], data[2], data[3], "N/A");
                            console.log("RACE!", race)
                            game.schedule.push(race);
                        }

                    }
                }



                if (data[0] == "Race #") {
                    sched = true;
                    gameinfo = false;
                }

                if(newSponsors) {
                    game.sponsorlist.push(data[0]);
                }

                if(newT) {
                    if(data[0] == "Sponsors") {
                        newT = false;
                        newSponsors = true;
                    }
                    else {
                        var car = new Car();
                        car.number = data[1];
                        car.driver = new Driver("N/A");
                        var doesNotExist = true;

                        car.organization = new Organization();
                        for(var o = 1; o < game.orglist.length; o++) {
                            if(data[2] == game.orglist[o].name) {
                                doesNotExist = false;
                                car.organization = game.orglist[o];
                            }
                        }
                        if(doesNotExist){
                            car.organization.name = data[2];
                            car.organization.manufacture = data[3];
                            game.orglist.push(car.organization);
                        }

                        car.sponsor1 = data[4];
                        car.sponsor2 = data[5];
                        car.num = data[1];
                        car.engine = parseInt(data[6]);
                        car.chassis = parseInt(data[7]);
                        car.aero = parseInt(data[8]);
                        car.pitCrew = parseInt(data[9]);
                        car.schedule = data[10];

                        var newArray = [parseInt(data[0]), car, parseInt(data[11])]
                        game.newTeams.push(newArray);
                    }


                }

                if(freeA == true) {
                    if(data[0] == "Year") {
                        console.log("stopped making new races", game);
                        freeA = false;
                        newT = true;
                    }
                    else {
                        var driver = new Driver(data[0]);
                        driver.age = parseInt(data[1]);
                        driver.superspeedway = parseInt(data[2]);
                        driver.intermediate = parseInt(data[2]);
                        driver.flat = parseInt(data[3]);
                        driver.shortTrack = parseInt(data[4]);
                        driver.roadCourse = parseInt(data[5]);
                        driver.careerTitles = parseInt(data[7]);
                        driver.careerWins = parseInt(data[8]);
                        driver.careerTopFives = parseInt(data[9]);
                        driver.careerTopTens = parseInt(data[10]);
                        driver.careerRaces = parseInt(data[11]);

                        game.freeAgents.push(driver);
                        console.log("pushed", driver.name, driver.age);
                    }
                }

                if (data[0] == "Name" && data[1] == "Age") {
                    freeA = true;
                }


                if (gameinfo == true) {
                    game.year = parseInt(data[0]);
                    game.points = parseInt(data[1]);
                    game.carsInRace = parseInt(data[2]);
                    game.week = parseInt(data[3]);
                    gameinfo = false;
                    startraces = true;

                }

                if (data[0] == "Start Year") {
                    console.log("SHOULD NOT BE MAKING MORE CARS")
                    roster = false;
                    gameinfo = true;
                }



                if (roster == true) {
                    var driver = new Driver(data[1]);

                    driver.superspeedway = parseInt(data[6]);
                    driver.intermediate = parseInt(data[7]);
                    driver.flat = parseInt(data[8]);
                    driver.shortTrack = parseInt(data[9]);
                    driver.roadCourse = parseInt(data[10]);
                    driver.age = parseInt(data[13]);
                    driver.careerTitles = parseInt(data[14]);
                    driver.careerWins = parseInt(data[15]);
                    driver.careerTopFives = parseInt(data[16]);
                    driver.careerTopTens = parseInt(data[17]);
                    driver.careerRaces = parseInt(data[18]);
                    if(data[26] && data[26] != "\r") {
                        driver.wins = parseInt(data[26]);
                    }
                    else {
                        driver.wins = 0;
                    }

                    if(data[27]) {
                        driver.topFives = parseInt(data[27]);
                    }
                    if(data[28]) {
                        driver.topTens = parseInt(data[28]);
                    }
                    if(data[29]) {
                        driver.races = parseInt(data[29]);
                    }
                    if(data[30]) {
                        driver.points = parseInt(data[30]);
                    }

                    var organization = new Organization(data[4], data[5])

                    var car = new Car(data[0], data[2], driver, organization);

                    car.engine = parseInt(data[20]);
                    car.chassis = parseInt(data[21]);
                    car.aero = parseInt(data[22]);
                    car.pitCrew = parseInt(data[23]);
                    car.prestige = parseInt(data[24]);
                    car.status = data[25];

                    game.carlist.push(car);
                }








                }


        };
        reader.readAsText(file);




    };
    /*
        document.getElementById('roster').onchange = function () {

            var file = this.files[0];

            var reader = new FileReader();
            reader.onload = function (progressEvent) {
                // Entire file
                console.log(this.result);

                // By lines
                var lines = this.result.split('\n');
                for (var line = 1; line < lines.length; line++) {
                    //console.log(lines[line]);

                    var data = lines[line].split('~');

                    console.log(data);

                    var driver = new Driver(data[1]);

                    driver.superspeedway = parseInt(data[6]);
                    driver.intermediate = parseInt(data[7]);
                    driver.flat = parseInt(data[8]);
                    driver.shortTrack = parseInt(data[9]);
                    driver.roadCourse = parseInt(data[10]);
                    driver.age = parseInt(data[13]);
                    driver.careerTitles = parseInt(data[14]);
                    driver.careerWins = parseInt(data[15]);
                    driver.careerTopFives = parseInt(data[16]);
                    driver.careerTopTens = parseInt(data[17]);
                    driver.careerRaces = parseInt(data[18]);


                    var organization = new Organization(data[4], data[5])

                    var car = new Car(data[0], data[2], driver, organization);

                    car.engine = parseInt(data[20]);
                    car.chassis = parseInt(data[21]);
                    car.aero = parseInt(data[22]);
                    car.pitCrew = parseInt(data[23]);
                    car.prestige = parseInt(data[24]);
                    car.status = data[25];

                    game.carlist.push(car);


                }

                for (var line1 = 0; line1 < game.carlist.length; line1++) {


                    console.log("carlist " + game.carlist[line1].driver.name);

                }


            };
            reader.readAsText(file);


        };

        document.getElementById('gamerules').onchange = function () {

            var file = this.files[0];

            var reader = new FileReader();
            reader.onload = function (progressEvent) {
                // Entire file
                console.log(this.result);

                // By lines
                var sched = false;

                var lines = this.result.split('\n');

                for (var line = 1; line < lines.length; line++) {

                    var data = lines[line].split('~');

                    if (line == 1) {
                        game.year = parseInt(data[0]);
                        game.points = parseInt(data[1]);
                        game.carsInRace = parseInt(data[2]);

                    }

                    if (line == 3) {
                        game.numRaces = parseInt(data[0]) + 1;

                    }


                    if (sched) {

                        if (data[0] == "New Races") {
                            sched = false;
                        } else {
                            var race = new Race(data[1], data[2], data[3]);
                            game.schedule.push(race);
                        }
                    }

                    if (data[0] == "Race #") {
                        sched = true;
                    }


                }


            };
            reader.readAsText(file);


        };

        document.getElementById('freeAgents').onchange = function () {

            var file = this.files[0];

            var reader = new FileReader();
            reader.onload = function (progressEvent) {
                // Entire file
                console.log(this.result);

                // By lines
                var sched = false;

                var lines = this.result.split('\n');

                for (var line = 1; line < lines.length; line++) {

                    var data = lines[line].split('~');

                    if (line != 0) {
                        var driver = new Driver(data[0]);
                        driver.age = parseInt(data[1]);
                        driver.superspeedway = parseInt(data[2]);
                        driver.intermediate = parseInt(data[2]);
                        driver.flat = parseInt(data[3]);
                        driver.shortTrack = parseInt(data[4]);
                        driver.roadCourse = parseInt(data[5]);
                        driver.careerTitles = parseInt(data[7]);
                        driver.careerWins = parseInt(data[8]);
                        driver.careerTopFives = parseInt(data[9]);
                        driver.careerTopTens = parseInt(data[10]);
                        driver.careerRaces = parseInt(data[11]);

                        game.freeAgents.push(driver);
                        console.log("pushed", driver.name, driver.age)

                    }


                }


            };
            reader.readAsText(file);


        };

        document.getElementById('newTeams').onchange = function () {

            var file = this.files[0];

            var reader = new FileReader();
            reader.onload = function (progressEvent) {
                // Entire file
                console.log(this.result);

                // By lines
                var sched = false;

                var lines = this.result.split('\n');

                for (var line = 1; line < lines.length; line++) {

                    var data = lines[line].split('~');

                    if (line != 0) {
                        var car = new Car();
                        car.number = data[1];
                        car.driver = new Driver("N/A");
                        car.organization = new Organization();
                        car.organization.name = data[2];
                        car.organization.manufacture = data[3];
                        car.sponsor1 = data[4];
                        car.sponsor2 = data[5];
                        car.num = data[1];
                        car.engine = parseInt(data[6]);
                        car.chassis = parseInt(data[7]);
                        car.aero = parseInt(data[8]);
                        car.pitCrew = parseInt(data[9]);
                        car.schedule = data[10];
                        var chance = parseInt(data[11]);
                        var newArray = [parseInt(data[0]), car, chance]
                        game.newTeams.push(newArray);


                    }


                }


            };
            reader.readAsText(file);


        };

        */



    var html = '';

    //var html = '<form id="gameform"><fieldset>';

    //var str2 = '<h1>' +  $_POST["name"] + "'s Bulls and Cows</h1>";


    html += '<table class="game">';
    html += '<div id="guesses">&nbsp;</div>';
    //html += '<tr> <td>1:</td> <td>same</td> <td><img src="images/bull.png" alt="Bull"> <img src="images/bull.png" alt="Bull"></td> </tr>';

    html += '<div id="buttons">';
    html += '<p><input type="submit" id = "race" name="guess" value="Run Race">';
    html += '<input type="submit" id = "fastsim" name="giveup" value="Fast Sim">';
    html += '<input type="submit" id = "standings" name="giveup" value="Standings">';
    html += '<input type="submit" id = "schedule" name="giveup" value="Schedule">';
    html += '<input type="submit" id = "drivers" name="giveup" value="Drivers">';
    html += '<input type="submit" id = "champions" name="giveup" value="Champions">';
    html += '<input type="submit" id = "save" name="giveup" value="Save">';
    //html += '<input type="submit" id = "newgame" name="new" value="New Game" onclick="Bullscows()"></p>';
    //html += '<div id="hint1">'
    ///html += '<p><input type="submit" id = "hint" name="hint" value="Hint!"></p></div>';
    //html += '</div>';
    html += '<p id="message">&nbsp;</p>';
    html += '<p><input type="submit"  id="exit" name="exit" value="Exit"></p>';
    html += '</form>'
    html += '</fieldset>';
    html += '</body> ';


    document.getElementById("play-area").innerHTML = html;

    document.getElementById("race").onclick = function (event) {
        event.preventDefault();

        if (game.week != game.numRaces && game.silly == false) {

            console.log("game schedule", game.schedule)


            console.log("game.week-1 is,", game.week, game.schedule[game.week-1])

            document.getElementById("message").innerHTML = "<h1>" + game.year + " Week " + game.week + " | " + game.schedule[game.week - 1].raceName + " at " + game.schedule[game.week - 1].trackName + "</h1>";

            game.week += 1;

            var results = game.runRace();

            console.log(results);

            //var src = "../images/num/default" + results[0].number;

            var src = "../images/num/" + results[0].organization.name + results[0].number;

            // <div class='content'>

            //  var html = "<table style=\"width:100%\"><tr><th><img src='" + src + ".png'></th><th>";

            var html = "<table style=\"width:100%\"><tr><th>" +
                "<img onerror=\"this.src='../images/num/default" + results[0].number + ".png\'\" src='" + src + ".png'></object></th><th>";

            //onError="this.onerror=null;this.src='<?=base_url()?>assets1/img/default.jpg';"

            html += "<h3>Race Winner: #";

            html += results[0].number;

            html += " ";

            html += results[0].driver.name;

            html += " | ";

            html += results[0].organization.name;

            html += "</th></tr></table><br>";

            html += "<p class ='standings'> | Season Wins: ";

            html += results[0].driver.wins;

            html += " | Season Top Fives: ";

            html += results[0].driver.topFives;

            html += " | Season Top Tens: ";

            html += results[0].driver.topTens;

            html += " | Season Races: ";

            html += results[0].driver.races;

            html += "<br>"

            html += " | Career Top Wins: ";

            html += results[0].driver.careerWins;

            html += " | Career Top Fives: ";

            html += results[0].driver.careerTopFives;

            html += " | Career Top Tens: ";

            html += results[0].driver.careerTopTens;

            html += " | Career Races: ";

            html += results[0].driver.careerRaces;

            html += "<br>"

            console.log("html is", html)

            html += "<p class='standings'>";

            for (var i = 0; i < results.length; i++) {
                var num1 = i + 1;
                var str1 = num1 + ' | #' + results[i].number + ' ' +
                    results[i].driver.name + ' | ' +
                    results[i].sponsor1 + ' | ' +
                    results[i].organization.name + ' | ' +
                    results[i].organization.manufacture + '\n<br>';
                html += str1;


            }
            html += "</p><h3>Top 10 in Points</h3><p class='standings'>"

            results = game.displayStandings();

            console.log(results);

            html += "<p class='standings'>";

            for (var i = 0; i < 10; i++) {
                var num1 = i + 1;
                var str1 = num1 + ' |  ' + results[i].number + ' ' + results[i].driver.name
                    + ' | Wins: ' + results[i].driver.wins
                    + ' | Top Fives: ' + results[i].driver.topFives
                    + ' | Top Tens: ' + results[i].driver.topTens
                    + ' | Races: ' + results[i].driver.races
                    + ' | Points: ' + results[i].driver.points + '<br>';
                html += str1;


            }

            html += "</p><br>";

        } else {

            if (game.silly) {

                var ss = game.sillySeason();
                console.log("SILLY SEASON", ss);

                document.getElementById("message").innerHTML = "<h1>" + game.year + " Silly Season</h1>";

                var results = game.displayStandings();

                console.log(results);

                var html = "<p class='standings'>";

                html += ss;

                html += "</p>"

                for (var i = 0; i < game.schedule.length; i++) {
                    game.schedule[i].raceWinner = "N/A";
                }

                for (var i = 0; i < game.carlist.length; i++) {
                    game.carlist[i].driver.wins = 0;
                    game.carlist[i].driver.topFives = 0;
                    game.carlist[i].driver.topTens = 0;
                    game.carlist[i].driver.races = 0;
                    game.carlist[i].driver.points = 0;
                }

                game.silly = false;

            } else {

                document.getElementById("message").innerHTML = "<h1>" + game.year + " Final Standings</h1>";

                var results = game.displayStandings();

                console.log(results);

                var html = "<p class='standings'>";

                for (var i = 0; i < results.length; i++) {
                    var num1 = i + 1;
                    var str1 = "#" + num1 + ' ' + results[i].number + ' ' + results[i].driver.name
                        + ' | Wins: ' + results[i].driver.wins
                        + ' | Top Fives: ' + results[i].driver.topFives
                        + ' | Top Tens: ' + results[i].driver.topTens
                        + ' | Races: ' + results[i].driver.races
                        + ' | Points: ' + results[i].driver.points + '<br>';
                    html += str1;


                }

                html += "</p>";
                i = 0;
                num1 = i + 1;
                results[i].driver.careerTitles += 1;
                str1 = game.year + ' | ' + results[i].number + ' ' + results[i].driver.name
                    + ' | Title #' + results[i].driver.careerTitles
                    + ' | Team: ' + results[i].organization.name
                    + ' | Make: ' + results[i].organization.manufacture + '<br>';
                html += str1;


                game.champions.push(str1)


                game.week = 1;
                game.year += 1;


                game.silly = true;


            }
        }


        document.getElementById("message").innerHTML += html;
    }

    document.getElementById("standings").onclick = function (event) {
        event.preventDefault();


        document.getElementById("message").innerHTML = "<h1>" + game.year + " Standings after " + game.week + " Races </h1>";


        var results = game.displayStandings();

        console.log(results);

        var html = "<p class='standings'>";

        for (var i = 0; i < results.length; i++) {
            var num1 = i + 1;
            var str1 = "#" + num1 + ' ' + results[i].number + ' ' + results[i].driver.name
                + ' | Wins: ' + results[i].driver.wins
                + ' | Top Fives: ' + results[i].driver.topFives
                + ' | Top Tens: ' + results[i].driver.topTens
                + ' | Races: ' + results[i].driver.races
                + ' | Points: ' + results[i].driver.points + '<br>';
            html += str1;


        }

        html += "</p>";


        document.getElementById("message").innerHTML += html;
    }


    document.getElementById("fastsim").onclick = function (event) {
        event.preventDefault();

        if (game.week != game.numRaces) {

            for (var t = 0; t < 12; t++) {

                if(game.week){
                document.getElementById("message").innerHTML = "<h1>" + game.year + " Week " + game.week + " | " + game.schedule[game.week].raceName + " at " + game.schedule[game.week].trackName + "</h1>";
                }
                game.week += 1;

                var results = game.runRace();

                console.log(results);

                //var src = "../images/num/default" + results[0].number;

                var src = "../images/num/" + results[0].organization.name + results[0].number;

                // <div class='content'>

                //  var html = "<table style=\"width:100%\"><tr><th><img src='" + src + ".png'></th><th>";

                var html = "<table style=\"width:100%\"><tr><th>" +
                    "<img onerror=\"this.src='../images/num/default" + results[0].number + ".png\'\" src='" + src + ".png'></object></th><th>";

                //onError="this.onerror=null;this.src='<?=base_url()?>assets1/img/default.jpg';"

                html += "<h3>Race Winner: #";

                html += results[0].number;

                html += " ";

                html += results[0].driver.name;

                html += " | ";

                html += results[0].organization.name;

                html += "</th></tr></table><br>";

                html += "<p class ='standings'>Career Wins: ";

                html += results[0].driver.careerWins;

                html += " | Career Top Fives: ";

                html += results[0].driver.careerTopFives;

                html += " | Career Top Tens: ";

                html += results[0].driver.careerTopTens;

                html += " | Career Races: ";

                html += results[0].driver.careerRaces;

                html += "<br>"



                html += "<p class='standings'>";

                for (var i = 0; i < results.length; i++) {
                    if (results[i]) {
                        var num1 = i + 1;
                        var str1 = num1 + ' | #' + results[i].number + ' ' +
                            results[i].driver.name + ' | ' +
                            results[i].sponsor1 + ' | ' +
                            results[i].organization.name + ' | ' +
                            results[i].organization.manufacture + '\n<br>';
                        html += str1;
                    }


                }
                html += "</p>"
            }

        } else {


            document.getElementById("message").innerHTML = "<h1>" + game.year + " Final Standings</h1>";

            var results = game.displayStandings();




            var html = "<p class='standings'>";

            for (var i = 0; i < results.length; i++) {
                var num1 = i + 1;
                var str1 = "#" + num1 + ' ' + results[i].number + ' ' + results[i].driver.name
                    + ' | Wins: ' + results[i].driver.wins
                    + ' | Top Fives: ' + results[i].driver.topFives
                    + ' | Top Tens: ' + results[i].driver.topTens
                    + ' | Races: ' + results[i].driver.races
                    + ' | Points: ' + results[i].driver.points + '<br>';
                html += str1;


            }

            html += "</p>";

            i = 0;
            num1 = i + 1;
            results[i].driver.careerTitles += 1;
            str1 = game.year + ' | ' + results[i].number + ' ' + results[i].driver.name
                + ' | Title #' + results[i].driver.careerTitles
                + ' | Team: ' + results[i].organization.name
                + ' | Make: ' + results[i].organization.manufacture + '<br>';
            html += str1;

            game.champions.push(str1)


            game.week = 1;
            game.year += 1;

            for (var i = 0; i < game.carlist.length; i++) {
                game.carlist[i].driver.wins = 0;
                game.carlist[i].driver.topFives = 0;
                game.carlist[i].driver.topTens = 0;
                game.carlist[i].driver.races = 0;
                game.carlist[i].driver.points = 0;
            }

            var ss = game.sillySeason();


        }


        document.getElementById("message").innerHTML += html;
    }

    document.getElementById("champions").onclick = function (event) {
        event.preventDefault();


        document.getElementById("message").innerHTML = "<h1>Champions</h1>";


        var html = "<p class='standings'>";
        for (i = 0; i < game.champions.length; i++) {
            html += game.champions[i];
        }
        html += "</p>"

        document.getElementById("message").innerHTML += html;
    }

    document.getElementById("drivers").onclick = function (event) {
        event.preventDefault();


        document.getElementById("message").innerHTML = "<h1>Active Drivers</h1>";

        var results = game.displayDrivers();

        var html = "<p class='standings'>";

        for (var i = 0; i < results.length; i++) {
            var num1 = i + 1;
            var str1 = results[i].driver.name + " | Age: " + results[i].driver.age + " | #" + results[i].number
                + ' ' + results[i].organization.name + ' ' + results[i].organization.manufacture
                + ' |<br>'
                + 'Championships: ' + results[i].driver.careerTitles
                + ' | Career Wins: ' + results[i].driver.careerWins
                + ' | Career Top Fives: ' + results[i].driver.careerTopFives
                + ' | Career Top Tens: ' + results[i].driver.careerTopTens
                + ' | Career Races: ' + results[i].driver.careerRaces
                + ' |<br><br>';
            html += str1;


        }

        html += "</p>";

        html += "<h1>Free Agents</h1>"

        var results = game.displayFreeAgents();

        html += "<p class='standings'>";

        for (var i = 0; i < results.length; i++) {
            var num1 = i + 1;
            var str1 = results[i].name + " | Age: " + results[i].age + ' |<br>'
                + 'Championships: ' + results[i].careerTitles
                + ' | Career Wins: ' + results[i].careerWins
                + ' | Career Top Fives: ' + results[i].careerTopFives
                + ' | Career Top Tens: ' + results[i].careerTopTens
                + ' | Career Races: ' + results[i].careerRaces
                + ' |<br><br>';
            html += str1;


        }

        document.getElementById("message").innerHTML += html;

    }


    document.getElementById("schedule").onclick = function (event) {
        event.preventDefault();


        document.getElementById("message").innerHTML = "<h1>Schedule</h1>";


        var html = "<p class='standings'>";

        console.log(game.schedule);

        for (var i = 0; i < game.schedule.length; i++) {
            var num1 = i + 1;
            var str1 = "Race #" + num1
                + " | Race: " + game.schedule[i].raceName
                + " | Track: " + game.schedule[i].trackName
                + " | Track Type: " + game.schedule[i].trackType
                + ' |<br>'
                + "Winner: " + game.schedule[i].raceWinner
                + ' |<br><br>';
            html += str1;


        }

        html += "</p>";

        document.getElementById("message").innerHTML += html;


    }

    document.getElementById("save").onclick = function (event) {
        event.preventDefault();


        document.getElementById("message").innerHTML = "<h1>Saved!</h1>";

        var myCsv = "#~Name~Sponsor~Sponsor 2~Team~Manufacturer~SS~IN~FL~ST~RC~Aggr.~Morale~Age~Career Titles~Career Wins~Career Top 5's~Career Top 10's~Career Races~Years~Engine~Chassis~Aero~Pit Crew~Prestige~Schedule~Wins~Top 5's~Top 10's~Races~Points" + '\n';

        var results = game.displayDrivers();


        for (var i = 0; i < results.length; i++) {
            var num1 = i + 1;
            var str1 = results[i].number + "~" + results[i].driver.name + "~"
                + results[i].sponsor1 + "~" + results[i].sponsor2 + "~"
                + results[i].organization.name + "~" + results[i].organization.manufacture + "~"
                + results[i].driver.superspeedway + "~" + results[i].driver.intermediate + "~"
                + results[i].driver.flat + "~" + results[i].driver.shortTrack + "~"
                + results[i].driver.roadCourse + "~" + results[i].driver.aggression + "~"
                + results[i].driver.morale + "~" + results[i].driver.age + "~"
                + results[i].driver.careerTitles + "~" + results[i].driver.careerWins + "~"
                + results[i].driver.careerTopFives + "~" + results[i].driver.careerTopTens + "~"
                + results[i].driver.careerRaces+ "~" + results[i].driver.yearsLeft + "~"
                + results[i].engine + "~" + results[i].chassis + "~"
                + results[i].aero + "~" + results[i].pitcrew+ "~"
                + results[i].prestige + "~" + results[i].schedule+ "~"
                + results[i].driver.wins + "~"
                + results[i].driver.topFives + "~" + results[i].driver.topTens + "~"
                + results[i].driver.races+ "~" + results[i].driver.points + "~"
            + '\n';
            myCsv += str1;


        }
        myCsv += "Start Year~Points Format~Starting Cars Per Race~Lowest Cars Per Race~Largest Cars Per Race~Starting Min Driver Age~Lowest Min Driver Age~Largest Min Driver Age~Starting Max Driver Age~Lowest Max Driver Age~Largest Max Driver Age~~~~~~~~~~~~~~~~~~Schedule~~\n";
        var str2 = game.year + "~" + game.points + "~" + game.carsInRace + "~" + game.week;
        myCsv += str2;
        myCsv += "~\nStarting Number of Races~Lowest Number of Races~Largest Number of Races~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
        myCsv += game.numRaces;
        myCsv += "~\nManufactures~\n";
        myCsv += "Schedule~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
        myCsv += "Race #~Race Name~Track Name~Track Type~~~~~~~~~~~~~~~~~~~~~~~~~~\n";

        console.log("saving schedule", game.schedule, game.schedule.length);
        for (var j = 0; j < game.schedule.length; j++) {
            var num1 = j + 1;
            var str1 = num1 + "~" + game.schedule[j].raceName + "~" + game.schedule[j].trackName + "~" + game.schedule[j].trackType
                + '~\n';
            console.log("SAVED RACE!", str1);
            myCsv += str1;


        }
        myCsv += "New Races~\nRace Name~Track Name~Track Type~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";



        myCsv += "Name~Age~SS~IN~FL~ST~RC~Aggr.~Career Titles~Career Wins~Career Top 5's~Career Top 10's~Career Races~\n";

        console.log("free agents", game.freeAgents, game.freeAgents.length);


        for (var i = 0; i < game.freeAgents.length; i++) {



              var str1 = "";
              str1 = game.freeAgents[i].name + "~" + game.freeAgents[i].age + "~" + game.freeAgents[i].superspeedway
                  + "~" + game.freeAgents[i].intermediate + "~" + game.freeAgents[i].flat + "~" + game.freeAgents[i].shortTrack
                  + "~" + game.freeAgents[i].roadCourse + "~" + game.freeAgents[i].careerTitles + "~" + game.freeAgents[i].careerWins
                  + "~" + game.freeAgents[i].careerTopFives + "~" + game.freeAgents[i].careerTopTens + "~" + game.freeAgents[i].careerWins
                  + '~\n';
              myCsv += str1;


        }


        myCsv += "Year~#~Team~Manufacturer~Sponsor~Sponsor2~Engine~Chassis~Aero~Pit Crew~Schedule~Chance~~\n";


        for (var i = 0; i < game.newTeams.length; i++) {



            var str1 = "";
            str1 = game.newTeams[i][0] + "~" + game.newTeams[i][1].number + "~"
            + game.newTeams[i][1].organization.name + "~"  + game.newTeams[i][1].sponsor1 + "~"
                + game.newTeams[i][1].sponsor2 + "~"  + game.newTeams[i][1].engine + "~"
                + game.newTeams[i][1].chassis + "~" + game.newTeams[i][1].aero + "~"
                + game.newTeams[i][1].pitCrew + "~" + game.newTeams[i][1].schedule + "~" + game.newTeams[i][2];
            myCsv += str1;


        }


        window.open('data:text/csv;charset=utf-8,' + escape(myCsv));


    }

}


