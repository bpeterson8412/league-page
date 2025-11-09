/*   STEP 1   */
export const leagueID = "1248427270800953344"; // your league ID
export const leagueName = "Quest for the M.U.F.F."; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>WEEK 10 is here. Week 9 was spicy as hell, upsets and burning retnas included! </p>
  <p></p>
  <p>Brian somehow beats Sam</p>
  <p>Ben beats on Matt's ass</p>
  <p>BP still sucks</p>
  <p>Dan drops the ball against Max</p>
  <p>Beau takes top score and shows hole to bring fortune to the Bills</p>
  <p></p>
  <p></p>
  <img src= "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2pwOGFrZXJhOWl2N3lqcHFwcWVtZmowaTViMmY0cXFvMjRmZzJ0eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nuP3xl4BTIUxO/giphy.gif" />
  <p>Check-out the Full Week 9 Recap in the Blog Post Below at your PERIL NSFW:</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
   {
       "managerID": "455148977789071360",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "William August Peterson IV",
       // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Valparaiso", // (optional)
       "bio": "Your Glorious Commisioner. Totally not full of his own shit.",
       "photo": "/managers/bpdodge.JPG", // square ratio recommended (no larger than 500x500)
       "fantasyStart": "The Beginning", // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "BN", // Can be anything (usually your rival's name)
         link: 1, // manager array number within this array, or null to link back to all managers page
         image: "/managers/BN.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
       "rival2": {
         name: "Brian", // Can be anything (usually your rival's name)
         link: 3, // manager array number within this array, or null to link back to all managers page
         image: "/managers/brian3.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Stop Mac and BN from Winning",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "463203438600122368",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "William Louis Nanny",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Valparaiso", // (optional)
       "bio": "3 time champion of the league. Barely watches football",
       "photo": "/managers/BN.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": "The Beginning", // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "BP", // Can be anything (usually your rival's name)
         link: 0, // manager array number within this array, or null to link back to all managers page
         image: "/managers/bpdodge.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
        "rival2": {
         name: "MacDaddy", // Can be anything (usually your rival's name)
         link: 2, // manager array number within this array, or null to link back to all managers page
         image: "/managers/lilpiggy.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "ADP or Bust",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "455767335651766272",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Mackenzie James Green AKA MacDaddy",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Chesterton", // (optional)
       "bio": "Won the league too many times. Certified Field Fairy",
       "photo": "/managers/lilpiggy.png", // square ratio recommended (no larger than 500x500)
       "fantasyStart": "The Beginning", // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "BN", // Can be anything (usually your rival's name)
         link: 1, // manager array number within this array, or null to link back to all managers page
         image: "/managers/BN.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Keep Winning",
       "tradingScale": 1, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
       {
       "managerID": "461049332150300672",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Brian Maskell",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Valparaiso", // (optional)
       "bio": "Tries so hard. Gets so far. But in the end it don't fucking matter.",
       "photo": "/managers/brian3.png", // square ratio recommended (no larger than 500x500)
       "fantasyStart": "The Beginning", // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "no", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "BP", // Can be anything (usually your rival's name)
         link: 0, // manager array number within this array, or null to link back to all managers page
         image: "/managers/bpdodge.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Try and Day Trade everyone",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },

       {
       "managerID": "458503782267875328",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Max Gill III",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Lowell", // (optional)
       "bio": "Has somehow won this league bvbeing the worst performing team in it's history.",
       "photo": "/managers/max.png", // square ratio recommended (no larger than 500x500)
       "fantasyStart": "The Beginning", // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "?", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Draft Colts Players",
       "tradingScale": 1, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
  {
       "managerID": "461662526942212096",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Matt Peterson",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Chesterton", // (optional)
       "bio": "The moonface master of trading away top picks.",
       "photo": "/managers/mattyp2.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": "The Beginning", // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "BN", // Can be anything (usually your rival's name)
         link: 1, // manager array number within this array, or null to link back to all managers page
         image: "/managers/BN.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Trade top draft picks fort a haul of mid players",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
  {
       "managerID": "464592664021430272",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Ben Molnar",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Minnesota", // (optional)
       "bio": "Always in the top 5 but can never break through.",
       "photo": "/managers/benm.png", // square ratio recommended (no larger than 500x500)
       "fantasyStart": "The Beginning", // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "?", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Do enough to be in the playoffs",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },

 {
       "managerID": "464939929537867776",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Ben Wilson",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Valparaiso", // (optional)
       "bio": "Josh Allen is Pookie.",
       "photo": "/managers/benw.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": "The Beginning", // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "no", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Brian", // Can be anything (usually your rival's name)
         link: 3, // manager array number within this array, or null to link back to all managers page
         image: "/managers/brian3.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Draft Josh Allen",
       "tradingScale": 8, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
 {
       "managerID": "468164428114685952",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Sam Lindquist",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Chesterton", // (optional)
       "bio": "Sneaky good in most seasons until an injury blows up the roster.",
       "photo": "/managers/Sam.png", // square ratio recommended (no larger than 500x500)
       "fantasyStart": "The Beginning", // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Dan", // Can be anything (usually your rival's name)
         link: 9, // manager array number within this array, or null to link back to all managers page
         image: "/managers/dan.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Draft for top heavy performers not depth",
       "tradingScale": 6, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },

 {
       "managerID": "734924853508988928",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Daniel Raymond Dellumo",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Valparaiso", // (optional)
       "bio": "Typically plagued by injury",
       "photo": "/managers/dan.png", // square ratio recommended (no larger than 500x500)
       "fantasyStart": "The Beginning", // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Sam", // Can be anything (usually your rival's name)
         link: 8, // manager array number within this array, or null to link back to all managers page
         image: "/managers/Sam.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Draft an aging QB too early",
       "tradingScale": 4, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },

 {
       "managerID": "849851297875214336",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Justin Thomas",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Chesterton", // (optional)
       "bio": "The first to bless the league with the 3/6/9/12 punishment",
       "photo": "/managers/justin.png", // square ratio recommended (no larger than 500x500)
       "fantasyStart": "The Beginning", // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Mac", // Can be anything (usually your rival's name)
         link: 3, // manager array number within this array, or null to link back to all managers page
         image: "/managers/lilpiggy.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Just don't lose again",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
 {
       "managerID": "865421909855186944",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Beau Kurtis",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Chesterton", // (optional)
       "bio": "The new guy in town",
       "photo": "/managers/question.png", // square ratio recommended (no larger than 500x500)
       "fantasyStart": "The Beginning", // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       //"mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "?", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Draft Josh Allen",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },








  

]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
