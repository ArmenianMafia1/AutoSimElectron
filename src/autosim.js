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
        this.yearsLeft = 0;

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
        this.morale = 100;
        this.age = 0;
        this.formula = 0;

    }
}

class Organization {
    constructor(name, manufacture) {
        this.name = name;
        this.originalName = name;
        this.manufacture = manufacture;
    }
}

class Player {

    constructor() {
        this.name = "N/A";
        this.mode = "N/A";
        this.diff = "Normal";
        this.team = "N/A"
        this.money = 10000;
        this.selectedCar = null;
        this.selectedFA = null;
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

var selectedCar=null;
var selectedFA=null;
var globalCost = 0;
var globalMoney = 1;
var firedDriver=null;
var globalFreeAgents = Array();
var globalTeam = null;
var sillySeason=false;
var carsWithNoSponsor= Array();
var yrsLeft = 0;
var shutDown = false;

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
        this.boughtTeam = new Array();
        this.filtered = new Array();
        this.manulist = new Array();
        this.player = new Player();
        this.instanceData = "Display Me";

        this.DisplayData = function() {
            alert(this.instanceData);
        }




        this.week = 1;
        this.points = 2000;
        this.year = 2000;
        this.carsInRace = 43;
        this.numRaces = 37;
        this.maxRaces = 37;
        this.silly = false;
        this.dontSkip = false;

    }

