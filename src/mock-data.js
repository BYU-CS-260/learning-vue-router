let mock = [
  {
     "id":1,
     "category":"HISTORY",
     "air_date":"2004-12-31",
     "question":"For the last 8 years of his life, Galileo was under house arrest for espousing this man's theory",
     "value":"$200",
     "answer":"Copernicus",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":2,
     "category":"ESPN's TOP 10 ALL-TIME ATHLETES",
     "air_date":"2004-12-31",
     "question":"No. 2: 1912 Olympian; football star at Carlisle Indian School; 6 MLB seasons with the Reds, Giants & Braves",
     "value":"$200",
     "answer":"Jim Thorpe",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":3,
     "category":"EVERYBODY TALKS ABOUT IT...",
     "air_date":"2004-12-31",
     "question":"The city of Yuma in this state has a record average of 4,055 hours of sunshine each year",
     "value":"$200",
     "answer":"Arizona",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
     "id":4,
     "category":"THE COMPANY LINE",
     "air_date":"2004-12-31",
     "question":"In 1963, live on \"The Art Linkletter Show\", this company served its billionth burger",
     "value":"$200",
     "answer":"McDonald\\'s",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":5,
     "category":"EPITAPHS & TRIBUTES",
     "air_date":"2004-12-31",
     "question":"Signer of the Dec. of Indep., framer of the Constitution of Mass., second President of the United States",
     "value":"$200",
     "answer":"John Adams",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":6,
     "category":"3-LETTER WORDS",
     "air_date":"2004-12-31",
     "question":"In the title of an Aesop fable, this insect shared billing with a grasshopper",
     "value":"$200",
     "answer":"the ant",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":7,
     "category":"HISTORY",
     "air_date":"2004-12-31",
     "question":"Built in 312 B.C. to link Rome & the South of Italy, it's still in use today",
     "value":"$400",
     "answer":"the Appian Way",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":8,
     "category":"ESPN's TOP 10 ALL-TIME ATHLETES",
     "air_date":"2004-12-31",
     "question":"No. 8: 30 steals for the Birmingham Barons; 2,306 steals for the Bulls",
     "value":"$400",
     "answer":"Michael Jordan",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  { 
     "id":9,
     "category":"EVERYBODY TALKS ABOUT IT...",
     "air_date":"2004-12-31",
     "question":"In the winter of 1971-72, a record 1,122 inches of snow fell at Rainier Paradise Ranger Station in this state",
     "value":"$400",
     "answer":"Washington",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":10,
     "category":"THE COMPANY LINE",
     "air_date":"2004-12-31",
     "question":"This housewares store was named for the packaging its merchandise came in & was first displayed on",
     "value":"$400",
     "answer":"Crate & Barrel",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":11,
     "category":"EPITAPHS & TRIBUTES",
     "air_date":"2004-12-31",
     "question":"\"And away we go\"",
     "value":"$400",
     "answer":"Jackie Gleason",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":12,
     "category":"3-LETTER WORDS",
     "air_date":"2004-12-31",
     "question":"Cows regurgitate this from the first stomach to the mouth & chew it again",
     "value":"$400",
     "answer":"the cud",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":13,
     "category":"HISTORY",
     "air_date":"2004-12-31",
     "question":"In 1000 Rajaraja I of the Cholas battled to take this Indian Ocean island now known for its tea",
     "value":"$600",
     "answer":"Ceylon (or Sri Lanka)",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":14,
     "category":"ESPN's TOP 10 ALL-TIME ATHLETES",
     "air_date":"2004-12-31",
     "question":"'No. 1: Lettered in hoops, football & lacrosse at Syracuse & if you think he couldn't act, ask his 11 \"unclean\" buddies'",
     "value":"$600",
     "answer":"Jim Brown",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":15,
     "category":"EVERYBODY TALKS ABOUT IT...",
     "air_date":"2004-12-31",
     "question":"On June 28, 1994 the nat'l weather service began issuing this index that rates the intensity of the sun's radiation",
     "value":"$600",
     "answer":"the UV index",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":16,
     "category":"THE COMPANY LINE",
     "air_date":"2004-12-31",
     "question":"'This company's Accutron watch, introduced in 1960, had a guarantee of accuracy to within one minute a  month'",
     "value":"$600",
     "answer":"Bulova",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":17,
     "category":"EPITAPHS & TRIBUTES",
     "air_date":"2004-12-31",
     "question":"Outlaw: \"Murdered by a traitor and a coward whose name is not worthy to appear here\"",
     "value":"$600",
     "answer":"Jesse James",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":18,
     "category":"3-LETTER WORDS",
     "air_date":"2004-12-31",
     "question":"A small demon, or a mischievous child (who might be a little demon!)",
     "value":"$600",
     "answer":"imp",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":19,
     "category":"HISTORY",
     "air_date":"2004-12-31",
     "question":"'Karl led the first of these Marxist organizational efforts; the second one began in 1889'",
     "value":"$800",
     "answer":"the International",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":20,
     "category":"ESPN's TOP 10 ALL-TIME ATHLETES",
     "air_date":"2004-12-31",
     "question":"No. 10: FB/LB for Columbia U. in the 1920s; MVP for the Yankees in '27 & '36; \"Gibraltar in Cleats\"",
     "value":"$800",
     "answer":"(Lou) Gehrig",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":21,
     "category":"EVERYBODY TALKS ABOUT IT...",
     "air_date":"2004-12-31",
     "question":"Africa's lowest temperature was 11 degrees below zero in 1935 at Ifrane, just south of Fez in this country",
     "value":"$800",
     "answer":"Morocco",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":22,
     "category":"THE COMPANY LINE",
     "air_date":"2004-12-31",
     "question":"Edward Teller & this man partnered in 1898 to sell high fashions to women",
     "value":"$800",
     "answer":"(Paul) Bonwit",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":23,
     "category":"EPITAPHS & TRIBUTES",
     "air_date":"2004-12-31",
     "question":"1939 Oscar winner: \"...you are a credit to your craft, your race and to your family\"",
     "value":"$2,000",
     "answer":"Hattie McDaniel (for her role in Gone with the Wind)",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":24,
     "category":"3-LETTER WORDS",
     "air_date":"2004-12-31",
     "question":"In geologic time one of these, shorter than an eon, is divided into periods & subdivided into epochs",
     "value":"$800",
     "answer":"era",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":25,
     "category":"HISTORY",
     "air_date":"2004-12-31",
     "question":"This Asian political party was founded in 1885 with \"Indian National\" as part of its name",
     "value":"$1000",
     "answer":"the Congress Party",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":26,
     "category":"ESPN's TOP 10 ALL-TIME ATHLETES",
     "air_date":"2004-12-31",
     "question":"'No. 5: Only center to lead the NBA in assists; track scholarship to Kansas U.; marathoner; volleyballer'",
     "value":"$1000",
     "answer":"(Wilt) Chamberlain",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":27,
     "category":"THE COMPANY LINE",
     "air_date":"2004-12-31",
     "question":"The Kirschner brothers, Don & Bill, named this ski company for themselves & the second-highest mountain",
     "value":"$1000",
     "answer":"K2",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":28,
     "category":"EPITAPHS & TRIBUTES",
     "air_date":"2004-12-31",
     "question":"Revolutionary War hero: \"His spirit is in Vermont now\"",
     "value":"$1000",
     "answer":"Ethan Allen",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  {
    "id":29,
     "category":"3-LETTER WORDS",
     "air_date":"2004-12-31",
     "question":"A single layer of paper, or to perform one's craft diligently",
     "value":"$1000",
     "answer":"ply",
     "round":"Jeopardy!",
     "show_number":"4680"
  },
  { 
    "id":30,
     "category":"DR. SEUSS AT THE MULTIPLEX",
     "air_date":"2004-12-31",
     "question":"Beyond ovoid abandonment, beyond ovoid betrayal... you won't believe the ending when he \"Hatches the Egg\"",
     "value":"$400",
     "answer":"Horton",
     "round":"Double Jeopardy!",
     "show_number":"4680"
  }
]

export default mock;