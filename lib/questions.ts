export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  fact: string;
}

export const ALL_QUESTIONS: Question[] = [
  // --- CHAMPIONSHIP GAMES ---
  {
    question: "Who won the 2016 NCAA Championship?",
    options: ["North Carolina", "Villanova", "Kansas", "Oklahoma"],
    correctAnswer: "Villanova",
    fact: "Villanova won on a buzzer-beater with 0.0 seconds left — one of the greatest finishes in college basketball history.",
  },
  {
    question: "Who hit the buzzer-beater for Villanova in the 2016 championship game?",
    options: ["Josh Hart", "Ryan Arcidiacono", "Kris Jenkins", "Mikal Bridges"],
    correctAnswer: "Kris Jenkins",
    fact: "Arcidiacono drove, drew the defense, and found Jenkins wide open for the three at the buzzer.",
  },
  {
    question: "Which school has the most NCAA Championship titles?",
    options: ["Kentucky", "Duke", "North Carolina", "UCLA"],
    correctAnswer: "UCLA",
    fact: "UCLA has 11 titles — 10 of them came under legendary coach John Wooden between 1964 and 1975.",
  },
  {
    question: "Who did Duke beat in the 2010 NCAA Championship game?",
    options: ["Michigan State", "West Virginia", "Butler", "Baylor"],
    correctAnswer: "Butler",
    fact: "Butler was a massive Cinderella story in 2010, a mid-major that nearly beat powerhouse Duke.",
  },
  {
    question: "Who won the 2022 NCAA Championship?",
    options: ["Gonzaga", "Duke", "Kansas", "North Carolina"],
    correctAnswer: "Kansas",
    fact: "Kansas came back from a 16-point halftime deficit against UNC to win the 2022 title — the largest halftime comeback in championship history.",
  },
  {
    question: "Who won the 2023 NCAA Championship?",
    options: ["Houston", "San Diego State", "Florida Atlantic", "UConn"],
    correctAnswer: "UConn",
    fact: "UConn dominated the 2023 tournament, winning every game by double digits — the first team to do so in the modern era.",
  },
  {
    question: "Who won the 2024 NCAA Championship?",
    options: ["Purdue", "Alabama", "NC State", "UConn"],
    correctAnswer: "UConn",
    fact: "UConn won back-to-back titles in 2023 and 2024, becoming the first repeat champion since Florida in 2006 and 2007.",
  },
  {
    question: "Which team did North Carolina beat in the 2017 NCAA Championship game?",
    options: ["Gonzaga", "Oregon", "South Carolina", "Kentucky"],
    correctAnswer: "Gonzaga",
    fact: "UNC avenged their 2016 heartbreak by defeating Gonzaga 71-65 in the 2017 championship game.",
  },
  {
    question: "Who won the 2021 NCAA Championship?",
    options: ["Gonzaga", "Houston", "Baylor", "UCLA"],
    correctAnswer: "Baylor",
    fact: "Baylor crushed previously undefeated Gonzaga 86-70 in the 2021 title game, ending the Bulldogs' perfect season.",
  },
  {
    question: "Which team won the 2019 NCAA Championship after being the first 1-seed ever to lose to a 16-seed the year before?",
    options: ["Michigan State", "Texas Tech", "Auburn", "Virginia"],
    correctAnswer: "Virginia",
    fact: "Virginia lost to 16-seed UMBC in 2018, then came back in 2019 to win the national title in overtime over Texas Tech.",
  },
  {
    question: "Which team won the 2018 NCAA Championship?",
    options: ["Michigan", "Loyola-Chicago", "Kansas", "Villanova"],
    correctAnswer: "Villanova",
    fact: "Villanova won their second title in three years in 2018, defeating Michigan 79-62 behind Donte DiVincenzo's 31 points off the bench.",
  },
  {
    question: "Who won the 2015 NCAA Championship?",
    options: ["Wisconsin", "Michigan State", "Duke", "Kentucky"],
    correctAnswer: "Duke",
    fact: "Duke defeated Wisconsin 68-63 in the 2015 title game, with Tyus Jones earning Most Outstanding Player honors.",
  },
  {
    question: "Which team won consecutive titles in 2006 and 2007?",
    options: ["North Carolina", "Florida", "Duke", "Kansas"],
    correctAnswer: "Florida",
    fact: "The Florida Gators, led by Joakim Noah and Al Horford, are the last team before UConn (2023–24) to win back-to-back championships.",
  },
  {
    question: "Who did Syracuse beat in the 2003 NCAA Championship game?",
    options: ["Texas", "Michigan", "Kansas", "Oklahoma"],
    correctAnswer: "Kansas",
    fact: "Carmelo Anthony led Syracuse to the 2003 title as a freshman, scoring 20 points in the championship game.",
  },
  {
    question: "Which team won the 2014 NCAA Championship?",
    options: ["Florida", "Connecticut", "Michigan State", "Arizona"],
    correctAnswer: "Connecticut",
    fact: "UConn won the 2014 title as a 7-seed — one of the lowest seeds ever to win the championship — defeating Florida in the final.",
  },
  {
    question: "Which team won the 2000 NCAA Championship, defeating Florida?",
    options: ["Duke", "Wisconsin", "Michigan State", "Indiana"],
    correctAnswer: "Michigan State",
    fact: "Michigan State, led by Mateen Cleaves and Morris Peterson, won the 2000 title 89-76 over Florida.",
  },
  {
    question: "Kansas defeated Memphis in the 2008 championship game. How did Kansas pull it off?",
    options: [
      "They led wire-to-wire",
      "They came back from 9 points down in the final minutes and won in OT",
      "They won by 20 in a blowout",
      "Memphis was disqualified",
    ],
    correctAnswer: "They came back from 9 points down in the final minutes and won in OT",
    fact: "Kansas erased a nine-point deficit in the final two minutes of the 2008 championship game, winning in overtime 75-68.",
  },
  {
    question: "UNLV's 1990 championship win over Duke was historic for what reason?",
    options: [
      "It was the first overtime title game",
      "It was the largest margin of victory in title game history",
      "It was the first time a 1-seed beat a 2-seed",
      "It was the last title game played without a shot clock",
    ],
    correctAnswer: "It was the largest margin of victory in title game history",
    fact: "UNLV beat Duke 103-73 in 1990 — a 30-point margin that remains the largest in championship game history.",
  },
  {
    question: "Which Big East school was the first from that conference to win the NCAA Tournament?",
    options: ["Georgetown", "St. John's", "Connecticut", "Syracuse"],
    correctAnswer: "Georgetown",
    fact: "Georgetown, led by Patrick Ewing, won the 1984 national championship — the first Big East school to claim a title.",
  },
  {
    question: "Which school won the very first NCAA Tournament in 1939?",
    options: ["Kansas", "Utah", "Oregon", "Ohio State"],
    correctAnswer: "Oregon",
    fact: "The Oregon Ducks won the first NCAA Tournament in 1939, defeating Ohio State 46-33 in the championship game.",
  },
  {
    question: "Indiana's last NCAA Championship came in what year, capped by a baseline jumper from Keith Smart?",
    options: ["1981", "1984", "1987", "1990"],
    correctAnswer: "1987",
    fact: "Bob Knight's 1987 Hoosiers defeated Syracuse on Keith Smart's baseline jumper in the final seconds.",
  },
  {
    question: "Villanova shot a record field goal percentage in the 1985 title game. What was it?",
    options: ["68.2%", "72.0%", "78.6%", "81.3%"],
    correctAnswer: "78.6%",
    fact: "Villanova shot 78.6% from the field against Georgetown in the 1985 title game — still the all-time record for a championship game.",
  },

  // --- CINDERELLA STORIES & UPSETS ---
  {
    question: "Which seed is most known for pulling off upsets against 5-seeds?",
    options: ["10", "11", "12", "13"],
    correctAnswer: "12",
    fact: "12-vs-5 upsets happen so often that 'never pick the 5 seed' is one of the most common bracket tips.",
  },
  {
    question: "What year did NC State pull off one of the greatest Cinderella runs to win the title?",
    options: ["1983", "1985", "1979", "1987"],
    correctAnswer: "1983",
    fact: "NC State coach Jim Valvano ran around the court looking for someone to hug after the buzzer — iconic March Madness footage.",
  },
  {
    question: "Which team became the first 16-seed to beat a 1-seed in NCAA Tournament history?",
    options: ["Lehigh", "Norfolk State", "UMBC", "Mercer"],
    correctAnswer: "UMBC",
    fact: "UMBC shocked Virginia 74-54 in 2018, completing the first — and for years only — 16-over-1 upset in tournament history.",
  },
  {
    question: "How many times has a 16-seed beaten a 1-seed in the NCAA Tournament through 2024?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    fact: "UMBC beat Virginia in 2018, and FDU beat Purdue in 2023 — the only two 16-over-1 upsets ever.",
  },
  {
    question: "Which double-digit seed made the Final Four in 2011?",
    options: ["VCU", "Butler", "George Mason", "Florida Gulf Coast"],
    correctAnswer: "VCU",
    fact: "VCU's run to the 2011 Final Four as an 11-seed was fueled by their 'Havoc' full-court press defense that overwhelmed every opponent.",
  },
  {
    question: "Florida Gulf Coast became the first 15-seed to reach the Sweet 16. What year was this?",
    options: ["2011", "2012", "2013", "2014"],
    correctAnswer: "2013",
    fact: "FGCU's run — nicknamed 'Dunk City' — featured highlight-reel alley-oops and became one of the most beloved Cinderella stories ever.",
  },
  {
    question: "George Mason made a shocking Final Four run as an 11-seed in what year?",
    options: ["2004", "2006", "2008", "2010"],
    correctAnswer: "2006",
    fact: "George Mason upset Connecticut, Michigan State, North Carolina, and Wichita State to reach the 2006 Final Four.",
  },
  {
    question: "Which 15-seed knocked out the University of Iowa in the 2023 tournament?",
    options: ["Montana State", "Furman", "Oral Roberts", "Princeton"],
    correctAnswer: "Princeton",
    fact: "Princeton defeated Iowa 59-52 in the 2023 first round, continuing the Ivy League school's tradition of March Madness upsets.",
  },
  {
    question: "Which team was the greatest Cinderella of 2022, reaching the Elite Eight as a 15-seed?",
    options: ["Saint Peter's", "Michigan", "Miami", "Iowa State"],
    correctAnswer: "Saint Peter's",
    fact: "Saint Peter's, a tiny Jesuit school from Jersey City, became the first 15-seed to reach the Elite Eight, defeating Kentucky along the way.",
  },
  {
    question: "Which UCLA team made a stunning Final Four run in 2021 after entering through the First Four?",
    options: ["They were a 1-seed", "They were an 11-seed", "They were a 14-seed", "They were a 9-seed"],
    correctAnswer: "They were an 11-seed",
    fact: "UCLA entered through the First Four as an 11-seed and made it all the way to the Final Four, losing to Gonzaga in overtime on Jalen Suggs's buzzer-beater.",
  },
  {
    question: "CCNY accomplished something no team has done before or since in 1950. What was it?",
    options: [
      "Won the title as a 16-seed",
      "Won both the NIT and NCAA Tournament in the same season",
      "Beat four 1-seeds in a row",
      "Won the title with an all-freshman starting five",
    ],
    correctAnswer: "Won both the NIT and NCAA Tournament in the same season",
    fact: "CCNY won both the NIT and NCAA tournaments in 1950 — the only team ever to accomplish that double in the same season.",
  },

  // --- COACHES ---
  {
    question: "Which coach has the most NCAA Championship titles?",
    options: ["Mike Krzyzewski", "Roy Williams", "John Wooden", "Bob Knight"],
    correctAnswer: "John Wooden",
    fact: "John Wooden won 10 titles at UCLA including 7 in a row (1967–1973), a record that may never be broken.",
  },
  {
    question: "How many NCAA titles did Mike Krzyzewski win at Duke?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5",
    fact: "Coach K won five national championships at Duke (1991, 1992, 2001, 2010, 2015), the second-most all time behind John Wooden.",
  },
  {
    question: "Which coach holds the record for most wins in NCAA Tournament history?",
    options: ["Roy Williams", "John Wooden", "Dean Smith", "Mike Krzyzewski"],
    correctAnswer: "Mike Krzyzewski",
    fact: "Coach K won 101 NCAA Tournament games over his career — far more than any other coach in history.",
  },
  {
    question: "Which coach led Michigan State to Final Four appearances in 1999, 2001, 2003, 2005, 2009, 2010, and beyond?",
    options: ["Bob Huggins", "Tom Izzo", "John Beilein", "Mark Few"],
    correctAnswer: "Tom Izzo",
    fact: "Tom Izzo has led Michigan State to more than 10 Final Fours — one of the most remarkable sustained tournament records in history.",
  },
  {
    question: "Which coach led Villanova to championships in 2016 and 2018?",
    options: ["Larry Brown", "Rollie Massimino", "Jay Wright", "Steve Lappas"],
    correctAnswer: "Jay Wright",
    fact: "Jay Wright retired in 2022 after building Villanova into a dynasty, winning titles in 2016 and 2018.",
  },
  {
    question: "Who replaced Mike Krzyzewski as Duke's head coach after the 2022 season?",
    options: ["Wojo Wojciechowski", "Jon Scheyer", "David Cutcliffe", "Nate James"],
    correctAnswer: "Jon Scheyer",
    fact: "Jon Scheyer, a former Duke guard, was groomed as Coach K's successor and took over the program in 2022.",
  },
  {
    question: "Which coach took Butler to back-to-back championship games in 2010 and 2011?",
    options: ["LaVall Jordan", "Brad Stevens", "Thad Matta", "Rick Pitino"],
    correctAnswer: "Brad Stevens",
    fact: "Brad Stevens led Butler to consecutive title games before leaving for the Boston Celtics head coaching job in 2013.",
  },
  {
    question: "Bill Self has coached Kansas to how many NCAA Championships through 2024?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    fact: "Bill Self won national championships with Kansas in 2008 and 2022, cementing his legacy as one of college basketball's elite coaches.",
  },
  {
    question: "Which coach won NCAA titles at two different schools — Kansas in 1988 and later an NBA title too?",
    options: ["Rick Pitino", "Larry Brown", "Billy Donovan", "Bob Knight"],
    correctAnswer: "Larry Brown",
    fact: "Larry Brown won the 1988 NCAA title at Kansas and is the only coach to win both an NCAA championship and an NBA championship.",
  },
  {
    question: "Indiana's iconic coach Bobby Knight threw what object across the court in a 1985 game against Purdue?",
    options: ["A towel", "A chair", "A water bottle", "A clipboard"],
    correctAnswer: "A chair",
    fact: "Bobby Knight threw a chair across the court during a 1985 game against Purdue, drawing a technical foul and suspension — one of coaching's most infamous moments.",
  },
  {
    question: "Which coach led Gonzaga to their famous 1999 Elite Eight run that put the program on the national map?",
    options: ["Mark Few", "Dan Monson", "Lute Olson", "Dave Wojcik"],
    correctAnswer: "Dan Monson",
    fact: "Dan Monson coached Gonzaga's landmark 1999 tournament run to the Elite Eight. Mark Few took over the following year and has been there since.",
  },
  {
    question: "Rollie Massimino coached which team to the 1985 national championship as an 8-seed?",
    options: ["Providence", "Syracuse", "Villanova", "Georgetown"],
    correctAnswer: "Villanova",
    fact: "Massimino's Wildcats pulled off one of the all-time great upsets, beating Patrick Ewing's Georgetown squad in the 1985 title game.",
  },

  // --- PLAYERS ---
  {
    question: "Christian Laettner's famous buzzer-beater in the 1992 Elite Eight came against which opponent?",
    options: ["Indiana", "Iowa", "Kentucky", "Ohio State"],
    correctAnswer: "Kentucky",
    fact: "Laettner hit the turnaround jumper at the buzzer to beat Kentucky 104-103 in overtime — widely considered the greatest play in tournament history.",
  },
  {
    question: "Who was the Most Outstanding Player of the 2012 NCAA Tournament?",
    options: ["Thomas Robinson", "Anthony Davis", "Michael Kidd-Gilchrist", "Doron Lamb"],
    correctAnswer: "Anthony Davis",
    fact: "Anthony Davis led Kentucky to the 2012 title and won MOP honors despite averaging under 10 points — his defense and rebounding were unmatched.",
  },
  {
    question: "Carmelo Anthony won the 2003 national title as a freshman at which school?",
    options: ["Georgetown", "Syracuse", "Connecticut", "Pittsburgh"],
    correctAnswer: "Syracuse",
    fact: "Carmelo averaged 22 PPG in the 2003 tournament and was the clear engine of Syracuse's championship run.",
  },
  {
    question: "Carmelo Anthony's 2003 MOP award was notable for what historical reason?",
    options: [
      "He was the tallest MOP ever",
      "He was the first freshman to win the tournament MOP",
      "He scored 50 points in the title game",
      "He was the lowest-seeded player to win MOP",
    ],
    correctAnswer: "He was the first freshman to win the tournament MOP",
    fact: "Carmelo Anthony's 2003 MOP award was the first ever given to a freshman in NCAA Tournament history.",
  },
  {
    question: "Jalen Suggs hit an iconic buzzer-beater in the 2021 Final Four. Who was Gonzaga playing?",
    options: ["Baylor", "Houston", "UCLA", "Oregon State"],
    correctAnswer: "UCLA",
    fact: "Suggs banked in a half-court shot at the buzzer in overtime to lift Gonzaga past UCLA and into the 2021 championship game.",
  },
  {
    question: "Which player led Loyola-Chicago's 2018 run to the Final Four with a first-round buzzer-beater?",
    options: ["Marques Townes", "Clayton Custer", "Cameron Krutwig", "Donte Ingram"],
    correctAnswer: "Donte Ingram",
    fact: "Donte Ingram hit a buzzer-beater in Loyola's first-round win over Miami, igniting one of the great Cinderella runs of the 2010s.",
  },
  {
    question: "Patrick Ewing won a national championship at which school?",
    options: ["Syracuse", "Georgetown", "St. John's", "Connecticut"],
    correctAnswer: "Georgetown",
    fact: "Patrick Ewing led Georgetown to the 1984 national championship, defeating Houston 84-75, and was named the tournament's Most Outstanding Player.",
  },
  {
    question: "Which player hit the corner jumper that ended UCLA's 88-game winning streak in 1974?",
    options: ["Bill Walton", "Keith Wilkes", "Dwight Clay", "Steve Downing"],
    correctAnswer: "Dwight Clay",
    fact: "Notre Dame's Dwight Clay hit the go-ahead corner jumper late in the game to end UCLA's 88-game winning streak — one of the most stunning upsets in college basketball history.",
  },
  {
    question: "Bill Walton's performance in the 1973 title game is one of the most efficient ever. What did he shoot?",
    options: ["15 of 17", "18 of 20", "21 of 22", "19 of 21"],
    correctAnswer: "21 of 22",
    fact: "Bill Walton went 21-for-22 from the field (44 points) in UCLA's 1973 championship win — one of the greatest individual performances in tournament history.",
  },
  {
    question: "Michael Jordan hit the title-winning shot in the 1982 Championship as a freshman. Who did North Carolina beat?",
    options: ["Georgetown", "Virginia", "Houston", "Louisville"],
    correctAnswer: "Georgetown",
    fact: "Jordan hit the go-ahead jumper with 16 seconds left to lift North Carolina past Georgetown 63-62 in the 1982 title game.",
  },
  {
    question: "Michael Jordan wore what number during his time at North Carolina?",
    options: ["15", "23", "45", "32"],
    correctAnswer: "23",
    fact: "Jordan wore #23 at North Carolina — the same number he'd make iconic in the NBA.",
  },
  {
    question: "Kevin Durant played one year of college basketball before the NBA. Where did he go?",
    options: ["Georgetown", "Kansas", "Ohio State", "Texas"],
    correctAnswer: "Texas",
    fact: "Kevin Durant averaged 25.8 PPG at Texas in 2006–07, winning the Wooden Award before being selected #2 overall in the NBA Draft.",
  },
  {
    question: "Which forward was known as 'The Brow,' won the 2012 title with Kentucky, and went #1 in the NBA Draft?",
    options: ["Zion Williamson", "Anthony Davis", "Karl-Anthony Towns", "Ben Simmons"],
    correctAnswer: "Anthony Davis",
    fact: "Anthony Davis, nicknamed 'The Brow,' was the centerpiece of Kentucky's dominant 2012 championship squad before going #1 overall to New Orleans.",
  },
  {
    question: "Zion Williamson's one season at Duke is remembered most for what viral moment?",
    options: [
      "A game-winning buzzer-beater against UNC",
      "His shoe exploding mid-game causing a knee injury scare",
      "Scoring 50 points in an NCAA Tournament game",
      "Setting the Duke single-season scoring record",
    ],
    correctAnswer: "His shoe exploding mid-game causing a knee injury scare",
    fact: "Zion's Nike shoe split apart during a 2019 game vs. UNC, causing him to slip and injure his knee — the moment went viral worldwide.",
  },
  {
    question: "Kemba Walker's 2011 championship run is legendary. How many total tournament games did he lead UConn to win?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "6",
    fact: "Kemba Walker led UConn to 6 wins in the NCAA Tournament to claim the 2011 national title, capping a remarkable Big East Tournament and NCAA run.",
  },
  {
    question: "Which player holds the record for most points scored in a single NCAA Tournament?",
    options: ["Austin Carr", "Bill Bradley", "Danny Manning", "Elvin Hayes"],
    correctAnswer: "Austin Carr",
    fact: "Austin Carr of Notre Dame scored 158 points in the 1970 NCAA Tournament across just three games, averaging 52.7 points per game — a record that still stands.",
  },
  {
    question: "North Carolina State's Lorenzo Charles scored the winning dunk in the 1983 championship. Whose airball did he catch?",
    options: ["Sidney Lowe", "Thurl Bailey", "Cozell McQueen", "Dereck Whittenburg"],
    correctAnswer: "Dereck Whittenburg",
    fact: "Whittenburg's desperation heave fell short — Charles caught it and dunked to stun Houston as time expired, sending Jim Valvano running across the court.",
  },
  {
    question: "Bill Bradley of Princeton had a legendary scoring performance in the 1965 tournament consolation game. How many points did he score?",
    options: ["44", "51", "58", "62"],
    correctAnswer: "58",
    fact: "Bill Bradley scored 58 points in the 1965 third-place game against Wichita State — a remarkable performance from a man who later became a U.S. Senator.",
  },

  // --- TOURNAMENT FORMAT & HISTORY ---
  {
    question: "How many teams are in the modern NCAA Tournament?",
    options: ["64", "65", "68", "72"],
    correctAnswer: "68",
    fact: "The field expanded to 68 teams in 2011, adding the First Four play-in games held in Dayton, Ohio.",
  },
  {
    question: "In what year was the shot clock introduced in college basketball?",
    options: ["1985", "1993", "2000", "1975"],
    correctAnswer: "1985",
    fact: "The 45-second shot clock was introduced in 1985–86, later reduced to 35 seconds, and then to 30 seconds in 2015.",
  },
  {
    question: "Which city hosts the Final Four most frequently?",
    options: ["Indianapolis", "New Orleans", "San Antonio", "Atlanta"],
    correctAnswer: "Indianapolis",
    fact: "Indianapolis has hosted more Final Fours than any other city, thanks to its central location and Gainbridge Fieldhouse.",
  },
  {
    question: "When did the NCAA Tournament expand to 64 teams, creating the modern bracket format?",
    options: ["1983", "1985", "1987", "1989"],
    correctAnswer: "1985",
    fact: "The bracket expanded to 64 teams in 1985, creating the format that made March Madness a national phenomenon.",
  },
  {
    question: "What are the play-in games at the start of the NCAA Tournament called?",
    options: ["The Opening Round", "The Preliminary Round", "The First Four", "The Play-In Classic"],
    correctAnswer: "The First Four",
    fact: "The First Four consists of four games: two between the lowest-seeded automatic qualifiers and two between at-large bubble teams.",
  },
  {
    question: "Where is the First Four traditionally played every year?",
    options: ["Columbus, Ohio", "Dayton, Ohio", "Louisville, Kentucky", "Nashville, Tennessee"],
    correctAnswer: "Dayton, Ohio",
    fact: "Dayton, Ohio has been the permanent home of the First Four since the play-in games expanded to four games in 2011.",
  },
  {
    question: "How many conference automatic bids are given to the NCAA Tournament?",
    options: ["28", "32", "36", "40"],
    correctAnswer: "32",
    fact: "All 32 Division I conferences receive automatic bids, with the remaining 36 spots going to at-large teams selected by the committee.",
  },
  {
    question: "What metric replaced RPI as the NCAA's primary team evaluation tool in 2018?",
    options: ["NET Ranking", "BPI System", "KenPom Index", "Sagarin Rating"],
    correctAnswer: "NET Ranking",
    fact: "The NCAA Evaluation Tool (NET) replaced RPI in 2018 as the primary metric the selection committee uses to rank teams.",
  },
  {
    question: "How many regions are in the NCAA Tournament bracket?",
    options: ["2", "4", "6", "8"],
    correctAnswer: "4",
    fact: "The four regions (typically East, West, South, Midwest) each send one team to the Final Four.",
  },
  {
    question: "Which round of the NCAA Tournament is called the Sweet 16?",
    options: ["Round of 64", "Round of 32", "Round of 16", "Round of 8"],
    correctAnswer: "Round of 16",
    fact: "The Sweet 16 is the third round of the tournament, where 16 teams remain and regional semifinals begin.",
  },
  {
    question: "What is the round following the Sweet 16 called?",
    options: ["Final Four", "Elite Eight", "Regional Finals", "Championship Weekend"],
    correctAnswer: "Elite Eight",
    fact: "The Elite Eight (eight teams remaining) determines which four teams advance to the Final Four.",
  },
  {
    question: "What is 'Selection Sunday'?",
    options: [
      "The day conference champions are officially announced",
      "The day the NCAA Tournament bracket is officially revealed",
      "The day NBA Draft prospects declare",
      "The day bowl game matchups are set",
    ],
    correctAnswer: "The day the NCAA Tournament bracket is officially revealed",
    fact: "Selection Sunday is typically the second Sunday in March, when the full 68-team bracket is revealed live on national television.",
  },
  {
    question: "How long does the NCAA Tournament run from start to finish?",
    options: ["2 weeks", "3 weeks", "4 weeks", "5 weeks"],
    correctAnswer: "3 weeks",
    fact: "The NCAA Tournament runs approximately three weeks, starting with the First Four in mid-March and ending with the championship in early April.",
  },
  {
    question: "What does 'auto bid' mean in March Madness?",
    options: [
      "An automatic selection for any team with a winning record",
      "A bid given to conference tournament champions",
      "A bid given to the highest-ranked team in each region",
      "A bid given to teams who win their first-round game",
    ],
    correctAnswer: "A bid given to conference tournament champions",
    fact: "Every conference tournament champion receives an automatic bid, guaranteeing every Division I conference at least one team in the field.",
  },
  {
    question: "What does 'at-large' mean in the context of March Madness?",
    options: [
      "A team selected despite not winning their conference tournament",
      "A team from a large school",
      "A team that enters through the First Four",
      "A team with the highest non-conference strength of schedule",
    ],
    correctAnswer: "A team selected despite not winning their conference tournament",
    fact: "At-large bids (36 total) are awarded by the NCAA Selection Committee to deserving teams who didn't win their conference tournament.",
  },
  {
    question: "What is a 'bubble team' in March Madness parlance?",
    options: [
      "A team in danger of being left out of the tournament field",
      "A team that always underperforms in the tournament",
      "A team that plays in a dome arena",
      "A team from a non-major conference",
    ],
    correctAnswer: "A team in danger of being left out of the tournament field",
    fact: "Bubble teams sit on the edge of inclusion/exclusion when the 68-team field is announced — late-season results are critical for them.",
  },
  {
    question: "What does 'seeding' refer to in the NCAA Tournament?",
    options: [
      "The order teams arrive at their host city",
      "The ranking assigned to each team (1–16) within their region",
      "The geographic placement of teams in the bracket",
      "The conference standing of each team",
    ],
    correctAnswer: "The ranking assigned to each team (1–16) within their region",
    fact: "Seeds 1–16 are assigned in each region, with 1 being the strongest and 16 the weakest — they match up in the opening round.",
  },
  {
    question: "What does 'RPI' stand for in college basketball?",
    options: [
      "Ranking Performance Index",
      "Ratings Percentage Index",
      "Relative Power Indicator",
      "Regional Performance Index",
    ],
    correctAnswer: "Ratings Percentage Index",
    fact: "RPI was the NCAA's primary team evaluation metric for decades but was replaced by the NET ranking in 2018.",
  },
  {
    question: "Which network has broadcast the NCAA Tournament the longest?",
    options: ["ESPN", "CBS", "NBC", "TNT"],
    correctAnswer: "CBS",
    fact: "CBS has been broadcasting the NCAA Tournament since 1982 and now shares rights with Turner Sports (TNT, TBS, truTV).",
  },

  // --- RECORDS & MILESTONES ---
  {
    question: "Which team went undefeated into the 2015 Final Four before their perfect season was ended?",
    options: ["Duke", "Gonzaga", "Kentucky", "Virginia"],
    correctAnswer: "Kentucky",
    fact: "Kentucky entered the 2015 Final Four at 38-0 before losing to Wisconsin in the semifinals, ending their bid for a perfect season.",
  },
  {
    question: "What is the record for most consecutive NCAA Tournament wins by a single program?",
    options: ["47", "55", "61", "68"],
    correctAnswer: "61",
    fact: "UCLA won 61 consecutive NCAA Tournament games between 1964 and 1974 under John Wooden — an extraordinary and unrepeated feat.",
  },
  {
    question: "What is the lowest seed to ever win the NCAA Championship?",
    options: ["4", "6", "8", "11"],
    correctAnswer: "8",
    fact: "Villanova won the 1985 championship as an 8-seed, the lowest seed ever to win the title.",
  },
  {
    question: "How many times have all four 1-seeds reached the Final Four?",
    options: ["Once", "Twice", "Three times", "Never"],
    correctAnswer: "Once",
    fact: "All four 1-seeds reached the Final Four only once, in 2008 — North Carolina, Memphis, UCLA, and Kansas.",
  },
  {
    question: "What are the statistical odds of filling out a perfect NCAA Tournament bracket by random chance?",
    options: ["1 in 9.2 billion", "1 in 120 billion", "1 in 9.2 quintillion", "1 in 1 trillion"],
    correctAnswer: "1 in 9.2 quintillion",
    fact: "If every game is a coin flip, the odds of a perfect bracket are 1 in 9.2 quintillion (2 to the 63rd power) — essentially impossible.",
  },
  {
    question: "What is the highest-scoring single game in NCAA Tournament history?",
    options: ["162-115", "149-115", "145-127", "141-120"],
    correctAnswer: "149-115",
    fact: "Loyola Marymount defeated Michigan 149-115 in the 1990 tournament, just days after the tragic death of their star player Hank Gathers.",
  },
  {
    question: "Kentucky's 2012 championship roster is famous for producing how many NBA Draft picks?",
    options: ["5", "7", "8", "10"],
    correctAnswer: "8",
    fact: "Eight players from Kentucky's 2012 championship roster were eventually drafted into the NBA, underscoring their historic talent level.",
  },

  // --- PROGRAMS & SCHOOLS ---
  {
    question: "Which school is known as 'The Bluegrass State's' basketball powerhouse?",
    options: ["Louisville", "Morehead State", "Murray State", "Kentucky"],
    correctAnswer: "Kentucky",
    fact: "Kentucky has appeared in the Elite Eight more times than any other program and has won eight national championships.",
  },
  {
    question: "Which program has consistently produced the most NBA first-round picks in recent decades?",
    options: ["Duke", "Kentucky", "Kansas", "North Carolina"],
    correctAnswer: "Kentucky",
    fact: "Kentucky's 'One and Done' culture under John Calipari has made them the perennial leader in NBA Draft talent production.",
  },
  {
    question: "Duke and North Carolina are separated by how many miles?",
    options: ["5", "8", "12", "20"],
    correctAnswer: "8",
    fact: "Duke and UNC are just 8 miles apart in the Research Triangle, making their rivalry one of the most geographically intimate in all of sports.",
  },
  {
    question: "Which Ivy League school has made the most NCAA Tournament appearances?",
    options: ["Penn", "Princeton", "Harvard", "Yale"],
    correctAnswer: "Penn",
    fact: "Penn has made the most tournament appearances of any Ivy League school, though Princeton has had some of the most memorable upsets.",
  },
  {
    question: "Which school is called the 'Cardiac Pack' for their history of dramatic last-second wins?",
    options: ["NC State", "Michigan State", "Nevada", "Oregon"],
    correctAnswer: "NC State",
    fact: "NC State's 1983 championship team won multiple games by the thinnest of margins, earning the 'Cardiac Pack' nickname.",
  },
  {
    question: "Which mid-major program has been most consistently ranked in the AP Top 25 over the past decade?",
    options: ["Wichita State", "Gonzaga", "Memphis", "Murray State"],
    correctAnswer: "Gonzaga",
    fact: "Gonzaga has been ranked every single week for multiple consecutive seasons — an unprecedented run for a non-power conference school.",
  },
  {
    question: "Which historically Black college or university has the most notable NCAA Tournament upset, beating Missouri as a 15-seed in 2012?",
    options: ["Florida A&M", "Norfolk State", "Morgan State", "Southern University"],
    correctAnswer: "Norfolk State",
    fact: "Norfolk State's 2012 upset of 2-seed Missouri remains one of the most stunning HBCU moments in tournament history.",
  },
  {
    question: "Which school was banned from the 2013 NCAA Tournament due to low Academic Progress Rate scores?",
    options: ["Ohio State", "UMass", "Louisville", "Connecticut"],
    correctAnswer: "Connecticut",
    fact: "UConn was banned from the 2013 tournament due to APR violations — and then won the national championship the very next year.",
  },
  {
    question: "North Carolina's rivalry with Duke is often called what?",
    options: ["The Research Triangle Rivalry", "The Tobacco Road Rivalry", "The Carolina Classic", "The Atlantic Rivalry"],
    correctAnswer: "The Tobacco Road Rivalry",
    fact: "The Duke-UNC rivalry is called the 'Tobacco Road Rivalry' because both schools are located in North Carolina's Research Triangle, historically tied to tobacco farming.",
  },
  {
    question: "Which school's fans are known for camping outside for weeks to secure basketball tickets in a tradition called 'Krzyzewskiville'?",
    options: ["North Carolina", "Duke", "Kentucky", "Indiana"],
    correctAnswer: "Duke",
    fact: "Duke students camp in 'K-Ville' outside Cameron Indoor Stadium for weeks before the UNC game each year, with a tent lottery managing priority.",
  },
  {
    question: "Which school's basketball team plays in the JMA Wireless Dome, the largest on-campus arena by capacity in Division I?",
    options: ["Georgetown", "Providence", "Syracuse", "St. John's"],
    correctAnswer: "Syracuse",
    fact: "Syracuse plays in what was the Carrier Dome (now JMA Wireless Dome) — the largest on-campus basketball arena in Division I.",
  },

  // --- MEMORABLE MOMENTS & CULTURE ---
  {
    question: "What is 'Havoc' in college basketball?",
    options: [
      "A full-court press defensive system used by VCU",
      "A fast-break offensive system",
      "A Duke recruiting strategy",
      "A Kansas defensive scheme",
    ],
    correctAnswer: "A full-court press defensive system used by VCU",
    fact: "VCU's 'Havoc' defense under Shaka Smart is a relentless full-court press designed to create turnovers and chaos.",
  },
  {
    question: "Which coach's post-championship moment of sprinting around the court looking for someone to hug became iconic?",
    options: ["Bob Knight", "John Wooden", "Jim Valvano", "Dean Smith"],
    correctAnswer: "Jim Valvano",
    fact: "Jim Valvano's post-championship sprint in 1983 became one of the most memorable images in college sports. He died of cancer in 1993 after founding the V Foundation for Cancer Research.",
  },
  {
    question: "What phrase did Dick Vitale popularize as a nickname for the NCAA Tournament?",
    options: ["March Madness", "Diaper Dandy", "The Big Dance", "Bracket Buster"],
    correctAnswer: "The Big Dance",
    fact: "Dick Vitale popularized 'The Big Dance' as a nickname for the NCAA Tournament, and the phrase is now used universally.",
  },
  {
    question: "What iconic phrase does Jim Nantz use to open every Final Four broadcast?",
    options: [
      "'Welcome to the Final Four'",
      "'One shining moment begins here'",
      "'A tradition unlike any other'",
      "'Hello friends, welcome to March'",
    ],
    correctAnswer: "'A tradition unlike any other'",
    fact: "Jim Nantz borrowed 'A tradition unlike any other' from his Masters golf broadcasts and has used it to open every Final Four.",
  },
  {
    question: "What song plays at the end of every NCAA Tournament broadcast as the closing highlight montage?",
    options: ["Eye of the Tiger", "One Shining Moment", "We Are the Champions", "The Final Countdown"],
    correctAnswer: "One Shining Moment",
    fact: "'One Shining Moment,' written by David Barrett, has been the closing song of the NCAA Tournament broadcast since 1987.",
  },
  {
    question: "Chris Webber's infamous timeout call in the 1993 championship happened against which opponent?",
    options: ["Duke", "Kansas", "North Carolina", "Kentucky"],
    correctAnswer: "North Carolina",
    fact: "Michigan had no timeouts remaining when Chris Webber called one in 1993, resulting in a technical foul that sealed UNC's championship win.",
  },
  {
    question: "Which tournament game in 1968 was called 'The Game of the Century' and drew an estimated 120 million TV viewers?",
    options: ["UCLA vs. Houston", "Duke vs. Kentucky", "North Carolina vs. Kansas", "Ohio State vs. Cincinnati"],
    correctAnswer: "UCLA vs. Houston",
    fact: "UCLA vs. Houston in 1968 (the 'Game of the Century') was the first nationally televised prime-time college basketball game and drew a massive audience.",
  },
  {
    question: "Warren Buffett famously offered $1 billion for a perfect bracket. Has anyone ever won it?",
    options: [
      "Yes, in 2019",
      "Yes, but only halfway through the bracket",
      "No, the offer was withdrawn",
      "No, no one has ever won",
    ],
    correctAnswer: "No, no one has ever won",
    fact: "Buffett's Quicken Loans bracket challenge offered $1 billion for a perfect bracket — it has never come close to being claimed.",
  },
  {
    question: "Barack Obama became known for filling out a March Madness bracket live on ESPN. In which year did he first do this?",
    options: ["2007", "2009", "2011", "2013"],
    correctAnswer: "2009",
    fact: "Obama's bracket picks became an annual tradition during his presidency, sparking national debate about his college basketball knowledge.",
  },
  {
    question: "Michigan's 1992 'Fab Five' were notable for what?",
    options: [
      "They were the first team to start five seniors",
      "They started five freshmen in the national championship game",
      "They averaged the most points in tournament history",
      "They won the title without losing a game",
    ],
    correctAnswer: "They started five freshmen in the national championship game",
    fact: "Michigan's Fab Five (Jalen Rose, Chris Webber, Juwan Howard, Ray Jackson, Jimmy King) started five freshmen in the 1992 title game, losing to Duke.",
  },
  {
    question: "Whose college career is celebrated in the documentary 'Survive & Advance'?",
    options: ["Jim Valvano", "Lenny Bias", "Lorenzo Charles", "Dereck Whittenburg"],
    correctAnswer: "Jim Valvano",
    fact: "'Survive & Advance' chronicles NC State's 1983 miracle run under Jim Valvano and is widely considered one of the best sports documentaries ever made.",
  },
  {
    question: "Lehigh stunned Duke in the 2012 NCAA Tournament. What round was it?",
    options: ["Sweet 16", "Elite Eight", "First Round", "Round of 32"],
    correctAnswer: "First Round",
    fact: "Lehigh upset Duke as a 15-seed in the first round of the 2012 tournament — one of the most significant upsets of Duke's dynasty era.",
  },

  // --- CONFERENCE POWER ---
  {
    question: "Which conference has had the most teams in the Final Four in a single year?",
    options: ["ACC", "Big East", "SEC", "Big 12"],
    correctAnswer: "Big East",
    fact: "The Big East placed three teams in the 1985 Final Four — Georgetown, St. John's, and Villanova — nearly monopolizing the field.",
  },
  {
    question: "Which conference sent the most teams to the 2023 NCAA Tournament?",
    options: ["ACC", "Big 12", "Big Ten", "SEC"],
    correctAnswer: "Big 12",
    fact: "The Big 12 placed 9 teams in the 2023 NCAA Tournament field, the most of any conference that year.",
  },
  {
    question: "San Diego State made the national championship game in 2023. What seed were they?",
    options: ["3-seed", "4-seed", "5-seed", "8-seed"],
    correctAnswer: "5-seed",
    fact: "San Diego State reached the 2023 national championship game as a 5-seed, losing to UConn 76-59 in an exciting title game.",
  },
  {
    question: "What conference is Gonzaga in?",
    options: ["Mountain West", "Big West", "WCC", "Pac-12"],
    correctAnswer: "WCC",
    fact: "Gonzaga dominates the West Coast Conference so thoroughly that their résumé is largely built on non-conference wins and tournament results.",
  },
  {
    question: "Which school has won the most Big Ten regular season or tournament titles in the modern era of college basketball?",
    options: ["Michigan State", "Indiana", "Ohio State", "Michigan"],
    correctAnswer: "Michigan State",
    fact: "Michigan State under Tom Izzo has dominated Big Ten play for decades and used it as a launching pad for deep tournament runs.",
  },

  // --- TRIVIA WILDCARDS ---
  {
    question: "What is the nickname for Duke's famously passionate student section?",
    options: ["The Crazies", "Cameron Crazies", "Duke Nation", "The Blue Wall"],
    correctAnswer: "Cameron Crazies",
    fact: "The Cameron Crazies are known for elaborate taunts, costumes, and camping in 'Krzyzewskiville' for weeks to get the best seats.",
  },
  {
    question: "Which team is famous for their 'Big Blue Nation' fan base?",
    options: ["Kentucky", "Kansas", "Memphis", "UCLA"],
    correctAnswer: "Kentucky",
    fact: "Kentucky's 'Big Blue Nation' is one of the most passionate fan bases in college sports, known for turning every arena into a home game.",
  },
  {
    question: "What are the Kansas Jayhawks' official colors?",
    options: ["Blue and White", "Crimson and Blue", "Red and Blue", "Blue and Gold"],
    correctAnswer: "Crimson and Blue",
    fact: "Kansas's official colors are crimson and blue — though the blue is often referred to informally as 'KU blue.'",
  },
  {
    question: "What is the name of the arena where Kentucky plays home games?",
    options: ["Rupp Arena", "Wildcats Center", "Commonwealth Arena", "Stoll Field"],
    correctAnswer: "Rupp Arena",
    fact: "Rupp Arena, named after legendary coach Adolph Rupp, is one of the largest on-campus arenas in college basketball.",
  },
  {
    question: "What is North Carolina's home arena officially named?",
    options: ["The Smith Center", "Carmichael Arena", "Kenan Center", "The Blue Dome"],
    correctAnswer: "The Smith Center",
    fact: "The Dean E. Smith Center — nicknamed 'The Dean Dome' — is named after UNC's legendary head coach Dean Smith.",
  },
  {
    question: "What is the name of Kansas's storied home arena?",
    options: ["Allen Fieldhouse", "Frank Martin Center", "Williams Arena", "Phog Arena"],
    correctAnswer: "Allen Fieldhouse",
    fact: "Allen Fieldhouse, opened in 1955 and named after coach Phog Allen, is consistently ranked as one of the best atmospheres in college basketball.",
  },
  {
    question: "Duke's 'Blue Devils' nickname was adopted in 1923. What was it named after?",
    options: [
      "A character in a Duke founder's novel",
      "An elite French military unit from World War I",
      "A local Carolina folk legend",
      "The Duke family coat of arms",
    ],
    correctAnswer: "An elite French military unit from World War I",
    fact: "Duke's Blue Devils nickname comes from the Chasseurs Alpins, an elite French mountain infantry unit known as the 'Blue Devils' during World War I.",
  },
  {
    question: "Duke's rivalry with Maryland was part of which conference before Maryland left for the Big Ten in 2014?",
    options: ["Big East", "SEC", "ACC", "Pac-10"],
    correctAnswer: "ACC",
    fact: "Maryland left the ACC for the Big Ten in 2014, ending one of the conference's great rivalries with Duke, UNC, and others.",
  },

  // --- WOMEN'S BASKETBALL ---
  {
    question: "Which school dominated women's college basketball with multiple championships in the 2010s?",
    options: ["Tennessee", "Baylor", "South Carolina", "UConn"],
    correctAnswer: "UConn",
    fact: "UConn women's basketball, under Geno Auriemma, won 11 national championships and had multiple undefeated seasons.",
  },
  {
    question: "Who is the winningest coach in women's college basketball history?",
    options: ["Geno Auriemma", "Pat Summitt", "Kim Mulkey", "Dawn Staley"],
    correctAnswer: "Geno Auriemma",
    fact: "Geno Auriemma has won more games and more national championships than any other women's college basketball coach.",
  },
  {
    question: "Caitlin Clark broke the all-time NCAA scoring record in 2024. Whose record did she break?",
    options: ["Kelsey Plum", "Pete Maravich", "Oscar Robertson", "Pistol Pete"],
    correctAnswer: "Pete Maravich",
    fact: "Caitlin Clark surpassed Pete Maravich's long-standing all-time NCAA scoring record in February 2024, becoming the all-time leader across men's and women's basketball.",
  },
  {
    question: "South Carolina won the women's NCAA Championship in 2017, 2022, and 2024 under which coach?",
    options: ["Kim Mulkey", "Geno Auriemma", "Dawn Staley", "Tara VanDerveer"],
    correctAnswer: "Dawn Staley",
    fact: "Dawn Staley has built South Carolina into one of women's basketball's elite programs, winning three national titles.",
  },
  {
    question: "Pat Summitt coached Tennessee women's basketball to how many national championships?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "8",
    fact: "Pat Summitt won 8 national championships at Tennessee and retired with 1,098 wins — the most in Division I women's basketball history at the time.",
  },

  // --- NBA CONNECTION ---
  {
    question: "Draymond Green became a four-time NBA champion despite what draft status coming out of Michigan State?",
    options: ["Undrafted", "35th pick (second round)", "20th pick (first round)", "He was a top-10 pick"],
    correctAnswer: "35th pick (second round)",
    fact: "Draymond Green was selected 35th overall — late second round — despite his decorated college career. He became a four-time NBA champion and Defensive Player of the Year.",
  },
  {
    question: "LeBron James never played college basketball. Which route did he take to the NBA?",
    options: [
      "He transferred from Ohio State after one semester",
      "He was drafted straight out of high school",
      "He played one year at Duke",
      "He played overseas before the NBA",
    ],
    correctAnswer: "He was drafted straight out of high school",
    fact: "LeBron declared for the NBA Draft straight out of St. Vincent-St. Mary High School in 2003 — he never attended college.",
  },

  // --- EXTRA HISTORY ---
  {
    question: "What was considered the more prestigious tournament before the NCAA Tournament rose to prominence?",
    options: ["National Invitational Tournament (NIT)", "NAIB Tournament", "College Basketball Invitational", "AAU Championship"],
    correctAnswer: "National Invitational Tournament (NIT)",
    fact: "The NIT predated the NCAA Tournament and was considered more prestigious through the 1940s, before the NCAA's event grew into a national phenomenon.",
  },
  {
    question: "Which school sent a beloved 84-year-old team chaplain, Sister Jean, to the 2018 Final Four?",
    options: ["Gonzaga", "Michigan", "Loyola-Chicago", "Nevada"],
    correctAnswer: "Loyola-Chicago",
    fact: "Sister Jean Dolores Schmidt became a national celebrity during Loyola-Chicago's 2018 Final Four run, appearing on merchandise and magazine covers nationwide.",
  },
  {
    question: "Which school retires jersey numbers for players like Michael Jordan, James Worthy, and Bob McAdoo?",
    options: ["Kentucky", "North Carolina", "Duke", "Indiana"],
    correctAnswer: "North Carolina",
    fact: "North Carolina's rafters in the Smith Center feature the retired numbers of some of the greatest players in college basketball history.",
  },
];

export function getRandomQuestions(count: number = 5): Question[] {
  const shuffled = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((q) => ({
    ...q,
    options: [...q.options].sort(() => Math.random() - 0.5),
  }));
}