    randomName() {
        let first = ["Ashley", "Reagan", "Olivia", "Emma", "Sophia", "Izzy", "Mia", "Charlotte", "Rebecca", "Sasha", "Kayla", "Christie", "Jordie", "Jordan", "Abigail", "Chris", "Corey", "Cory", "Luke", "Ragan", "Avery", "Don", "Donnie", "Ron", "Makayla", "Jaden", "Jason", "Jerry", "John", "Johny", "Marcus", "Markus", "Jeb", "Blake", "Lake", "Chase", "Casey", "Jeffery", "Jeff", "Cole", "Colton", "Hunter", "Aiden", "Ragan", "Darren", "Joey", "Robert", "Cooper", "John", "Jim", "George", "Travis", "Kelly", "Natalie", "Steve", "Steve", "Steven", "Steven", "Joey", "Joe", "Bubba", "Tyrone", "Mario", "George", "Jeff", "James", "Billy", "Frank", "Freddie", "Larry", "Lawrence", "Jake", "Dane", "Devin", "Paul", "Tay", "Taylor", "Stephen", "Kevin", "Kevin", "Devin", "Martin", "Marvin", "Joe", "Kerry", "Kenny", "Hailey", "Hailee", "Bailey", "Randy", "Boston", "Mikey", "Tommy", "Tom", "John", "Jack", "Adam", "Kenny", "Dave", "Ryan", "Joseph", "Johnny", "JJ", "Jeremy", "Jake", "Alex", "Allen", "Aiden", "Ricky", "Bobby", "Robert", "Alexander", "Jimmie", "Kurt", "Rick", "Darren", "Michael", "Colby", "David", "Scott", "Robby", "Henry", "Will", "Ron", "Jon", "Marc", "Mitch", "Mitchell", "Bill", "Barry", "Reed", "Sterling", "Wes", "J.J.", "Blake", "Justin", "Dustin", "Patrick", "Pat", "Will", "Casey", "Larry", "Matthew", "Matt", "Tyler", "Dale", "Louis", "Mark", "Tony", "Joe", "Kyle", "AJ", "Steven", "Jimmy", "Kevin", "Kelly", "Dawson", "Dom", "Dominic", "Jessica", "Bree", "Bri", "Mar", "Mary", "Jessie", "Alex", "Lewis", "John", "Miley", "Riley", "Ben", "Amanda", "Heather", "Jayden", "Evan", "Maria", "Chris", "Marvin", "Dan", "Daniel", "Riley", "Ricky", "Julian", "Jim", "Marty", "Harry"]
        let last = ['Lahey', 'Abbott',
            'Acevedo',
            'Acosta',
            'Adams',
            'Adkins',
            'Aguilar',
            'Aguirre',
            'Albert',
            'Alexander',
            'Adams',
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
            'Bartlett',
            'Barber',
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
            'Boston',
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
            'Campbell',
            'Cannon',
            'Cantrell',
            'Carter',
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
            'Power',
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
            'Dreamer',
            'Duncam',
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
            'Estrada',
            'Evans',
            'Everett',
            'Evans',
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
            'Galloway',
            'Garcia',
            'Gardner',
            'Garner',
            'Garrett',
            'Garrison',
            'Garza',
            'Gates',
            'Gay',
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

        this.carlist = this.displayStandings();

        var retiredString = "";

        console.log("GAME MAX RACES", this.maxRaces)
        if(this.year % 7 == 0 && this.newRaces.length > 0) {
            while (this.schedule.length < this.maxRaces) {
                var race = this.newRaces.pop();
                this.schedule.splice(Math.floor(Math.random() * (this.schedule.length + 1)), 0, race);
                console.log("ADDED RACE", this.schedule)
                retiredString += "Added Race to Schedule! " + race.trackName + "<br>";


            }
        }

        var wantToExpand = new Set();
        var eligibleForExpansion = [];

        for(var c = 0; c < this.carlist.length; c++) {
            if(this.carlist[c].engine > 91 || this.carlist[c].driver.careerTitles > 0) {
                wantToExpand.add(this.carlist[c].organization);
            }
        }

        c = 0;

        var expandList = Array.from(wantToExpand);

        for(c = 0; c < expandList.length; c++) {
            var times = 0;
            for(c1 = 0; c1 < this.carlist.length; c1++) {
                if (expandList[c].name === this.carlist[c1].organization.name) {
                    times += 1;
                }
            }
            if(times < 4 && expandList[c].name !== this.player.team) {
                eligibleForExpansion.push(expandList[c]);
            }
        }


        console.log("want to expand", wantToExpand, "will expand", eligibleForExpansion);

        for(c = 0; c < eligibleForExpansion.length; c++) {
            var willdo = Math.floor(Math.random() * 100);
            var randomLow = [77, 74, 76, 77, 78, 85, 84, 83,82,81,80];
            if (willdo < 30 && eligibleForExpansion[c] != this.player.team) {
                var car = new Car();
                var odds = Math.floor(Math.random() * 100);

                car.number = odds;
                car.organization = eligibleForExpansion[c];
                car.sponsor1 = "random";
                car.sponsor2 = "random";
                car.engine = randomLow[Math.floor(Math.random() * randomLow.length)];
                car.aero = randomLow[Math.floor(Math.random() * randomLow.length)];
                car.chassis = randomLow[Math.floor(Math.random() * randomLow.length)];
                car.pitCrew = randomLow[Math.floor(Math.random() * randomLow.length)];
                car.prestige = 75;
                car.driver = new Driver("N/A");
                var arry = [this.year, car, 1000];
                this.newTeams.push(arry);
            }

        }


        if(this.year == 1982 && this.schedule[1].raceName == "Daytona 500") {
            var d500 = this.schedule[1];
            var river = this.schedule[0];
            this.schedule[0] = d500;
            this.schedule[1] = river;
            retiredString += this.schedule[0].raceName + " is now the first race of the season!<br>";
        }



        var eliteCars = 0;
        var randomGood = [98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87];
        var randomMid = [90, 89, 88, 87, 86, 85, 84, 83,82,81,80];
        var randomLow = [77, 74, 76, 77, 78, 85, 84, 83,82,81,80];

        for (var i = this.carlist.length - 1; i >= 0; --i) {
            if(this.carlist[i].driver.intermediate > 90 && this.carlist[i].engine > 90 ) {
                eliteCars += 1;
                if(eliteCars > 7 && this.carlist[i].driver.careerTitles < 2) {
                    if (this.carlist[i].driver.superspeedway > 90) {
                        this.carlist[i].driver.superspeedway = randomMid[Math.floor(Math.random() * randomMid.length)];
                    }
                    if (this.carlist[i].driver.intermediate > 90) {
                        this.carlist[i].driver.intermediate = randomMid[Math.floor(Math.random() * randomMid.length)];
                    }
                    if (this.carlist[i].driver.flat > 90) {
                        this.carlist[i].driver.flat = randomMid[Math.floor(Math.random() * randomMid.length)];
                    }
                    if (this.carlist[i].driver.shortTrack > 90) {
                        this.carlist[i].driver.shortTrack = randomMid[Math.floor(Math.random() * randomMid.length)];
                    }
                    if (this.carlist[i].driver.roadCourse > 90) {
                        this.carlist[i].driver.roadCourse = randomMid[Math.floor(Math.random() * randomMid.length)];
                    }
                    if (this.carlist[i].engine > 90) {
                        this.carlist[i].engine = randomLow[Math.floor(Math.random() * randomLow.length)];
                    }
                    if (this.carlist[i].aero > 90) {
                        this.carlist[i].aero = randomLow[Math.floor(Math.random() * randomLow.length)];
                    }
                    if (this.carlist[i].chassis > 90) {
                        this.carlist[i].chassis = randomLow[Math.floor(Math.random() * randomLow.length)];
                    }
                    if (this.carlist[i].pitCrew > 90) {
                        this.carlist[i].pitCrew = randomLow[Math.floor(Math.random() * randomLow.length)];
                    }

                }
            }
            if (this.carlist[i].driver.superspeedway > 100) {
                this.carlist[i].driver.superspeedway = randomGood[Math.floor(Math.random() * randomGood.length)];
            }
            if (this.carlist[i].driver.intermediate > 100) {
                this.carlist[i].driver.intermediate = randomGood[Math.floor(Math.random() * randomGood.length)];
            }
            if (this.carlist[i].driver.flat > 100) {
                this.carlist[i].driver.flat = randomGood[Math.floor(Math.random() * randomGood.length)];
            }
            if (this.carlist[i].driver.shortTrack > 100) {
                this.carlist[i].driver.shortTrack = randomGood[Math.floor(Math.random() * randomGood.length)];
            }
            if (this.carlist[i].driver.roadCourse > 100) {
                this.carlist[i].driver.roadCourse = randomGood[Math.floor(Math.random() * randomGood.length)];
            }

            if (this.carlist[i].driver.careerTitles > 3 && this.carlist[i].driver.age > 35) {
                if (this.carlist[i].driver.superspeedway > 80) {
                    this.carlist[i].driver.superspeedway = randomMid[Math.floor(Math.random() * randomMid.length)];
                }
                if (this.carlist[i].driver.intermediate > 80) {
                    this.carlist[i].driver.intermediate = randomLow[Math.floor(Math.random() * randomMid.length)];
                }
                if (this.carlist[i].driver.flat > 80) {
                    this.carlist[i].driver.flat = randomLow[Math.floor(Math.random() * randomMid.length)];
                }
                if (this.carlist[i].driver.shortTrack > 80) {
                    this.carlist[i].driver.shortTrack = randomLow[Math.floor(Math.random() * randomMid.length)];
                }
                if (this.carlist[i].driver.roadCourse > 80) {
                    this.carlist[i].driver.roadCourse = randomLow[Math.floor(Math.random() * randomMid.length)];
                }
            }

        }




        this.database = [];

        for (var i = 0; i < this.carlist.length; i++) {

            var car = this.carlist[i];

            if (this.year >= 2004) {
                if (car.organization.manufacture == "Pontiac") {
                    car.organization.manufacture = "Chevrolet";
                }
                if (car.organization.manufacture == "Oldsmobile") {
                    car.organization.manufacture = "Chevrolet"
                }
                if (car.organization.manufacture == "Mercury") {
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

            if (car.driver.topTens < 4 && car.driver.wins < 1 && car.organization.name != this.player.team) {
                var odds = Math.floor(Math.random() * 100);

                if (car.driver.age < 27) {
                    if (odds > 75) {
                        this.freeAgents.push(car.driver);
                        car.driver = new Driver("N/A");
                    }

                } else {
                    if (odds > 55) {
                        this.freeAgents.push(car.driver);
                        car.driver = new Driver("N/A");
                    }
                }

            }

            /*
            for( var i = 0; i < this.carlist.length; i++) {
                var odds = Math.floor( Math.random()*100 );
                console.log("HAS SHUT DOWN!", this.carlist[i], this.carlist[i].number);
                if (this.carlist[i].driver.name == "N/A" && odds > 50) {
                    console.log("HAS SHUT DOWN2!", this.carlist[i], this.carlist[i].number);
                    var retiredString2 = "#" + this.carlist[i].number + " " + this.carlist[i].organization.name + " "
                        + " has shut down.<br>"

                    retiredString += retiredString2;
                    this.carlist.splice(i, 1);
                    i--;

                }
            }*/




            if (car.driver.age > 35 && this.year == 1985 && car.driver.name != "Dale Earnhardt" && car.driver.name != "Richard Petty") {
                car.driver.superspeedway -= 2;
                car.driver.intermediate -= 5;
                car.driver.flat -= 6;
                car.driver.shortTrack -= 6;
                car.driver.roadCourse -= 6;

            }
            if (car.driver.age > 38 && this.year == 1999 && car.driver.name != "Dale Earnhardt" && car.driver.name != "Richard Petty") {
                car.driver.superspeedway -= 4;
                car.driver.intermediate -= 7;
                car.driver.flat -= 7;
                car.driver.shortTrack -= 7;
                car.driver.roadCourse -= 7;

            }

            if (car.driver.age > 44 && this.year == 2006 && car.driver.name != "Dale Earnhardt" && car.driver.name != "Richard Petty") {
                car.driver.superspeedway -= 2;
                car.driver.intermediate -= 2;
                car.driver.flat -= 2;
                car.driver.shortTrack -= 2;
                car.driver.roadCourse -= 2;

            }

            if (car.driver.age > 40 && this.year == 2030) {
                car.driver.superspeedway -= 3;
                car.driver.intermediate -= 3;
                car.driver.flat -= 3;
                car.driver.shortTrack -= 3;
                car.driver.roadCourse -= 3;

            }

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



            if(car.driver.careerWins > 20 && car.driver.age > 37 && car.driver.age < 46 && !containsObject(car.driver.name, this.database) && !containsObject(car.driver.name, this.boughtTeam ) ) {

                var notFoundName = true;

                for (var c1 = 0; c1 < this.carlist.length ; c1++) {
                    var car1 = this.carlist[c1];
                    var splitTeam = car1.organization.name.split(' ');

                    if(car.driver.name.includes(splitTeam[splitTeam.length-2])) {
                        notFoundName = false;
                        break;
                    }


                }

                if(notFoundName && car.organization.name != this.player.team ) {
                    this.database.push(car.driver.name)
                }

            }




            var retiredAge = [47,48,49,50,50,51,52,53,54,55,56];

            var odds = Math.floor(Math.random() * retiredAge.length);


            if (car.driver.age > retiredAge[odds]) {

                this.retired.push(car.driver);

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


        for (var t = 0; t < this.newTeams.length; t++) {
            var notCopy = true;
            var notFound = true;
            var odds = Math.floor(Math.random() * 100);
            if (this.newTeams[t][0] == this.year && this.newTeams[t][2] > odds && this.newTeams[t][1].organization.name != this.player.team ) {
                for (var t1 = 0; t1 < this.carlist.length; t1++) {
                    if (this.newTeams[t][1].number == this.carlist[t1].number) {
                        notCopy = false;
                    }
                }


                if (notCopy) {
                    console.log("CHANGED NEW TEAM NUMBER 2", this.newTeams[t][1])
                    var instances = 0;
                    for(var car1 = 0; car1 < this.carlist.length; car1++) {
                        if (this.newTeams[t][1].organization.name == this.carlist[car1].organization.name) {
                            instances += 1;
                        }
                    }
                    console.log("INSTANCES!!" ,instances)
                    if(instances < 5 && this.newTeams[t][1].organization.name != this.player.team){

                        this.newTeams[t][1].driver = new Driver("Error")
                        this.carlist.push(this.newTeams[t][1]);

                        var retiredString2 = "#" + this.newTeams[t][1].number + " " + this.newTeams[t][1].organization.name + " "
                            + this.newTeams[t][1].organization.manufacture
                            + " will be making their debut this upcoming season!<br>"

                        for (var a; a < this.carlist.length; a++) {
                            if (this.carlist[a].organization == this.newTeams[t][1].organization.name) {
                                this.carlist[a].organization.manufacture = this.newTeams[t][1].organization.manufacture;
                            }
                        }

                        retiredString += retiredString2;
                    }

                }
                else {

                    var roushList = ["06", "09", "6", "7", "9", "16", "17", "26", "36", "50", "56", "50", "60", "60", "96", "97", "99"];
                    var hendrickList = ["05", "1", "5", "7", "9", "15", "17", "24", "25", "35", "46", "48", "50", "84", "88"];
                    var evernhamList = ["09", "9", "10", "19", "29", "39", "59", "79", "90", "91", "94", "98", "98", "98", "99"];
                    var earnhardtList = ["01","02","03" ,"1", "2", "3", "8","14", "15", "38","81", "83", "88"];
                    var penskeList = ["02", "06", "07", "2", "12", "21", "22", "32", "77"];
                    var yatesList = ["08", "8", "18", "28", "38", "88", "90", "98"];
                    var gibbsList = ["02", "08", "11", "17", "18", "19", "20", "28", "81", "88"];
                    var childressList = ["03", "1", "2", "3", "13", "21", "23", "27", "29", "30", "31", "33", "98" ];
                    var pettyList = ["40", "41", "42" , "43" , "44" , "45" ,"46"];
                    var martinList = ["06", "6" , "16", "5" , "66", "60", "55"];
                    var gordonList = ["0", "1", "2", "3", "4", "5", "24", "25"];
                    var jarrettList = ["1", "0", "8", "18", "28", "38", "48", "58", "68", "78", "88", "98"];

                    var secondChance = odds.toString();

                    if (this.newTeams[t][1].organization.name.includes("Penske")) {
                        var o1= Math.floor(Math.random() * penskeList.length);
                        secondChance = penskeList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Gibbs")) {
                        var o1= Math.floor(Math.random() * gibbsList.length);
                        secondChance = gibbsList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Evernham")) {
                        var o1= Math.floor(Math.random() * evernhamList.length);
                        secondChance = evernhamList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Earnhardt")) {
                        var o1= Math.floor(Math.random() * earnhardtList.length);
                        secondChance = earnhardtList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Roush")) {
                        var o1= Math.floor(Math.random() * roushList.length);
                        secondChance = roushList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Yates")) {
                        var o1= Math.floor(Math.random() * yatesList.length);
                        secondChance = yatesList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Childress")) {
                        var o1= Math.floor(Math.random() * childressList.length);
                        secondChance = childressList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Petty")) {
                        var o1= Math.floor(Math.random() * pettyList.length);
                        secondChance = pettyList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Hendrick")) {
                        var o1= Math.floor(Math.random() * hendrickList.length);
                        secondChance = hendrickList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Martin")) {
                        var o1= Math.floor(Math.random() * martinList.length);
                        secondChance = martinList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Gordon")) {
                        var o1= Math.floor(Math.random() * gordonList.length);
                        secondChance = gordonList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Jarrett")) {
                        var o1= Math.floor(Math.random() * jarrettList.length);
                        secondChance = jarrettList[o1];
                    }

                    notCopy = true;

                    for (var t1 = 0; t1 < this.carlist.length; t1++) {
                        if (this.carlist[t1].number == secondChance) {
                            notCopy = false;
                        }
                    }

                    if (notCopy) {

                        var instances = 0;
                        for(var car1 = 0; car1 < this.carlist.length; car1++) {
                            if (this.newTeams[t][1].organization.name == this.carlist[car1].organization.name) {
                                instances += 1;
                            }
                        }
                        if(instances < 5) {
                            console.log("INSTANCES NEW!!" ,instances)

                            this.newTeams[t][1].number =  secondChance;
                            console.log("CHANGED NEW TEAM NUMBER ", this.newTeams[t][1]);
                            this.newTeams[t][1].driver = new Driver("Error")
                            this.carlist.push(this.newTeams[t][1]);

                            var retiredString2 = "#" + this.newTeams[t][1].number + " " + this.newTeams[t][1].organization.name + " "
                                + this.newTeams[t][1].organization.manufacture
                                + " will be making their debut this upcoming season!<br>"

                            for (var a; a < this.carlist.length; a++) {
                                if (this.carlist[a].organization == this.newTeams[t][1].organization.name) {
                                    this.carlist[a].organization.manufacture = this.newTeams[t][1].organization.manufacture;
                                }
                            }

                            retiredString += retiredString2;
                        }

                    }
                }


            }

        }

        var testEncouraged = [];

        this.freeAgentsEncouraged = [];

        this.freeAgentsLegal = [];

        var needsFA = 0;

        for (var f = 0; f < this.freeAgents.length; f++) {

            var FA = this.freeAgents[f];

            if (FA.age > 22 && FA.age < 36 && (FA.superspeedway + FA.intermediate + FA.roadCourse + FA.shortTrack) / 4 > 73) {

                this.freeAgentsEncouraged.push(FA);
            }

            if (FA.age > 21 && FA.age < 51 && (FA.superspeedway + FA.intermediate + FA.roadCourse + FA.shortTrack) / 4 > 55) {

                this.freeAgentsLegal.push(FA);
            }


            if (FA.age > 50) {

                this.retired.push(FA.driver);

                retiredString += FA.name + " has retired!<br>"

                this.freeAgents.splice(index, 1); // Remove the item from the array
                var index1 = this.freeAgents.indexOf(FA);
                if (index1 > -1) {
                    this.freeAgents.splice(index1, 1);
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
            var dvr = new Driver(this.randomName());
            var skills = [79,78,77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60]
            var skillOdds = Math.floor(Math.random() * skills.length);
            dvr.age = 21;
            dvr.superspeedway = skills[skillOdds];
            dvr.intermediate = skills[skillOdds];
            dvr.flat = skills[skillOdds];
            dvr.shortTrack = skills[skillOdds];
            dvr.roadCourse = skills[skillOdds];
            dvr.aggression = skills[skillOdds];
            this.freeAgents.push(dvr)

        }


        console.log("encouraged", this.freeAgentsEncouraged);

        console.log("allowed", this.freeAgentsLegal);
/*
        this.freeAgentsLegal = this.freeAgentsLegal.filter( function( el ) {
            return !this.freeAgentsEncouraged.includes( el );
        } );
*/

        console.log("encouraged2", this.freeAgentsEncouraged);

        console.log("allowed2", this.freeAgentsLegal);

        this.carlist.sort((a, b) => (a.engine < b.engine) ? 1 : -1);

        for (var i = 0; i < this.carlist.length; i++) {

            var car = this.carlist[i];

            if (car.driver.name == "N/A" || car.driver.name == "Error" ) {
                if (this.freeAgentsLegal.length > 0) {
                    var odds = Math.floor(Math.random() * 100);



                    if ((((odds < 24 && car.driver.name == "N/A" && car.engine < 77) || odds < 33 && car.sponsor1 == "Unsponsored" || (odds < 72 && car.driver.name == "N/A" && car.status == "Part Time")) || (odds < 52 && car.driver.name == "N/A" && car.status == "Part Time")) && (this.carlist.length + 2 > this.carsInRace)) {


                        var retiredString2 = "#" + this.carlist[i].number + " " + this.carlist[i].organization.name + " "
                            + " has shut down.<br>"
                        retiredString += retiredString2;

                        for(var o = 0; o < this.carlist.length; o++) {
                            if (this.carlist[i].organization.name == this.carlist[o].organization.name) {
                                this.carlist[o].engine += 6;
                                this.carlist[o].aero += 6;
                                this.carlist[o].chassis += 6;
                                this.carlist[o].pitCrew += 6;
                                console.log("UPDATED", this.carlist[o].name);

                            }
                        }


                    } else {
                        if(this.freeAgentsEncouraged.length > 0 && car.engine > 69) {
                            var index = Math.floor(Math.random() * this.freeAgentsEncouraged.length);
                            car.driver = this.freeAgentsEncouraged[index];
                            retiredString2 = car.driver.name + " has signed with " + car.organization.name + " to drive the #" + car.number + " " + car.organization.manufacture + "<br>";
                            console.log("retired string 2 is ", retiredString2);
                            retiredString += retiredString2;
                            this.freeAgentsEncouraged.splice(index, 1); // Remove the item from the array
                            var index1 = this.freeAgents.indexOf(car.driver);
                            if (index1 > -1) {
                                this.freeAgents.splice(index1, 1);
                            }
                        }
                        else {
                            var index = Math.floor(Math.random() * this.freeAgentsLegal.length);
                            car.driver = this.freeAgentsLegal[index];

                            for (var jj = 0; jj < this.carlist.length; jj++) {

                                if (this.carlist[jj].organization.name == car.organization.name) {
                                    this.carlist[jj].organization.manufacture = car.organization.manufacture;
                                }
                            }


                            retiredString2 = car.driver.name + " has signed with " + car.organization.name + " to drive the #" + car.number + " " + car.organization.manufacture + "<br>";
                            console.log("retired string 2 is b", retiredString2);
                            retiredString += retiredString2;
                            this.freeAgentsLegal.splice(index, 1); // Remove the item from the array
                            var index1 = this.freeAgents.indexOf(car.driver);
                            if (index1 > -1) {
                                this.freeAgents.splice(index1, 1);
                            }

                        }

                        if (car.status == "Part Time" && car.engine > 65 && odds < 62) {
                            retiredString2 = "The " + car.organization.name + " #" + car.number + " " + car.organization.manufacture + " will run full time this upcoming season!<br>";
                            retiredString += retiredString2;
                            car.status = "Full Time";
                        }


                    }

                } else {
                    car.driver = new Driver(this.randomName());
                    var skills = [75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63]
                    var skillOdds = Math.floor(Math.random() * skills.length);
                    car.driver.age = 22;
                    car.driver.superspeedway = skills[skillOdds];
                    car.driver.intermediate = skills[skillOdds];
                    car.driver.flat = skills[skillOdds];
                    car.driver.shortTrack = skills[skillOdds];
                    car.driver.roadCourse = skills[skillOdds];
                    retiredString2 = car.driver.name + " has signed with " + car.organization.name + " to drive the #" + car.number + " " + car.organization.manufacture + "<br>";
                    console.log("retired string 2 is c", retiredString2);
                    retiredString += retiredString2;
                }

            }


        }

        console.log("org list!", this.orglist);


        for (var i = this.carlist.length - 1; i >= 0; --i) {
            if (this.carlist[i].driver.name == "N/A") {
                this.carlist.splice(i, 1);

            }




        }

        for (var i = 0; i < this.carlist.length; i++) {

            if (this.carlist[i].organization) {
                if (!containsObject(this.carlist[i].organization.manufacture, this.manulist)) {
                    this.manulist.push(this.carlist[i].organization.manufacture);

                }
                if (!containsObject(this.carlist[i].organization, this.orglist)) {
                    this.orglist.push(this.carlist[i].organization);


                }
            }
        }

        var orgodds = Math.floor(Math.random() * this.orglist.length);
        var manuodds = Math.floor(Math.random() * this.manulist.length);

        console.log("orglist!!!", this.orglist, this.orglist[orgodds])

        var canChange = true;

        var randomGood = [98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86];

        for (var i = this.carlist.length - 1; i >= 0; --i) {
            if (this.carlist[i].engine > 100) {
                this.carlist[i].engine = randomGood[Math.floor(Math.random() * randomGood.length)];
            }
            if (this.carlist[i].aero > 100) {
                this.carlist[i].aero = randomGood[Math.floor(Math.random() * randomGood.length)];
            }
            if (this.carlist[i].chassis > 100) {
                this.carlist[i].chassis = randomGood[Math.floor(Math.random() * randomGood.length)];
            }
            if (this.carlist[i].pitCrew > 100) {
                this.carlist[i].pitCrew = randomGood[Math.floor(Math.random() * randomGood.length)];
            }

        }

        for (var i = this.carlist.length - 1; i >= 0; --i) {
            if(this.carlist[i].organization) {
                if (this.carlist[i].organization.name == this.orglist[orgodds].name) {
                    if (this.carlist[i].engine > 94 || this.carlist[i].organization.name.includes("Roush")) {
                        canChange = false;
                        console.log("can change false")
                    }
                }

            }
        }
        console.log("sponsorlist!!", this.sponsorlist)
        var odds = Math.random() * this.sponsorlist.length
        for (var i = this.carlist.length - 1; i >= 0; --i) {
            if(this.carlist[i].organization) {
                if (this.carlist[i].organization.name == this.orglist[orgodds].name && canChange) {
                    if(this.carlist[i] != this.manulist[manuodds]) {
                        this.carlist[i].organization.manufacture = this.manulist[manuodds];
                        retiredString2 = "#" + this.carlist[i].number + " " + this.carlist[i].organization.name + " has switched to " + this.carlist[i].organization.manufacture + "!<br>";
                        retiredString += retiredString2;
                    }

                }
            }

            if (this.carlist[i].sponsor1 == "random") {
                var odds = Math.floor(Math.random() * this.sponsorlist.length);
                this.carlist[i].sponsor1 = this.sponsorlist[odds];
            }
            if (this.carlist[i].sponsor1 == "undefined") {
                var odds = Math.floor(Math.random() * this.sponsorlist.length);
                this.carlist[i].sponsor1 = this.sponsorlist[odds];
            }
            if (this.carlist[i].sponsor2 == "random") {
                var odds = Math.floor(Math.random() * this.sponsorlist.length);
                this.carlist[i].sponsor1 = this.sponsorlist[odds];
            }
            if (this.carlist[i].sponsor2 == "undefined") {
                var odds = Math.floor(Math.random() * this.sponsorlist.length);
                this.carlist[i].sponsor1 = this.sponsorlist[odds];
            }

        }

        var gameodds = Math.floor(Math.random() * this.carlist.length);
        console.log("sponsorlist!!", this.sponsorlist)
        var sodds = Math.floor(Math.random() * this.sponsorlist.length);


        if (this.sponsorlist[sodds] == "undefined" || (!(this.sponsorlist[sodds].includes(".com")) && !(this.sponsorlist[sodds].includes("Coin")) && !(this.sponsorlist[sodds].includes("Youtube"))  && !(this.sponsorlist[sodds].includes("Game"))  && (this.year < 2002)) ) {
            this.carlist[gameodds].sponsor1 = this.sponsorlist[sodds]
            retiredString2 = "#" + this.carlist[gameodds].number + " " + this.carlist[gameodds].organization.name + " has a new primary sponsor: " + this.carlist[gameodds].sponsor1 + "!<br>";
            retiredString += retiredString2;
        }

        for (var cs = 0; cs < this.carlist.length; cs++) {
            if(this.carlist[cs].driver) {
                if(this.carlist[cs].driver.careerTitles > 0 && this.carlist[cs].sponsor1.includes("Unsponsored")) {
                    sodds = Math.floor(Math.random() * this.sponsorlist.length);
                    this.carlist[cs].sponsor1 = this.sponsorlist[sodds]
                    retiredString2 = "#" + this.carlist[cs].number + " " + this.carlist[cs].organization.name + " has a new primary sponsor: " + this.carlist[cs].sponsor1 + "!<br>";
                    retiredString += retiredString2;
                }
            }

        }

        var gameodds = Math.floor(Math.random() * this.carlist.length);
        console.log("sponsorlist!!", this.sponsorlist)
        var sodds = Math.floor(Math.random() * this.sponsorlist.length);

        if (this.sponsorlist[sodds] != "undefined") {
            this.carlist[gameodds].sponsor2 = this.sponsorlist[sodds]
            retiredString2 = "#" + this.carlist[gameodds].number + " " + this.carlist[gameodds].organization.name + " has a new secondary sponsor: " + this.carlist[gameodds].sponsor2 + "!<br>";
            retiredString += retiredString2;
        }

        var teamOdds2 = Math.floor(Math.random() * 100);

        console.log("team odds 2",  teamOdds2);

        if(this.database.length > 0 && teamOdds2 < 39) {

            var oddsD = Math.floor(Math.random() * this.database.length);
            var oddsO = Math.floor(Math.random() * this.carlist.length);

            var lastName = this.database[oddsD].split(' ');

            var teamName = ["Racing", "Motorsports", "Racing", "Motorsports", "Racing", "Motorsports", "Inc.", "Enterprises"]

            var teamChoice = teamName[Math.floor(Math.random() * teamName.length)];

            var teamOdds = Math.floor(Math.random() * 100);

            var newTeamName = lastName[1] + " " + teamChoice;

            if(teamOdds < 50) {
                newTeamName = lastName[0] + " " + lastName[1] + " " + teamChoice;
            }
            else {
                if(teamOdds < 75) {
                    var team1 = this.carlist[oddsO].organization.name.split(' ');
                    newTeamName = lastName[1] + "-" + team1[team1.length-2] + " " + teamChoice;
                }
                else {
                    if(teamOdds < 85) {
                        var team1 = this.carlist[oddsO].organization.name.split(' ');
                        newTeamName = team1[team1.length-2] + "-" + lastName[1] + " " + teamChoice;
                    }
                }

            }



            console.log("last name is", lastName)
            if(this.carlist[oddsO].engine < 88 && this.carlist[oddsO].organization.name !== this.player.team) {
                var retiredString2 = this.database[oddsD] + " has bought a majority share in " + this.carlist[oddsO].organization.name + "!<br>" +
                    "The team will now be known as " + newTeamName + "</br>";

                this.boughtTeam.push(this.database[oddsD]);

                retiredString += retiredString2;

                var found = true;

                for (var a = 0; a < this.carlist.length; a++) {
                    if (this.carlist[a].organization.name == this.carlist[oddsO].organization.name) {
                        this.carlist[a].organization.name = newTeamName;
                        this.carlist[a].organization.manufacture = this.carlist[oddsO].organization.manufacture;
                        for (var b = 0; b < this.carlist.length; b++) {
                            if(found && this.carlist[b].driver.name == this.database[oddsD] && this.carlist[b].driver.name != this.carlist[a].driver.name) {
                                var swap = this.carlist[a].driver;
                                var swap2 = this.carlist[b].driver;
                                this.carlist[a].driver = swap2;
                                this.carlist[b].driver = swap;
                                var retiredString2 = this.database[oddsD] + " will drive the " + this.carlist[a].organization.name + " #" + this.carlist[a].number + "!<br>";
                                retiredString2 += swap.name + " will drive the " + this.carlist[b].organization.name + " #" + this.carlist[b].number + "!<br>";
                                this.carlist[a].status = "Full Time";
                                this.carlist[a].engine += 5;
                                console.log("retired string 2 is d", retiredString2);
                                retiredString += retiredString2;
                                found = false;
                                break;
                            }
                        }
                    }
                }
            }
        }


        console.log(this.carlist);

        console.log(this.retired);
        return retiredString;
    }

    sillySeasonOwnerMode() {

        sillySeason = true;

        this.carlist = this.displayStandings();

        var retiredString = "";

        console.log("GAME MAX RACES", this.maxRaces)
        if(this.year % 7 == 0 && this.newRaces.length > 0) {
            while (this.schedule.length < this.maxRaces) {
                var race = this.newRaces.pop();
                this.schedule.splice(Math.floor(Math.random() * (this.schedule.length + 1)), 0, race);
                console.log("ADDED RACE", this.schedule)
                retiredString += "Added Race to Schedule! " + race.trackName + "<br>";


            }
        }

        var wantToExpand = new Set();
        var eligibleForExpansion = [];

        for(var c = 0; c < this.carlist.length; c++) {
            this.carlist[c].yearsLeft -= 1;
            if(this.carlist[c].engine > 91 || this.carlist[c].driver.careerTitles > 0) {
                wantToExpand.add(this.carlist[c].organization);
            }
            if(this.carlist[c].engine < 80 || this.carlist[c].driver.topTens < 10) {
                var removeSponsor = Math.floor(Math.random() * 100);
                if(removeSponsor < 30 && this.carlist[c].organization.name === this.player.team) {
                    retiredString +=  this.carlist[c].sponsor1 + " has departed the #" + this.carlist[c].number + " " + this.carlist[c].organization.name + " team!"  + "<br>";
                    carsWithNoSponsor.push(this.carlist[c].number);
                    this.carlist[c].sponsor1 = "Unsponsored";
                    this.carlist[c].sponsor2 = "Unsponsored";
                }
            }
        }

        console.log("retiredString", retiredString);

        c = 0;

        var expandList = Array.from(wantToExpand);

        for(c = 0; c < expandList.length; c++) {
            var times = 0;
            for(c1 = 0; c1 < this.carlist.length; c1++) {
                if (expandList[c].name === this.carlist[c1].organization.name) {
                    times += 1;
                }
            }
            if(times < 4 && expandList[c].name !== this.player.team) {
                eligibleForExpansion.push(expandList[c]);
            }
        }


        console.log("want to expand", wantToExpand, "will expand", eligibleForExpansion);

        for(c = 0; c < eligibleForExpansion.length; c++) {
            var willdo = Math.floor(Math.random() * 100);
            var randomLow = [77, 74, 76, 77, 78, 85, 84, 83,82,81,80];
            if (willdo < 30 && eligibleForExpansion[c] != this.player.team) {
                var car = new Car();
                var odds = Math.floor(Math.random() * 100);

                car.number = odds;
                car.organization = eligibleForExpansion[c];
                car.sponsor1 = "random";
                car.sponsor2 = "random";
                car.engine = randomLow[Math.floor(Math.random() * randomLow.length)];
                car.aero = randomLow[Math.floor(Math.random() * randomLow.length)];
                car.chassis = randomLow[Math.floor(Math.random() * randomLow.length)];
                car.pitCrew = randomLow[Math.floor(Math.random() * randomLow.length)];
                car.prestige = 75;
                car.driver = new Driver("N/A");
                var arry = [this.year, car, 1000];
                this.newTeams.push(arry);
            }

        }


        if(this.year == 1982 && this.schedule[1].raceName == "Daytona 500") {
            var d500 = this.schedule[1];
            var river = this.schedule[0];
            this.schedule[0] = d500;
            this.schedule[1] = river;
            retiredString += this.schedule[0].raceName + " is now the first race of the season!<br>";
        }



        var eliteCars = 0;
        var randomGood = [98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87];
        var randomMid = [90, 89, 88, 87, 86, 85, 84, 83,82,81,80];
        var randomLow = [77, 74, 76, 77, 78, 85, 84, 83,82,81,80];
        var randomLoss = [0,1,2,3,4,5,6];

        for (var i = this.carlist.length - 1; i >= 0; --i) {
            if(this.carlist[i].organization.name == this.player.team ) {
                this.carlist[i].engine -= randomLoss[Math.floor(Math.random() * randomLoss.length)];
                this.carlist[i].aero -= randomLoss[Math.floor(Math.random() * randomLoss.length)];
                this.carlist[i].pitCrew -= randomLoss[Math.floor(Math.random() * randomLoss.length)];
                this.carlist[i].chassis -= randomLoss[Math.floor(Math.random() * randomLoss.length)];

            }
            if(this.carlist[i].driver.intermediate > 90 && this.carlist[i].engine > 90 ) {
                eliteCars += 1;
                if(eliteCars > 7 && this.carlist[i].driver.careerTitles < 2) {
                    if (this.carlist[i].driver.superspeedway > 90) {
                        this.carlist[i].driver.superspeedway = randomGood[Math.floor(Math.random() * randomMid.length)];
                    }
                    if (this.carlist[i].driver.intermediate > 90) {
                        this.carlist[i].driver.intermediate = randomGood[Math.floor(Math.random() * randomMid.length)];
                    }
                    if (this.carlist[i].driver.flat > 90) {
                        this.carlist[i].driver.flat = randomGood[Math.floor(Math.random() * randomMid.length)];
                    }
                    if (this.carlist[i].driver.shortTrack > 90) {
                        this.carlist[i].driver.shortTrack = randomMid[Math.floor(Math.random() * randomMid.length)];
                    }
                    if (this.carlist[i].driver.roadCourse > 90) {
                        this.carlist[i].driver.roadCourse = randomMid[Math.floor(Math.random() * randomMid.length)];
                    }
                    if (this.carlist[i].engine > 90) {
                        this.carlist[i].engine = randomMid[Math.floor(Math.random() * randomMid.length)];
                    }
                    if (this.carlist[i].aero > 90) {
                        this.carlist[i].aero = randomMid[Math.floor(Math.random() * randomMid.length)];
                    }
                    if (this.carlist[i].chassis > 90) {
                        this.carlist[i].chassis = randomMid[Math.floor(Math.random() * randomMid.length)];
                    }
                    if (this.carlist[i].pitCrew > 90) {
                        this.carlist[i].pitCrew = randomMid[Math.floor(Math.random() * randomMid.length)];
                    }

                }
            }
            if (this.carlist[i].driver.superspeedway > 100) {
                this.carlist[i].driver.superspeedway = randomGood[Math.floor(Math.random() * randomGood.length)];
            }
            if (this.carlist[i].driver.intermediate > 100) {
                this.carlist[i].driver.intermediate = randomGood[Math.floor(Math.random() * randomGood.length)];
            }
            if (this.carlist[i].driver.flat > 100) {
                this.carlist[i].driver.flat = randomGood[Math.floor(Math.random() * randomGood.length)];
            }
            if (this.carlist[i].driver.shortTrack > 100) {
                this.carlist[i].driver.shortTrack = randomGood[Math.floor(Math.random() * randomGood.length)];
            }
            if (this.carlist[i].driver.roadCourse > 100) {
                this.carlist[i].driver.roadCourse = randomGood[Math.floor(Math.random() * randomGood.length)];
            }

            if (this.carlist[i].driver.careerTitles > 3 && this.carlist[i].driver.age > 35) {
                if (this.carlist[i].driver.superspeedway > 80) {
                    this.carlist[i].driver.superspeedway = randomMid[Math.floor(Math.random() * randomMid.length)];
                }
                if (this.carlist[i].driver.intermediate > 80) {
                    this.carlist[i].driver.intermediate = randomLow[Math.floor(Math.random() * randomMid.length)];
                }
                if (this.carlist[i].driver.flat > 80) {
                    this.carlist[i].driver.flat = randomLow[Math.floor(Math.random() * randomMid.length)];
                }
                if (this.carlist[i].driver.shortTrack > 80) {
                    this.carlist[i].driver.shortTrack = randomLow[Math.floor(Math.random() * randomMid.length)];
                }
                if (this.carlist[i].driver.roadCourse > 80) {
                    this.carlist[i].driver.roadCourse = randomLow[Math.floor(Math.random() * randomMid.length)];
                }
            }

        }




        this.database = [];

        for (var i = 0; i < this.carlist.length; i++) {

            var car = this.carlist[i];

            if (this.year >= 2004) {
                if (car.organization.manufacture == "Pontiac") {
                    car.organization.manufacture = "Chevrolet";
                }
                if (car.organization.manufacture == "Oldsmobile") {
                    car.organization.manufacture = "Chevrolet"
                }
                if (car.organization.manufacture == "Mercury") {
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

            if (car.driver.topTens < 4 && car.driver.wins < 1 && car.organization.name != this.player.team) {
                var odds = Math.floor(Math.random() * 100);

                if (car.driver.age < 27) {
                    if (odds > 75) {
                        this.freeAgents.push(car.driver);
                        if(car.driver.name != "N/A") {
                            retiredString += car.driver.name + " has become a free agent!<br>"
                        }
                        car.driver = new Driver("N/A");
                    }

                } else {
                    if (odds > 55) {
                        this.freeAgents.push(car.driver);
                        if(car.driver.name != "N/A") {
                            retiredString += car.driver.name + " has become a free agent!<br>"
                        }
                        car.driver = new Driver("N/A");
                    }
                }

            }

            if(car.yearsLeft < 1) {
                if(car.organization.name != this.player.team) {
                    var odds = Math.floor(Math.random() * 100);
                    if(odds < 45 && car.driver.wins < 2 && car.driver.age < 39) {
                        this.freeAgents.push(car.driver);
                        if(car.driver.name != "N/A") {
                            retiredString += car.driver.name + " has become a free agent!<br>"
                        }
                        car.driver = new Driver("N/A");
                    }
                    else {
                        retiredString += car.driver.name + " has renewed their contract with " + car.organization.name + "!<br>"
                        car.yearsLeft = 3;
                    }
                }
                else {
                    this.freeAgents.push(car.driver);
                    if(car.driver.name != "N/A") {
                        retiredString += car.driver.name + " has become a free agent!<br>"
                    }
                    car.driver = new Driver("N/A");
                }


            }

            /*
            for( var i = 0; i < this.carlist.length; i++) {
                var odds = Math.floor( Math.random()*100 );
                console.log("HAS SHUT DOWN!", this.carlist[i], this.carlist[i].number);
                if (this.carlist[i].driver.name == "N/A" && odds > 50) {
                    console.log("HAS SHUT DOWN2!", this.carlist[i], this.carlist[i].number);
                    var retiredString2 = "#" + this.carlist[i].number + " " + this.carlist[i].organization.name + " "
                        + " has shut down.<br>"

                    retiredString += retiredString2;
                    this.carlist.splice(i, 1);
                    i--;

                }
            }*/




            if (car.driver.age > 35 && this.year == 1985 && car.driver.name != "Dale Earnhardt" && car.driver.name != "Richard Petty") {
                car.driver.superspeedway -= 2;
                car.driver.intermediate -= 5;
                car.driver.flat -= 6;
                car.driver.shortTrack -= 6;
                car.driver.roadCourse -= 6;

            }
            if (car.driver.age > 38 && this.year == 1999 && car.driver.name != "Dale Earnhardt" && car.driver.name != "Richard Petty") {
                car.driver.superspeedway -= 4;
                car.driver.intermediate -= 7;
                car.driver.flat -= 7;
                car.driver.shortTrack -= 7;
                car.driver.roadCourse -= 7;

            }

            if (car.driver.age > 44 && this.year == 2006 && car.driver.name != "Dale Earnhardt" && car.driver.name != "Richard Petty") {
                car.driver.superspeedway -= 2;
                car.driver.intermediate -= 2;
                car.driver.flat -= 2;
                car.driver.shortTrack -= 2;
                car.driver.roadCourse -= 2;

            }

            if (car.driver.age > 40 && this.year == 2030) {
                car.driver.superspeedway -= 3;
                car.driver.intermediate -= 3;
                car.driver.flat -= 3;
                car.driver.shortTrack -= 3;
                car.driver.roadCourse -= 3;

            }

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



            if(car.driver.careerWins > 20 && car.driver.age > 37 && car.driver.age < 46 && !containsObject(car.driver.name, this.database) && !containsObject(car.driver.name, this.boughtTeam ) ) {

                var notFoundName = true;

                for (var c1 = 0; c1 < this.carlist.length ; c1++) {
                    var car1 = this.carlist[c1];
                    var splitTeam = car1.organization.name.split(' ');

                    if(car.driver.name.includes(splitTeam[splitTeam.length-2])) {
                        notFoundName = false;
                        break;
                    }


                }

                if(notFoundName && car.organization.name != this.player.team ) {
                    this.database.push(car.driver.name)
                }

            }




            var retiredAge = [47,48,49,50,50,51,52,53,54,55,56];

            var odds = Math.floor(Math.random() * retiredAge.length);


            if (car.driver.age > retiredAge[odds]) {

                this.retired.push(car.driver);

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


        for (var t = 0; t < this.newTeams.length; t++) {
            var notCopy = true;
            var notFound = true;
            var odds = Math.floor(Math.random() * 100);
            if (this.newTeams[t][0] == this.year && this.newTeams[t][2] > odds && this.newTeams[t][1].organization.name != this.player.team ) {
                for (var t1 = 0; t1 < this.carlist.length; t1++) {
                    if (this.newTeams[t][1].number == this.carlist[t1].number) {
                        notCopy = false;
                    }
                }


                if (notCopy) {
                    console.log("CHANGED NEW TEAM NUMBER 2", this.newTeams[t][1])
                    var instances = 0;
                    for(var car1 = 0; car1 < this.carlist.length; car1++) {
                        if (this.newTeams[t][1].organization.name == this.carlist[car1].organization.name) {
                            instances += 1;
                        }
                    }
                    console.log("INSTANCES!!" ,instances)
                    if(instances < 5 && this.newTeams[t][1].organization.name != this.player.team){

                        this.newTeams[t][1].driver = new Driver("Error")
                        this.carlist.push(this.newTeams[t][1]);

                        var retiredString2 = "#" + this.newTeams[t][1].number + " " + this.newTeams[t][1].organization.name + " "
                            + this.newTeams[t][1].organization.manufacture
                            + " will be making their debut this upcoming season!<br>"

                        for (var a; a < this.carlist.length; a++) {
                            if (this.carlist[a].organization == this.newTeams[t][1].organization.name) {
                                this.carlist[a].organization.manufacture = this.newTeams[t][1].organization.manufacture;
                            }
                        }

                        retiredString += retiredString2;
                    }

                }
                else {

                    var roushList = ["06", "09", "6", "7", "9", "16", "17", "26", "36", "50", "56", "50", "60", "60", "96", "97", "99"];
                    var hendrickList = ["05", "1", "5", "7", "9", "15", "17", "24", "25", "35", "46", "48", "50", "84", "88"];
                    var evernhamList = ["09", "9", "10", "19", "29", "39", "59", "79", "90", "91", "94", "98", "98", "98", "99"];
                    var earnhardtList = ["01","02","03" ,"1", "2", "3", "8","14", "15", "38","81", "83", "88"];
                    var penskeList = ["02", "06", "07", "2", "12", "21", "22", "32", "77"];
                    var yatesList = ["08", "8", "18", "28", "38", "88", "90", "98"];
                    var gibbsList = ["02", "08", "11", "17", "18", "19", "20", "28", "81", "88"];
                    var childressList = ["03", "1", "2", "3", "13", "21", "23", "27", "29", "30", "31", "33", "98" ];
                    var pettyList = ["40", "41", "42" , "43" , "44" , "45" ,"46"];
                    var martinList = ["06", "6" , "16", "5" , "66", "60", "55"];
                    var gordonList = ["0", "1", "2", "3", "4", "5", "24", "25"];
                    var jarrettList = ["1", "0", "8", "18", "28", "38", "48", "58", "68", "78", "88", "98"];

                    var secondChance = odds.toString();

                    if (this.newTeams[t][1].organization.name.includes("Penske")) {
                        var o1= Math.floor(Math.random() * penskeList.length);
                        secondChance = penskeList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Gibbs")) {
                        var o1= Math.floor(Math.random() * gibbsList.length);
                        secondChance = gibbsList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Evernham")) {
                        var o1= Math.floor(Math.random() * evernhamList.length);
                        secondChance = evernhamList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Earnhardt")) {
                        var o1= Math.floor(Math.random() * earnhardtList.length);
                        secondChance = earnhardtList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Roush")) {
                        var o1= Math.floor(Math.random() * roushList.length);
                        secondChance = roushList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Yates")) {
                        var o1= Math.floor(Math.random() * yatesList.length);
                        secondChance = yatesList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Childress")) {
                        var o1= Math.floor(Math.random() * childressList.length);
                        secondChance = childressList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Petty")) {
                        var o1= Math.floor(Math.random() * pettyList.length);
                        secondChance = pettyList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Hendrick")) {
                        var o1= Math.floor(Math.random() * hendrickList.length);
                        secondChance = hendrickList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Martin")) {
                        var o1= Math.floor(Math.random() * martinList.length);
                        secondChance = martinList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Gordon")) {
                        var o1= Math.floor(Math.random() * gordonList.length);
                        secondChance = gordonList[o1];
                    }
                    if (this.newTeams[t][1].organization.name.includes("Jarrett")) {
                        var o1= Math.floor(Math.random() * jarrettList.length);
                        secondChance = jarrettList[o1];
                    }

                    notCopy = true;

                    for (var t1 = 0; t1 < this.carlist.length; t1++) {
                        if (this.carlist[t1].number == secondChance) {
                            notCopy = false;
                        }
                    }

                    if (notCopy) {

                        var instances = 0;
                        for(var car1 = 0; car1 < this.carlist.length; car1++) {
                            if (this.newTeams[t][1].organization.name == this.carlist[car1].organization.name) {
                                instances += 1;
                            }
                        }
                        if(instances < 5) {
                            console.log("INSTANCES NEW!!" ,instances)

                            this.newTeams[t][1].number =  secondChance;
                            console.log("CHANGED NEW TEAM NUMBER ", this.newTeams[t][1]);
                            this.newTeams[t][1].driver = new Driver("Error")
                            this.carlist.push(this.newTeams[t][1]);

                            var retiredString2 = "#" + this.newTeams[t][1].number + " " + this.newTeams[t][1].organization.name + " "
                                + this.newTeams[t][1].organization.manufacture
                                + " will be making their debut this upcoming season!<br>"

                            for (var a; a < this.carlist.length; a++) {
                                if (this.carlist[a].organization == this.newTeams[t][1].organization.name) {
                                    this.carlist[a].organization.manufacture = this.newTeams[t][1].organization.manufacture;
                                }
                            }

                            retiredString += retiredString2;
                        }

                    }
                }


            }

        }

        var testEncouraged = [];

        this.freeAgentsEncouraged = [];

        this.freeAgentsLegal = [];

        var needsFA = 0;

        for (var f = 0; f < this.freeAgents.length; f++) {

            var FA = this.freeAgents[f];

            if (FA.superspeedway > 90) {
                FA.superspeedway = randomGood[Math.floor(Math.random() * randomMid.length)];
            }
            if (FA.intermediate > 90) {
                FA.intermediate = randomGood[Math.floor(Math.random() * randomMid.length)];
            }
            if (FA.flat > 90) {
                FA.flat = randomGood[Math.floor(Math.random() * randomMid.length)];
            }
            if (FA.shortTrack > 90) {
                FA.shortTrack = randomMid[Math.floor(Math.random() * randomMid.length)];
            }
            if (FA.roadCourse > 90) {
                FA.roadCourse = randomMid[Math.floor(Math.random() * randomMid.length)];
            }

            if (FA.age > 22 && FA.age < 36 && (FA.superspeedway + FA.intermediate + FA.roadCourse + FA.shortTrack) / 4 > 73) {

                this.freeAgentsEncouraged.push(FA);
            }

            if (FA.age > 21 && FA.age < 51 && (FA.superspeedway + FA.intermediate + FA.roadCourse + FA.shortTrack) / 4 > 55) {

                this.freeAgentsLegal.push(FA);
            }


            if (FA.age > 50) {

                this.retired.push(FA.driver);

                retiredString += FA.name + " has retired!<br>"

                this.freeAgents.splice(f, 1); // Remove the item from the array
                var index1 = this.freeAgents.indexOf(FA);
                if (index1 > -1) {
                    this.freeAgents.splice(index1, 1);
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
            var dvr = new Driver(this.randomName());
            var skills = [79,78,77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60]
            var skillOdds = Math.floor(Math.random() * skills.length);
            dvr.age = 21;
            dvr.superspeedway = skills[skillOdds];
            dvr.intermediate = skills[skillOdds];
            dvr.flat = skills[skillOdds];
            dvr.shortTrack = skills[skillOdds];
            dvr.roadCourse = skills[skillOdds];
            dvr.aggression = skills[skillOdds];
            this.freeAgents.push(dvr)

        }


        console.log("encouraged", this.freeAgentsEncouraged);

        console.log("allowed", this.freeAgentsLegal);
        /*
                this.freeAgentsLegal = this.freeAgentsLegal.filter( function( el ) {
                    return !this.freeAgentsEncouraged.includes( el );
                } );
        */

        console.log("encouraged2", this.freeAgentsEncouraged);

        console.log("allowed2", this.freeAgentsLegal);

        this.carlist.sort((a, b) => (a.engine < b.engine) ? 1 : -1);



        console.log(this.retired);
        return retiredString;
    }

    sillySeasonOwnerMode2() {

        console.log("SILLY SEASON OWNER MODE 2");

        var index = Math.floor(Math.random() * this.freeAgentsEncouraged.length);
        var retiredString = "";

        selectedCar = null;
        selectedFA = null;

        var array2 = new Array();
        var array3 = new Array();

        for (var i = 0; i < this.carlist.length; i++) {
            for (var f = 0; f < this.freeAgentsEncouraged.length; f++) {

                var FA = this.freeAgentsEncouraged[f];

                for (var i = 0; i < this.carlist.length; i++) {
                    if (this.carlist[i].driver.name === FA.name) {

                        this.freeAgentsEncouraged.splice(index, 1); // Remove the item from the array
                        console.log("removed FA!", FA.name);
                        var index1 = this.freeAgentsEncouraged.indexOf(FA);
                        if (index1 > -1) {
                            this.freeAgentsEncouraged.splice(index1, 1);
                        }
                    }

                }
            }
        }
        for (var i = 0; i < this.carlist.length; i++) {
            var car = this.carlist[i];
            if (car) {
                if (car.driver) {
                    if (car.driver.name == "N/A" || car.driver.name == "Error") {
                        if (this.freeAgentsLegal.length > 0) {
                            var odds = Math.floor(Math.random() * 100);


                            if (((odds < 26 && car.driver.name == "N/A" || odds < 33 && car.sponsor1 == "Unsponsored" || (odds < 72 && car.driver.name == "N/A" && car.status == "Part Time")) || (odds < 52 && car.driver.name == "N/A" && car.status == "Part Time")) && (this.carlist.length + 2 > this.carsInRace)) {


                                var retiredString2 = "#" + this.carlist[i].number + " " + this.carlist[i].organization.name + " "
                                    + " has shut down.<br>"
                                retiredString += retiredString2;

                                for (var o = 0; o < this.carlist.length; o++) {
                                    if (this.carlist[i].organization.name == this.carlist[o].organization.name) {
                                        this.carlist[o].engine += 6;
                                        this.carlist[o].aero += 6;
                                        this.carlist[o].chassis += 6;
                                        this.carlist[o].pitCrew += 6;
                                        console.log("UPDATED", this.carlist[o].name);

                                    }
                                }


                            } else {
                                if (this.freeAgentsEncouraged.length > 0 && car.engine > 65) {
                                    var index = Math.floor(Math.random() * this.freeAgentsEncouraged.length);
                                    car.driver = this.freeAgentsEncouraged[index];
                                    retiredString2 = car.driver.name + " has signed with " + car.organization.name + " to drive the #" + car.number + " " + car.organization.manufacture + "<br>";
                                    console.log(" retired string 1a", retiredString2);
                                    retiredString += retiredString2;
                                    this.freeAgentsEncouraged.splice(index, 1); // Remove the item from the array
                                    var index1 = this.freeAgents.indexOf(car.driver);
                                    if (index1 > -1) {
                                        this.freeAgents.splice(index1, 1);
                                    }
                                    var index1 = this.freeAgentsEncouraged.indexOf(car.driver);
                                    if (index1 > -1) {
                                        this.freeAgentsEncouraged.splice(index1, 1);
                                    }
                                } else {

                                    console.log("free agentz legal", this.freeAgentsLegal, this.FreeAgentsEncouraged);
                                    var index2 = Math.floor(Math.random() * this.freeAgentsLegal.length);
                                    car.driver = this.freeAgentsLegal[index2];

                                    for (var jj = 0; jj < this.carlist.length; jj++) {

                                        if (this.carlist[jj].organization.name == car.organization.name) {
                                            this.carlist[jj].organization.manufacture = car.organization.manufacture;
                                        }
                                    }


                                    retiredString2 = car.driver.name + " has signed with " + car.organization.name + " to drive the #" + car.number + " " + car.organization.manufacture + "<br>";
                                    console.log("retired string 2b", retiredString2);
                                    retiredString += retiredString2;
                                    this.freeAgentsLegal.splice(index2, 1); // Remove the item from the array
                                    var index1 = this.freeAgents.indexOf(car.driver);
                                    if (index1 > -1) {
                                        this.freeAgents.splice(index1, 1);
                                    }
                                    var index1 = this.freeAgentsEncouraged.indexOf(car.driver);
                                    if (index1 > -1) {
                                        this.freeAgentsEncouraged.splice(index1, 1);
                                    }



                                }

                                if (car.status == "Part Time" && car.engine > 65 && odds < 62) {
                                    retiredString2 = "The " + car.organization.name + " #" + car.number + " " + car.organization.manufacture + " will run full time this upcoming season!<br>";
                                    retiredString += retiredString2;
                                    car.status = "Full Time";
                                }


                            }

                        } else {
                            car.driver = new Driver(this.randomName());
                            var skills = [75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63]
                            var skillOdds = Math.floor(Math.random() * skills.length);
                            car.driver.age = 22;
                            car.driver.superspeedway = skills[skillOdds];
                            car.driver.intermediate = skills[skillOdds];
                            car.driver.flat = skills[skillOdds];
                            car.driver.shortTrack = skills[skillOdds];
                            car.driver.roadCourse = skills[skillOdds];
                            retiredString2 = car.driver.name + " has signed with " + car.organization.name + " to drive the #" + car.number + " " + car.organization.manufacture + "<br>";

                            console.log(" retired string 2a", retiredString2);
                            retiredString += retiredString2;
                        }

                    }
                }
            }
        }

        console.log("org list!", this.orglist);


        for (var i = this.carlist.length - 1; i >= 0; --i) {
            if (this.carlist[i].driver.name == "N/A") {
                this.carlist.splice(i, 1);

            }


        }


        console.log("free agents left", this.freeAgents);

        for (var i = 0; i < this.carlist.length; i++) {

            if (this.carlist[i].organization) {
                if (!containsObject(this.carlist[i].organization.manufacture, this.manulist)) {
                    this.manulist.push(this.carlist[i].organization.manufacture);

                }
                if (!containsObject(this.carlist[i].organization, this.orglist)) {
                    this.orglist.push(this.carlist[i].organization);


                }
            }
        }

        var orgodds = Math.floor(Math.random() * this.orglist.length);
        var manuodds = Math.floor(Math.random() * this.manulist.length);

        console.log("orglist!!!", this.orglist, this.orglist[orgodds])

        var canChange = true;

        var randomGood = [98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86];

        for (var i = this.carlist.length - 1; i >= 0; --i) {
            if (this.carlist[i].engine > 100) {
                this.carlist[i].engine = randomGood[Math.floor(Math.random() * randomGood.length)];
            }
            if (this.carlist[i].aero > 100) {
                this.carlist[i].aero = randomGood[Math.floor(Math.random() * randomGood.length)];
            }
            if (this.carlist[i].chassis > 100) {
                this.carlist[i].chassis = randomGood[Math.floor(Math.random() * randomGood.length)];
            }
            if (this.carlist[i].pitCrew > 100) {
                this.carlist[i].pitCrew = randomGood[Math.floor(Math.random() * randomGood.length)];
            }

        }

        for (var i = this.carlist.length - 1; i >= 0; --i) {
            if(this.carlist[i].organization) {
                if (this.carlist[i].organization.name == this.orglist[orgodds].name) {
                    if (this.carlist[i].engine > 94 || this.carlist[i].organization.name.includes("Roush")) {
                        canChange = false;
                        console.log("can change false")
                    }
                }

            }
        }

        var odds = Math.random() * this.sponsorlist.length
        for (var i = this.carlist.length - 1; i >= 0; --i) {
            if(this.carlist[i].organization) {
                if (this.carlist[i].organization.name == this.orglist[orgodds].name && canChange) {
                    if(this.carlist[i] != this.manulist[manuodds]) {
                        this.carlist[i].organization.manufacture = this.manulist[manuodds];
                        retiredString2 = "#" + this.carlist[i].number + " " + this.carlist[i].organization.name + " has switched to " + this.carlist[i].organization.manufacture + "!<br>";
                        retiredString += retiredString2;
                    }

                }
            }

            if (this.carlist[i].sponsor1 == "random") {
                var odds = Math.floor(Math.random() * this.sponsorlist.length);
                this.carlist[i].sponsor1 = this.sponsorlist[odds];
            }
            if (this.carlist[i].sponsor1 == "undefined") {
                var odds = Math.floor(Math.random() * this.sponsorlist.length);
                this.carlist[i].sponsor1 = this.sponsorlist[odds];
            }
            if (this.carlist[i].sponsor2 == "random") {
                var odds = Math.floor(Math.random() * this.sponsorlist.length);
                this.carlist[i].sponsor1 = this.sponsorlist[odds];
            }
            if (this.carlist[i].sponsor2 == "undefined") {
                var odds = Math.floor(Math.random() * this.sponsorlist.length);
                this.carlist[i].sponsor1 = this.sponsorlist[odds];
            }

        }

        var gameodds = Math.floor(Math.random() * this.carlist.length);
        console.log("sponsorlist!!", this.sponsorlist)
        var sodds = Math.floor(Math.random() * this.sponsorlist.length);


        if (this.sponsorlist[sodds] == "undefined" || (!(this.sponsorlist[sodds].includes(".com")) && !(this.sponsorlist[sodds].includes("Coin")) && !(this.sponsorlist[sodds].includes("Youtube"))  && !(this.sponsorlist[sodds].includes("Game"))  && (this.year < 2002)) ) {
            this.carlist[gameodds].sponsor1 = this.sponsorlist[sodds]
            retiredString2 = "#" + this.carlist[gameodds].number + " " + this.carlist[gameodds].organization.name + " has a new primary sponsor: " + this.carlist[gameodds].sponsor1 + "!<br>";
            retiredString += retiredString2;
        }

        for (var cs = 0; cs < this.carlist.length; cs++) {
            if(this.carlist[cs].driver) {
                if(this.carlist[cs].driver.careerTitles > 0 && this.carlist[cs].sponsor1.includes("Unsponsored")) {
                    sodds = Math.floor(Math.random() * this.sponsorlist.length);
                    this.carlist[cs].sponsor1 = this.sponsorlist[sodds]
                    retiredString2 = "#" + this.carlist[cs].number + " " + this.carlist[cs].organization.name + " has a new primary sponsor: " + this.carlist[cs].sponsor1 + "!<br>";
                    retiredString += retiredString2;
                }
            }

        }

        var gameodds = Math.floor(Math.random() * this.carlist.length);
        console.log("sponsorlist!!", this.sponsorlist)
        var sodds = Math.floor(Math.random() * this.sponsorlist.length);

        if (this.sponsorlist[sodds] != "undefined") {
            this.carlist[gameodds].sponsor2 = this.sponsorlist[sodds]
            retiredString2 = "#" + this.carlist[gameodds].number + " " + this.carlist[gameodds].organization.name + " has a new secondary sponsor: " + this.carlist[gameodds].sponsor2 + "!<br>";
            retiredString += retiredString2;
        }

        var teamOdds2 = Math.floor(Math.random() * 100);

        console.log("team odds 2",  teamOdds2);

        if(this.database.length > 0 && teamOdds2 < 49) {

            var oddsD = Math.floor(Math.random() * this.database.length);
            var oddsO = Math.floor(Math.random() * this.carlist.length);

            var lastName = this.database[oddsD].split(' ');

            var teamName = ["Racing", "Motorsports", "Racing", "Motorsports", "Racing", "Motorsports", "Inc.", "Enterprises"]

            var teamChoice = teamName[Math.floor(Math.random() * teamName.length)];

            var teamOdds = Math.floor(Math.random() * 100);

            var newTeamName = lastName[1] + " " + teamChoice;

            if(teamOdds < 50) {
                newTeamName = lastName[0] + " " + lastName[1] + " " + teamChoice;
            }
            else {
                if(teamOdds < 75) {
                    var team1 = this.carlist[oddsO].organization.name.split(' ');
                    newTeamName = lastName[1] + "-" + team1[team1.length-2] + " " + teamChoice;
                }
                else {
                    if(teamOdds < 85) {
                        var team1 = this.carlist[oddsO].organization.name.split(' ');
                        newTeamName = team1[team1.length-2] + "-" + lastName[1] + " " + teamChoice;
                    }
                }

            }



            console.log("last name is", lastName)
            if(this.carlist[oddsO].engine < 88) {
                var retiredString2 = this.database[oddsD] + " has bought a majority share in " + this.carlist[oddsO].organization.name + "!<br>" +
                    "The team will now be known as " + newTeamName + "</br>";

                this.boughtTeam.push(this.database[oddsD]);

                retiredString += retiredString2;

                var found = true;

                for (var a = 0; a < this.carlist.length; a++) {
                    if (this.carlist[a].organization.name == this.carlist[oddsO].organization.name) {
                        this.carlist[a].organization.name = newTeamName;
                        this.carlist[a].organization.manufacture = this.carlist[oddsO].organization.manufacture;
                        for (var b = 0; b < this.carlist.length; b++) {
                            if(found && this.carlist[b].driver.name == this.database[oddsD] && this.carlist[b].driver.name != this.carlist[a].driver.name) {
                                var swap = this.carlist[a].driver;
                                var swap2 = this.carlist[b].driver;
                                this.carlist[a].driver = swap2;
                                this.carlist[b].driver = swap;
                                var retiredString2 = this.database[oddsD] + " will drive the " + this.carlist[a].organization.name + " #" + this.carlist[a].number + "!<br>";
                                retiredString2 += swap.name + " will drive the " + this.carlist[b].organization.name + " #" + this.carlist[b].number + "!<br>";
                                this.carlist[a].status = "Full Time";
                                this.carlist[a].engine += 5;
                                retiredString += retiredString2;
                                found = false;
                                break;
                            }
                        }
                    }
                }
            }
        }


        console.log(this.carlist);

        return retiredString;
    }

    runRace() {



        document.getElementById('uploads').innerHTML = "";
        if(this.player.team == "N/A") {
            this.player.team = document.getElementById("owner-teams").innerHTML;
        }
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


        console.log("game run races", this.numRaces);

        if(this.player.money > 1000000) {
            this.player.money = 1000000;
        }

        for (var line = 0; line < this.carlist.length; line++) {
            for (var line1 = 0; line1 < this.freeAgents.length; line1++) {
                if(this.carlist[line].driver) {
                    if(this.carlist[line].driver.name == this.freeAgents[line1].name) {
                        this.freeAgents.splice(line1, 1); // Remove the item from the array
                    }
                }
                if(this.week < 2) {
                    this.freeAgents[line1].wins = 0;
                    this.freeAgents[line1].topFives = 0;
                    this.freeAgents[line1].topTens = 0;
                    this.freeAgents[line1].races = 0;
                    this.freeAgents[line1].points = 0;
                }

            }

            for (var line2 = 0; line2 < this.carlist.length; line2++) {
                if (this.carlist[line].driver.name == this.carlist[line2].driver.name && line != line2) {
                    console.log("replace dvr1");
                    if(this.freeAgentsLegal.length > 2) {
                        var odds = Math.floor(Math.random() * this.freeAgentsLegal.length);
                        var FA = this.freeAgentsLegal[odds];
                        if(this.player.mode == "Owner Mode") {
                            if(this.player.team === this.carlist[line].organization.name) {
                                this.carlist[line2].driver = FA;
                            }
                            else {
                                this.carlist[line].driver = FA;
                            }
                        }
                        else {
                            this.carlist[line2].driver = FA;
                        }

                        this.freeAgentsLegal.splice(odds, 1); // Remove the item from the array
                        var index1 = this.freeAgentsLegal.indexOf(FA);
                        if (index1 > -1) {
                            this.freeAgentsLegal.splice(index1, 1);
                        }
                    }
                    else {
                        var dvr = new Driver(this.randomName());
                        var skills = [74,73,72,71,70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60]
                        var skillOdds = Math.floor(Math.random() * skills.length);
                        dvr.age = 24;
                        dvr.superspeedway = skills[skillOdds];
                        dvr.intermediate = skills[skillOdds];
                        dvr.flat = skills[skillOdds];
                        dvr.shortTrack = skills[skillOdds];
                        dvr.roadCourse = skills[skillOdds];
                        dvr.aggression = skills[skillOdds];
                        this.carlist[line2].driver = dvr;
                    }
                }
                if (this.carlist[line2].driver.name === "N/A") {
                    console.log("replace dvr2");
                    if(this.freeAgentsLegal.length > 2) {
                        var odds = Math.floor(Math.random() * this.freeAgentsLegal.length);
                        var FA = this.freeAgentsLegal[odds];
                        if(this.player.mode == "Owner Mode") {
                            if(this.player.team === this.carlist[line].organization.name) {
                                this.carlist[line2].driver = FA;
                            }
                            else {
                                this.carlist[line].driver = FA;
                            }
                        }
                        else {
                            this.carlist[line2].driver = FA;
                        }

                        this.freeAgentsLegal.splice(odds, 1); // Remove the item from the array
                        var index1 = this.freeAgentsLegal.indexOf(FA);
                        if (index1 > -1) {
                            this.freeAgentsLegal.splice(index1, 1);
                        }
                    }
                    else {
                        var dvr = new Driver(this.randomName());
                        var skills = [74,73,72,71,70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60]
                        var skillOdds = Math.floor(Math.random() * skills.length);
                        dvr.age = 24;
                        dvr.superspeedway = skills[skillOdds];
                        dvr.intermediate = skills[skillOdds];
                        dvr.flat = skills[skillOdds];
                        dvr.shortTrack = skills[skillOdds];
                        dvr.roadCourse = skills[skillOdds];
                        dvr.aggression = skills[skillOdds];
                        this.carlist[line2].driver = dvr;
                    }



                }
            }

            if(this.week < 2) {
                this.carlist[line].driver.wins = 0;
                this.carlist[line].driver.topFives = 0;
                this.carlist[line].driver.topTens = 0;
                this.carlist[line].driver.races = 0;
            }



            this.carlist[line].driver.formula = this.carlist[line].driver.points + (this.carlist[line].driver.races * 24) + (this.carlist[line].driver.topTens * 11) + (this.carlist[line].driver.careerTopTens * 6) + (this.carlist[line].driver.wins * 35) + (this.carlist[line].driver.careerWins * 20) +  (this.carlist[line].driver.careerTopFives * 8) + (this.carlist[line].engine * 9) + (this.carlist[line].chassis * 8) + (this.carlist[line].prestige * 8)
            if (this.carlist[line].status == "Part Time" || this.carlist[line].engine < 55 ) {
                this.carlist[line].driver.formula = this.carlist[line].driver.formula / 4;
            }
            if(this.carlist[line].driver.name == "Vacant") {
                this.carlist[line].driver.formula = -1000;
            }

            if (this.carlist[line].sponsor1 == "random") {
                var odds = Math.floor(Math.random() * this.sponsorlist.length);
                this.carlist[line].sponsor1 = this.sponsorlist[odds];
            }
            if (this.carlist[line].sponsor1 == "undefined") {
                var odds = Math.floor(Math.random() * this.sponsorlist.length);
                this.carlist[line].sponsor1 = this.sponsorlist[odds];
            }
            if (this.carlist[line].sponsor2 == "random") {
                var odds = Math.floor(Math.random() * this.sponsorlist.length);
                this.carlist[line].sponsor2 = this.sponsorlist[odds];
            }
            if (this.carlist[line].sponsor2 == "undefined") {
                var odds = Math.floor(Math.random() * this.sponsorlist.length);
                this.carlist[line].sponsor2 = this.sponsorlist[odds];
            }
        }

        if(this.week > 3) {
            carlist2 = this.displayStandings();
        }
        else {
            carlist2 = this.returnTopCars();
        }

        var initialAllowed = 30;

        if (this.week < 2) {
            initialAllowed = 26;
        }
        for (var line = 0; line < initialAllowed; line++) {
            console.log("carlist 2 line ", carlist2[line]);
            if(carlist2[line] && carlist2[line].status != "Part Time" && carlist2[line].driver.name !== "Vacant") {
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
            if (notLockedIn[line].status == "Part Time" && this.week % 2 == 0 && this.schedule[this.week-1].trackType == "Intermediate" ) {
                var odds = Math.floor(Math.random() * 100);
                if (odds < 78) {
                    notLockedIn.splice(line, 1); // Remove the item from the array
                }

            }
            if (notLockedIn[line]) {
                if (notLockedIn[line].driver.name == "Vacant") {
                    notLockedIn.splice(line, 1); // Remove the item from the array
                }
            }


        }


        for (var line = 0; line < 3; line++) {
            if(notLockedIn[line]) {

                if(notLockedIn[line].driver.name !== "Vacant") {
                    lockedIn.push(notLockedIn[line]);
                }
            }
        }

        console.log("locked in 2!!", [...lockedIn])


        var notLockedIn = notLockedIn.filter(function (x) {
            return lockedIn.indexOf(x) < 0;
        });

        if (this.schedule[this.week-1].trackType == "Road Course") {
            console.log("ROADCOURSE");
            notLockedIn.sort((a, b) => (a.driver.roadCourse < b.driver.roadCourse) ? 1 : -1);
        }
        else {

            notLockedIn.sort((a, b) => (a.engine < b.engine) ? 1 : -1);
        }


        for (var line = 0; line < 6; line++) {
            if(notLockedIn[line] && lockedIn.length <= this.carsInRace && lockedIn[line].driver.name !== "Vacant") {
                lockedIn.push(notLockedIn[line]);
            }
        }

        var notLockedIn = notLockedIn.filter(function (x) {
            return lockedIn.indexOf(x) < 0;
        });

        notLockedIn = shuffle(notLockedIn);

        var tLength = lockedIn.length;

        for (var line = 0; line < (this.carsInRace - tLength); line++) {
            if(notLockedIn[line] && lockedIn[line].driver.name !== "Vacant") {
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

            if(this.schedule[this.week-1].trackType == "Road Course") {
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
                            console.log("pushed average 10", lockedIn[line], odds , "Game week", this.week);
                        }
                    }
                }
            }
            else{
                if(this.schedule[this.week-1].trackType == "Superspeedway") {
                    var odds = Math.floor(Math.random() * 100);

                    if((lockedIn[line].aero + lockedIn[line].engine) / 2 > 88) {
                        if (odds < 85) {
                            elite.push(lockedIn[line]);
                        }
                        else {
                            if (odds < 90) {
                                good.push(lockedIn[line]);
                            }
                            else {
                                if (odds < 93) {
                                    great.push(lockedIn[line]);
                                }
                                else {
                                    average.push(lockedIn[line]);
                                    console.log("pushed average 8", lockedIn[line], odds , "Game week", this.week);
                                }

                            }

                        }

                    }
                    else {
                        if(((lockedIn[line].aero + lockedIn[line].engine) / 2) > 81) {
                            great.push(lockedIn[line]);
                        }
                        else {
                            if(((lockedIn[line].aero + lockedIn[line].engine) / 2) > 70) {
                                var odds4 = Math.floor(Math.random() * 100);
                                if(odds4 < 30) {
                                    elite.push(lockedIn[line]);
                                }
                                else {
                                    good.push(lockedIn[line]);
                                }

                            }
                            else {
                                if (odds < 92) {
                                    average.push(lockedIn[line]);
                                }
                                else {
                                    if (odds < 97) {
                                        elite.push(lockedIn[line]);
                                    }
                                    else {
                                        great.push(lockedIn[line]);
                                    }

                                }

                                console.log("pushed average 9", lockedIn[line], odds , "Game week", this.week);
                            }
                        }
                    }
                }
                else{
                    var odds = Math.floor(Math.random() * 100);

                    if(this.week > 19 & this.week < 25) {
                        console.log("test period");
                    }
                    if(this.player.mode == "Owner Mode") {
                        if(this.player.team == lockedIn[line].organization.name) {
                            console.log("LETS GOOO TOP")
                            if((lockedIn[line].engine + lockedIn[line].aero + lockedIn[line].driver.shortTrack + lockedIn[line].driver.intermediate) / 4  > 95 ) {
                                console.log("LETS GOOO TOP2")
                                if (lockedIn[line].driver.topFives > 22 && this.week > 20 && this.week < 25 || this.week < 25 && lockedIn[line].driver.wins > 7 || this.week < 34 && lockedIn[line].driver.wins > 11) {
                                    good.push(lockedIn[line]);
                                }
                                else {
                                    var odds = Math.floor(Math.random() * 100);
                                    if (odds < 70) {
                                        console.log("LETS GOOO TOP3", lockedIn[line]);
                                        superelite.push(lockedIn[line]);
                                    } else {
                                        if (odds < 95) {
                                            elite.push(lockedIn[line]);
                                        } else {
                                            average.push(lockedIn[line]);
                                            console.log("pushed average 1", lockedIn[line], odds, "Game week", this.week);
                                        }
                                        }
                                }
                            }
                            else {
                                if((lockedIn[line].engine + lockedIn[line].aero + lockedIn[line].driver.shortTrack + lockedIn[line].driver.intermediate) /4  > 86 ) {
                                    console.log("LETS GOOO TOP4", lockedIn[line], (lockedIn[line].engine + lockedIn[line].aero + lockedIn[line].driver.shortTrack + lockedIn[line].driver.intermediate))
                                    if( lockedIn[line].driver.topTens > 18 && lockedIn[line].driver.wins == 0) {
                                        if(odds < 20) {
                                            superelite.push(lockedIn[line]);
                                        }
                                        else {
                                            good.push(lockedIn[line]);
                                        }
                                    }
                                    else {
                                        if(odds < 90 && lockedIn[line].driver.topTens < this.schedule.length - 5 || this.week > 23 && this.week < 27 && lockedIn[line].driver.wins > 3) {
                                            elite.push(lockedIn[line]);
                                        }
                                        else {
                                            if (odds < 45) {
                                                great.push(lockedIn[line]);
                                            }
                                            else {
                                                good.push(lockedIn[line]);
                                            }

                                        }
                                    }


                                }
                                else {
                                    if((lockedIn[line].engine + lockedIn[line].aero + lockedIn[line].driver.shortTrack + lockedIn[line].driver.intermediate) /4 > 79) {
                                        if(this.week > 20 && this.week < 32 && lockedIn[line].driver.topTens < 12 )
                                        {
                                            if(odds < 10) {
                                                elite.push(lockedIn[line]);
                                            }
                                            else {
                                                if(odds < 30) {
                                                    great.push(lockedIn[line]);
                                                }
                                                else {
                                                    if(odds < 70) {
                                                        good.push(lockedIn[line]);
                                                    }
                                                    else {
                                                        average.push(lockedIn[line]);
                                                    }

                                                    console.log("pushed average 2", lockedIn[line], odds , "Game week", this.week);
                                                }
                                            }
                                        }
                                        else {
                                            if(odds < 20) {
                                                elite.push(lockedIn[line]);
                                            }
                                            else {
                                                if(odds < 80) {
                                                    great.push(lockedIn[line]);
                                                }
                                                else {
                                                    average.push(lockedIn[line]);
                                                    console.log("pushed average 4", lockedIn[line], odds , "Game week", this.week);
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        if((lockedIn[line].engine + lockedIn[line].aero + lockedIn[line].driver.shortTrack + lockedIn[line].driver.intermediate) / 4 > 72) {

                                            if(odds < 75) {
                                                good.push(lockedIn[line]);
                                            }

                                            else {
                                                if(odds < 85) {
                                                    great.push(lockedIn[line]);
                                                }
                                                else {
                                                    average.push(lockedIn[line]);
                                                    console.log("pushed average 5", lockedIn[line], odds , "Game week", this.week);
                                                }

                                            }
                                        }
                                        else {
                                            if((lockedIn[line].engine + lockedIn[line].aero + lockedIn[line].driver.shortTrack + lockedIn[line].driver.intermediate) /4 > 66) {

                                                if(odds < 75) {
                                                    good.push(lockedIn[line]);
                                                }

                                                else {
                                                    if(odds < 85) {
                                                        great.push(lockedIn[line]);
                                                    }
                                                    else {
                                                        average.push(lockedIn[line]);
                                                        console.log("pushed average 5", lockedIn[line], odds , "Game week", this.week);
                                                    }

                                                }
                                            }


                                            else {
                                                if(odds < 90) {
                                                    average.push(lockedIn[line]);
                                                }
                                                else {
                                                    good.push(lockedIn[line]);
                                                    console.log("pushed average 7", lockedIn[line], odds , "Game week", this.week);
                                                }

                                            }

                                        }
                                    }
                                }
                            }
                        }
                        else {
                            if((lockedIn[line].engine + lockedIn[line].driver.intermediate) / 2  > 90 ) {
                                if (lockedIn[line].driver.topFives > 19 && this.week > 20 && this.week < 25) {
                                    good.push(lockedIn[line]);
                                }
                                else {
                                    if(lockedIn[line].driver.wins > 2 && lockedIn[line].driver.wins < 6  && this.week > 28 && this.week < 33) {
                                        if(odds < 74) {
                                            superelite.push(lockedIn[line]);
                                        }
                                        else {
                                            great.push(lockedIn[line]);
                                        }

                                    }
                                    else {
                                        if(lockedIn[line].driver.wins == 0 && this.week > 16 && this.week < 24) {
                                            superelite.push(lockedIn[line]);
                                        }
                                        else {
                                            if((odds < 60 && lockedIn[line].driver.wins < 7 && this.week < 16) || (this.week > 32 && lockedIn[line].driver.wins < 7 && lockedIn[line].driver.wins > 3) || (this.week > 23 && this.week < 27 && lockedIn[line].driver.wins > 3 && lockedIn[line].driver.wins < 7) || (this.week > 21 && this.week < 27 && lockedIn[line].driver.wins == 0 )) {
                                                if(superelite.length < 4) {
                                                    superelite.push(lockedIn[line]);
                                                }
                                                else {
                                                    if(((lockedIn[line].driver.intermediate + lockedIn[line].engine + lockedIn[line].aero + lockedIn[line].chassis ) / 3 ) > 95 && superelite.length < 8 ) {
                                                        superelite.push(lockedIn[line]);
                                                    }
                                                    else {
                                                        elite.push(lockedIn[line]);
                                                    }
                                                }

                                            }
                                            else {
                                                if (odds < 80) {
                                                    great.push(lockedIn[line]);
                                                }
                                                else {
                                                    if (odds < 95) {
                                                        good.push(lockedIn[line]);
                                                    }
                                                    else {
                                                        average.push(lockedIn[line]);
                                                        console.log("pushed average 1", lockedIn[line], odds , "Game week", this.week);
                                                    }

                                                }

                                            }
                                        }

                                    }

                                }

                            }
                            else {
                                if((lockedIn[line].engine + lockedIn[line].driver.intermediate) / 2  > 84 ) {
                                    if( lockedIn[line].driver.topTens > 18 && lockedIn[line].driver.wins == 0) {
                                        if(odds < 20) {
                                            superelite.push(lockedIn[line]);
                                        }
                                        else {
                                            if(odds < 70) {
                                                elite.push(lockedIn[line]);
                                            }
                                            else {
                                                good.push(lockedIn[line]);
                                            }

                                        }
                                    }
                                    else {
                                        if(odds < 90 && lockedIn[line].driver.topTens < this.schedule.length - 5 || this.week > 23 && this.week < 27 && lockedIn[line].driver.wins > 3) {
                                            elite.push(lockedIn[line]);
                                        }
                                        else {
                                            if (odds < 45) {
                                                great.push(lockedIn[line]);
                                            }
                                            else {
                                                if (odds < 75) {
                                                    elite.push(lockedIn[line]);
                                                }
                                                else {
                                                    good.push(lockedIn[line]);
                                                }

                                            }

                                        }
                                    }


                                }
                                else {
                                    if((lockedIn[line].engine + lockedIn[line].driver.intermediate) / 2 > 80) {
                                        if(this.week > 20 && this.week < 32 && lockedIn[line].driver.topTens < 12 )
                                        {
                                            if(odds < 80) {
                                                elite.push(lockedIn[line]);
                                            }
                                            else {
                                                if(odds < 90) {
                                                    great.push(lockedIn[line]);
                                                }
                                                else {
                                                    average.push(lockedIn[line]);
                                                    console.log("pushed average 2", lockedIn[line], odds , "Game week", this.week);
                                                }
                                            }
                                        }
                                        else {
                                            if(odds < 80) {
                                                great.push(lockedIn[line]);
                                            }
                                            else {
                                                if(odds < 80) {
                                                    elite.push(lockedIn[line]);
                                                }
                                                else {
                                                    average.push(lockedIn[line]);
                                                    console.log("pushed average 4", lockedIn[line], odds , "Game week", this.week);
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        if((lockedIn[line].engine + lockedIn[line].driver.intermediate) / 2 > 70) {

                                            if(odds < 75) {
                                                good.push(lockedIn[line]);
                                            }

                                            else {
                                                if(odds < 85) {
                                                    great.push(lockedIn[line]);
                                                }
                                                else {
                                                    average.push(lockedIn[line]);
                                                    console.log("pushed average 5", lockedIn[line], odds , "Game week", this.week);
                                                }

                                            }
                                        }
                                        else {
                                            if(odds < 75) {
                                                average.push(lockedIn[line]);
                                                console.log("pushed average 6", lockedIn[line], odds , "Game week", this.week);
                                            }

                                            else {
                                                if(odds < 80) {
                                                    great.push(lockedIn[line]);
                                                }
                                                else {
                                                    average.push(lockedIn[line]);
                                                    console.log("pushed average 7", lockedIn[line], odds , "Game week", this.week);
                                                }

                                            }

                                        }
                                    }
                                }
                            }
                        }
                    }
                    else {
                        if((lockedIn[line].engine + lockedIn[line].driver.intermediate) / 2  > 90 ) {
                            if (lockedIn[line].driver.topFives > 19 && this.week > 20 && this.week < 25) {
                                good.push(lockedIn[line]);
                            }
                            else {
                                if(lockedIn[line].driver.wins > 2 && lockedIn[line].driver.wins < 6  && this.week > 28 && this.week < 33) {
                                    if(odds < 74) {
                                        superelite.push(lockedIn[line]);
                                    }
                                    else {
                                        great.push(lockedIn[line]);
                                    }

                                }
                                else {
                                    if(lockedIn[line].driver.wins == 0 && this.week > 16 && this.week < 24) {
                                        superelite.push(lockedIn[line]);
                                    }
                                    else {
                                        if((odds < 60 && lockedIn[line].driver.wins < 7 && this.week < 16) || (this.week > 32 && lockedIn[line].driver.wins < 7 && lockedIn[line].driver.wins > 3) || (this.week > 23 && this.week < 27 && lockedIn[line].driver.wins > 3 && lockedIn[line].driver.wins < 7) || (this.week > 21 && this.week < 27 && lockedIn[line].driver.wins == 0 )) {
                                            if(superelite.length < 4) {
                                                superelite.push(lockedIn[line]);
                                            }
                                            else {
                                                if(((lockedIn[line].driver.intermediate + lockedIn[line].engine + lockedIn[line].aero + lockedIn[line].chassis ) / 3 ) > 95 && superelite.length < 8 ) {
                                                    superelite.push(lockedIn[line]);
                                                }
                                                else {
                                                    elite.push(lockedIn[line]);
                                                }
                                            }

                                        }
                                        else {
                                            if (odds < 90) {
                                                elite.push(lockedIn[line]);
                                            }
                                            else {
                                                if (odds < 95) {
                                                    good.push(lockedIn[line]);
                                                }
                                                else {
                                                    average.push(lockedIn[line]);
                                                    console.log("pushed average 1", lockedIn[line], odds , "Game week", this.week);
                                                }

                                            }

                                        }
                                    }

                                }

                            }

                        }
                        else {
                            if((lockedIn[line].engine + lockedIn[line].driver.intermediate) / 2  > 84 ) {
                                if( lockedIn[line].driver.topTens > 18 && lockedIn[line].driver.wins == 0) {
                                    if(odds < 20) {
                                        superelite.push(lockedIn[line]);
                                    }
                                    else {
                                        good.push(lockedIn[line]);
                                    }
                                }
                                else {
                                    if(odds < 90 && lockedIn[line].driver.topTens < this.schedule.length - 5 || this.week > 23 && this.week < 27 && lockedIn[line].driver.wins > 3) {
                                        elite.push(lockedIn[line]);
                                    }
                                    else {
                                        if (odds < 45) {
                                            great.push(lockedIn[line]);
                                        }
                                        else {
                                            good.push(lockedIn[line]);
                                        }

                                    }
                                }


                            }
                            else {
                                if((lockedIn[line].engine + lockedIn[line].driver.intermediate) / 2 > 80) {
                                    if(this.week > 20 && this.week < 32 && lockedIn[line].driver.topTens < 12 )
                                    {
                                        if(odds < 80) {
                                            elite.push(lockedIn[line]);
                                        }
                                        else {
                                            if(odds < 90) {
                                                great.push(lockedIn[line]);
                                            }
                                            else {
                                                average.push(lockedIn[line]);
                                                console.log("pushed average 2", lockedIn[line], odds , "Game week", this.week);
                                            }
                                        }
                                    }
                                    else {
                                        if(odds < 80) {
                                            great.push(lockedIn[line]);
                                        }
                                        else {
                                            if(odds < 80) {
                                                elite.push(lockedIn[line]);
                                            }
                                            else {
                                                average.push(lockedIn[line]);
                                                console.log("pushed average 4", lockedIn[line], odds , "Game week", this.week);
                                            }
                                        }
                                    }
                                }
                                else {
                                    if((lockedIn[line].engine + lockedIn[line].driver.intermediate) / 2 > 70) {

                                        if(odds < 75) {
                                            good.push(lockedIn[line]);
                                        }

                                        else {
                                            if(odds < 85) {
                                                great.push(lockedIn[line]);
                                            }
                                            else {
                                                average.push(lockedIn[line]);
                                                console.log("pushed average 5", lockedIn[line], odds , "Game week", this.week);
                                            }

                                        }
                                    }
                                    else {
                                        if(odds < 75) {
                                            average.push(lockedIn[line]);
                                            console.log("pushed average 6", lockedIn[line], odds , "Game week", this.week);
                                        }

                                        else {
                                            if(odds < 80) {
                                                great.push(lockedIn[line]);
                                            }
                                            else {
                                                average.push(lockedIn[line]);
                                                console.log("pushed average 7", lockedIn[line], odds , "Game week", this.week);
                                            }

                                        }

                                    }
                                }
                            }
                        }

                    }



                }

            }

        }

        if (this.week > -5) {

            console.log("elite great1 - super elite - >", [...superelite], "elite -> ", [...elite], "great -> ",
                [...great], "good -> ", [...good], "avg -> ",[...average]);


            var val1 = this.carsInRace;

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
                    this.schedule[this.week - 1].raceWinner = winningStr;

                    if (this.week-1 == 0) {
                        var str1 = this.year + ' | ' + car.number + ' ' + car.driver.name
                            + ' | Primary Sponsor: ' + car.sponsor1
                            + ' | Team: ' + car.organization.name
                            + ' | Make: ' + car.organization.manufacture + '<br>';


                        this.daytona.push(str1)
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

                if(this.points == 0) {
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
                    if(this.points > 2010) {
                        driver.points += points2011;
                        if (line == 0) {
                            if(this.points > 2013 && this.week > this.schedule.length - 10 && driver.points > 1500) {
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

        if(this.points > 2003 && this.points < 2014 && this.week == this.schedule.length - 10) {
            console.log("display points", this.displayStandings())
            var st =  this.displayStandings();
            for (var i1 = 0; i1 < 10; i1++) {

                st[i1].driver.points = 5000 + (st[i1].driver.wins * 5);
            }
        }

        if(this.points > 2013) {
            console.log("schedule!!!", this.schedule)

            console.log("display points", this.calculatePoints())
            var st = this.calculatePoints();
            var activate = true;
            if (this.week == this.schedule.length - 10) {
                console.log("sweet 16!!!!")
                var pts = this.calculatePoints();
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
            if (this.week == this.schedule.length - 7) {
                console.log("sweet 12!!!!")
                var st = this.displayStandings();
                for (var i1 = 0; i1 < 12; i1++) {
                    st[i1].driver.points = 3000;

                }

            }
            if (this.week == this.schedule.length - 4) {
                console.log("sweet 8!!!!")
                var st = this.displayStandings();
                for (var i1 = 0; i1 < 8; i1++) {
                    st[i1].driver.points = 4000;
                }

            }
            if (this.week == this.schedule.length - 1) {
                console.log("sweet 4!!!!")
                var st = this.displayStandings();
                for (var i1 = 0; i1 < 4; i1++) {
                    st[i1].driver.points = 5000;
                }

            }
        }

        var filteredArray = backup.filter(function (x) {
            return carlist3.indexOf(x) < 0;
        });

        this.filtered = notLockedIn;


        return carlist3;
    }

    displayStandings() {
        var carlist2 = [...this.carlist];



        carlist2.sort((a, b) => (a.driver.points < b.driver.points) ? 1 : -1);



        return carlist2;

    }

    displayStandings2() {
        var carlist2 = [...this.carlist];

        for (var i = 0; i < this.freeAgents.length; i++) {
            if (this.freeAgents[i].points > 0) {
                var car1 = new Car();
                car1.number = "FA";
                car1.driver = this.freeAgents[i];
                carlist2.push(car1);
            }
        }

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

        for (var i = 0; i < this.carlist.length; i++) {
            if (this.carlist[i].driver.wins < 1 || this.carlist[i].driver.races < this.schedule.length-11) {
                carlist3.push(this.carlist[i]);

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

        for (var i = 0; i < this.freeAgents.length; i++) {
            if (this.freeAgents[i].age > 20 && this.freeAgents[i].name != "N/A") {
                carlist3.push(this.freeAgents[i]);
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

        return this.champions;

    }
}


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

function upgradeDriver(event, car, cost) {


    event.preventDefault();
    //console.log("car is", car)

    try {
        // Parse a JSON
        selectedCar = JSON.parse(car);
    } catch (e) {
        // You can read e for more info
        // Let's assume the error is that we already have parsed the payload
        // So just return that
        selectedCar = car;
    }
    console.log("car is", selectedCar)

    console.log("driver is", selectedCar.driver)

    console.log( 'upgradeDriver' );
    if (globalMoney - cost > 0) {
        if (selectedCar.driver.intermediate < 100) {
            selectedCar.driver.intermediate += 3;

        }
        if (selectedCar.driver.intermediate > 100) {
            selectedCar.driver.intermediate = 100;
        }

        if (selectedCar.driver.superspeedway < 100) {
            selectedCar.driver.superspeedway += 3;

        }
        if (selectedCar.driver.superspeedway > 100) {
            selectedCar.driver.superspeedway = 100;
        }
        if (selectedCar.driver.flat < 100) {
            selectedCar.driver.flat += 3;

        }
        if (selectedCar.driver.flat > 100) {
            selectedCar.driver.flat = 100;
        }

        if (selectedCar.driver.roadCourse < 100) {
            selectedCar.driver.roadCourse += 3;

        }
        if (selectedCar.driver.roadCourse > 100) {
            selectedCar.driver.roadCourse = 100;
        }

        if (selectedCar.driver.shortTrack < 100) {
            selectedCar.driver.shortTrack += 3;

        }
        if (selectedCar.driver.shortTrack > 100) {
            selectedCar.driver.shortTrack = 100;
        }
        globalCost = cost;
    }
    else {
        alert("Insufficent Funds!");
    }


    document.getElementById("teammanager").click();


}

function upgradeStat(event, car, cost, stat) {
    event.preventDefault();
    console.log("car is", car)

    try {
        // Parse a JSON
        selectedCar = JSON.parse(car);
    } catch (e) {
        // You can read e for more info
        // Let's assume the error is that we already have parsed the payload
        // So just return that
        selectedCar = car;
    }
    console.log("car is", selectedCar)

    console.log('upgradeDriver');


    console.log("global money is", globalMoney, cost)
    if (globalMoney - cost > 0) {
        switch (stat) {
            case 1:
                if (selectedCar.engine < 100) {
                    selectedCar.engine += 3;
                    if (selectedCar.engine > 100) {
                        selectedCar.engine = 100;
                    }
                }
                break;
            case 2:
                if (selectedCar.chassis < 100) {
                    selectedCar.chassis += 3;
                    if (selectedCar.chassis > 100) {
                        selectedCar.chassis = 100;
                    }
                }
                break;
            case 3:
                if (selectedCar.aero < 100) {
                    selectedCar.aero += 3;
                    if (selectedCar.aero > 100) {
                        selectedCar.aero = 100;
                    }
                }
                break;
            case 4:
                if (selectedCar.pitCrew < 100) {
                    selectedCar.pitCrew += 3;
                    if (selectedCar.pitCrew > 100) {
                        selectedCar.pitCrew = 100;
                    }
                }
                break;
        }
        globalCost = cost;

    }
    else {
        alert("Insufficent Funds!");
    }


    document.getElementById("teammanager").click();
    document.getElementById("teammanager").click();

}

function fireDriver(event, car) {
    event.preventDefault();
    console.log("car is", car)

    try {
        // Parse a JSON
        selectedCar = JSON.parse(car);
    } catch (e) {
        // You can read e for more info
        // Let's assume the error is that we already have parsed the payload
        // So just return that
        selectedCar = car;
    }
    console.log("car is", selectedCar)

    firedDriver = selectedCar.driver;
    selectedCar.driver = new Driver();
    selectedCar.driver.name = "Vacant";

    console.log( 'upgrade3Driver', selectedCar );



    document.getElementById("teammanager").click();
}

function hireDriver(event, car) {

    event.preventDefault();

    try {
        // Parse a JSON
        selectedCar = JSON.parse(car);
    } catch (e) {
        // You can read e for more info
        // Let's assume the error is that we already have parsed the payload
        // So just return that
        selectedCar = car;
    }
    console.log("car driver name", selectedCar.driver.name);
    if(selectedCar.driver.name !== "N/A" && selectedCar.driver.name !== "Vacant") {

        alert("Must fire a driver first");
    }
    else {
        console.log("car is", car)

        try {
            // Parse a JSON
            selectedCar = JSON.parse(car);
        } catch (e) {
            // You can read e for more info
            // Let's assume the error is that we already have parsed the payload
            // So just return that
            selectedCar = car;
        }
        console.log("car is", selectedCar)

        console.log( 'upgrade3Driver', selectedCar );


        document.getElementById("driversHire").click();
    }




}

function upgradeDriverSS(event, car, cost) {


    event.preventDefault();
    console.log("car is", car)

    try {
        // Parse a JSON
        selectedCar = JSON.parse(car);
    } catch (e) {
        // You can read e for more info
        // Let's assume the error is that we already have parsed the payload
        // So just return that
        selectedCar = car;
    }
    console.log("car is", selectedCar)

    console.log("driver is", selectedCar.driver)

    console.log( 'upgradeDriver' );

    if (globalMoney - cost > 0) {
        if (selectedCar.driver.intermediate < 100) {
            selectedCar.driver.intermediate += 3;

        }
        if (selectedCar.driver.intermediate > 100) {
            selectedCar.driver.intermediate = 100;
        }

        if (selectedCar.driver.superspeedway < 100) {
            selectedCar.driver.superspeedway += 3;

        }
        if (selectedCar.driver.superspeedway > 100) {
            selectedCar.driver.superspeedway = 100;
        }
        if (selectedCar.driver.flat < 100) {
            selectedCar.driver.flat += 3;

        }
        if (selectedCar.driver.flat > 100) {
            selectedCar.driver.flat = 100;
        }

        if (selectedCar.driver.roadCourse < 100) {
            selectedCar.driver.roadCourse += 3;

        }
        if (selectedCar.driver.roadCourse > 100) {
            selectedCar.driver.roadCourse = 100;
        }

        if (selectedCar.driver.shortTrack < 100) {
            selectedCar.driver.shortTrack += 3;

        }
        if (selectedCar.driver.shortTrack > 100) {
            selectedCar.driver.shortTrack = 100;
        }
        globalCost = cost;
    }
    else {
        alert("Insufficent Funds!");
    }



    document.getElementById("teammanagerSillySeason").click();

}

function upgradeStatSS(event, car, cost, stat) {
    event.preventDefault();
    console.log("car is", car)

    try {
        // Parse a JSON
        selectedCar = JSON.parse(car);
    } catch (e) {
        // You can read e for more info
        // Let's assume the error is that we already have parsed the payload
        // So just return that
        selectedCar = car;
    }
    console.log("car is", selectedCar)

    console.log('upgradeDriver');
    if (globalMoney - cost > 0) {
        switch (stat) {
            case 1:
                if (selectedCar.engine < 100) {
                    selectedCar.engine += 3;
                    if (selectedCar.engine > 100) {
                        selectedCar.engine = 100;
                    }
                }
                break;
            case 2:
                if (selectedCar.chassis < 100) {
                    selectedCar.chassis += 3;
                    if (selectedCar.chassis > 100) {
                        selectedCar.chassis = 100;
                    }
                }
                break;
            case 3:
                if (selectedCar.aero < 100) {
                    selectedCar.aero += 3;
                    if (selectedCar.aero > 100) {
                        selectedCar.aero = 100;
                    }
                }
                break;
            case 4:
                if (selectedCar.pitCrew < 100) {
                    selectedCar.pitCrew += 3;
                    if (selectedCar.pitCrew > 100) {
                        selectedCar.pitCrew = 100;
                    }
                }
                break;
        }
        globalCost = cost;
    }
    else {
        alert("Insufficent Funds!");
    }


    document.getElementById("teammanagerSillySeason").click();

}

function fireDriverSS(event, car) {
    event.preventDefault();
    console.log("car is", car)

    try {
        // Parse a JSON
        selectedCar = JSON.parse(car);
    } catch (e) {
        // You can read e for more info
        // Let's assume the error is that we already have parsed the payload
        // So just return that
        selectedCar = car;
    }
    console.log("car is", selectedCar)

    firedDriver = selectedCar.driver;
    selectedCar.driver = new Driver();
    selectedCar.driver.name = "Vacant";

    console.log( 'upgrade3Driver', selectedCar );

    document.getElementById("teammanagerSillySeason").click();
}

function hireDriverSS(event, car) {

    event.preventDefault();

    try {
        // Parse a JSON
        selectedCar = JSON.parse(car);
    } catch (e) {
        // You can read e for more info
        // Let's assume the error is that we already have parsed the payload
        // So just return that
        selectedCar = car;
    }
    console.log("car driver name", selectedCar.driver.name);
    if(selectedCar.driver.name !== "N/A" && selectedCar.driver.name !== "Vacant") {

        alert("Must fire a driver first");
    }
    else {
        console.log("car is", car)

        try {
            // Parse a JSON
            selectedCar = JSON.parse(car);
        } catch (e) {
            // You can read e for more info
            // Let's assume the error is that we already have parsed the payload
            // So just return that
            selectedCar = car;
        }
        console.log("car is", selectedCar)

        console.log('upgrade3Driver', selectedCar);


        document.getElementById("driversHireSillySeason").click();

    }


}

function hireSponsorSS(event, car) {




    console.log("sponsor car is", car)

    try {
        // Parse a JSON
        selectedCar = JSON.parse(car);
    } catch (e) {
        // You can read e for more info
        // Let's assume the error is that we already have parsed the payload
        // So just return that
        selectedCar = car;
    }
    console.log("sponsor car is", selectedCar)

    console.log( 'upgrade3Driver', selectedCar );

    document.getElementById("sponsorHireSillySeason").click();



}


function hireSponsor(event, car) {




    console.log("sponsor car is", car)

    try {
        // Parse a JSON
        selectedCar = JSON.parse(car);
    } catch (e) {
        // You can read e for more info
        // Let's assume the error is that we already have parsed the payload
        // So just return that
        selectedCar = car;
    }
    console.log("sponsor car is", selectedCar)

    console.log( 'upgrade3Driver', selectedCar );

    document.getElementById("sponsorHire").click();



}

function hireSponsorConfirm(event, sponsor) {

    event.preventDefault();

    console.log("confirmed sponsor", sponsor);

    selectedCar.sponsor1 = sponsor;
    selectedCar.sponsor2 = sponsor;


    document.getElementById("teammanager").click();




}

function hireSponsorConfirmSS(event, sponsor) {

    event.preventDefault();

    console.log("confirmed sponsor", sponsor);

    selectedCar.sponsor1 = sponsor;
    selectedCar.sponsor2 = sponsor;


    document.getElementById("teammanagerSillySeason").click();




}

function hireDriverConfirm(event, car) {

    event.preventDefault();


    console.log("car is", car)

    try {
        // Parse a JSON
        selectedFA = JSON.parse(car);
    } catch (e) {
        // You can read e for more info
        // Let's assume the error is that we already have parsed the payload
        // So just return that
        selectedFA = car;
    }
    console.log("FA is", selectedFA)


    document.getElementById("driversNegotiate").click();




}

function hireDriverConfirm2(event, contractAmt, yrsLeft1) {

    event.preventDefault();

    yrsLeft = yrsLeft1;

    globalCost = contractAmt;

    document.getElementById("driversConfirmHire").click();




}

function hireDriverConfirm2SS(event, contractAmt, yrsLeft1) {

    event.preventDefault();

    yrsLeft = yrsLeft1;

    globalCost = contractAmt;

    document.getElementById("driversConfirmHireSillySeason").click();




}


function hireDriverConfirmSS(event, car) {

    event.preventDefault();


    console.log("car is", car)

    try {
        // Parse a JSON
        selectedFA = JSON.parse(car);
    } catch (e) {
        // You can read e for more info
        // Let's assume the error is that we already have parsed the payload
        // So just return that
        selectedFA = car;
    }
    console.log("FA is", selectedFA)

    document.getElementById("driversNegotiateSillySeason").click();






}

function shutDownTeam(event, car) {

    event.preventDefault();
    console.log("car is", car)

    try {
        // Parse a JSON
        selectedCar = JSON.parse(car);
    } catch (e) {
        // You can read e for more info
        // Let's assume the error is that we already have parsed the payload
        // So just return that
        selectedCar = car;
    }
    console.log("FA is", selectedCar)

    document.getElementById("shutDownTeam1").click();




}

function shutDownTeamSS(event, car) {

    event.preventDefault();

    console.log("car is", car)

    try {
        // Parse a JSON
        selectedCar = JSON.parse(car);
    } catch (e) {
        // You can read e for more info
        // Let's assume the error is that we already have parsed the payload
        // So just return that
        selectedCar = car;
    }
    console.log("FA is", selectedCar)

    document.getElementById("shutDownTeam1SillySeason").click();




}


function createTeam(event) {

    event.preventDefault();


    document.getElementById("createTeam1").click();




}

function createTeamSubmit(event, rating, cost, type) {

    event.preventDefault();

    console.log("global money is", globalMoney, cost)
    if (globalMoney - cost > 0) {

        selectedCar = new Car();

        selectedCar.engine = selectedCar.pitCrew = selectedCar.chassis = selectedCar.aero = rating;

        selectedCar.organization = globalTeam;

        console.log("submit team")

        if (type == 1) {
            selectedCar.status = "Part Time";
        }

        document.getElementById("createTeam2").click();
    }
    else {
        alert("Insufficent Funds!");
    }






}

function shutDownTeamSubmit(event) {

    event.preventDefault();

    globalCost = -50000;

    shutDown = true;


    document.getElementById("shutDownTeam2").click();



}

function shutDownTeamSubmitSS(event) {

    event.preventDefault();

    globalCost = -50000;


    document.getElementById("shutDownTeam2SillySeason").click();



}

function teamManagerReturnSS(event) {

    event.preventDefault();

    selectedCar = null;

    selectedFA = null;

    document.getElementById("teammanagerSillySeason").click();

}

function teamManagerReturn(event) {

    event.preventDefault();

    selectedCar = null;

    selectedFA = null;

    document.getElementById("teammanager").click();

}


function createTeamSubmit2(event, num) {

    event.preventDefault();

    selectedCar.number = num;

    selectedCar.sponsor1 = selectedCar.sponsor2 = "Unsponsored";

    selectedCar.organization = globalTeam;

    selectedCar.driver = new Driver(name="N/A");

    console.log("submit 3!!!!", selectedCar);

    document.getElementById("createTeam4").click();





}

function sillySeasonTeamManager() {

    event.preventDefault();


    document.getElementById("teammanagerSillySeason").click();




}

function sillySeasonContinue(event) {

    event.preventDefault();

    console.log("clicked continue");

    document.getElementById("continueSillySeason").click();


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


function teamEditor(g) {

    var carsInOrg = Array();

    for (var i = 0; i < g.length; i++) {
        if(game.carlist[i].organization.name == game.player.team) {
            carsInOrg.push(game.carlist[i]);
        }
    }

    i = 0;

    var html = "Team Editor!"

    var src = "../images/num/" + carsInOrg[i].organization.name + carsInOrg[i].number;

    html += "<table style=\"width:100%\"><tr><th>" +
        "<img id='team1' onerror=\"this.src='../images/num/default" + carsInOrg[i].number + ".png\'\" src='" + src + ".png'></object></th><th>";

    //onError="this.onerror=null;this.src='<?=base_url()?>assets1/img/default.jpg';"


    html += carsInOrg[i].number;

    html += " | ";

    html += carsInOrg[i].driver.name;

    html += " | Years Left On Contract: ";

    html += carsInOrg[i].yearsLeft;

    html += "<br>Driver Rating: ";

    var overall = (carsInOrg[i].driver.superspeedway + carsInOrg[i].driver.intermediate + carsInOrg[i].driver.flat +
        carsInOrg[i].driver.roadCourse + carsInOrg[i].driver.shortTrack) / 5;

    html += overall;

    html += " | Car Rating: ";

    overall = (carsInOrg[i].engine + carsInOrg[i].aero + carsInOrg[i].chassis +
        carsInOrg[i].pitCrew ) / 4;

    html += overall;



    html += "</th></tr></table><br><p class='standings'>";


    html += "#";

    html += carsInOrg[i].number;

    html += " ";

    html += game.player.team;

    html += " ";

    html += carsInOrg[i].organization.manufacture;

    html += " | Primary Sponsor: ";

    html += carsInOrg[i].sponsor1;

    html += " | Secondary Sponsor: ";

    html += carsInOrg[i].sponsor2;

    html += "<br>Stats | Engine: ";

    html += carsInOrg[i].engine;

    html += " | Chassis: ";

    html += carsInOrg[i].chassis;

    html += " | Aero: ";

    html += carsInOrg[i].aero;

    html += " | Pit Crew: ";

    html += carsInOrg[i].pitCrew;

    html += "<br><br>Driver: ";

    html += carsInOrg[i].driver.name;

    html += " | Age: ";

    html += carsInOrg[i].driver.age;

    html += " | Morale: ";

    html += carsInOrg[i].driver.morale;

    html += "<br>Stats | Intermediate: ";

    html += carsInOrg[i].driver.intermediate;

    html += " | Superspeedway: ";

    html += carsInOrg[i].driver.superspeedway;


    html += " | Flat: ";

    html += carsInOrg[i].driver.flat;

    html += " | Short Track: ";

    html += carsInOrg[i].driver.shortTrack;

    html += " | Road Course: ";

    html += carsInOrg[i].driver.roadCourse;

    html += " | Aggression: ";

    html += 75;

    html += "</p>";

    document.getElementById("message").innerHTML = html;
}

function autosim() {




    /*var xhr=new XMLHttpRequest();
    xhr.open("GET","roster.tsv");
    xhr.onload=function(){
        console.log(xhr.responseText);
    }
    xhr.send();*/
    var game = new Game();

    //readTextFile("file:C://Users//steve//Desktop//Autosim Web//roster.tsv");




    document.getElementById('gamemode').onchange = function(){

        document.getElementById("owner-teams").innerHTML = '';

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
            var playerData = false;
            // By lines
            var lines = this.result.split('\n');
            for(var line = 1; line < lines.length; line++) {
                //console.log(lines[line]);

                var data = lines[line].split('~');


                if(startraces == true) {
                    if(data[0] == "Race Name") {
                        console.log('skip');
                    }
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

                if (data[0] == "PlayerData") {
                    daytona = false;
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

                if (playerData) {
                    game.player.name = data[0];
                    document.getElementById("credits").innerHTML = game.player.name
                    game.player.mode = data[1]
                    game.player.team = data[3]
                    game.player.money = parseInt(data[4]);
                    playerData = false;
                }

                if (data[0] == "PlayerData") {
                    champ = false;
                    sched = false;
                    gameinfo = false;
                    newSponsors = false;
                    playerData = true;

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
                        car.organization.originalName = data[2];
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

                    }
                }

                if (data[0] == "Name" && data[1] == "Age") {
                    sched = false;
                    freeA = true;
                    newSched = false;
                }


                if (gameinfo == true) {

                    if(data[0] == "Starting Number of Races") {
                        console.log("skip");
                    }
                    else {
                        if(parseInt(data[0]) < 250) {
                            console.log("data is", data);
                            game.maxRaces = parseInt(data[2]);
                            gameinfo = false;
                            startraces = true;
                            console.log("game max races", game.maxRaces)
                        }
                        else {
                            game.year = parseInt(data[0]);
                            game.points = parseInt(data[1]);
                            game.carsInRace = parseInt(data[2]);
                            game.week = parseInt(data[3]);
                            console.log("game week", game.week)
                        }
                        console.log("game max races", game.maxRaces)


                    }



                }

                if (data[0] == "Start Year") {
                    console.log("SHOULD NOT BE MAKING MORE CARS")
                    roster = false;
                    gameinfo = true;
                }



                if (roster == true) {
                    document.getElementById("credits").innerHTML = "N/A";
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
                    organization.originalName = data[4];

                    var car = new Car(data[0], data[2], driver, organization);

                    var org = organization.name + "~";
                    document.getElementById("owner-teams").innerHTML += organization.name;
                    document.getElementById("owner-teams").innerHTML += '~';

                    if(containsObject(organization, game.orglist)) {
                        game.orglist.push(organization);
                        var org = organization.name + "~";
                        document.getElementById("owner-teams").innerHTML = '<p>';
                        document.getElementById("owner-teams").innerHTML += org;
                        document.getElementById("owner-teams").innerHTML += '</p>';
                    }


                    car.sponsor2 = data[3];
                    console.log("YEARS LEFT", data[19]);
                    car.yearsLeft = parseInt(data[19]);
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
    html += '<input type="submit"  style="width:210px" id = "teammanager" name="guess" value="Team Manager">';

   // html += '<input type="submit"  id = "hireDriver" name="hireDriver" value="Hire Driver">';
    //html += '<input type="submit" id = "newgame" name="new" value="New Game" onclick="Bullscows()"></p>';
    //html += '<div id="hint1">'style="display:none"
    ///html += '<p><input type="submit" id = "hint" name="hint" value="Hint!"></p></div>';
    html += '</div>';


    html += '<input type="submit" id = "driversHire" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "sponsorHire" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "sponsorHireSillySeason" name="giveup" value="Hire Driversss"  style="display:none">';
    html += '<input type="submit" id = "driversHireSillySeason" name="giveup" value="Hire Drivers"  style="display:none">';
     html += '<input type="submit" id = "driversNegotiate" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "driversNegotiateSillySeason" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "driversConfirmHire" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "driversConfirmHireSillySeason" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "teammanagerSillySeason" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "continueSillySeason" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "shutDownTeam1" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "shutDownTeam1SillySeason" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "shutDownTeam2" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "shutDownTeam2SillySeason" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "createTeam1" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "createTeam2" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "createTeam3" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "createTeam4" name="giveup" value="Hire Drivers"  style="display:none">';
    html += '<input type="submit" id = "changePoints" name="giveup" value="Hire Drivers"  style="display:none">';

    html += '<p id="message">&nbsp;</p>';
    html += '</form>'
    html += '</fieldset>';
    html += '</table></body> ';

    document.createElement("playoffs");

    document.getElementById("play-area").innerHTML = html;

    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */


    /*
    document.getElementById("owner Mode").onclick = function (event) {
        console.log("owner mode clicked")
        var html2 = '<div id="buttons">';
        html2 += '<p><input type="submit" onclick="TestsFunction2()" value="Select Team!!!">';
        html2 += '<input type="submit" id = "fastsim" name="giveup" value="test!">';
        html2 += '<button onclick="dropDown()" class="dropbtn">Drop Down</button>';
        html2 += '<div id="myDropdown" class="dropdown-content">';
        console.log("ORGLIST", game.orglist, game);
        for (var t = 0; t < game.orglist.length; t++) {
            html2 += '<a href="#">';
            html2 += game.orglist[t].name;
            html2 += '</a>';
        }
        html2 += '<a href="#">Link 2</a>';
        html2 += '</div>';
        html2 += '</div>';

        document.getElementById("owner-select").innerHTML = html2;
    }





  */

    //document.querySelector

    //jQuery

    //if you have an id, document.querySelector('#element-id');

    //query selectors

    document.getElementById("teammanagerSillySeason").onclick = function (event) {

        event.preventDefault();
        document.getElementById('uploads').innerHTML = "";
        if(shutDown) {

            game.player.money -= globalCost;
            globalCost = 0;
            shutDown = false;
        }
        globalMoney = game.player.money;
        if (game.player.mode == "Owner Mode") {
            document.getElementById("message").innerHTML = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team + "<br>";



            var T = document.getElementById("game-changes");
            T.style.display = "none";  // <-- Set it to block

            if(game.player.team == "N/A") {

                game.player.team = document.getElementById("owner-teams").innerHTML;
            }



            // <div class='content'>

            //  var html = "<table style=\"width:100%\"><tr><th><img src='" + src + ".png'></th><th>";

            var carsInOrg = Array();

            for (var i = 0; i < game.carlist.length; i++) {
                if(game.carlist[i].organization.name == game.player.team) {
                    carsInOrg.push(game.carlist[i]);
                }
                if(selectedCar) {
                    if(selectedCar.number == game.carlist[i].number) {
                        console.log("selected car", selectedCar);
                        game.carlist[i].sponsor1 = selectedCar.sponsor1;
                        game.carlist[i].sponsor2 = selectedCar.sponsor2;
                        game.carlist[i] = selectedCar;
                        console.log("selected car", game.carlist[i].engine);
                        console.log("selected car");
                        console.log("global cost", globalCost, game.player.money);
                        game.player.money -= globalCost;
                        globalCost = 0;
                        selectedCar = null;
                    }
                }
            }
            var html = '';

            if(game.player.mode == "Owner Mode") {
                html = '<input type="submit" value="Continue" onclick="sillySeasonContinue(event)"><br>';
            }
            html += "Funds: $";
            html += game.player.money;
            html += "<br>Upgrade Prices | Driver: $30000 | Engine: $50000 | Chassis: $35000 | Aero: $25000 | Pit Crew: $25000 ";
            if (carsInOrg.length < 5) {
                html += "<br>";
                html += '<input type=\"submit\" style=\"width:250px\" value=\"Create Team\" onclick=\"createTeam(event)\">';

            }
            html += "<br>";
            //html += '<input type="submit" value="test button" onclick="game.hireDriver1()">';


            for (var i = 0; i < carsInOrg.length ; i++) {

                carsInOrg[i].sponsor1 = carsInOrg[i].sponsor1.replace(/'/g, '′');

                carsInOrg[i].sponsor2 = carsInOrg[i].sponsor2.replace(/'/g, '′');

                carsInOrg[i].sponsor1 = carsInOrg[i].sponsor1.replace('%u2032', '′');

                carsInOrg[i].sponsor2 = carsInOrg[i].sponsor2.replace('%u2032', '′');

                var src = "../images/num/" + carsInOrg[i].organization.name + carsInOrg[i].number;

                html += "<table style=\"width:100%\"><tr><th>" +
                    "<img onclick='teamEditor(" + carsInOrg[i] + ")' id='team" + i + "\" onerror=\"this.src='../images/num/default" + carsInOrg[i].number + ".png\'\" src='" + src + ".png'></object></th><th>";

                //onError="this.onerror=null;this.src='<?=base_url()?>assets1/img/default.jpg';"


                html += carsInOrg[i].number;

                html += " | ";

                html += carsInOrg[i].driver.name;

                html += " | Driver Rating: ";

                var overall = (carsInOrg[i].driver.superspeedway + carsInOrg[i].driver.intermediate + carsInOrg[i].driver.flat +
                    carsInOrg[i].driver.roadCourse + carsInOrg[i].driver.shortTrack) / 5;

                html += overall;

                html += " | Car Rating: ";

                overall = (carsInOrg[i].engine + carsInOrg[i].aero + carsInOrg[i].chassis +
                    carsInOrg[i].pitCrew ) / 4;

                html += overall;

                console.log("CAR STRINGIFY", JSON.stringify(carsInOrg[i]))

                html += "<br>"

                console.log("selected car", car)
                html += '<input type=\"submit\" style=\"width:260px\" value=\"Upgrade Driver\" onclick="upgradeDriverSS(event,';

                var car = JSON.stringify(carsInOrg[i]);

                selectedCar = JSON.parse(car);

                car = JSON.stringify(selectedCar);

                var car2 = car.split("\"").join("'");

                html +=  car2;
                html += ",";
                html +=  30000  ;
                html += ')\">';
                html += '<br>';
                console.log("selected car", car)
                html += '<input type=\"submit\" style=\"width:250px\" value=\"Upgrade Engine\" onclick="upgradeStatSS(event,';

                var car = JSON.stringify(carsInOrg[i]);

                selectedCar = JSON.parse(car);

                car = JSON.stringify(selectedCar);
                var engine = "engine"
                var chassis = "chassis"
                var car2 = car.split("\"").join("'");

                html +=  car2;
                html += ",";
                html +=  50000;
                html += ",";
                html +=  1;
                html += ')\">';


                html += '<input type=\"submit\" style=\"width:250px\" value=\"Upgrade Chassis\" onclick="upgradeStatSS(event,';

                var car = JSON.stringify(carsInOrg[i]);

                selectedCar = JSON.parse(car);

                car = JSON.stringify(selectedCar);

                var car2 = car.split("\"").join("'");

                html +=  car2;
                html += ",";
                html +=  25000;
                html += ",";
                html +=  2;
                html += ')\">';
                html += '<br>';

                html += '<input type=\"submit\" style=\"width:250px\" value=\"Upgrade Aero\" onclick="upgradeStatSS(event,';

                var car = JSON.stringify(carsInOrg[i]);

                selectedCar = JSON.parse(car);

                car = JSON.stringify(selectedCar);
                var engine = "engine"
                var chassis = "chassis"
                var car2 = car.split("\"").join("'");

                html +=  car2;
                html += ",";
                html +=  35000;
                html += ",";
                html +=  3;
                html += ')\">';


                html += '<input type=\"submit\" style=\"width:250px\" value=\"Upgrade Pit Crew\" onclick="upgradeStatSS(event,';

                var car = JSON.stringify(carsInOrg[i]);

                selectedCar = JSON.parse(car);

                car = JSON.stringify(selectedCar);

                var car2 = car.split("\"").join("'");

                html +=  car2;
                html += ",";
                html +=  25000;
                html += ",";
                html +=  4;
                html += ')\">';
                html += '<br>';



                html += '<input type=\"submit\" style=\"width:250px\" id="\fireDriver\" value=\"Fire Driver\" onclick=\"fireDriverSS(event,';

                var car = JSON.stringify(carsInOrg[i]);

                selectedCar = JSON.parse(car);

                car = JSON.stringify(selectedCar);

                var car2 = car.split("\"").join("'");

                html +=  car2;
                html += ')\">';


                //game.DisplayData.call(game);

                html += '<input type=\"submit\" style=\"width:250px\" id="\hireDriver1\" value=\"Hire Driver\" onclick=\"hireDriverSS(event,';

                var car = JSON.stringify(carsInOrg[i]);

                selectedCar = JSON.parse(car);

                car = JSON.stringify(selectedCar);

                var car2 = car.split("\"").join("'");

                html +=  car2;
                html += ')\">';
                html += '<br>';

                console.log("selectedCar.sponsor 1 is ", selectedCar.sponsor1);

                if(selectedCar.sponsor1 === "Unsponsored") {


                    console.log("selectedCar.sponsor 1 is 2 !!!", selectedCar.sponsor1);


                    html += '<input type=\"submit\" style=\"width:250px\" id="\hireSponsor1\" value=\"Find Sponsor\" onclick=\"hireSponsorSS(event,';

                    var car = JSON.stringify(carsInOrg[i]);

                    selectedCar = JSON.parse(car);

                    car = JSON.stringify(selectedCar);

                    var car2 = car.split("\"").join("'");

                    html +=  car2;
                    html += ')\">';
                    html += '<br>';
                }




                html += '<form onsubmit="return false;" id="myForm">\n';

                html += '</form>';

                html += "</th></tr></table><br><p class='standings'>";

                html += "#";

                html += carsInOrg[i].number;

                html += " ";

                html += game.player.team;

                html += " ";

                html += carsInOrg[i].organization.manufacture;

                html += " | Primary Sponsor: ";

                html += carsInOrg[i].sponsor1;

                html += " | Secondary Sponsor: ";

                html += carsInOrg[i].sponsor2;

                html += "<br>Stats | Engine: ";

                html += carsInOrg[i].engine;

                html += " | Chassis: ";

                html += carsInOrg[i].chassis;

                html += " | Aero: ";

                html += carsInOrg[i].aero;

                html += " | Pit Crew: ";

                html += carsInOrg[i].pitCrew;

                html += "<br><br>Driver: ";

                html += carsInOrg[i].driver.name;

                html += " | Age: ";

                html += carsInOrg[i].driver.age;

                html += " | Morale: ";

                html += carsInOrg[i].driver.morale;

                html += "<br>Stats | Intermediate: ";

                html += carsInOrg[i].driver.intermediate;

                html += " | Superspeedway: ";

                html += carsInOrg[i].driver.superspeedway;


                html += " | Flat: ";

                html += carsInOrg[i].driver.flat;

                html += " | Short Track: ";

                html += carsInOrg[i].driver.shortTrack;

                html += " | Road Course: ";

                html += carsInOrg[i].driver.roadCourse;

                html += " | Aggression: ";

                html += 75;

                html += "</p><script>";

                html += "  document.getElementById(\"fireDriver\").onclick = function (event) {\n" +
                    "                console.log(\"fired Driver\")\n" +
                    "            }\n"
                html += "</script>"



            }


            document.getElementById("message").innerHTML = html;



        }


    }

    document.getElementById("teammanager").onclick = function (event) {



        event.preventDefault();
        document.getElementById('uploads').innerHTML = "";
        if(shutDown) {

            game.player.money -= globalCost;
            globalCost = 0;
            shutDown = false;
        }
        globalMoney = game.player.money;

        if(firedDriver) {
            if(firedDriver.name !== "N/A") {
              var found = false;
              for (var i = 0; i < game.freeAgents.length; i++) {
                    if(game.freeAgents[i].name === firedDriver.name) {
                        found = true;
                    }
              }
              if(found === false) {
                game.freeAgents.push(firedDriver);
              }
            }
        }

        for (var i = 0; i < game.carlist.length; i++) {
            if(selectedCar) {
                if(selectedCar.number === game.carlist[i].number) {
                    game.carlist[i].sponsor1 = selectedCar.sponsor1;
                    game.carlist[i].sponsor2 = selectedCar.sponsor2;
                    game.carlist[i].engine = selectedCar.engine;
                    game.carlist[i].aero = selectedCar.aero;
                    game.carlist[i].chassis = selectedCar.chassis;
                    game.carlist[i].pitCrew = selectedCar.pitCrew;
                    if(game.carlist[i].driver && selectedCar.driver) {
                        game.carlist[i].driver.intermediate = selectedCar.driver.intermediate;
                        game.carlist[i].driver.superspeedway = selectedCar.driver.superspeedway;
                        game.carlist[i].driver.flat = selectedCar.driver.flat;
                        game.carlist[i].driver.roadCourse = selectedCar.driver.roadCourse;
                        game.carlist[i].driver.shortTrack = selectedCar.driver.shortTrack;
                    }
                    console.log("selected car", selectedCar);

                    console.log("selected car", game.carlist[i].engine);
                    console.log("selected car");
                    console.log("global cost", globalCost, game.player.money);
                    game.player.money -= globalCost;
                    globalCost = 0;
                    selectedCar = null;
                }
            }
        }


        if(sillySeason) {
            document.getElementById("teammanagerSillySeason").click();
        }
        else {
            if (game.player.mode == "Owner Mode") {
                document.getElementById("message").innerHTML = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team;



                var T = document.getElementById("game-changes");
                T.style.display = "none";  // <-- Set it to block

                if(game.player.team == "N/A") {

                    game.player.team = document.getElementById("owner-teams").innerHTML;
                }



                // <div class='content'>

                //  var html = "<table style=\"width:100%\"><tr><th><img src='" + src + ".png'></th><th>";

                var carsInOrg = Array();

                for (var i = 0; i < game.carlist.length; i++) {
                    if(game.carlist[i].organization.name == game.player.team) {
                        carsInOrg.push(game.carlist[i]);
                    }
                    if(selectedCar) {
                        if(selectedCar.number == game.carlist[i].number) {
                            game.carlist[i].sponsor1 = selectedCar.sponsor1;
                            game.carlist[i].sponsor2 = selectedCar.sponsor2;
                            console.log("selected car", selectedCar);
                            game.carlist[i] = selectedCar;
                            console.log("selected car", game.carlist[i].engine);
                            console.log("selected car");
                            console.log("global cost", globalCost, game.player.money);
                            game.player.money -= globalCost;
                            globalCost = 0;
                            selectedCar = null;
                        }
                    }
                }
                var html = "<br>Funds: ";
                html += game.player.money;
                html += "<br>Upgrade Prices | Driver: $45000 | Engine: $50000 | Chassis: $35000 | Aero: $25000 | Pit Crew: $25000 ";
                if (carsInOrg.length < 5) {
                    html += "<br>";
                    html += '<input type=\"submit\" style=\"width:250px\" value=\"Create Team\" onclick=\"createTeam(event)\">';

                }
                html += "<br>";
                //html += '<input type="submit" value="test button" onclick="game.hireDriver1()">';


                for (var i = 0; i < carsInOrg.length ; i++) {

                    carsInOrg[i].sponsor1 = carsInOrg[i].sponsor1.replace(/'/g, '′');

                    carsInOrg[i].sponsor2 = carsInOrg[i].sponsor2.replace(/'/g, '′');


                    carsInOrg[i].sponsor1 = carsInOrg[i].sponsor1.replace('%u2032', '′');

                    carsInOrg[i].sponsor2 = carsInOrg[i].sponsor2.replace('%u2032', '′');


                    var src = "../images/num/" + carsInOrg[i].organization.name + carsInOrg[i].number;

                    html += "<table style=\"width:100%\"><tr><th>" +
                        "<img onclick='teamEditor(" + carsInOrg[i] + ")' id='team" + i + "\" onerror=\"this.src='../images/num/default" + carsInOrg[i].number + ".png\'\" src='" + src + ".png'></object></th><th>";

                    //onError="this.onerror=null;this.src='<?=base_url()?>assets1/img/default.jpg';"


                    html += carsInOrg[i].number;

                    html += " | ";

                    html += carsInOrg[i].driver.name;

                    html += " | Years Left On Contract: ";

                    html += carsInOrg[i].yearsLeft;

                    html += "<br>Driver Rating: ";

                    var overall = (carsInOrg[i].driver.superspeedway + carsInOrg[i].driver.intermediate + carsInOrg[i].driver.flat +
                        carsInOrg[i].driver.roadCourse + carsInOrg[i].driver.shortTrack) / 5;

                    html += overall;

                    html += " | Car Rating: ";

                    overall = (carsInOrg[i].engine + carsInOrg[i].aero + carsInOrg[i].chassis +
                        carsInOrg[i].pitCrew ) / 4;

                    html += overall;

                    console.log("CAR STRINGIFY", JSON.stringify(carsInOrg[i]))

                    html += "<br>"


                    console.log("car2is,xx", car2);

                    html += '<input type=\"submit\" style=\"width:260px\" value=\"Upgrade Driver\" onclick="upgradeDriver(event,';



                    console.log("carzinorgi is", carsInOrg[i]);

                    selectedCar = JSON.parse(JSON.stringify(carsInOrg[i]));


                    var car3 = JSON.stringify(selectedCar);

                    var car2 = car3.split("\"").join("'");

                    console.log("car2is,xx", car2);
                    html +=  car2;
                    html += ",";
                    html +=  45000  ;
                    html += ')\">';
                    html += '<br>';



                    selectedCar = JSON.parse(JSON.stringify(carsInOrg[i]));

                    var car3 = JSON.stringify(selectedCar);

                    console.log("car3 isxx", car3);
                    var car2 = car3.split("\"").join("'");

                    console.log("car2 isxx", car2);




                    html += '<input type=\"submit\" style=\"width:250px\" value=\"Upgrade Engine\" onclick="upgradeStat(event,';

                    var car = JSON.stringify(carsInOrg[i]);

                    selectedCar = JSON.parse(car);

                    car = JSON.stringify(selectedCar);
                    var engine = "engine"
                    var chassis = "chassis"
                    var car2 = car.split("\"").join("'");

                    html +=  car2;
                    html += ",";
                    html +=  50000;
                    html += ",";
                    html +=  1;
                    html += ')\">';


                    html += '<input type=\"submit\" style=\"width:250px\" value=\"Upgrade Chassis\" onclick="upgradeStat(event,';

                    var car = JSON.stringify(carsInOrg[i]);

                    selectedCar = JSON.parse(car);

                    car = JSON.stringify(selectedCar);

                    var car2 = car.split("\"").join("'");

                    html +=  car2;
                    html += ",";
                    html +=  35000;
                    html += ",";
                    html +=  2;
                    html += ')\">';
                    html += '<br>';

                    html += '<input type=\"submit\" style=\"width:250px\" value=\"Upgrade Aero\" onclick="upgradeStat(event,';

                    var car = JSON.stringify(carsInOrg[i]);

                    selectedCar = JSON.parse(car);

                    car = JSON.stringify(selectedCar);
                    var engine = "engine"
                    var chassis = "chassis"
                    var car2 = car.split("\"").join("'");

                    html +=  car2;
                    html += ",";
                    html +=  25000;
                    html += ",";
                    html +=  3;
                    html += ')\">';


                    html += '<input type=\"submit\" style=\"width:250px\" value=\"Upgrade Pit Crew\" onclick="upgradeStat(event,';

                    var car = JSON.stringify(carsInOrg[i]);

                    selectedCar = JSON.parse(car);

                    car = JSON.stringify(selectedCar);

                    var car2 = car.split("\"").join("'");

                    html +=  car2;
                    html += ",";
                    html +=  25000;
                    html += ",";
                    html +=  4;
                    html += ')\">';
                    html += '<br>';



                    html += '<input type=\"submit\" style=\"width:250px\" id="\fireDriver\" value=\"Fire Driver\" onclick=\"fireDriver(event,';

                    var car = JSON.stringify(carsInOrg[i]);

                    selectedCar = JSON.parse(car);

                    car = JSON.stringify(selectedCar);

                    var car2 = car.split("\"").join("'");

                    html +=  car2;
                    html += ')\">';


                    //game.DisplayData.call(game);

                    html += '<input type=\"submit\" style=\"width:250px\" id="\hireDriver1\" value=\"Hire Driver\" onclick=\"hireDriver(event,';

                    var car = JSON.stringify(carsInOrg[i]);

                    selectedCar = JSON.parse(car);

                    car = JSON.stringify(selectedCar);

                    var car2 = car.split("\"").join("'");

                    html +=  car2;
                    html += ')\">';
                    html += '<br>';

                    console.log("selectedCar.sponsor 1 is ", selectedCar.sponsor1)

                    if(selectedCar.sponsor1 === "Unsponsored") {
                        console.log("selectedCar!!!!")
                        html += '<input type=\"submit\" style=\"width:250px\" id="\hireSponsor1\" value=\"Find Sponsor\" onclick=\"hireSponsor(event,';

                        var car = JSON.stringify(carsInOrg[i]);

                        selectedCar = JSON.parse(car);

                        car = JSON.stringify(selectedCar);

                        var car2 = car.split("\"").join("'");

                        html +=  car2;
                        html += ')\">';
                        html += '<br>';
                    }
                    html += '<br>';

                    html += '<input type=\"submit\" style=\"width:250px\" id="\hireSponsor1\" value=\"Shut Down Team\" onclick=\"shutDownTeam(event,';

                    var car = JSON.stringify(carsInOrg[i]);

                    selectedCar = JSON.parse(car);

                    car = JSON.stringify(selectedCar);

                    var car2 = car.split("\"").join("'");

                    html +=  car2;
                    html += ')\">';
                    html += '<br>';




                    html += '<form onsubmit="return false;" id="myForm">\n';

                    html += '</form>';

                    html += "</th></tr></table><br><p class='standings'>";

                    html += "#";

                    html += carsInOrg[i].number;

                    html += " ";

                    html += game.player.team;

                    html += " ";

                    html += carsInOrg[i].organization.manufacture;

                    html += " | Primary Sponsor: ";

                    html += carsInOrg[i].sponsor1;

                    html += " | Secondary Sponsor: ";

                    html += carsInOrg[i].sponsor2;

                    html += "<br>Stats | Engine: ";

                    html += carsInOrg[i].engine;

                    html += " | Chassis: ";

                    html += carsInOrg[i].chassis;

                    html += " | Aero: ";

                    html += carsInOrg[i].aero;

                    html += " | Pit Crew: ";

                    html += carsInOrg[i].pitCrew;

                    html += "<br><br>Driver: ";

                    html += carsInOrg[i].driver.name;

                    html += " | Age: ";

                    html += carsInOrg[i].driver.age;

                    html += " | Morale: ";

                    html += carsInOrg[i].driver.morale;

                    html += "<br>Stats | Intermediate: ";

                    html += carsInOrg[i].driver.intermediate;

                    html += " | Superspeedway: ";

                    html += carsInOrg[i].driver.superspeedway;


                    html += " | Flat: ";

                    html += carsInOrg[i].driver.flat;

                    html += " | Short Track: ";

                    html += carsInOrg[i].driver.shortTrack;

                    html += " | Road Course: ";

                    html += carsInOrg[i].driver.roadCourse;

                    html += " | Aggression: ";

                    html += 75;

                    html += "</p><script>";

                    html += "  document.getElementById(\"fireDriver\").onclick = function (event) {\n" +
                        "                console.log(\"fired Driver\")\n" +
                        "            }\n"
                    html += "</script>"



                }


                document.getElementById("message").innerHTML = html;



            }
        }





    }

    document.getElementById("continueSillySeason").onclick = function (event) {



        event.preventDefault();

        console.log("clicked continue 2");


        game.dontSkip = true;

        var ss = game.sillySeasonOwnerMode2();

        console.log("SILLY SEASON", ss);

        sillySeason = false;

        document.getElementById("message").innerHTML = "<h1>" + game.year + " Silly Season Continued</h1>";

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

        for (var i = 0; i < game.freeAgents.length; i++) {
            game.freeAgents[i].wins = 0;
            game.freeAgents[i].topFives = 0;
            game.freeAgents[i].topTens = 0;
            game.freeAgents[i].races = 0;
            game.freeAgents[i].points = 0;
        }

        game.dontSkip = false;
        game.silly = false;
        sillySeason = false;

        document.getElementById("message").innerHTML += html;





    }

    document.getElementById("driversNegotiate").onclick = function (event) {



        event.preventDefault();

        var randomYrs = [1,2,3,4];
        var randomLow = [12500, 15000, 17500];
        var randomMid = [15000, 17500, 20000, 22500, 25000];
        var randomGood = [20000, 22500, 25000, 27500, 30000, 32500, 35000];

        var selectedYr = randomYrs[Math.floor(Math.random() * randomYrs.length)];
        var contractAmt = 20000;

        if (selectedFA.intermediate > 76) {
                var contractAmt1  = Math.floor(Math.random() * randomGood.length);
                contractAmt = randomGood[contractAmt1];
        }
        else {
            if (selectedFA.intermediate > 61) {
                var contractAmt1  = Math.floor(Math.random() * randomMid.length);
                contractAmt = randomMid[contractAmt1];
            }
            else {
                var contractAmt1  = Math.floor(Math.random() * randomLow.length);
                contractAmt = randomLow[contractAmt1];
            }
        }


        event.preventDefault();
        if(selectedFA.careerTitles > 0 && selectedFA.age < 43) {
            contractAmt = contractAmt * 2;
        }
        var html = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team + "<br>";


        html += "Funds: ";
        html += game.player.money;

        html += "<br>";

        html += "<p class='standings'>";


        var src = "../images/num/" + selectedCar.organization.name + selectedCar.number;

        console.log("src ", src)

        html += "<table style=\"width:100%\"><tr><th>" +
            "<img onclick='teamEditor(" + selectedCar + ")' id='team" + 0 + "\" onerror=\"this.src='../images/num/default" + selectedCar.number + ".png\'\" src='" + src + ".png'></object></th><th>";


        html += selectedCar.number;

        html += " ";

        html += selectedCar.organization.name;

        html += " ";

        html += selectedCar.organization.manufacture;

        html += " | Car Rating: ";

        var overall = (selectedCar.engine + selectedCar.aero + selectedCar.chassis +
            selectedCar.pitCrew ) / 4;

        html += overall;

        html += "</table></p>";

        if (((overall < (selectedFA.intermediate - 5)) && overall < 90) || (selectedFA.intermediate > 71 && selectedCar.status == "Part Time")) {
            html += "<h1>Hire Driver</h1><br><p class='standings'>"

            html += selectedFA.name

            html += " is not interested in driving the "

            html += selectedCar.number;

            html += " car at this time."

            html += '<br>';
        }
        else {
            html += "<h1>Hire Driver</h1><br><p class='standings'>"

            html += selectedFA.name

            html += "'s wants: $"

            html += contractAmt;

            html += " for "

            html += selectedYr;

            html += " years.<br>"

            html += '<input type=\"submit\" style=\"width:250px\" value=\"Accept';


            html += '\" onclick=\"hireDriverConfirm2(event, ';

            html += contractAmt

            html += ","

            html += selectedYr

            html += ')\">';

            html += '<br>';

            html += '<input type=\"submit\" style=\"width:250px\" value=\"Deny';

            html += '\" onclick=\"teamManagerReturn(event';

            html += ')\">';

            html += '<br>';
        }





        document.getElementById("message").innerHTML = html;



    }

    document.getElementById("driversNegotiateSillySeason").onclick = function (event) {



        event.preventDefault();

        var randomYrs = [1,2,3,4];
        var randomLow = [12500, 15000, 17500];
        var randomMid = [15000, 17500, 20000, 22500, 25000];
        var randomGood = [20000, 22500, 25000, 27500, 30000, 32500, 35000];

        var selectedYr = randomYrs[Math.floor(Math.random() * randomYrs.length)];
        var contractAmt = 20000;

        if (selectedFA.intermediate > 76) {
            var contractAmt1  = Math.floor(Math.random() * randomGood.length);
            contractAmt = randomGood[contractAmt1];
        }
        else {
            if (selectedFA.intermediate > 61) {
                var contractAmt1  = Math.floor(Math.random() * randomMid.length);
                contractAmt = randomMid[contractAmt1];
            }
            else {
                var contractAmt1  = Math.floor(Math.random() * randomLow.length);
                contractAmt = randomLow[contractAmt1];
            }
        }

        if(selectedFA.careerTitles > 0 && selectedFA.age < 43) {
            contractAmt = contractAmt * 2;
        }


        event.preventDefault();

        var html = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team + "<br>";


        html += "Funds: $";
        html += game.player.money;
        html += "<br>";

        html += "<p class='standings'>";


        var src = "../images/num/" + selectedCar.organization.name + selectedCar.number;

        console.log("src ", src)

        html += "<table style=\"width:100%\"><tr><th>" +
            "<img onclick='teamEditor(" + selectedCar + ")' id='team" + 0 + "\" onerror=\"this.src='../images/num/default" + selectedCar.number + ".png\'\" src='" + src + ".png'></object></th><th>";


        html += selectedCar.number;

        html += " ";

        html += selectedCar.organization.name;

        html += " ";

        html += selectedCar.organization.manufacture;

        html += " | Car Rating: ";

        var overall = (selectedCar.engine + selectedCar.aero + selectedCar.chassis +
            selectedCar.pitCrew ) / 4;

        html += overall;

        html += "</table></p>";

        if (overall < (selectedFA.intermediate - 4) || (selectedFA.intermediate > 71 && selectedCar.status == "Part Time")) {
            html += "<h1>Hire Driver</h1><br><p class='standings'>"

            html += selectedFA.name

            html += " is not interested in driving the "

            html += selectedCar.number;

            html += " car at this time."

            html += '<br>';
        }
        else {
            html += "<h1>Hire Driver</h1><br><p class='standings'>"

            html += selectedFA.name

            html += "'s wants: $"

            html += contractAmt;

            html += " for "

            html += selectedYr;

            html += " years.<br>"

            html += '<input type=\"submit\" style=\"width:250px\" value=\"Accept';


            html += '\" onclick=\"hireDriverConfirm2SS(event, ';

            html += contractAmt

            html += ","

            html += selectedYr

            html += ')\">';

            html += '<br>';

            html += '<input type=\"submit\" style=\"width:250px\" value=\"Deny';

            html += '\" onclick=\"teamManagerReturnSS(event';

            html += ')\">';

            html += '<br>';
        }





        document.getElementById("message").innerHTML = html;



    }


    document.getElementById("driversConfirmHire").onclick = function (event) {



        event.preventDefault();

        selectedCar.driver = selectedFA;
        selectedCar.yearsLeft = yrsLeft;
        game.player.money -= globalCost;

        for (var i = 0; i < game.carlist.length; i++) {

            if (game.carlist[i].number == selectedCar.number) {
                game.carlist[i].driver = selectedFA;
            }
        }




        for (var f = 0; f < game.freeAgents.length; f++) {

            var FA = game.freeAgents[f];


            if (FA.name == selectedFA.name) {


                game.freeAgents.splice(f, 1); // Remove the item from the array
                var index1 = game.freeAgents.indexOf(FA);
                if (index1 > -1) {
                    game.freeAgents.splice(index1, 1);
                }

            }

        }

        selectedFA = null;

        document.getElementById("teammanager").click();




    }

    document.getElementById("driversConfirmHireSillySeason").onclick = function (event) {



        event.preventDefault();


        selectedCar.driver = selectedFA;
        selectedCar.yearsLeft = yrsLeft;
        game.player.money -= globalCost;

        for (var i = 0; i < game.carlist.length; i++) {

            if (game.carlist[i].number == selectedCar.number) {
                game.carlist[i].driver = selectedFA;
            }
        }




        for (var f = 0; f < game.freeAgents.length; f++) {

            var FA = game.freeAgents[f];


            if (FA.name == selectedFA.name) {


                game.freeAgents.splice(f, 1); // Remove the item from the array
                var index1 = game.freeAgents.indexOf(FA);
                if (index1 > -1) {
                    game.freeAgents.splice(index1, 1);
                }

            }

        }

        selectedFA = null;

        document.getElementById("teammanagerSillySeason").click();




    }

    document.getElementById("changePoints").onclick = function (event) {
        event.preventDefault();

        var T = document.getElementById("game-changes");
        T.style.display = "none";  // <-- Set it to block

        if(game.player.team == "N/A") {
            game.player.team = document.getElementById("owner-teams").innerHTML;
        }


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

                if (game.player.mode != "Owner Mode") {
                    document.getElementById("message").innerHTML = "Name: " + game.player.name + " | Mode: " + game.player.mode + "<br><h1>" + game.year + " Week " + game.week + " | " + game.schedule[game.week - 1].raceName + " at " + game.schedule[game.week - 1].trackName + "</h1>";

                }
                else {
                    document.getElementById("message").innerHTML = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team + "<br><h1>" + game.year + " Week " + game.week + " | " + game.schedule[game.week - 1].raceName + " at " + game.schedule[game.week - 1].trackName + "</h1>";

                }



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

                var src = "../images/num/" + results[0].organization.originalName + results[0].number;

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


                html += "<br>"
                html += "<br>"

                if(game.player.mode == "Owner Mode") {
                    html += " Team Results: ";

                    console.log("html is", html)

                    html += "<p class='standings'>";

                    var payout = 15000;
                    var earnings = 0;

                    for (var i = 0; i < results.length; i++) {
                        var num1 = i + 1;

                        if(results[i].organization.name == game.player.team) {

                            var str1 = num1 + ' | #' + results[i].number + ' ' +
                                results[i].driver.name + ' | ' +
                                results[i].sponsor2 + ' | ' +
                                results[i].organization.name + ' | ' +
                                results[i].organization.manufacture + '\n<br>';
                            html += str1;

                            earnings += payout;
                        }

                        payout -= 350;

                    }

                    html += "Money Earned: ";

                    html += earnings;

                    html += " | Current Financial Balance: ";

                    game.player.money += parseInt(earnings);

                    globalMoney = game.player.money;

                    html += game.player.money;

                    html += "</p>";

                    html += "<br>"

                }

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

                results = game.displayStandings2();

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
                    if(game.player.mode != "Owner Mode") {
                        var ss = game.sillySeason();
                    }
                    else {
                        var ss = game.sillySeasonOwnerMode();

                        for (var t = 0; t < carsWithNoSponsor.length; t++) {
                            for (var i = 0; i < game.carlist.length; i++) {
                               if(t === game.carlist[i].number) {
                                   game.carlist[i].sponsor = "Unsponsored";
                               }
                            }

                        }

                    }



                    carsWithNoSponsor = Array();


                    console.log("SILLY SEASON", ss);

                    document.getElementById("message").innerHTML = "<h1>" + game.year + " Silly Season</h1>";

                    var results = game.displayStandings();

                    console.log(results);

                    var html = "<p class='standings'>";
                    if(game.player.mode == "Owner Mode") {
                        html += '<br><input type="submit"  style="width:210px" id = "teammanage1" name="guess" value="Continue" onclick="sillySeasonTeamManager()">';
                    }
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

                    var results = game.displayStandings2();

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

    document.getElementById("shutDownTeam1").onclick = function (event) {


        event.preventDefault();


        document.getElementById("message").innerHTML = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team + "<br>";

        console.log("created team");
        var html = "Funds: $";
        html += game.player.money;
        html += "<br>";
        html += "<p class='standings'>";
        html += "Shutting Down Team Will Result in a $50000 Payout. Confirm? ";
        html += '<input type=\"submit\" style=\"width:300px\" value=\"Confirm?\" onclick=\"shutDownTeamSubmit(event)\">';
        html += "<br>";
        html += "</p>"

        document.getElementById("message").innerHTML += html;



        //document.getElementById("teammanager").click();




    }

    document.getElementById("shutDownTeam1SillySeason").onclick = function (event) {


        event.preventDefault();


        document.getElementById("message").innerHTML = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team + "<br>";

        console.log("created team");
        var html = "Funds: $";
        html += game.player.money;
        html += "<br>";
        html += "<p class='standings'>";
        html += "Shutting Down Team Will Result in a $50000 Payout. Confirm? ";
        html += '<input type=\"submit\" style=\"width:300px\" value=\"Confirm?\" onclick=\"shutDownTeamSubmitSS(event)\">';
        html += "<br>";
        html += "</p>"

        document.getElementById("message").innerHTML += html;



        //document.getElementById("teammanager").click();




    }

    document.getElementById("shutDownTeam2").onclick = function (event) {


        event.preventDefault();

        for (var i = 0; i < game.carlist.length; i++) {
            if(game.carlist[i].number == selectedCar.number) {
                game.carlist.splice(i, 1);
            }
        }

        game.freeAgents.push(selectedCar.driver);

        selectedCar = null;


        teamManagerReturn(event);




    }

    document.getElementById("shutDownTeam2SillySeason").onclick = function (event) {


        event.preventDefault();

        for (var i = 0; i < game.carlist.length; i++) {
            if(game.carlist[i].number == selectedCar.number) {
                game.carlist.splice(i, 1);
            }
        }

        game.freeAgents.push(selectedCar.driver);

        selectedCar = null;


        teamManagerReturnSS(event);





    }

    document.getElementById("createTeam1").onclick = function (event) {


        event.preventDefault();


        document.getElementById("message").innerHTML = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team + "<br>";

        console.log("created team");
        var html = "Funds: $";
        html += game.player.money;
        html += "<br>";
        html += "<p class='standings'>";
        html += "55 Overall Part Time Team | Cost: $35000  ";
        html += '<input type=\"submit\" style=\"width:300px\" value=\"55 Overall Part Time Team\" onclick=\"createTeamSubmit(event, 55, 35000, 1)\">';
        html += "<br>";
        html += "65 Overall Part Time Team | Cost: $50000  ";
        html += '<input type=\"submit\" style=\"width:300px\" value=\"65 Overall Part Time Team\" onclick=\"createTeamSubmit(event, 65, 50000, 1)\">';
        html += "<br>";
        html += "75 Overall Part Time Team | Cost: $75000  ";
        html += '<input type=\"submit\" style=\"width:300px\" value=\"75 Overall Part Time Team\" onclick=\"createTeamSubmit(event, 75, 75000, 1)\">';
        html += "<br>";
        html += "85 Overall Part Time Team | Cost: $100000 ";
        html += '<input type=\"submit\" style=\"width:300px\" value=\"85 Overall Part Time Team\" onclick=\"createTeamSubmit(event, 85, 100000, 1)\">';
        html += "<br>";
        html += "55 Overall Full Time Team | Cost: $75000  ";
        html += '<input type=\"submit\" style=\"width:300px\" value=\"55 Overall Full Time Team\" onclick=\"createTeamSubmit(event, 55, 75000, 2)\">';
        html += "<br>";
        html += "65 Overall Full Time Team | Cost: $100000 ";
        html += '<input type=\"submit\" style=\"width:300px\" value=\"65 Overall Full Time Team\" onclick=\"createTeamSubmit(event, 65, 100000, 2)\">';
        html += "<br>";
        html += "75 Overall Full Time Team | Cost: $125000 ";
        html += '<input type=\"submit\" style=\"width:300px\" value=\"75 Overall Full Time Team\" onclick=\"createTeamSubmit(event, 75, 125000, 2)\">';
        html += "<br>";
        html += "85 Overall Full Time Team | Cost: $150000 ";
        html += '<input type=\"submit\" style=\"width:300px\" value=\"85 Overall Full Time Team\" onclick=\"createTeamSubmit(event, 85, 150000, 2)\">';
        html += "<br>";
        html += "</p>"

        document.getElementById("message").innerHTML += html;



        //document.getElementById("teammanager").click();




    }

    document.getElementById("createTeam2").onclick = function (event) {


        event.preventDefault();

        document.getElementById("message").innerHTML = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team + "<br>";

        console.log("created team 2");

        var usedNumbers = new Array();

        var unusedNumbers = new Array();

        for (var i = 0; i < game.carlist.length; i++) {
            usedNumbers.push(game.carlist[i].number)
            if(game.carlist[i].organization.name == game.player.team) {
                globalTeam = game.carlist[i].organization;
            }
        }
        for (var i = 0; i < 100; i++) {
            unusedNumbers.push(i.toString());

        }

        var filteredArray = unusedNumbers.filter(function (x) {
            return usedNumbers.indexOf(x) < 0;
        });

        console.log("FILTERED ARRAY IS", filteredArray)

        var html = "<p class='standings'>";
        console.log("FILTERED ARRAY IS", filteredArray)

        html += "Click a number to use";

        for (var i = 0; i < filteredArray.length; i++) {

            var src = "../images/num/" + game.player.team +  filteredArray[i];

            // <div class='content'>

            //  var html = "<table style=\"width:100%\"><tr><th><img src='" + src + ".png'></th><th>";

            var html2 ="<img onerror=\"this.src='../images/num/default" + filteredArray[i] + ".png\'\" src='" + src + ".png'" + "onclick='createTeamSubmit2(event, " + filteredArray[i] + ")'><br>";

            html += html2;

        }

        html += "</p>"


        document.getElementById("message").innerHTML += html;



        //document.getElementById("teammanager").click();




    }

    document.getElementById("createTeam3").onclick = function (event) {


        event.preventDefault();

        document.getElementById("message").innerHTML = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team + "<br>";

        console.log("created team 2");

        var usedNumbers = new Array();

        var unusedNumbers = new Array();

        for (var i = 0; i < game.carlist.length; i++) {
            usedNumbers.push(game.carlist[i].number)

        }
        for (var i = 0; i < 100; i++) {
            unusedNumbers.push(i.toString());

        }

        var filteredArray = unusedNumbers.filter(function (x) {
            return usedNumbers.indexOf(x) < 0;
        });

        console.log("FILTERED ARRAY IS", filteredArray)

        var html = "<p class='standings'>";

        for (var i = 0; i < filteredArray.length; i++) {

            var src = "../images/num/" + game.player.team +  filteredArray[i];

            // <div class='content'>

            //  var html = "<table style=\"width:100%\"><tr><th><img src='" + src + ".png'></th><th>";

            var html2 = "<table style=\"width:100%\"><tr><th>" +
                "<img onerror=\"this.src='../images/num/default" + filteredArray[i] + ".png\'\" src='" + src + ".png'></object></th><th>";

            html += html2;
            html += "<br>"
        }

        html += "</p>"

        document.getElementById("message").innerHTML += html;



        //document.getElementById("teammanager").click();




    }

    document.getElementById("createTeam4").onclick = function (event) {


        event.preventDefault();

        game.carlist.push(selectedCar);


        if(sillySeason) {
            document.getElementById("teammanagerSillySeason").click();

        }
        else {
            document.getElementById("teammanager").click();

        }





    }

    document.getElementById("race").onclick = function (event) {
        event.preventDefault();

        var T = document.getElementById("game-changes");
        T.style.display = "none";  // <-- Set it to block

        if(game.player.team == "N/A") {
            game.player.team = document.getElementById("owner-teams").innerHTML;
        }


        if(sillySeason) {
            teamManagerReturnSS();
        }



        if (game.dontSkip && sillySeason == false) {


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
            if(sillySeason == false) {
                if (game.week-1 != game.schedule.length && game.silly == false) {

                    console.log("game schedule", game.schedule)


                    console.log("game.week-1 is,", game.week, game.schedule[game.week-1])

                    if (game.player.mode != "Owner Mode") {
                        document.getElementById("message").innerHTML = "Name: " + game.player.name + " | Mode: " + game.player.mode + "<br><h1>" + game.year + " Week " + game.week + " | " + game.schedule[game.week - 1].raceName + " at " + game.schedule[game.week - 1].trackName + "</h1>";

                    }
                    else {
                        document.getElementById("message").innerHTML = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team + "<br><h1>" + game.year + " Week " + game.week + " | " + game.schedule[game.week - 1].raceName + " at " + game.schedule[game.week - 1].trackName + "</h1>";

                    }



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

                    var src = "../images/num/" + results[0].organization.originalName + results[0].number;

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


                    html += "<br>"
                    html += "<br>"

                    if(game.player.mode == "Owner Mode") {
                        html += " Team Results: ";

                        console.log("html is", html)

                        html += "<p class='standings'>";

                        var payout = 10000;
                        var earnings = 0;

                        for (var i = 0; i < results.length; i++) {
                            var num1 = i + 1;

                            if(results[i].organization.name == game.player.team) {

                                var str1 = num1 + ' | #' + results[i].number + ' ' +
                                    results[i].driver.name + ' | ' +
                                    results[i].sponsor2 + ' | ' +
                                    results[i].organization.name + ' | ' +
                                    results[i].organization.manufacture + '\n<br>';
                                html += str1;

                                earnings += payout;
                            }

                            payout -= 250;

                        }

                        html += "Money Earned: ";

                        html += earnings;

                        html += " | Current Financial Balance: ";

                        game.player.money += parseInt(earnings);

                        html += game.player.money;

                        html += "</p>";

                        html += "<br>"

                    }

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

                    results = game.displayStandings2();

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
                        if(game.player.mode != "Owner Mode") {
                            var ss = game.sillySeason();
                        }
                        else {
                            var ss = game.sillySeasonOwnerMode();

                            for (var t = 0; t < carsWithNoSponsor.length; t++) {
                                for (var i = 0; i < game.carlist.length; i++) {
                                    if(t == game.carlist[i].number) {
                                        game.carlist[i].sponsor = "Unsponsored";
                                    }
                                }

                            }

                        }

                        carsWithNoSponsor = Array();
                        console.log("SILLY SEASON", ss);

                        document.getElementById("message").innerHTML = "<h1>" + game.year + " Silly Season</h1>";

                        var results = game.displayStandings();

                        console.log(results);

                        var html = "<p class='standings'>";
                        if(game.player.mode == "Owner Mode") {
                            html += '<br><input type="submit"  style="width:210px" id = "teammanage1" name="guess" value="Continue" onclick="sillySeasonTeamManager()"><br>';
                        }
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

                        var results = game.displayStandings2();

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
            else {
                teamManagerReturnSS();
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

                    if (game.player.mode != "Owner Mode") {
                        document.getElementById("message").innerHTML = "Name: " + game.player.name + " | Mode: " + game.player.mode + "<br><h1>" + game.year + " Week " + game.week + " | " + game.schedule[game.week - 1].raceName + " at " + game.schedule[game.week - 1].trackName + "</h1>";

                    }
                    else {
                        document.getElementById("message").innerHTML = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team + "<br><h1>" + game.year + " Week " + game.week + " | " + game.schedule[game.week - 1].raceName + " at " + game.schedule[game.week - 1].trackName + "</h1>";

                    }


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
                    html += "<br>"
                    if(game.player.mode == "Owner Mode") {
                    html += " Team Results: ";

                    console.log("html is", html)

                    html += "<p class='standings'>";

                    for (var i = 0; i < results.length; i++) {
                        var num1 = i + 1;

                        if(results[i].organization.name == game.player.team) {

                            var str1 = num1 + ' | #' + results[i].number + ' ' +
                                results[i].driver.name + ' | ' +
                                results[i].sponsor2 + ' | ' +
                                results[i].organization.name + ' | ' +
                                results[i].organization.manufacture + '\n<br>';
                            html += str1;
                        }

                    }

                    html += "</p>";

                    html += "<br>"

                    var payout = 10000;
                    var earnings = 0;

                    for (var i = 0; i < results.length; i++) {
                        var num1 = i + 1;

                        if(results[i].organization.name == game.player.team) {

                            var str1 = num1 + ' | #' + results[i].number + ' ' +
                                results[i].driver.name + ' | ' +
                                results[i].sponsor2 + ' | ' +
                                results[i].organization.name + ' | ' +
                                results[i].organization.manufacture + '\n<br>';
                            html += str1;

                            earnings += payout;
                        }

                        payout -= 250;

                    }


                        html += "Money Earned: ";

                        html += earnings;

                        html += " | Current Financial Balance: ";

                        game.player.money += parseInt(earnings);

                        html += game.player.money;

                        html += "</p>";

                        html += "<br>"
                    }




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

    document.getElementById("simMode").onclick = function (event) {
        event.preventDefault();

        var input = document.getElementById("userInput").value;

        game.player.name = input;

        game.player.mode = "Sim Mode"

        html = "<p>"
        html += input;
        html += "</p>";

        document.createElement("playoffs");

        document.getElementById("game-start").innerHTML = html;

        TestsFunction2();


    }

    document.getElementById("selectTeam").onclick = function (event) {
        event.preventDefault();
        console.log("clicked select team");
        SaveTeam();


    }

    document.getElementById("ownerMode").onclick = function (event) {
        event.preventDefault();

        var input = document.getElementById("userInput").value;

        game.player.name = input;

        game.player.mode = "Owner Mode"

        html = "<p>"
        html += input;
        html += "</p>";

        document.createElement("playoffs");

        document.getElementById("game-start").innerHTML += html;

        TestsFunction3();


    }

    document.getElementById("standings").onclick = function (event) {
        event.preventDefault();


        document.getElementById("message").innerHTML = "<h1>" + game.year + " Standings after " + (game.week-1) + " Races </h1>";


        var results = game.displayStandings2();

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

    document.getElementById("driversHire").onclick = function (event) {


        event.preventDefault();

        var html = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team + "<br>";


        html += "Funds: $";
        html += game.player.money;
        html += "<br>";

        html += "<p class='standings'>";


        var src = "../images/num/" + selectedCar.organization.name + selectedCar.number;

        console.log("src ", src)

        html += "<table style=\"width:100%\"><tr><th>" +
            "<img onclick='teamEditor(" + selectedCar + ")' id='team" + i + "\" onerror=\"this.src='../images/num/default" + selectedCar.number + ".png\'\" src='" + src + ".png'></object></th><th>";


        html += selectedCar.number;

        html += " ";

        html += selectedCar.organization.name;

        html += " ";

        html += selectedCar.organization.manufacture;

        html += " | Car Rating: ";

        var overall = (selectedCar.engine + selectedCar.aero + selectedCar.chassis +
            selectedCar.pitCrew ) / 4;

        html += overall;


        html += "</table></p>";

        html += "<h1>Hire Driver</h1>"

        var results = game.displayFreeAgents();

        html += "<p class='standings'>";

        var html2 = '<select id="ddlViewBy">';
        for (var t = 0; t < results.length; t++) {
            html2 += '<option>';
            html2 += results[t].name;
            html2 += '</option>';
        }
        html2 += '</select><br>';


        for (var i = 0; i < results.length; i++) {
            var num1 = i + 1;
            var str1 = results[i].name + " | Age: " + results[i].age + ' |<br>'
                + 'Championships: ' + results[i].careerTitles
                + ' | Career Wins: ' + results[i].careerWins
                + ' | Career Top Fives: ' + results[i].careerTopFives
                + ' | Career Top Tens: ' + results[i].careerTopTens
                + ' | Career Races: ' + results[i].careerRaces
                + ' |<br>';
            html += str1;

            html += '<input type=\"submit\" style=\"width:500px\" value=\"Negotiate Contract with ';

            html += results[i].name;

            html += '\" onclick=\"hireDriverConfirm(event,';

            var car = JSON.stringify(results[i]);

            selectedFA = JSON.parse(car);

            car = JSON.stringify(selectedFA);

            var car2 = car.split("\"").join("'");

            html +=  car2;
            html += ')\">';

            html += '<br><br>';

        }

        html += "</p>";

        document.getElementById("message").innerHTML = html;

    }

    document.getElementById("sponsorHire").onclick = function (event) {


        event.preventDefault();

        var html = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team + "<br>";


        html += "Funds: $";
        html += game.player.money;
        html += "<br>";

        html += "<p class='standings'>";


        var src = "../images/num/" + selectedCar.organization.name + selectedCar.number;

        console.log("src ", src)

        html += "<table style=\"width:100%\"><tr><th>" +
            "<img onclick='teamEditor(" + selectedCar + ")' id='team" + i + "\" onerror=\"this.src='../images/num/default" + selectedCar.number + ".png\'\" src='" + src + ".png'></object></th><th>";


        html += selectedCar.number;

        html += " ";

        html += selectedCar.organization.name;

        html += " ";

        html += selectedCar.organization.manufacture;

        html += " | Car Rating: ";

        var overall = (selectedCar.engine + selectedCar.aero + selectedCar.chassis +
            selectedCar.pitCrew ) / 4;

        html += overall;


        html += "</table></p>";

        html += "<h1>Find Sponsor</h1>"

        var paymentElite = [40000, 35000, 325000, 30000, 27500, 25000, 22500, 20000];
        var paymentGood = [25000, 20000, 17500, 15000, 22500, 20000];
        var paymentAvg = [10000, 17500, 15000, 12500, 20000];

        var index = 0;

        index = Math.floor(Math.random() * game.sponsorlist.length);
        var choice1 = game.sponsorlist[index];


        index = Math.floor(Math.random() * game.sponsorlist.length);
        var choice2 = game.sponsorlist[index];


        index = Math.floor(Math.random() * game.sponsorlist.length);
        var choice3 = game.sponsorlist[index];

        index = Math.floor(Math.random() * game.sponsorlist.length);
        var choice4 = game.sponsorlist[index];

        index = Math.floor(Math.random() * game.sponsorlist.length);
        var choice5 = game.sponsorlist[index];

        var sponsorChoices = Array();
        var paymentOptions = Array();

        sponsorChoices.push(choice1);

        if(overall > 85) {
            paymentOptions.push(paymentElite[Math.floor(Math.random() * paymentElite.length)]);
        }

        else {
            if(overall > 70) {
                paymentOptions.push(paymentGood[Math.floor(Math.random() * paymentGood.length)]);
            }
            else {
                paymentOptions.push(paymentAvg[Math.floor(Math.random() * paymentAvg.length)]);
            }

        }


        if (overall > 66) {
            sponsorChoices.push(choice2);
            if(overall > 85) {
                paymentOptions.push(paymentElite[Math.floor(Math.random() * paymentElite.length)]);
            }

            else {
                if(overall > 70) {
                    paymentOptions.push(paymentGood[Math.floor(Math.random() * paymentGood.length)]);
                }
                else {
                    paymentOptions.push(paymentAvg[Math.floor(Math.random() * paymentAvg.length)]);
                }

            }
        }
        if (overall > 76) {
            sponsorChoices.push(choice3);
            if(overall > 85) {
                paymentOptions.push(paymentElite[Math.floor(Math.random() * paymentElite.length)]);
            }

            else {
                if(overall > 70) {
                    paymentOptions.push(paymentGood[Math.floor(Math.random() * paymentGood.length)]);
                }
                else {
                    paymentOptions.push(paymentAvg[Math.floor(Math.random() * paymentAvg.length)]);
                }

            }
        }
        if (overall > 86) {
            sponsorChoices.push(choice4);
            if(overall > 85) {
                paymentOptions.push(paymentElite[Math.floor(Math.random() * paymentElite.length)]);
            }

            else {
                if(overall > 70) {
                    paymentOptions.push(paymentGood[Math.floor(Math.random() * paymentGood.length)]);
                }
                else {
                    paymentOptions.push(paymentAvg[Math.floor(Math.random() * paymentAvg.length)]);
                }

            }
        }

        if (selectedCar.driver) {
            if(selectedCar.driver.careerTitles > 0) {
                sponsorChoices.push(choice5);
            }
            if(overall > 85) {
                paymentOptions.push(paymentElite[Math.floor(Math.random() * paymentElite.length)]);
            }

            else {
                if(overall > 70) {
                    paymentOptions.push(paymentGood[Math.floor(Math.random() * paymentGood.length)]);
                }
                else {
                    paymentOptions.push(paymentAvg[Math.floor(Math.random() * paymentAvg.length)]);
                }

            }

        }



        html += "<p class='standings'>";

        for (var i = 0; i < sponsorChoices.length; i++) {
            var num1 = i + 1;

            sponsorChoices[i] = sponsorChoices[i].replace(/'/g, '′');

            sponsorChoices[i] = sponsorChoices[i].replace('%u2032', '′');


            var str1 = sponsorChoices[i] + " | Offer : $" + paymentOptions[i] + ' |<br>'

            html += str1;

            html += '<input type=\"submit\" style=\"width:500px\" value=\"Accept Offer from ';



            html += sponsorChoices[i];

            html += '\"onclick=\"hireSponsorConfirm(event, \'';

            html += sponsorChoices[i];

            html += '\')\">';

            html += '<br><br>';

        }

        html += "</p>";

        document.getElementById("message").innerHTML = html;

    }

    document.getElementById("sponsorHireSillySeason").onclick = function (event) {


        event.preventDefault();

        var html = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team + "<br>";


        html += "Funds: $";
        html += game.player.money;
        html += "<br>";

        html += "<p class='standings'>";


        var src = "../images/num/" + selectedCar.organization.name + selectedCar.number;

        console.log("src ", src)

        html += "<table style=\"width:100%\"><tr><th>" +
            "<img onclick='teamEditor(" + selectedCar + ")' id='team" + i + "\" onerror=\"this.src='../images/num/default" + selectedCar.number + ".png\'\" src='" + src + ".png'></object></th><th>";


        html += selectedCar.number;

        html += " ";

        html += selectedCar.organization.name;

        html += " ";

        html += selectedCar.organization.manufacture;

        html += " | Car Rating: ";

        var overall = (selectedCar.engine + selectedCar.aero + selectedCar.chassis +
            selectedCar.pitCrew ) / 4;

        html += overall;


        html += "</table></p>";

        html += "<h1>Find Sponsor</h1>"

        var paymentElite = [40000, 35000, 325000, 30000, 27500, 25000, 22500, 20000];
        var paymentGood = [25000, 20000, 17500, 15000, 22500, 20000];
        var paymentAvg = [10000, 17500, 15000, 12500, 20000];

        var index = 0;

        index = Math.floor(Math.random() * game.sponsorlist.length);
        var choice1 = game.sponsorlist[index];


        index = Math.floor(Math.random() * game.sponsorlist.length);
        var choice2 = game.sponsorlist[index];


        index = Math.floor(Math.random() * game.sponsorlist.length);
        var choice3 = game.sponsorlist[index];

        index = Math.floor(Math.random() * game.sponsorlist.length);
        var choice4 = game.sponsorlist[index];

        index = Math.floor(Math.random() * game.sponsorlist.length);
        var choice5 = game.sponsorlist[index];

        var sponsorChoices = Array();
        var paymentOptions = Array();

        sponsorChoices.push(choice1);

        if(overall > 85) {
            paymentOptions.push(paymentElite[Math.floor(Math.random() * paymentElite.length)]);
        }

        else {
            if(overall > 70) {
                paymentOptions.push(paymentGood[Math.floor(Math.random() * paymentGood.length)]);
            }
            else {
                paymentOptions.push(paymentAvg[Math.floor(Math.random() * paymentAvg.length)]);
            }

        }


        if (overall > 66) {
            sponsorChoices.push(choice2);
            if(overall > 85) {
                paymentOptions.push(paymentElite[Math.floor(Math.random() * paymentElite.length)]);
            }

            else {
                if(overall > 70) {
                    paymentOptions.push(paymentGood[Math.floor(Math.random() * paymentGood.length)]);
                }
                else {
                    paymentOptions.push(paymentAvg[Math.floor(Math.random() * paymentAvg.length)]);
                }

            }
        }
        if (overall > 76) {
            sponsorChoices.push(choice3);
            if(overall > 85) {
                paymentOptions.push(paymentElite[Math.floor(Math.random() * paymentElite.length)]);
            }

            else {
                if(overall > 70) {
                    paymentOptions.push(paymentGood[Math.floor(Math.random() * paymentGood.length)]);
                }
                else {
                    paymentOptions.push(paymentAvg[Math.floor(Math.random() * paymentAvg.length)]);
                }

            }
        }
        if (overall > 86) {
            sponsorChoices.push(choice4);
            if(overall > 85) {
                paymentOptions.push(paymentElite[Math.floor(Math.random() * paymentElite.length)]);
            }

            else {
                if(overall > 70) {
                    paymentOptions.push(paymentGood[Math.floor(Math.random() * paymentGood.length)]);
                }
                else {
                    paymentOptions.push(paymentAvg[Math.floor(Math.random() * paymentAvg.length)]);
                }

            }
        }

        if (selectedCar.driver) {
            if(selectedCar.driver.careerTitles > 0) {
                sponsorChoices.push(choice5);
            }
            if(overall > 85) {
                paymentOptions.push(paymentElite[Math.floor(Math.random() * paymentElite.length)]);
            }

            else {
                if(overall > 70) {
                    paymentOptions.push(paymentGood[Math.floor(Math.random() * paymentGood.length)]);
                }
                else {
                    paymentOptions.push(paymentAvg[Math.floor(Math.random() * paymentAvg.length)]);
                }

            }

        }



        html += "<p class='standings'>";

        for (var i = 0; i < sponsorChoices.length; i++) {
            var num1 = i + 1;
            var str1 = sponsorChoices[i] + " | Offer : $" + paymentOptions[i] + ' |<br>'

            html += str1;

            html += '<input type=\"submit\" style=\"width:500px\" value=\"Accept Offer from ';

            sponsorChoices[i] = sponsorChoices[i].replace(/'/g, '′');

            sponsorChoices[i] = sponsorChoices[i].replace('%u2032', '′');



            html += sponsorChoices[i];

            html += '\"onclick=\"hireSponsorConfirmSS(event, \'';

            html += sponsorChoices[i];

            html += '\')\">';

            html += '<br><br>';

        }

        html += "</p>";

        document.getElementById("message").innerHTML = html;

    }

    document.getElementById("driversHireSillySeason").onclick = function (event) {


        event.preventDefault();

        var html = "Name: " + game.player.name + " | Mode: " + game.player.mode + " | Team: " + game.player.team + "<br>";


        html += "Funds: $";
        html += game.player.money;
        html += "<br>";

        html += "<p class='standings'>";


        var src = "../images/num/" + selectedCar.organization.name + selectedCar.number;

        console.log("src ", src)

        html += "<table style=\"width:100%\"><tr><th>" +
            "<img onclick='teamEditor(" + selectedCar + ")' id='team" + i + "\" onerror=\"this.src='../images/num/default" + selectedCar.number + ".png\'\" src='" + src + ".png'></object></th><th>";


        html += selectedCar.number;

        html += " ";

        html += selectedCar.organization.name;

        html += " ";

        html += selectedCar.organization.manufacture;

        html += " | Car Rating: ";

        var overall = (selectedCar.engine + selectedCar.aero + selectedCar.chassis +
            selectedCar.pitCrew ) / 4;

        html += overall;


        html += "</table></p>";

        html += "<h1>Hire Driver</h1>"

        var results = game.displayFreeAgents();

        html += "<p class='standings'>";

        var html2 = '<select id="ddlViewBy">';
        for (var t = 0; t < results.length; t++) {
            html2 += '<option>';
            html2 += results[t].name;
            html2 += '</option>';
        }
        html2 += '</select><br>';


        for (var i = 0; i < results.length; i++) {
            var num1 = i + 1;

            var str1 = results[i].name + " | Age: " + results[i].age + ' |<br>'
                + 'Rating: ' + (results[i].superspeedway+results[i].intermediate+results[i].roadCourse+results[i].shortTrack+results[i].flat)/5 + " | <br>"
                + 'Championships: ' + results[i].careerTitles
                + ' | Career Wins: ' + results[i].careerWins
                + ' | Career Top Fives: ' + results[i].careerTopFives
                + ' | Career Top Tens: ' + results[i].careerTopTens
                + ' | Career Races: ' + results[i].careerRaces
                + ' |<br>';
            html += str1;

            html += '<input type=\"submit\" style=\"width:500px\" value=\"Negotiate Contract with ';

            html += results[i].name;

            html += '\" onclick=\"hireDriverConfirmSS(event,';

            var car = JSON.stringify(results[i]);

            selectedFA = JSON.parse(car);

            car = JSON.stringify(selectedFA);

            var car2 = car.split("\"").join("'");

            html +=  car2;
            html += ')\">';

            html += '<br><br>';

        }

        html += "</p>";

        document.getElementById("message").innerHTML = html;

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

        document.getElementById("message").innerHTML = html;


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
                + results[i].driver.careerRaces+ "~" + results[i].yearsLeft + "~"
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
        str2 =  game.numRaces + "~" +  game.numRaces + "~" + game.maxRaces;
        myCsv += str2;
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

        myCsv += "\nPlayerData~\n";

        console.log("game champions,", game.player);
        i = 0;



        var str1 = "";
        console.log("game daytona i,", game.daytona[i]);
        str1 = game.player.name + "~" +  game.player.mode + "~"  + game.player.diff + "~"  + game.player.team +  "~"  + game.player.money + "~\n";
        myCsv += str1;




        window.open('data:text/csv;charset=utf-8,' + escape(myCsv));


    }

}


