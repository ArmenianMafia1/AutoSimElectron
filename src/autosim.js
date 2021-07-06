function shuffle(array) {
    var currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


function objSort() {
    var args = arguments,
        array = args[0],
        case_sensitive, keys_length, key, desc, a, b, i;

    if (typeof arguments[arguments.length - 1] === 'boolean') {
        case_sensitive = arguments[arguments.length - 1];
        keys_length = arguments.length - 1;
    } else {
        case_sensitive = false;
        keys_length = arguments.length;
    }

    return array.sort(function (obj1, obj2) {
        for (i = 1; i < keys_length; i++) {
            key = args[i];
            if (typeof key !== 'string') {
                desc = key[1];
                key = key[0];
                a = obj1[args[i][0]];
                b = obj2[args[i][0]];
            } else {
                desc = false;
                a = obj1[args[i]];
                b = obj2[args[i]];
            }

            if (case_sensitive === false && typeof a === 'string') {
                a = a.toLowerCase();
                b = b.toLowerCase();
            }

            if (! desc) {
                if (a < b) return -1;
                if (a > b) return 1;
            } else {
                if (a > b) return -1;
                if (a < b) return 1;
            }
        }
        return 0;
    });
} //end of objSort() function

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
            this.newRaces = new Array();
            this.champions = new Array();
            this.daytona = new Array();
            this.orglist = new Array();
            this.freeAgents = new Array();
            this.freeAgentsEncouraged = new Array();
            this.freeAgentsLegal = new Array();
            this.newTeams = new Array();
            this.sponsorlist = new Array();
            this.retired = new Array();
            this.database = new Array();
            this.filtered = new Array();
            this.manulist = new Array();

            this.week = 1;
            this.points = 2000;
            this.year = 2000;
            this.carsInRace = 43;
            this.numRaces = 37;
            this.silly = false;
            this.dontSkip = false;

        }

        randomName() {
            let first = ["Ashley", "Reagan", "Ragan", "Darren", "Joey", "Robert", "Cooper", "John", "Jim", "George", "Travis", "Kelly", "Natalie", "Steve", "Stephen", "Kevin", "John", "Jack", "Adam", "Kenny", "Dave", "Ryan", "Joseph", "Johnny", "JJ", "Jeremy", "Jake", "Alex", "Allen", "Aiden", "Ricky", "Bobby", "Robert", "Alexander", "Jimmie", "Kurt", "Rick", "Darren", "Michael", "Colby", "David", "Scott", "Robby", "Henry", "Will", "Ron", "Jon", "Marc", "Mitch", "Mitchell", "Bill", "Barry", "Reed", "Sterling", "Wes", "J.J.", "Blake", "Justin", "Dustin", "Patrick", "Pat", "Will", "Casey", "Larry", "Matthew", "Matt", "Tyler", "Dale", "Louis", "Mark", "Tony", "Joe", "Kyle", "AJ", "Steven", "Jimmy", "Kevin", "Kelly", "Dawson", "Dom", "Dominic", "Jessica", "Bree", "Bri", "Mar", "Mary", "Jessie", "Alex", "Lewis", "John", "Miley", "Riley", "Ben", "Amanda", "Heather", "Jayden", "Evan", "Maria", "Chris", "Marvin", "Marv", "Marty", "Harry"]
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
                'Johnson',
                'Johnson',
                'Johnson',
                'Johnson',
                'Johnson',
                'Johnson',
                'Johnston',
                'Jones',
                'Jones',
                'Jones',
                'Jones',
                'Jones',
                'Jordan',
                'Joseph',
                'Joyce',
                'Joyner',
                'Juarez',
                'Keller',
                'Kane',
                'Kaufman',
                'Keith',
                'Keller',
                'Kelley',
                'Kelly',
                'Kennedy',
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
                'Larson',
                'Lucas',
                'Lucas',
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
                'McBride',
                'McCall',
                'McCarthy',
                'McCarty',
                'McClain',
                'McClure',
                'McConnell',
                'McCormick',
                'McCoy',
                'McCray',
                'McCullough',
                'McDaniel',
                'McDonald',
                'McDowell',
                'McFadden',
                'McFarland',
                'McGee',
                'McGowan',
                'McGuire',
                'McIntosh',
                'McIntyre',
                'McKay',
                'McKee',
                'McKenzie',
                'McKinney',
                'McKnight',
                'McLaughlin',
                'McLean',
                'McLeod',
                'McMahon',
                'McMillan',
                'McNeil',
                'McPherson',
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
                'Montgomery',
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
                'O Brien',
                'Ochoa',
                'O Connor',
                'Odom',
                'O Donnell',
                'Oliver',
                'Olsen',
                'Olson',
                'O Neal',
                'O Neil',
                'O Neill',
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
                'Richards',
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
                'Rivers',
                'Rivers',
                'Rivera',
                'Rivers',
                'Rivers',
                'Robbins',
                'Roberson',
                'Roberts',
                'Robertson',
                'Robinson',
                'Robles',
                'Robertson',
                'Rodgers',
                'Rodriguez',
                'Rodriguez',
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


            var eliteCars = 0;
            var randomGood = [98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87];
            var randomMid = [90, 89, 88, 87, 86, 85, 84, 83,82,81,80];
            var randomLow = [77, 74, 76, 77, 78, 85, 84, 83,82,81,80];

            for (var i = game.carlist.length - 1; i >= 0; --i) {
                if(game.carlist[i].driver.intermediate > 90 && game.carlist[i].engine > 90 ) {
                    eliteCars += 1;
                    if(eliteCars > 7 && game.carlist[i].driver.careerTitles < 1) {
                        if (game.carlist[i].driver.superspeedway > 90) {
                            game.carlist[i].driver.superspeedway = randomMid[Math.floor(Math.random() * randomMid.length)];
                        }
                        if (game.carlist[i].driver.intermediate > 90) {
                            game.carlist[i].driver.intermediate = randomMid[Math.floor(Math.random() * randomMid.length)];
                        }
                        if (game.carlist[i].driver.flat > 90) {
                            game.carlist[i].driver.flat = randomMid[Math.floor(Math.random() * randomMid.length)];
                        }
                        if (game.carlist[i].driver.shortTrack > 90) {
                            game.carlist[i].driver.shortTrack = randomMid[Math.floor(Math.random() * randomMid.length)];
                        }
                        if (game.carlist[i].driver.roadCourse > 90) {
                            game.carlist[i].driver.roadCourse = randomMid[Math.floor(Math.random() * randomMid.length)];
                        }
                        if (game.carlist[i].engine > 90) {
                            game.carlist[i].engine = randomLow[Math.floor(Math.random() * randomLow.length)];
                        }
                        if (game.carlist[i].aero > 90) {
                            game.carlist[i].aero = randomLow[Math.floor(Math.random() * randomLow.length)];
                        }
                        if (game.carlist[i].chassis > 90) {
                            game.carlist[i].chassis = randomLow[Math.floor(Math.random() * randomLow.length)];
                        }
                        if (game.carlist[i].pitCrew > 90) {
                            game.carlist[i].pitCrew = randomLow[Math.floor(Math.random() * randomLow.length)];
                        }

                    }
                }
                if (game.carlist[i].driver.superspeedway > 100) {
                    game.carlist[i].driver.superspeedway = randomGood[Math.floor(Math.random() * randomGood.length)];
                }
                if (game.carlist[i].driver.intermediate > 100) {
                    game.carlist[i].driver.intermediate = randomGood[Math.floor(Math.random() * randomGood.length)];
                }
                if (game.carlist[i].driver.flat > 100) {
                    game.carlist[i].driver.flat = randomGood[Math.floor(Math.random() * randomGood.length)];
                }
                if (game.carlist[i].driver.shortTrack > 100) {
                    game.carlist[i].driver.shortTrack = randomGood[Math.floor(Math.random() * randomGood.length)];
                }
                if (game.carlist[i].driver.roadCourse > 100) {
                    game.carlist[i].driver.roadCourse = randomGood[Math.floor(Math.random() * randomGood.length)];
                }

            }




            game.database = [];

            for (var i = 0; i < game.carlist.length; i++) {

                var car = game.carlist[i];

                if (game.year >= 2004) {
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



                if(car.driver.careerWins > 20 && car.driver.age > 37 && !containsObject(car.driver.name, game.database)) {

                    var notFoundName = true;

                    for (var c1 = 0; c1 < game.carlist.length ; c1++) {
                        var car1 = game.carlist[c1];
                        var splitTeam = car1.organization.name.split(' ');
                        console.log("checking ", car1.organization.name, car.driver.name, splitTeam[splitTeam.length-2])

                        console.log("split team", splitTeam);
                        if(car.driver.name.includes(splitTeam[splitTeam.length-2])) {
                            notFoundName = false;
                            break;
                        }


                    }

                    if(notFoundName) {
                        game.database.push(car.driver.name)
                        console.log("added gd", car.driver.name)
                    }

                }

                console.log("game database", game.database);




                var retiredAge = [47,48,49,50,50,51,52,53,54,55,56];

                var odds = Math.floor(Math.random() * retiredAge.length);


                if (car.driver.age > retiredAge[odds]) {

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
                var notFound = true;
                var odds = Math.floor(Math.random() * 100);
                if (game.newTeams[t][0] == game.year && game.newTeams[t][2] > odds ) {
                    for (var t1 = 0; t1 < game.carlist.length; t1++) {
                        if (game.newTeams[t][1].number == game.carlist[t1].number) {
                            notCopy = false;
                        }
                    }


                    if (notCopy) {
                        console.log("CHANGED NEW TEAM NUMBER 2", game.newTeams[t][1])
                        game.newTeams[t][1].driver = new Driver("Error")
                        game.carlist.push(game.newTeams[t][1]);

                        var retiredString2 = "#" + game.newTeams[t][1].number + " " + game.newTeams[t][1].organization.name + " "
                            + game.newTeams[t][1].organization.manufacture
                            + " will be making their debut this upcoming season!<br>"

                        for (var a; a < game.carlist.length; a++) {
                            if (game.carlist[a].organization == game.newTeams[t][1].organization.name) {
                                game.carlist[a].organization.manufacture = game.newTeams[t][1].organization.manufacture;
                            }
                        }

                        retiredString += retiredString2;
                    }
                    else {

                        var roushList = ["06", "09", "6", "7", "9", "16", "17", "26", "36", "50", "56", "50", "60", "60", "96", "97", "99"];
                        var hendrickList = ["05", "5", "15", "17", "24", "25", "35", "46", "48", "50", "84", "88"];
                        var evernhamList = ["09", "9", "10", "19", "29", "39", "79", "79", "90", "91", "94", "98", "98", "98", "99"];
                        var earnhardtList = ["01","02","03","1", "2", "3", "8","14", "15", "38","81", "83", "88"];
                        var penskeList = ["02", "06", "07", "2", "12", "21", "22", "32", "77"];
                        var yatesList = ["08", "8", "18", "28", "38", "88", "90", "98"];
                        var gibbsList = ["02", "08", "11", "17", "18", "19", "20", "28", "81", "88"];
                        var childressList = ["03", "2", "3", "13", "21", "23", "27", "29", "30", "31", "33", "98" ]
                        var pettyList = ["40","41","42","43","44","45","46"]

                        var secondChance = odds.toString();

                        if (game.newTeams[t][1].organization.name.includes("Penske")) {
                            var o1= Math.floor(Math.random() * penskeList.length);
                            secondChance = penskeList[o1];
                        }
                        if (game.newTeams[t][1].organization.name.includes("Gibbs")) {
                            var o1= Math.floor(Math.random() * gibbsList.length);
                            secondChance = gibbsList[o1];
                        }
                        if (game.newTeams[t][1].organization.name.includes("Evernham")) {
                            var o1= Math.floor(Math.random() * evernhamList.length);
                            secondChance = evernhamList[o1];
                        }
                        if (game.newTeams[t][1].organization.name.includes("Earnhardt")) {
                            var o1= Math.floor(Math.random() * earnhardtList.length);
                            secondChance = earnhardtList[o1];
                        }
                        if (game.newTeams[t][1].organization.name.includes("Roush")) {
                            var o1= Math.floor(Math.random() * roushList.length);
                            secondChance = roushList[o1];
                        }
                        if (game.newTeams[t][1].organization.name.includes("Yates")) {
                            var o1= Math.floor(Math.random() * yatesList.length);
                            secondChance = yatesList[o1];
                        }
                        if (game.newTeams[t][1].organization.name.includes("Childress")) {
                            var o1= Math.floor(Math.random() * childressList.length);
                            secondChance = childressList[o1];
                        }
                        if (game.newTeams[t][1].organization.name.includes("Petty")) {
                            var o1= Math.floor(Math.random() * pettyList.length);
                            secondChance = pettyList[o1];
                        }
                        if (game.newTeams[t][1].organization.name.includes("Hendrick")) {
                            var o1= Math.floor(Math.random() * hendrickList.length);
                            secondChance = hendrickList[o1];
                        }

                        notCopy = true;

                        for (var t1 = 0; t1 < game.carlist.length; t1++) {
                            if (game.carlist[t1].number == secondChance) {
                                notCopy = false;
                            }
                        }

                        if (notCopy) {



                            game.newTeams[t][1].number =  secondChance;
                            console.log("CHANGED NEW TEAM NUMBER ", game.newTeams[t][1]);
                            game.newTeams[t][1].driver = new Driver("Error")
                            game.carlist.push(game.newTeams[t][1]);

                            var retiredString2 = "#" + game.newTeams[t][1].number + " " + game.newTeams[t][1].organization.name + " "
                                + game.newTeams[t][1].organization.manufacture
                                + " will be making their debut this upcoming season!<br>"

                            for (var a; a < game.carlist.length; a++) {
                                if (game.carlist[a].organization == game.newTeams[t][1].organization.name) {
                                    game.carlist[a].organization.manufacture = game.newTeams[t][1].organization.manufacture;
                                }
                            }

                            retiredString += retiredString2;
                        }
                    }


                }

            }

            var testEncouraged = [];

            game.freeAgentsEncouraged = [];

            game.freeAgentsLegal = [];

            var needsFA = 0;

            for (var f = 0; f < game.freeAgents.length; f++) {

                var FA = game.freeAgents[f];

                if (FA.age > 22 && FA.age < 36 && (FA.superspeedway + FA.intermediate + FA.roadCourse + FA.shortTrack) / 4 > 73) {

                    game.freeAgentsEncouraged.push(FA);
                }

                if (FA.age > 21 && FA.age < 51 && (FA.superspeedway + FA.intermediate + FA.roadCourse + FA.shortTrack) / 4 > 55) {

                    game.freeAgentsLegal.push(FA);
                }


                if (FA.age > 60) {

                    game.retired.push(FA.driver);

                    retiredString += FA.name + " has retired!<br>"

                    game.freeAgents.splice(index, 1); // Remove the item from the array
                    var index1 = game.freeAgents.indexOf(FA);
                    if (index1 > -1) {
                        game.freeAgents.splice(index1, 1);
                    }

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
                    if(FA.age > 17) {
                        needsFA += 1;
                    }


                }

                if (FA.age > 39) {
                    FA.superspeedway -= 4;
                    FA.intermediate -= 4;
                    FA.flat -= 4;
                    FA.roadCourse -= 4;
                    FA.superspeedway -= 4;

                }

            }

            if (needsFA < 10) {
                var dvr = new Driver(game.randomName());
                var skills = [77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60]
                var skillOdds = Math.floor(Math.random() * skills.length);
                dvr.age = 21;
                dvr.superspeedway = skills[skillOdds];
                dvr.intermediate = skills[skillOdds];
                dvr.flat = skills[skillOdds];
                dvr.shortTrack = skills[skillOdds];
                dvr.roadCourse = skills[skillOdds];
                dvr.aggression = skills[skillOdds];
                game.freeAgents.push(dvr)

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

                if (car.driver.name == "N/A" || car.driver.name == "Error" ) {
                    if (game.freeAgentsLegal.length > 0) {
                        var odds = Math.floor(Math.random() * 100);



                        if (((odds < 16 && car.driver.name == "N/A") || (odds < 32 && car.driver.name == "N/A" && car.status == "Part Time")) && (game.carlist.length + 2 > game.carsInRace)) {


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

                                for (var jj = 0; jj < game.carlist.length; jj++) {

                                    if (game.carlist[jj].organization.name == car.organization.name) {
                                        game.carlist[jj].organization.manufacture = car.organization.manufacture;
                                    }
                                }


                                retiredString2 = car.driver.name + " has signed with " + car.organization.name + " to drive the #" + car.number + " " + car.organization.manufacture + "<br>";
                                retiredString += retiredString2;
                                game.freeAgentsLegal.splice(index, 1); // Remove the item from the array
                                var index1 = game.freeAgents.indexOf(car.driver);
                                if (index1 > -1) {
                                    game.freeAgents.splice(index1, 1);
                                }

                            }

                            if (car.status == "Part Time" && car.engine > 65 && odds < 62) {
                                retiredString2 = "The " + car.organization.name + " #" + car.number + " " + car.organization.manufacture + " will run full time this upcoming season!<br>";
                                retiredString += retiredString2;
                                car.status = "Full Time";
                            }


                        }

                    } else {
                        car.driver = new Driver(game.randomName());
                        var skills = [73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63]
                        var skillOdds = Math.floor(Math.random() * skills.length);
                        car.driver.age = 22;
                        car.driver.superspeedway = skills[skillOdds];
                        car.driver.intermediate = skills[skillOdds];
                        car.driver.flat = skills[skillOdds];
                        car.driver.shortTrack = skills[skillOdds];
                        car.driver.roadCourse = skills[skillOdds];
                        retiredString2 = car.driver.name + " has signed with " + car.organization.name + " to drive the #" + car.number + " " + car.organization.manufacture + "<br>";
                        retiredString += retiredString2;
                    }

                }


            }

            console.log("org list!", game.orglist);


            for (var i = game.carlist.length - 1; i >= 0; --i) {
                if (game.carlist[i].driver.name == "N/A") {
                    game.carlist.splice(i, 1);

                }




            }

            for (var i = 0; i < game.carlist.length; i++) {

                if (game.carlist[i].organization) {
                    if (!containsObject(game.carlist[i].organization.manufacture, game.manulist)) {
                        game.manulist.push(game.carlist[i].organization.manufacture);

                    }
                    if (!containsObject(game.carlist[i].organization, game.orglist)) {
                        game.orglist.push(game.carlist[i].organization);

                    }
                }
            }

            var orgodds = Math.floor(Math.random() * game.orglist.length);
            var manuodds = Math.floor(Math.random() * game.manulist.length);

            console.log("orglist!!!", game.orglist, game.orglist[orgodds])

            var canChange = true;

            var randomGood = [98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86];

            for (var i = game.carlist.length - 1; i >= 0; --i) {
                if (game.carlist[i].engine > 100) {
                    game.carlist[i].engine = randomGood[Math.floor(Math.random() * randomGood.length)];
                }
                if (game.carlist[i].aero > 100) {
                    game.carlist[i].aero = randomGood[Math.floor(Math.random() * randomGood.length)];
                }
                if (game.carlist[i].chassis > 100) {
                    game.carlist[i].chassis = randomGood[Math.floor(Math.random() * randomGood.length)];
                }
                if (game.carlist[i].pitCrew > 100) {
                    game.carlist[i].pitCrew = randomGood[Math.floor(Math.random() * randomGood.length)];
                }

            }

            for (var i = game.carlist.length - 1; i >= 0; --i) {
                if(game.carlist[i].organization) {
                    if (game.carlist[i].organization.name == game.orglist[orgodds].name) {
                        if (game.carlist[i].engine > 94 || game.carlist[i].organization.name.includes("Roush")) {
                            canChange = false;
                            console.log("can change false")
                        }
                    }

                }
            }
            console.log("sponsorlist!!", game.sponsorlist)
            var odds = Math.random() * game.sponsorlist.length
            for (var i = game.carlist.length - 1; i >= 0; --i) {
                if(game.carlist[i].organization) {
                    if (game.carlist[i].organization.name == game.orglist[orgodds].name && canChange) {
                        if(game.carlist[i] != game.manulist[manuodds]) {
                            game.carlist[i].organization.manufacture = game.manulist[manuodds];
                            retiredString2 = "#" + game.carlist[i].number + " " + game.carlist[i].organization.name + " has switched to " + game.carlist[i].organization.manufacture + "!<br>";
                            retiredString += retiredString2;
                        }

                    }
                }

                if (game.carlist[i].sponsor1 == "random") {
                    var odds = Math.floor(Math.random() * game.sponsorlist.length);
                    game.carlist[i].sponsor1 = game.sponsorlist[odds];
                }
                if (game.carlist[i].sponsor1 == "undefined") {
                    var odds = Math.floor(Math.random() * game.sponsorlist.length);
                    game.carlist[i].sponsor1 = game.sponsorlist[odds];
                }
                if (game.carlist[i].sponsor2 == "random") {
                    var odds = Math.floor(Math.random() * game.sponsorlist.length);
                    game.carlist[i].sponsor1 = game.sponsorlist[odds];
                }
                if (game.carlist[i].sponsor2 == "undefined") {
                    var odds = Math.floor(Math.random() * game.sponsorlist.length);
                    game.carlist[i].sponsor1 = game.sponsorlist[odds];
                }

            }

            var gameodds = Math.floor(Math.random() * game.carlist.length);
            console.log("sponsorlist!!", game.sponsorlist)
            var sodds = Math.floor(Math.random() * game.sponsorlist.length);


            if (game.sponsorlist[sodds] != "undefined" || (!(game.sponsorlist[sodds].includes(".com")) && !(game.sponsorlist[sodds].includes("Coin")) && !(game.sponsorlist[sodds].includes("Youtube"))  && (game.year < 2002)) ) {
                game.carlist[gameodds].sponsor1 = game.sponsorlist[sodds]
                retiredString2 = "#" + game.carlist[gameodds].number + " " + game.carlist[gameodds].organization.name + " has a new primary sponsor: " + game.carlist[gameodds].sponsor1 + "!<br>";
                retiredString += retiredString2;
            }


            var gameodds = Math.floor(Math.random() * game.carlist.length);
            console.log("sponsorlist!!", game.sponsorlist)
            var sodds = Math.floor(Math.random() * game.sponsorlist.length);

            if (game.sponsorlist[sodds] != "undefined") {
                game.carlist[gameodds].sponsor2 = game.sponsorlist[sodds]
                retiredString2 = "#" + game.carlist[gameodds].number + " " + game.carlist[gameodds].organization.name + " has a new secondary sponsor: " + game.carlist[gameodds].sponsor2 + "!<br>";
                retiredString += retiredString2;
            }

            var teamOdds2 = Math.floor(Math.random() * 100);

            console.log("team odds 2",  teamOdds2);

            if(game.database.length > 0 && teamOdds2 < 59) {

                var oddsD = Math.floor(Math.random() * game.database.length);
                var oddsO = Math.floor(Math.random() * game.carlist.length);

                var lastName = game.database[oddsD].split(' ');

                var teamName = ["Racing", "Motorsports", "Racing", "Motorsports", "Racing", "Motorsports", "Inc.", "Enterprises"]

                var teamChoice = teamName[Math.floor(Math.random() * teamName.length)];

                var teamOdds = Math.floor(Math.random() * 100);

                var newTeamName = lastName[1] + " " + teamChoice;

                if(teamOdds < 50) {
                    newTeamName = lastName[0] + " " + lastName[1] + " " + teamChoice;
                }
                else {
                    if(teamOdds < 75) {
                        var team1 = game.carlist[oddsO].organization.name.split(' ');
                        newTeamName = lastName[1] + "-" + team1[team1.length-2] + " " + teamChoice;
                    }
                    else {
                        if(teamOdds < 85) {
                            var team1 = game.carlist[oddsO].organization.name.split(' ');
                            newTeamName = team1[team1.length-2] + "-" + lastName[1] + " " + teamChoice;
                        }
                    }

                }



                console.log("last name is", lastName)
                if(game.carlist[oddsO].engine < 90) {
                    var retiredString2 = game.database[oddsD] + " has bought a majority share in " + game.carlist[oddsO].organization.name + "!<br>" +
                        "The team will now be known as " + newTeamName + "</br>";


                    retiredString += retiredString2;

                    var found = true;

                    for (var a = 0; a < game.carlist.length; a++) {
                            if (game.carlist[a].organization.name == game.carlist[oddsO].organization.name) {
                                game.carlist[a].organization.name = newTeamName;
                                game.carlist[a].organization.manufacture = game.carlist[oddsO].organization.manufacture;
                                for (var b = 0; b < game.carlist.length; b++) {
                                    if(found && game.carlist[b].driver.name == game.database[oddsD] && game.carlist[b].driver.name != game.carlist[a].driver.name) {
                                        var swap = game.carlist[a].driver;
                                        var swap2 = game.carlist[b].driver;
                                        game.carlist[a].driver = swap2;
                                        game.carlist[b].driver = swap;
                                        var retiredString2 = game.database[oddsD] + " will drive the " + game.carlist[a].organization.name + " #" + game.carlist[a].number + "!<br>";
                                        retiredString2 += swap.name + " will drive the " + game.carlist[b].organization.name + " #" + game.carlist[b].number + "!<br>";
                                        game.carlist[a].status = "Full Time";
                                        game.carlist[a].engine += 5;
                                        retiredString += retiredString2;
                                        found = false;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }


            console.log(game.carlist);

            console.log(game.retired);
            return retiredString;
        }

        runRace() {



            document.getElementById('uploads').innerHTML = "";



            var carlist2 = [...this.carlist];
            var notLockedIn = [...this.carlist];
            var lockedIn = Array();
            var superelite = Array();
            var elite = Array();
            var great = Array();
            var good = Array();
            var average = Array();
            var backup = Array()

            var carlist3 = Array();
            var points = 180;
            var points2011 = 43;


            console.log("game run races", game.numRaces);




            for (var line = 0; line < game.carlist.length; line++) {

                if(game.week < 2) {
                    game.carlist[line].driver.wins = 0;
                    game.carlist[line].driver.topFives = 0;
                    game.carlist[line].driver.topTens = 0;
                    game.carlist[line].driver.races = 0;
                }



                game.carlist[line].driver.formula = game.carlist[line].driver.points + (game.carlist[line].driver.races * 24) + (game.carlist[line].driver.topTens * 11) + (game.carlist[line].driver.careerTopTens * 6) + (game.carlist[line].driver.wins * 35) + (game.carlist[line].driver.careerWins * 20) +  (game.carlist[line].driver.careerTopFives * 8) + (game.carlist[line].engine * 9) + (game.carlist[line].chassis * 8) + (game.carlist[line].prestige * 8)
                if (game.carlist[line].status == "Part Time" || game.carlist[line].engine < 55 ) {
                    game.carlist[line].driver.formula = game.carlist[line].driver.formula / 4;
                }

                if (game.carlist[line].sponsor1 == "random") {
                    var odds = Math.floor(Math.random() * game.sponsorlist.length);
                    game.carlist[line].sponsor1 = game.sponsorlist[odds];
                }
                if (game.carlist[line].sponsor1 == "undefined") {
                    var odds = Math.floor(Math.random() * game.sponsorlist.length);
                    game.carlist[line].sponsor1 = game.sponsorlist[odds];
                }
                if (game.carlist[line].sponsor2 == "random") {
                    var odds = Math.floor(Math.random() * game.sponsorlist.length);
                    game.carlist[line].sponsor2 = game.sponsorlist[odds];
                }
                if (game.carlist[line].sponsor2 == "undefined") {
                    var odds = Math.floor(Math.random() * game.sponsorlist.length);
                    game.carlist[line].sponsor2 = game.sponsorlist[odds];
                }
            }

            if(game.week > 3) {
                carlist2 = game.displayStandings();
            }
            else {
                carlist2 = game.returnTopCars();
            }

            var initialAllowed = 30;

            if (game.week < 2) {
                initialAllowed = 26;
            }
            for (var line = 0; line < initialAllowed; line++) {
                console.log("carlist 2 line ", carlist2[line]);
                if(carlist2[line] && carlist2[line].status != "Part Time") {
                    console.log("approved");
                    lockedIn.push(carlist2[line]);
                }
            }

            console.log("initial lock ins", [...lockedIn])

            var notLockedIn = notLockedIn.filter(function (x) {
                return lockedIn.indexOf(x) < 0;
            });

            notLockedIn.sort((a, b) => (a.driver.formula < b.driver.formula) ? 1 : -1);

            console.log("not locked in!!", [...notLockedIn])

            for (var line = 0; line < notLockedIn.length; line++) {
                if (notLockedIn[line].status == "Part Time" && game.week % 2 == 0 && game.schedule[game.week-1].trackType == "Intermediate" ) {
                    var odds = Math.floor(Math.random() * 100);
                    if (odds < 70) {
                        notLockedIn.splice(line, 1); // Remove the item from the array
                    }

                }

            }


            for (var line = 0; line < 3; line++) {
                if(notLockedIn[line]) {
                    lockedIn.push(notLockedIn[line]);
                }
            }

            console.log("locked in 2!!", [...lockedIn])


            var notLockedIn = notLockedIn.filter(function (x) {
                return lockedIn.indexOf(x) < 0;
            });

            if (game.schedule[game.week-1].trackType == "Road Course") {
                console.log("ROADCOURSE");
                notLockedIn.sort((a, b) => (a.driver.roadCourse < b.driver.roadCourse) ? 1 : -1);
            }
            else {

                notLockedIn.sort((a, b) => (a.engine < b.engine) ? 1 : -1);
            }


            for (var line = 0; line < 6; line++) {
                if(notLockedIn[line] && lockedIn.length <= game.carsInRace) {
                    lockedIn.push(notLockedIn[line]);
                }
            }

            var notLockedIn = notLockedIn.filter(function (x) {
                return lockedIn.indexOf(x) < 0;
            });

            notLockedIn = shuffle(notLockedIn);

            var tLength = lockedIn.length;

            for (var line = 0; line < (game.carsInRace - tLength); line++) {
                if(notLockedIn[line]) {
                    lockedIn.push(notLockedIn[line]);
                }
            }

            var notLockedIn = notLockedIn.filter(function (x) {
                return lockedIn.indexOf(x) < 0;
            });



            console.log("locked in2!!", lockedIn)
            console.log("DNQ!!", notLockedIn)

            carlist2 = [...lockedIn];


            for (var line = 0; line < lockedIn.length; line++) {

                if(game.schedule[game.week-1].trackType == "Road Course") {
                    if(lockedIn[line].driver.roadCourse > 83) {
                        elite.push(lockedIn[line]);
                    }
                    else {
                        if(lockedIn[line].driver.roadCourse > 78) {
                            great.push(lockedIn[line]);
                        }
                        else {
                            if(lockedIn[line].driver.roadCourse > 70) {
                                good.push(lockedIn[line]);
                            }
                            else {
                                average.push(lockedIn[line]);
                            }
                        }
                    }
                }
                else{
                    if(game.schedule[game.week-1].trackType == "Superspeedway") {
                        var odds = Math.floor(Math.random() * 100);

                        if((lockedIn[line].aero + lockedIn[line].driver.engine) / 2 > 88) {
                            if (odds < 85) {
                                elite.push(lockedIn[line]);
                            }
                            else {
                                if (odds < 90) {
                                    good.push(lockedIn[line]);
                                }
                                else {
                                    average.push(lockedIn[line]);
                                }

                            }

                        }
                        else {
                            if((lockedIn[line].aero + lockedIn[line].driver.engine) / 2 > 81) {
                                great.push(lockedIn[line]);
                            }
                            else {
                                if((lockedIn[line].aero + lockedIn[line].driver.engine) / 2 > 70) {
                                    good.push(lockedIn[line]);
                                }
                                else {
                                    average.push(lockedIn[line]);
                                }
                            }
                        }
                    }
                    else{
                        var odds = Math.floor(Math.random() * 100);

                        if((game.week > 22 && game.week < 30 &&
                            lockedIn[line].driver.wins > 3 && lockedIn[line].driver.wins < 6 &&
                            lockedIn[line].driver.topTens < 26)
                            || (game.points > 2004 && game.week > 27 && game.week < 34 && lockedIn[line].driver.wins > 2 &&
                            lockedIn[line].driver.wins < 7)
                            || (game.week > 4 && game.week < 11 && lockedIn[line].driver.careerTitles > 1 &&
                                lockedIn[line].driver.wins < 4 && lockedIn[line].driver.age < 40)
                            || (game.week > 22 && game.week < 32 && lockedIn[line].driver.careerTitles > 2 &&
                                lockedIn[line].driver.wins < 9 && lockedIn[line].driver.wins > 2)) {
                            if(odds < 80 && lockedIn[line].engine > 84 && lockedIn[line].aero > 81 && lockedIn[line].driver.intermediate > 81 && lockedIn[line].driver.wins < 8 ) {
                                superelite.push(lockedIn[line]);
                            }
                            else {
                                if(odds < 85) {
                                    elite.push(lockedIn[line]);
                                }
                                else {
                                    great.push(lockedIn[line]);
                                }

                            }

                        }
                        else {
                            if((lockedIn[line].engine + lockedIn[line].driver.intermediate) / 2  > 85 ) {
                                if( lockedIn[line].driver.topTens > 18 && lockedIn[line].driver.wins == 0) {
                                    if(odds < 60) {
                                        superelite.push(lockedIn[line]);
                                    }
                                    else {
                                        average.push(lockedIn[line]);
                                    }
                                }
                                    else {
                                        if(odds < 90 && lockedIn[line].driver.topTens < game.schedule.length - 5) {
                                            elite.push(lockedIn[line]);
                                        }
                                        else {
                                            good.push(lockedIn[line]);
                                        }
                                }


                            }
                            else {
                                if((lockedIn[line].engine + lockedIn[line].driver.intermediate) / 2 > 80) {
                                    if(odds < 80) {
                                        great.push(lockedIn[line]);
                                    }
                                    else {
                                        if(odds < 80) {
                                            elite.push(lockedIn[line]);
                                        }
                                        else {
                                            average.push(lockedIn[line]);
                                        }
                                    }
                                }
                                else {
                                    if((lockedIn[line].engine + lockedIn[line].driver.intermediate) / 2 > 70) {
                                        good.push(lockedIn[line]);
                                    }
                                    else {
                                        if(odds < 80) {
                                            average.push(lockedIn[line]);
                                        }
                                        else {
                                            good.push(lockedIn[line]);
                                        }

                                    }
                                }
                            }
                        }

                    }

                }

            }

            if (game.week > -5) {

                console.log("elite great1", [...superelite], [...elite], [...great], [...good],[...average]);


                var val1 = game.carsInRace;

                for (var line = 0; line < val1; line++) {

                    var car = new Car();

                    var driver = new Driver("first last");

                    var odds = Math.floor(Math.random() * 100);

                    if (superelite.length > 0) {
                        var index = Math.floor(Math.random() * superelite.length);
                        carlist3.push(superelite[index]);
                        car = superelite[index];
                        driver = superelite[index].driver;
                        superelite.splice(index, 1); // Remove the item from the array
                    } else {
                        if (elite.length > 0) {
                            var index = Math.floor(Math.random() * elite.length);
                            carlist3.push(elite[index]);
                            car = elite[index];
                            driver = elite[index].driver;
                            elite.splice(index, 1); // Remove the item from the array
                        }
                        else {
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
                        game.schedule[this.week - 1].raceWinner = winningStr;

                        if (game.week-1 == 0) {
                            var str1 = game.year + ' | ' + car.number + ' ' + car.driver.name
                                + ' | Primary Sponsor: ' + car.sponsor1
                                + ' | Team: ' + car.organization.name
                                + ' | Make: ' + car.organization.manufacture + '<br>';
                            html += str1;


                            game.daytona.push(str1)
                        }
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
                        car.pitCrew += 4;
                    }

                    if (line < 28 && (car.engine < 70 || car.aero < 74)) {
                        car.engine += 4;
                        car.chassis += 4;
                        car.aero += 4;
                        car.pitCrew += 4;
                    }


                    driver.races += 1
                    driver.careerRaces += 1;

                    if(game.points == 0) {
                        switch (line) {
                            case 0:
                                driver.points += 25;
                                break;
                            case 1:
                                driver.points += 18;
                                break;
                            case 2:
                                driver.points += 15;
                                break;
                            case 3:
                                driver.points += 12;
                                break;
                            case 4:
                                driver.points += 10;
                                break;
                            case 5:
                                driver.points += 8;
                                break;
                            case 6:
                                driver.points += 6;
                                break;
                            case 7:
                                driver.points += 4;
                                break;
                            case 8:
                                driver.points += 2;
                                break;
                            case 9:
                                driver.points += 1;
                        }
                    }
                    else {
                        if(game.points > 2010) {
                            driver.points += points2011;
                            if (line == 0) {
                                if(game.points > 2013 && game.week > game.schedule.length - 10 && driver.points > 1500) {
                                    driver.points += 700;
                                }
                                driver.points += 3;
                            }
                            points2011 -= 1;

                        }
                        else {
                            driver.points += points;
                        }


                        if (points > 150) {
                            points -= 5;
                        } else {
                            points -= 3;
                        }

                    }


                }

            }

            if(game.points > 2003 && game.points < 2014 && game.week == game.schedule.length - 10) {
                console.log("display points", game.displayStandings())
                var st =  game.displayStandings();
                for (var i1 = 0; i1 < 10; i1++) {

                    st[i1].driver.points = 5000 + (st[i1].driver.wins * 5);
                }
            }

            if(game.points > 2013) {
                console.log("schedule!!!", game.schedule)

                console.log("display points", game.calculatePoints())
                var st = game.calculatePoints();
                var activate = true;
                if (game.week == game.schedule.length - 10) {
                    console.log("sweet 16!!!!")
                        var pts = game.calculatePoints();
                        console.log("ST1 is", st);
                        var ctr = 0;
                        for (var i1 = 0; i1 < 16; i1++) {

                            if(pts[0][i1]) {
                                st = pts[0];
                            } else {
                                st = pts[1];
                                if(activate) {
                                    ctr = 0;
                                    activate = false;
                                }


                            }
                            console.log("St is", st[i1]);
                            st[ctr].driver.points = 2000 + (st[ctr].driver.wins * 5);
                            /*if(ctr == 0) {
                                st[ctr].driver.points += 15;
                            }
                            if(i1 == 1) {
                                st[ctr].driver.points += 10;
                            }
                            if(i1 == 2) {
                                st[ctr].driver.points += 5;
                            }*/
                            ctr +=1;




                    }

                }
                if (game.week == game.schedule.length - 7) {
                    console.log("sweet 12!!!!")
                    var st = game.displayStandings();
                    for (var i1 = 0; i1 < 12; i1++) {
                        st[i1].driver.points = 3000;

                    }

                }
                if (game.week == game.schedule.length - 4) {
                    console.log("sweet 8!!!!")
                    var st = game.displayStandings();
                    for (var i1 = 0; i1 < 8; i1++) {
                        st[i1].driver.points = 4000;
                    }

                }
                if (game.week == game.schedule.length - 1) {
                    console.log("sweet 4!!!!")
                    var st = game.displayStandings();
                    for (var i1 = 0; i1 < 4; i1++) {
                        st[i1].driver.points = 5000;
                    }

                }
            }

            var filteredArray = backup.filter(function (x) {
                return carlist3.indexOf(x) < 0;
            });

            game.filtered = notLockedIn;


            return carlist3;
        }

        displayStandings() {
            var carlist2 = [...this.carlist];
            var carlist3 = Array();

            carlist2.sort((a, b) => (a.driver.points < b.driver.points) ? 1 : -1);



            return carlist2;

        }


        displayTeams() {
            var carlist2 = [...this.carlist];
            var carlist3 = Array();

            carlist2.sort((a, b) => (a.number > b.number) ? 1 : -1);

            carlist2.sort((a, b) => (a.organization.name > b.organization.name) ? 1 : -1);



            return carlist2;

        }

        calculatePoints() {
            var carlist2 = [...this.carlist];

            var carlist3 = new Array();

            carlist2 = objSort(carlist2, 'driver.wins', 'driver.points');

            for (var i = 0; i < game.carlist.length; i++) {
                if (game.carlist[i].driver.wins < 1 || game.carlist[i].driver.races < game.schedule.length-11) {
                    carlist3.push(game.carlist[i]);

                }
            }

            var filteredArray = carlist2.filter(function (x) {
                return carlist3.indexOf(x) < 0;
            });

            filteredArray.sort((a, b) => (a.driver.wins <  b.driver.wins) ? 1 : -1);

            carlist3.sort((a, b) => (a.driver.points < b.driver.points) ? 1 : -1);

            return Array(filteredArray, carlist3);

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
            this.sponsor2 = "random";
            this.driver = driver;
            this.organization = organization;
            this.engine = 0;
            this.chassis = 0;
            this.aero = 0;
            this.pitCrew = 0;
            this.prestige = 0;
            this.status = "Full Time";
            this.oldDriver = 0;


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
            this.aggression = 0;
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
            var newSched = false;
            var freeA = false;
            var yearIDX = 1000;
            var newSponsors = false;
            var startraces = false;
            var newT = false;
            var daytona = false;
            var champ = false;
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


                if (newSched) {
                    if(data[0] != "Name" && data[0] != "Race Name") {
                        var race = new Race(data[0], data[1], data[2], "N/A");
                        console.log("NEW RACE!", race)
                        game.newRaces.push(race);
                    }

                }

                if (sched) {

                    if (data[0] == "New Races") {
                        console.log("stopped making new races", game)
                        game.numRaces = game.schedule.length;
                        sched = false;
                        newSched = true;
                    } else {
                        if(data[0] != "Race Name") {
                            var race = new Race(data[1], data[2], data[3], "N/A");
                            console.log("RACE!", race)
                            game.schedule.push(race);
                        }

                    }
                }

                if (daytona) {
                    game.daytona.push(data[0]);
                }

                if (data[0] == "Season Opener Winners") {
                    champ = false;
                    daytona = true;
                    sched = false;
                    gameinfo = false;
                    newSponsors = false;

                }

                if (champ) {
                    game.champions.push(data[0]);
                }

                if (data[0] == "Game Champions") {
                    champ = true;
                    sched = false;
                    gameinfo = false;
                    newSponsors = false;

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
                        car.organization.name = data[2];
                        car.organization.manufacture = data[3];
                        /*for(var o = 1; o < game.orglist.length; o++) {
                            if(data[2] == game.orglist[o].name) {
                                doesNotExist = false;
                                car.organization = game.orglist[o];
                                //game.orglist[o].manufacture = data[3];
                            }
                        }
                        if(doesNotExist){
                            car.organization.name = data[2];
                            car.organization.manufacture = data[3];
                            game.orglist.push(car.organization);
                        }*/

                        car.sponsor1 = data[4];
                        car.sponsor2 = data[5];
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
                    if(data[0] == "Year" && data[1] == "#") {
                        console.log("stopped making new races", game);
                        freeA = false;
                        newT = true;
                    }
                    else {
                        var driver = new Driver(data[0]);
                        driver.age = parseInt(data[1]);
                        driver.superspeedway = parseInt(data[2]);
                        driver.intermediate = parseInt(data[3]);
                        driver.flat = parseInt(data[4]);
                        driver.shortTrack = parseInt(data[5]);
                        driver.roadCourse = parseInt(data[6]);
                        driver.aggression = parseInt(data[7]);
                        driver.careerTitles = parseInt(data[8]);
                        driver.careerWins = parseInt(data[9]);
                        driver.careerTopFives = parseInt(data[10]);
                        driver.careerTopTens = parseInt(data[11]);
                        driver.careerRaces = parseInt(data[12]);

                        game.freeAgents.push(driver);
                        console.log("pushed", driver.name, driver.age);
                    }
                }

                if (data[0] == "Name" && data[1] == "Age") {
                    sched = false;
                    freeA = true;
                    newSched = false;
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

                    if(containsObject(organization, game.orglist)) {
                        game.orglist.push(organization);
                    }


                    car.sponsor2 = data[3];

                    car.engine = parseInt(data[20]);
                    car.chassis = parseInt(data[21]);
                    car.aero = parseInt(data[22]);
                    car.pitCrew = parseInt(data[23]);
                    car.prestige = parseInt(data[24]);
                    car.status = data[25];

                    game.carlist.push(car);
                    console.log("pushed car", car)
                }








                }


        };
        reader.readAsText(file);




    };


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
    html += '<input type="submit" id = "team" name="giveup" value="Teams">';
    html += '<input type="submit" id = "save" name="giveup" value="Save">';
    html += '<input type="submit" id = "champions" name="giveup" value="Champions">';
    html += '<input type="submit" style="width:260px" id = "daytona" name="giveup" value="Season Opener Winners">';
    //html += '<input type="submit" id = "newgame" name="new" value="New Game" onclick="Bullscows()"></p>';
    //html += '<div id="hint1">'
    ///html += '<p><input type="submit" id = "hint" name="hint" value="Hint!"></p></div>';
    html += '</div>';
    html += '<p id="message">&nbsp;</p>';
    html += '</form>'
    html += '</fieldset>';
    html += '</table></body> ';

    document.createElement("playoffs");

    document.getElementById("play-area").innerHTML = html;

    document.getElementById("race").onclick = function (event) {
        event.preventDefault();

        var T = document.getElementById("game-changes");
        T.style.display = "none";  // <-- Set it to block


        if (game.dontSkip) {


            document.getElementById("message").innerHTML = "<h1>" + game.year + " User Changes</h1>";

            var html = "<h3>Press Run Race to Advance to Next Season</h3>";

            html += "<h3>Change Points Format</h3>";

            var T = document.getElementById("game-changes");
            T.style.display = "block";  // <-- Set it to block

            ///document.getElementById("game-changes").innerHTML += html;


            document.getElementById("original").onclick = function (event) {
                var T = document.getElementById("game-changes2");
                T.style.display = "block";  // <-- Set it to block
                document.getElementById("game-changes2").innerHTML = "<h3 class='white'>Changed points system to the original format!</h3>";
                event.preventDefault();
                game.points = 2000;
            }
            document.getElementById("chase").onclick = function (event) {
                var T = document.getElementById("game-changes2");
                T.style.display = "block";  // <-- Set it to block
                document.getElementById("game-changes2").innerHTML = "<h3 class='white'>Changed points system to the chase format!</h3>";
                event.preventDefault();
                game.points = 2005;
            }
            document.getElementById("playoffs").onclick = function (event) {
                var T = document.getElementById("game-changes2");
                T.style.display = "block";  // <-- Set it to block
                document.getElementById("game-changes2").innerHTML = "<h3 class='white'>Changed points system to the playoff format!</h3>";

                event.preventDefault();
                game.points = 2020;
            }
            document.getElementById("grand").onclick = function (event) {
                var T = document.getElementById("game-changes2");
                T.style.display = "block";  // <-- Set it to block
                document.getElementById("game-changes2").innerHTML = "<h3 class='white'>Changed points system to the Grand Prix format!</h3>";

                event.preventDefault();
                game.points = 0;
            }

            /*
            document.getElementById("original").onclick = function (event) {
                event.preventDefault();
                game.points = 2000;
            }
            document.getElementById("chase").onclick = function (event) {
                event.preventDefault();
                game.points = 2005;
            }
            document.getElementById("playoffs").onclick = function (event) {
                event.preventDefault();
                game.points = 2020;
            }*/



            game.dontSkip = false;
        }

        else {
            if (game.week-1 != game.schedule.length && game.silly == false) {

                console.log("game schedule", game.schedule)


                console.log("game.week-1 is,", game.week, game.schedule[game.week-1])

                document.getElementById("message").innerHTML = "<h1>" + game.year + " Week " + game.week + " | " + game.schedule[game.week - 1].raceName + " at " + game.schedule[game.week - 1].trackName + "</h1>";


                var results = game.displayStandings();
                for (var i = 0; i < results.length; i++) {
                    if (results[i].sponsor1 == "random") {
                        var odds = Math.floor(Math.random() * game.sponsorlist.length);
                        results[i].sponsor1 = game.sponsorlist[odds];
                    }
                    if (results[i].sponsor1 == "undefined") {
                        var odds = Math.floor(Math.random() * game.sponsorlist.length);
                        results[i].sponsor1 = game.sponsorlist[odds];
                    }
                    if (results[i].sponsor2 == "random") {
                        var odds = Math.floor(Math.random() * game.sponsorlist.length);
                        results[i].sponsor2 = game.sponsorlist[odds];
                    }
                    if (results[i].sponsor2 == "undefined") {
                        var odds = Math.floor(Math.random() * game.sponsorlist.length);
                        results[i].sponsor2 = game.sponsorlist[odds];
                    }
                }


                results = game.runRace();

                var results2 = [...results];


                game.week += 1;

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

                html += " | Career Titles: ";

                html += results[0].driver.careerTitles;


                html += " | Career Wins: ";

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
                    var odds = Math.floor(Math.random() * 100);
                    var num1 = i + 1;

                    if (odds > 20) {
                        var str1 = num1 + ' | #' + results[i].number + ' ' +
                            results[i].driver.name + ' | ' +
                            results[i].sponsor1 + ' | ' +
                            results[i].organization.name + ' | ' +
                            results[i].organization.manufacture + '\n<br>';
                    }
                    else {
                        var str1 = num1 + ' | #' + results[i].number + ' ' +
                            results[i].driver.name + ' | ' +
                            results[i].sponsor2 + ' | ' +
                            results[i].organization.name + ' | ' +
                            results[i].organization.manufacture + '\n<br>';
                    }

                    html += str1;


                }


                html += "</p><h3>DNQ's</h3><p class='standings'>"

                var results = game.filtered;

                if(game.filtered) {
                    for (var i = 0; i < game.filtered.length; i++) {
                        var num1 = i + 1;
                        var str1 = num1 + ' | #' + results[i].number + ' ' +
                            results[i].driver.name + ' | ' +
                            results[i].sponsor1 + ' | ' +
                            results[i].organization.name + ' | ' +
                            results[i].organization.manufacture + '\n<br>';
                        html += str1;


                    }
                }

                html += "</p><br>";

                html += "</p><h3>Race Notes</h3><p class='standings'>"

                randIDX = Math.floor(Math.random() * 12)

                var goodRun = 0;
                if(results2) {
                    for (var i = 0; i < results2.length; i++) {

                        var odds = Math.floor(Math.random() * 100);
                        if(i == 0) {
                            if (results2[i].driver.intermediate < 76 || results2[i].engine < 80) {
                                var str1 = '#' + results2[i].number + ' ' +
                                    results2[i].driver.name + ' pulled off the upset at ' + game.schedule[game.week-2].trackName + '!\n<br>';
                                html += str1;
                            }
                            else {
                                if (odds < 25) {
                                    var str1 = '#' + results2[i].number + ' ' +
                                        results2[i].driver.name + ' won at ' + game.schedule[game.week-2].trackName + '\n<br>';
                                    html += str1;
                                }

                                else {
                                    if (odds < 55) {
                                        var str1 = '#' + results2[i].number + ' ' +
                                            results2[i].driver.name + ' made a last lap pass to win at ' + game.schedule[game.week-2].trackName + '\n<br>';
                                        html += str1;
                                    }
                                    else {
                                        var str1 = '#' + results2[i].number + ' ' +
                                            results2[i].driver.name + ' took home the checkered flag at ' + game.schedule[game.week-2].trackName + '\n<br>';
                                        html += str1;
                                    }

                                }
                            }


                        }

                        if(i > 0 && i < 12) {
                            if (results2[i].driver.intermediate < 72 || results2[i].engine < 73 && goodRun < 3) {

                                if ( results2[i].pitCrew > 85) {
                                    var str1 = '#' + results2[i].number + ' ' +
                                        results2[i].driver.name + ' pulled off a good finish thanks to a smart strategy call.\n<br>';
                                    html += str1;
                                }
                                else {
                                    if (i < 3 && game.schedule[game.week-2].trackType == "Superspeedway" ) {
                                        var str1 = '#' + results2[i].number + ' ' +
                                            results2[i].driver.name + ' nearly came home with the upset!\n<br>';
                                        html += str1;
                                    }
                                    else {
                                        var str1 = '#' + results2[i].number + ' ' +
                                            results2[i].driver.name + ' impressed many with a good run.\n<br>';
                                        html += str1;
                                    }

                                }

                                goodRun += 1;
                            }
                        }

                        if (i > 24 && i < 33) {
                            if (results2[i].driver.intermediate > 80 || results2[i].engine > 80) {
                                if (odds < 60) {
                                    var str1 = '#' + results2[i].number + ' ' +
                                        results2[i].driver.name + ' ran well, but was caught up in an accident and finished off the pace.\n<br>';
                                    html += str1;
                                }
                                else {
                                    if (odds < 70) {
                                        var str1 = '#' + results2[i].number + ' ' +
                                            results2[i].driver.name + ' led early, but was caught up in an accident and finished off the pace.\n<br>';
                                        html += str1;
                                    }
                                    else {
                                        if (odds < 80 && results2[i]) {
                                            var str1 = '#' + results2[i].number + ' ' +
                                                results2[i].driver.name + ' had a solid day ruined by a pit road speeding penalty.\n<br>';
                                            html += str1;
                                        }
                                        else {
                                            var str1 = '#' + results2[i].number + ' ' +
                                                results2[i].driver.name + ' ran near the front early on, but blew a tire and never recovered.\n<br>';
                                            html += str1;
                                        }
                                    }

                                }
                            }

                        }

                        if(i > game.carsInRace-7) {
                            if(results2[i]) {
                                if (results2[i].driver.intermediate > 79 || results2[i].engine > 77) {
                                    if (odds < 75) {
                                        var str1 = '#' + results2[i].number + ' ' +
                                            results2[i].driver.name + ' was involved in a crash.\n<br>';
                                        html += str1;
                                    }
                                    else {
                                        if (odds < 90 && results2[i].engine < 87) {
                                            var str1 = '#' + results2[i].number + ' ' +
                                                results2[i].driver.name + ' blew an engine.\n<br>';
                                            html += str1;
                                        }
                                        else {
                                            var str1 = '#' + results2[i].number + ' ' +
                                                results2[i].driver.name + ' retired due to overheating.\n<br>';
                                            html += str1;
                                        }
                                    }
                                }
                                else {
                                    if(i > game.carsInRace-3) {
                                        var str1 = '#' + results2[i].number + ' ' +
                                            results2[i].driver.name + ' was involved in a crash.\n<br>';
                                        html += str1;
                                    }
                                }
                            }

                        }

                        if (i == randIDX) {
                            if(results2[i].engine > 76 || results2[i].driver.intermediate > 70 ) {
                                var str1 = '#' + results2[i].number + ' ' +
                                    results2[i].driver.name + ' led the most laps.\n<br>';
                                html += str1;
                            }
                            else {
                                if (results2[randIDX+1]) {
                                    var str1 = '#' + results2[randIDX+1].number + ' ' +
                                        results2[randIDX+1].driver.name + ' led the most laps.\n<br>';
                                    html += str1;
                                }
                            }

                        }

                    }
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

                game.dontSkip = false;

            }

            else {
                if (game.silly) {
                    game.dontSkip = true;
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

                    game.dontSkip = true;
                    game.silly = false;

                }
                else {
                    var html = '';

                    //var html = '<form id="gameform"><fieldset>';

                    //var str2 = '<h1>' +  $_POST["name"] + "'s Bulls and Cows</h1>";



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
                        + ' | Primary Sponsor: ' + results[i].sponsor1
                        + ' | Team: ' + results[i].organization.name
                        + ' | Make: ' + results[i].organization.manufacture + '<br>';
                    html += str1;


                    game.champions.push(str1)


                    game.week = 1;
                    game.year += 1;


                    game.silly = true;
                    game.noSkip = false;
                }



            }
        }




        document.getElementById("message").innerHTML += html;
    }

    document.getElementById("fastsim").onclick = function (event) {
        event.preventDefault();

        for (var j = 0; j < 15; j++) {

            if(game.week > 1 && game.week < game.schedule.length) {
                if (game.silly == false) {

                    console.log("game schedule", game.schedule)


                    console.log("game.week-1 is,", game.week, game.schedule[game.week-1])

                    document.getElementById("message").innerHTML = "<h1>" + game.year + " Week " + game.week + " | " + game.schedule[game.week - 1].raceName + " at " + game.schedule[game.week - 1].trackName + "</h1>";


                    var results = game.displayStandings();
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].sponsor1 == "random") {
                            var odds = Math.floor(Math.random() * game.sponsorlist.length);
                            results[i].sponsor1 = game.sponsorlist[odds];
                        }
                        if (results[i].sponsor1 == "undefined") {
                            var odds = Math.floor(Math.random() * game.sponsorlist.length);
                            results[i].sponsor1 = game.sponsorlist[odds];
                        }
                        if (results[i].sponsor2 == "random") {
                            var odds = Math.floor(Math.random() * game.sponsorlist.length);
                            results[i].sponsor2 = game.sponsorlist[odds];
                        }
                        if (results[i].sponsor2 == "undefined") {
                            var odds = Math.floor(Math.random() * game.sponsorlist.length);
                            results[i].sponsor2 = game.sponsorlist[odds];
                        }
                    }


                    results = game.runRace();
                    game.dontSkip = false;


                    game.week += 1;

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
                        var odds = Math.floor(Math.random() * 100);
                        var num1 = i + 1;

                        if (odds > 20) {
                            var str1 = num1 + ' | #' + results[i].number + ' ' +
                                results[i].driver.name + ' | ' +
                                results[i].sponsor1 + ' | ' +
                                results[i].organization.name + ' | ' +
                                results[i].organization.manufacture + '\n<br>';
                        }
                        else {
                            var str1 = num1 + ' | #' + results[i].number + ' ' +
                                results[i].driver.name + ' | ' +
                                results[i].sponsor2 + ' | ' +
                                results[i].organization.name + ' | ' +
                                results[i].organization.manufacture + '\n<br>';
                        }

                        html += str1;


                    }


                    html += "</p><h3>DNQ's</h3><p class='standings'>"

                    var results = game.filtered;

                    if(game.filtered) {
                        for (var i = 0; i < game.filtered.length; i++) {
                            var num1 = i + 1;
                            var str1 = num1 + ' | #' + results[i].number + ' ' +
                                results[i].driver.name + ' | ' +
                                results[i].sponsor1 + ' | ' +
                                results[i].organization.name + ' | ' +
                                results[i].organization.manufacture + '\n<br>';
                            html += str1;


                        }
                    }

                    html += "</p><br>";


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

                }
                else {

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

                        game.dontSkip = true;
                        game.silly = false;


                    }
                    else if (dontSkip) {
                        var ss = game.sillySeason();
                        console.log("SILLY SEASON", ss);

                        document.getElementById("message").innerHTML = "<h1>" + game.year + " Changes</h1>";

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

                        game.dontSkip = false;
                    }
                    else {

                        var html = '';

                        //var html = '<form id="gameform"><fieldset>';

                        //var str2 = '<h1>' +  $_POST["name"] + "'s Bulls and Cows</h1>";



                        document.getElementById("message").innerHTML = "<h1>" + game.year + " Final Standings</h1>";

                        game.dontSkip = true;

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
                            + ' | Primary Sponsor: ' + results[i].sponsor1
                            + ' | Team: ' + results[i].organization.name
                            + ' | Make: ' + results[i].organization.manufacture + '<br>';
                        html += str1;


                        game.champions.push(str1)


                        game.week = 1;
                        game.year += 1;


                        game.silly = true;


                    }
                }

            }
            else {
                var html = "";
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

    document.getElementById("team").onclick = function (event) {
        event.preventDefault();


        document.getElementById("message").innerHTML = "<h1>" + game.year + " Teams</h1>";


        var results = game.displayTeams();

        console.log(results);

        var html = "<p class='standings2'>";

        for (var i = 0; i < results.length; i++) {
            var num1 = i + 1;
            var str1 = "#"  + results[i].number + ' ' + results[i].driver.name
                + ' | Primary Sponsor: ' + results[i].sponsor1
                + ' | Secondary Sponsor: ' + results[i].sponsor2
                + ' | Team: ' + results[i].organization.name
                + ' | Make: ' + results[i].organization.manufacture
                + '<br>';
            if(i < results.length-1) {
                if (results[i].organization.name != results[i+1].organization.name ) {
                    str1 += '<br>';
                }
            }
            html += str1;


        }

        html += "</p>";


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

    document.getElementById("daytona").onclick = function (event) {
        event.preventDefault();


        document.getElementById("message").innerHTML = "<h1>Season Opener Winners</h1>";


        var html = "<p class='standings'>";
        for (i = 0; i < game.daytona.length; i++) {
            html += game.daytona[i];
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
                + results[i].aero + "~" + results[i].pitCrew+ "~"
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

        console.log("saving schedule", game.newRaces, game.newRaces);
        for (var j = 0; j < game.newRaces.length; j++) {
            var num1 = j + 1;
            var str1 = game.newRaces[j].raceName + "~" + game.newRaces[j].trackName + "~" + game.newRaces[j].trackType
                + '~\n';
            console.log("SAVED RACE!", str1);
            myCsv += str1;


        }

        myCsv += "Name~Age~SS~IN~FL~ST~RC~Aggr.~Career Titles~Career Wins~Career Top 5's~Career Top 10's~Career Races~\n";

        console.log("free agents", game.freeAgents, game.freeAgents.length);


        for (var i = 0; i < game.freeAgents.length; i++) {



              var str1 = "";
              str1 = game.freeAgents[i].name + "~" + game.freeAgents[i].age + "~" + game.freeAgents[i].superspeedway
                  + "~" + game.freeAgents[i].intermediate + "~" + game.freeAgents[i].flat + "~" + game.freeAgents[i].shortTrack
                  + "~" + game.freeAgents[i].roadCourse + "~" + game.freeAgents[i].aggression + "~" + game.freeAgents[i].careerTitles + "~" + game.freeAgents[i].careerWins
                  + "~" + game.freeAgents[i].careerTopFives + "~" + game.freeAgents[i].careerTopTens + "~" + game.freeAgents[i].careerWins
                  + '~\n';
              myCsv += str1;


        }


        myCsv += "Year~#~Team~Manufacturer~Sponsor~Sponsor2~Engine~Chassis~Aero~Pit Crew~Schedule~Chance~~\n";

        console.log("game new teams,", game.newTeams);

        for (var i = 0; i < game.newTeams.length; i++) {



            var str1 = "";
            if(game.newTeams[i][0]) {
                str1 = game.newTeams[i][0] + "~" + game.newTeams[i][1].number + "~"
                + game.newTeams[i][1].organization.name + "~"   + game.newTeams[i][1].organization.manufacture + "~" + game.newTeams[i][1].sponsor1 + "~"
                    + game.newTeams[i][1].sponsor2 + "~"  + game.newTeams[i][1].engine + "~"
                    + game.newTeams[i][1].chassis + "~" + game.newTeams[i][1].aero + "~"
                    + game.newTeams[i][1].pitCrew + "~" + game.newTeams[i][1].schedule + "~" + game.newTeams[i][2] + "~\n";
                myCsv += str1;
            }


        }
        myCsv += "Sponsors~\n";

        console.log("saved sponsorlist1", game.sponsorlist)

        for (var i = 0; i < game.sponsorlist.length; i++) {
            myCsv += game.sponsorlist[i];
            myCsv += "~\n";
        }

        myCsv += "\nGame Champions~\n";

        console.log("game champions,", game.champions);
        i = 0;

        for (i = 0; i < game.champions.length; i++) {



            var str1 = "";
            console.log("game champions i,", game.champions[i]);
            str1 = game.champions[i] + "~\n";
            myCsv += str1;


        }

        myCsv += "\nSeason Opener Winners~\n";

        console.log("game champions,", game.daytona);
        i = 0;

        for (i = 0; i < game.daytona.length; i++) {



            var str1 = "";
            console.log("game daytona i,", game.daytona[i]);
            str1 = game.daytona[i] + "~\n";
            myCsv += str1;


        }



        window.open('data:text/csv;charset=utf-8,' + escape(myCsv));


    }

}


