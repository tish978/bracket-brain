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
    question: "Which team won back-to-back NCAA Championships in 2019 and 2020?",
    options: ["Gonzaga", "Baylor", "Virginia", "UConn"],
    correctAnswer: "UConn",
    fact: "There was no 2020 tournament due to COVID-19, but UConn won in 2023 and 2024 for back-to-back titles.",
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
    question: "Which team won the 2019 NCAA Championship after being the first 1-seed ever to lose to a 16-seed the year prior?",
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

  // --- CINDERELLA STORIES & UPSETS ---
  {
    question: "Which seed is most known for pulling off upsets against 5 seeds?",
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
    fact: "UMBC (University of Maryland, Baltimore County) shocked Virginia 74-54 in 2018, completing the first 16-over-1 upset in tournament history.",
  },
  {
    question: "Which double-digit seed made the Final Four in 2011 as an 11-seed?",
    options: ["VCU", "Butler", "George Mason", "Florida Gulf Coast"],
    correctAnswer: "VCU",
    fact: "VCU's run to the 2011 Final Four as an 11-seed was dubbed 'The Havoc' — their defensive style overwhelmed every opponent.",
  },
  {
    question: "Florida Gulf Coast became the first 15-seed to reach the Sweet 16. What year was this?",
    options: ["2011", "2012", "2013", "2014"],
    correctAnswer: "2013",
    fact: "FGCU's run — nicknamed 'Dunk City' — featured highlight-reel alley-oops and became one of the most beloved Cinderella stories ever.",
  },
  {
    question: "Which team made a remarkable run to the Final Four as an 11-seed in 2021?",
    options: ["Oral Roberts", "Abilene Christian", "UCLA", "Drake"],
    correctAnswer: "UCLA",
    fact: "UCLA entered through the First Four and made it to the Final Four, losing to Gonzaga in overtime on a buzzer-beater by Jalen Suggs.",
  },
  {
    question: "George Mason made a shocking Final Four run as a double-digit seed in what year?",
    options: ["2004", "2006", "2008", "2010"],
    correctAnswer: "2006",
    fact: "George Mason upset Connecticut, Michigan State, North Carolina, and Wichita State to reach the 2006 Final Four as an 11-seed.",
  },
  {
    question: "Which 15-seed knocked out the University of Iowa in the 2023 tournament?",
    options: ["Montana State", "Furman", "Oral Roberts", "Princeton"],
    correctAnswer: "Princeton",
    fact: "Princeton defeated Iowa 59-52 in the 2023 first round, continuing the Ivy League school's tradition of March Madness upsets.",
  },
  {
    question: "Which team was the greatest Cinderella of 2022, reaching the Elite Eight as an 8-seed?",
    options: ["Saint Peter's", "Michigan", "Miami", "Iowa State"],
    correctAnswer: "Saint Peter's",
    fact: "Saint Peter's, a tiny Jesuit school from Jersey City, became the first 15-seed to reach the Elite Eight, defeating Kentucky along the way.",
  },
  {
    question: "Which school won the NIT the same year another team from their city won the NCAA title?",
    options: ["NYU and CCNY", "Indiana and Purdue", "Duke and UNC", "Arizona and Arizona State"],
    correctAnswer: "NYU and CCNY",
    fact: "CCNY uniquely won both the NIT and NCAA tournaments in 1950, the only team ever to accomplish that double in the same season.",
  },

  // --- COACHES ---
  {
    question: "Which coach has the most NCAA Championship titles?",
    options: ["Mike Krzyzewski", "Roy Williams", "John Wooden", "Bob Knight"],
    correctAnswer: "John Wooden",
    fact: "John Wooden won 10 titles at UCLA including 7 in a row (1967–1973), a record that may never be broken.",
  },
  {
    question: "What conference is Gonzaga in?",
    options: ["Mountain West", "Big West", "WCC", "Pac-12"],
    correctAnswer: "WCC",
    fact: "Gonzaga dominates the West Coast Conference so thoroughly that the tournament field essentially counts their conference record against weaker competition.",
  },
  {
    question: "How many NCAA titles did Mike Krzyzewski win at Duke?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5",
    fact: "Coach K won five national championships at Duke (1991, 1992, 2001, 2010, 2015), the second-most all time behind John Wooden.",
  },
  {
    question: "Which coach led Michigan State to back-to-back Final Fours in 2014 and 2015?",
    options: ["Bob Huggins", "Tom Izzo", "John Beilein", "Mark Few"],
    correctAnswer: "Tom Izzo",
    fact: "Tom Izzo has led Michigan State to more than 10 Final Fours, making him one of the most tournament-dominant coaches in history.",
  },
  {
    question: "Which coach led Villanova to three championship appearances from 2016 to 2018?",
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
    question: "Which coach holds the record for most wins in NCAA Tournament history?",
    options: ["Roy Williams", "John Wooden", "Dean Smith", "Mike Krzyzewski"],
    correctAnswer: "Mike Krzyzewski",
    fact: "Coach K won 101 NCAA Tournament games over his career — far more than any other coach in history.",
  },
  {
    question: "Which legendary coach said 'Don't worry about the mule, just load the wagon'?",
    options: ["Bobby Knight", "Dean Smith", "Frank McGuire", "John Wooden"],
    correctAnswer: "John Wooden",
    fact: "Wooden was famous for his folksy wisdom, including his 'Pyramid of Success' — a framework he used to teach life principles through basketball.",
  },
  {
    question: "Bill Self has coached Kansas to how many NCAA Championships through 2024?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    fact: "Bill Self won national championships with Kansas in 2008 and 2022, cementing his legacy as one of college basketball's elite coaches.",
  },

  // --- PLAYERS ---
  {
    question: "Who scored 61 points in a 1970 NCAA Tournament game for Pete Maravich's LSU team?",
    options: ["Pete Maravich", "Bob Lanier", "Elvin Hayes", "Willis Reed"],
    correctAnswer: "Pete Maravich",
    fact: "Pete Maravich is the NCAA's all-time leading scorer and dazzled tournament fans, though LSU never advanced deep while he was there.",
  },
  {
    question: "Which player hit the shot to send the 2008 Final Four game between Memphis and UCLA into overtime?",
    options: ["Derrick Rose", "Chris Douglas-Roberts", "Joey Dorsey", "Tyreke Evans"],
    correctAnswer: "Derrick Rose",
    fact: "Derrick Rose led Memphis to the 2008 title game, where they lost to Kansas after leading most of the game.",
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
    question: "Who was the first freshman to win the NCAA Tournament Most Outstanding Player award?",
    options: ["Kevin Durant", "Carmelo Anthony", "Anthony Davis", "Patrick Ewing"],
    correctAnswer: "Carmelo Anthony",
    fact: "Carmelo Anthony's 2003 MOP award was the first ever given to a freshman in NCAA Tournament history.",
  },
  {
    question: "Christian Laettner's famous shot in the 1992 Elite Eight came against which opponent?",
    options: ["Indiana", "Iowa", "Kentucky", "Ohio State"],
    correctAnswer: "Kentucky",
    fact: "Laettner hit the turnaround jumper at the buzzer to beat Kentucky 104-103 in overtime — widely considered the greatest play in tournament history.",
  },
  {
    question: "Which player led Loyola-Chicago's 2018 Cinderella run to the Final Four?",
    options: ["Marques Townes", "Clayton Custer", "Cameron Krutwig", "Donte Ingram"],
    correctAnswer: "Donte Ingram",
    fact: "Donte Ingram hit a buzzer-beater in Loyola's first-round win over Miami, igniting one of the great Cinderella runs of the 2010s.",
  },
  {
    question: "Jalen Suggs hit an iconic buzzer-beater in the 2021 Final Four. Who was Gonzaga playing?",
    options: ["Baylor", "Houston", "UCLA", "Oregon State"],
    correctAnswer: "UCLA",
    fact: "Suggs banked in a half-court shot at the buzzer in overtime to lift Gonzaga past UCLA and into the 2021 championship game.",
  },
  {
    question: "Which player led Duke to consecutive Final Fours in 1999 and 2000 and was a two-time MOP?",
    options: ["Shane Battier", "Elton Brand", "Corey Maggette", "Jason Williams"],
    correctAnswer: "Shane Battier",
    fact: "Shane Battier won two tournament MOP awards and is considered one of the most complete players in Duke history.",
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
    fact: "The 45-second shot clock was introduced in 1985-86, later reduced to 35 seconds, and then to 30 seconds in 2015.",
  },
  {
    question: "Which city hosts the Final Four most frequently?",
    options: ["Indianapolis", "New Orleans", "San Antonio", "Atlanta"],
    correctAnswer: "Indianapolis",
    fact: "Indianapolis has hosted more Final Fours than any other city, thanks to its central location and massive stadium.",
  },
  {
    question: "What is the term for winning all 6 tournament games as a non-top-seed team?",
    options: ["Glass Slipper Run", "Cinderella Story", "Giant Killing", "Bracket Buster"],
    correctAnswer: "Cinderella Story",
    fact: "The 'Cinderella' label sticks because these teams always seem destined to lose — until they don't.",
  },
  {
    question: "When did the NCAA Tournament expand from 48 to 64 teams?",
    options: ["1983", "1985", "1987", "1989"],
    correctAnswer: "1985",
    fact: "The bracket expanded to 64 teams in 1985, creating the format that made March Madness a national phenomenon.",
  },
  {
    question: "What are the play-in games at the start of the NCAA Tournament called?",
    options: ["The Opening Round", "The Preliminary Round", "The First Four", "The Play-In Classic"],
    correctAnswer: "The First Four",
    fact: "The First Four consists of four games: two between the lowest-seeded automatic qualifiers and two between at-large teams.",
  },
  {
    question: "Where is the First Four traditionally played every year?",
    options: ["Columbus, Ohio", "Dayton, Ohio", "Louisville, Kentucky", "Nashville, Tennessee"],
    correctAnswer: "Dayton, Ohio",
    fact: "Dayton, Ohio has been the permanent home of the First Four since the play-in games were introduced in 2011.",
  },
  {
    question: "How many conference automatic bids are given to the NCAA Tournament?",
    options: ["28", "32", "36", "40"],
    correctAnswer: "32",
    fact: "All 32 Division I conferences receive automatic bids, with the remaining 36 spots going to at-large teams selected by the committee.",
  },
  {
    question: "What is the name of the selection committee's process for evaluating at-large teams?",
    options: ["NET Ranking", "BPI System", "RPI Formula", "KenPom Index"],
    correctAnswer: "NET Ranking",
    fact: "The NCAA Evaluation Tool (NET) replaced RPI in 2018 as the primary metric the selection committee uses to rank teams.",
  },
  {
    question: "How many regions are in the NCAA Tournament bracket?",
    options: ["2", "4", "6", "8"],
    correctAnswer: "4",
    fact: "The four regions are typically named after geographic areas (East, West, South, Midwest) and each sends one team to the Final Four.",
  },
  {
    question: "Which round of the NCAA Tournament is commonly called 'The Sweet 16'?",
    options: ["Round of 64", "Round of 32", "Round of 16", "Round of 8"],
    correctAnswer: "Round of 16",
    fact: "The Sweet 16 is the third round of the tournament, where 16 teams remain and regional competition heats up.",
  },
  {
    question: "What is the round following the Sweet 16 called?",
    options: ["Final Four", "Elite Eight", "Round of 8", "Regional Finals"],
    correctAnswer: "Elite Eight",
    fact: "The Elite Eight (eight teams remaining) determines which four teams advance to the Final Four.",
  },

  // --- RECORDS & MILESTONES ---
  {
    question: "What is the largest margin of victory in an NCAA Championship game?",
    options: ["20 points", "25 points", "30 points", "35 points"],
    correctAnswer: "30 points",
    fact: "UNLV beat Duke 103-73 in the 1990 championship game — a 30-point victory that remains the largest margin in title game history.",
  },
  {
    question: "Which team went undefeated through the 2014-15 regular season before losing in the Final Four?",
    options: ["Duke", "Gonzaga", "Kentucky", "Virginia"],
    correctAnswer: "Kentucky",
    fact: "Kentucky entered the 2015 Final Four at 38-0 before losing to Wisconsin in the semifinals, ending their bid for a perfect season.",
  },
  {
    question: "What is the record for most consecutive tournament wins by a single program?",
    options: ["47", "55", "61", "68"],
    correctAnswer: "61",
    fact: "UCLA won 61 consecutive NCAA Tournament games between 1964 and 1974 under John Wooden — an extraordinary and unrepeated feat.",
  },
  {
    question: "Which player holds the record for most points scored in a single NCAA Tournament?",
    options: ["Austin Carr", "Bill Bradley", "Danny Manning", "Elvin Hayes"],
    correctAnswer: "Austin Carr",
    fact: "Austin Carr of Notre Dame scored 158 points in the 1970 NCAA Tournament, averaging 52.7 points per game — a record that still stands.",
  },
  {
    question: "What is the lowest seed to ever win the NCAA Championship?",
    options: ["4", "6", "8", "11"],
    correctAnswer: "8",
    fact: "Villanova won the 1985 championship as an 8-seed, the lowest seed ever to win the title — considered one of the biggest upsets in sports history.",
  },
  {
    question: "How many times have all four 1-seeds reached the Final Four?",
    options: ["Once", "Twice", "Three times", "Never"],
    correctAnswer: "Once",
    fact: "All four 1-seeds reached the Final Four only once, in 2008 — North Carolina, Memphis, UCLA, and Kansas.",
  },
  {
    question: "Which team holds the record for most consecutive NCAA Tournament appearances?",
    options: ["Duke", "Kansas", "Gonzaga", "Kentucky"],
    correctAnswer: "Kansas",
    fact: "Kansas had a streak of 29 consecutive NCAA Tournament appearances (1990–2018 with an exception noted for vacated years) — a record for sustained excellence.",
  },
  {
    question: "What is the highest-scoring game in NCAA Tournament history?",
    options: ["162-115", "149-115", "145-127", "141-120"],
    correctAnswer: "149-115",
    fact: "Loyola Marymount defeated Michigan 149-115 in the 1990 tournament just days after the tragic death of their star player Hank Gathers.",
  },
  {
    question: "Which coach has taken the most different schools to the NCAA Tournament?",
    options: ["Rick Pitino", "John Calipari", "Larry Brown", "Bob Huggins"],
    correctAnswer: "Rick Pitino",
    fact: "Rick Pitino has taken five different programs to the tournament: Hawaii, Boston University, Providence, Kentucky, and Louisville.",
  },
  {
    question: "What percentage of brackets correctly predict a perfect NCAA Tournament, statistically?",
    options: ["1 in 9.2 billion", "1 in 120 billion", "1 in 9.2 quintillion", "1 in 1 trillion"],
    correctAnswer: "1 in 9.2 quintillion",
    fact: "If you pick randomly, the odds of a perfect bracket are 1 in 9.2 quintillion (2 to the 63rd power) — essentially impossible.",
  },

  // --- PROGRAMS & SCHOOLS ---
  {
    question: "Which school is known as 'The Bluegrass State's' basketball powerhouse?",
    options: ["Louisville", "Morehead State", "Murray State", "Kentucky"],
    correctAnswer: "Kentucky",
    fact: "Kentucky has been to the Elite Eight more times than any other program and boasts eight national championships.",
  },
  {
    question: "Which program has produced the most NBA first-round picks of any in history?",
    options: ["Duke", "Kentucky", "Kansas", "North Carolina"],
    correctAnswer: "Kentucky",
    fact: "Kentucky's 'One and Done' culture under John Calipari has made them the perennial leader in NBA Draft talent production.",
  },
  {
    question: "Duke and North Carolina are separated by how many miles?",
    options: ["5", "8", "12", "20"],
    correctAnswer: "8",
    fact: "Duke and UNC are just 8 miles apart, making their rivalry one of the most geographically intimate in all of sports.",
  },
  {
    question: "Which Ivy League school has made the most NCAA Tournament appearances?",
    options: ["Penn", "Princeton", "Harvard", "Yale"],
    correctAnswer: "Penn",
    fact: "Penn has made the most tournament appearances of any Ivy League school, though Princeton has had some of the most memorable upsets.",
  },
  {
    question: "Which team did Gonzaga knock out in the 2021 title game matchup often called 'the greatest game never played'?",
    options: ["Houston", "Baylor", "Michigan", "UCLA"],
    correctAnswer: "Baylor",
    fact: "Gonzaga vs. Baylor in 2021 was hyped as two undefeated heavyweights — Baylor won convincingly 86-70.",
  },
  {
    question: "Which school has won the most Big Ten tournament championships?",
    options: ["Michigan State", "Indiana", "Ohio State", "Michigan"],
    correctAnswer: "Michigan State",
    fact: "Michigan State has historically dominated Big Ten Tournament play and has used it as a springboard for many deep March runs.",
  },
  {
    question: "Which historically Black college or university (HBCU) has made the most NCAA Tournament appearances?",
    options: ["Florida A&M", "Norfolk State", "Morgan State", "Southern University"],
    correctAnswer: "Norfolk State",
    fact: "Norfolk State's 2012 upset of Missouri (a 2-seed) remains one of the most stunning HBCU moments in tournament history.",
  },
  {
    question: "Which school is called the 'Cardiac Pack' for their dramatic wins?",
    options: ["NC State", "Michigan State", "Nevada", "Oregon"],
    correctAnswer: "NC State",
    fact: "NC State's 1983 championship team won multiple games by the thinnest of margins, earning the 'Cardiac Pack' nickname.",
  },
  {
    question: "Which current mid-major program has been most consistently ranked in the AP Top 25 over the past decade?",
    options: ["Wichita State", "Gonzaga", "Memphis", "Murray State"],
    correctAnswer: "Gonzaga",
    fact: "Gonzaga has been ranked every week of every season for multiple consecutive years — an unprecedented run for a non-power conference school.",
  },
  {
    question: "Which ACC school made the Final Four in 2022 as an 8-seed?",
    options: ["Miami", "Virginia", "NC State", "Notre Dame"],
    correctAnswer: "Miami",
    fact: "Miami upset USC, Auburn, and Iowa State to reach the 2022 Final Four, where they lost to Kansas.",
  },

  // --- MEMORABLE MOMENTS ---
  {
    question: "What is 'Havoc' in college basketball?",
    options: ["A defensive system used by VCU", "A fast-break offense", "A Duke recruiting strategy", "A Kansas defensive scheme"],
    correctAnswer: "A defensive system used by VCU",
    fact: "VCU's 'Havoc' defense under Shaka Smart is a relentless full-court press system designed to create turnovers and chaos.",
  },
  {
    question: "In what city did Christian Laettner hit his famous 1992 buzzer-beater?",
    options: ["Charlotte", "Philadelphia", "Lexington", "East Rutherford"],
    correctAnswer: "Philadelphia",
    fact: "The 1992 East Regional was held in Philadelphia's Spectrum, the site of Laettner's iconic shot against Kentucky.",
  },
  {
    question: "Which coach's memorable sideline moment involved running around the court looking for someone to hug?",
    options: ["Bob Knight", "John Wooden", "Jim Valvano", "Dean Smith"],
    correctAnswer: "Jim Valvano",
    fact: "Jim Valvano's post-championship sprint on the court in 1983 became one of college sports' most memorable images. He died of cancer in 1993 after founding the V Foundation for Cancer Research.",
  },
  {
    question: "What phrase did Dick Vitale popularize related to the NCAA Tournament?",
    options: ["March Madness", "Diaper Dandy", "The Big Dance", "Bracket Buster"],
    correctAnswer: "The Big Dance",
    fact: "Dick Vitale popularized 'The Big Dance' as a nickname for the NCAA Tournament, and it's now used universally.",
  },
  {
    question: "Which broadcaster popularized the term 'March Madness'?",
    options: ["Dick Vitale", "Jim Nantz", "Brent Musburger", "Al McGuire"],
    correctAnswer: "Brent Musburger",
    fact: "Brent Musburger helped bring 'March Madness' into mainstream sports culture through his NCAA Tournament broadcasts.",
  },
  {
    question: "What iconic phrase does Jim Nantz say at the start of every Final Four broadcast?",
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
    question: "What song plays at the end of every NCAA Tournament broadcast as a tribute montage?",
    options: ["Eye of the Tiger", "One Shining Moment", "We Are the Champions", "The Final Countdown"],
    correctAnswer: "One Shining Moment",
    fact: "'One Shining Moment,' written by David Barrett, has been the closing song of the NCAA Tournament broadcast since 1987.",
  },
  {
    question: "Which team pulled off the 'Shot Heard Round the World' in the 1992 East Regional?",
    options: ["Indiana", "Duke", "UNLV", "Michigan"],
    correctAnswer: "Duke",
    fact: "Duke's comeback from 31-down against UNLV in the 1991 Final Four and then Laettner's shot in 1992 cemented that era of Blue Devil dominance.",
  },
  {
    question: "Which team entered the 2023 tournament on a 9-game losing streak and still received an at-large bid?",
    options: ["Pitt", "Texas", "Arizona", "Indiana"],
    correctAnswer: "Indiana",
    fact: "Indiana struggled late but their résumé was strong enough to earn an at-large bid — showing how the committee values overall body of work.",
  },
  {
    question: "Which future NBA star scored 39 points in a 2004 NCAA Tournament game while at Connecticut?",
    options: ["Emeka Okafor", "Ben Gordon", "Charlie Villanueva", "Rashad Anderson"],
    correctAnswer: "Ben Gordon",
    fact: "Ben Gordon was a key piece of UConn's 2004 championship squad and went on to be the NBA's Sixth Man of the Year with the Bulls.",
  },

  // --- BRACKET CULTURE ---
  {
    question: "Which company's bracket challenge drew the most participants in the 2010s?",
    options: ["ESPN", "Yahoo Sports", "CBS Sports", "Warren Buffett's Berkshire Hathaway"],
    correctAnswer: "ESPN",
    fact: "ESPN's Tournament Challenge has consistently attracted 10+ million bracket entries each year, making it the world's largest bracket contest.",
  },
  {
    question: "Warren Buffett famously offered $1 billion for a perfect bracket. Was it ever won?",
    options: [
      "Yes, in 2019",
      "Yes, but only halfway through",
      "No, the offer was withdrawn",
      "No, no one has ever won",
    ],
    correctAnswer: "No, no one has ever won",
    fact: "Buffett's Quicken Loans bracket challenge offered $1 billion for a perfect bracket — it has never come close to being claimed.",
  },
  {
    question: "Barack Obama famously filled out a March Madness bracket on ESPN. In which year did he first do this?",
    options: ["2007", "2009", "2011", "2013"],
    correctAnswer: "2009",
    fact: "Obama's bracket picks became an annual tradition during his presidency, sparking intense media debate about his college basketball knowledge.",
  },
  {
    question: "What is a 'bracket buster' in college basketball terms?",
    options: [
      "A team that wins the tournament",
      "An upset that ruins many people's brackets",
      "A game that goes to overtime",
      "A coach who is fired mid-tournament",
    ],
    correctAnswer: "An upset that ruins many people's brackets",
    fact: "The phrase 'bracket buster' is also used for mid-season games between non-conference rivals to help teams build their tournament résumé.",
  },
  {
    question: "What does 'seeding' refer to in the NCAA Tournament?",
    options: [
      "The order of team arrivals",
      "The ranking assigned to each team based on their record",
      "The geographic placement of teams",
      "The conference ranking of each team",
    ],
    correctAnswer: "The ranking assigned to each team based on their record",
    fact: "Seeds 1–16 are assigned in each region, with 1 being the strongest and 16 the weakest, and the two match up in the opening round.",
  },

  // --- NOTABLE TEAMS BY YEAR ---
  {
    question: "Which team's 1992 'Fab Five' freshmen class made an NCAA Championship appearance?",
    options: ["Kentucky", "Michigan", "Duke", "Kansas"],
    correctAnswer: "Michigan",
    fact: "Michigan's Fab Five (Jalen Rose, Chris Webber, Juwan Howard, Ray Jackson, Jimmy King) started five freshmen in the 1992 title game, losing to Duke.",
  },
  {
    question: "Chris Webber's infamous timeout call in the 1993 Final happened against which team?",
    options: ["Duke", "Kansas", "North Carolina", "Kentucky"],
    correctAnswer: "North Carolina",
    fact: "Michigan had no timeouts remaining when Chris Webber called one in 1993, resulting in a technical foul that sealed UNC's championship.",
  },
  {
    question: "Which team did UNLV lead by 30+ points in the 1991 Final Four before ultimately winning?",
    options: ["Duke", "Kansas", "North Carolina", "Indiana"],
    correctAnswer: "Duke",
    fact: "UNLV led Duke 76-47 in 1990 and was seeking a repeat in 1991, but Duke stunned them 79-77 in one of the great tournament comebacks.",
  },
  {
    question: "Which team won the 2014 NCAA Championship?",
    options: ["Florida", "Connecticut", "Michigan State", "Arizona"],
    correctAnswer: "Connecticut",
    fact: "UConn won the 2014 title as a 7-seed — one of the lowest seeds to ever win the championship — defeating Florida in the final.",
  },
  {
    question: "Which school was the first team from the Big East to win the NCAA Tournament?",
    options: ["Georgetown", "St. John's", "Connecticut", "Syracuse"],
    correctAnswer: "Georgetown",
    fact: "Georgetown, led by Patrick Ewing, won the 1984 national championship — the first Big East school to claim a title.",
  },
  {
    question: "Kentucky's 2012 team is known as the 'Untouchables.' How many future NBA players were on the roster?",
    options: ["5", "7", "8", "10"],
    correctAnswer: "8",
    fact: "Eight players from Kentucky's 2012 championship roster were eventually drafted into the NBA, underscoring their historic talent level.",
  },
  {
    question: "Indiana's last NCAA Championship came in what year?",
    options: ["1981", "1984", "1987", "1990"],
    correctAnswer: "1987",
    fact: "Bob Knight's 1987 Hoosiers team, led by Keith Smart's baseline jumper in the final seconds, is Indiana's most recent championship squad.",
  },
  {
    question: "Which Big East team beat Georgetown in the 1985 title game as an 8-seed?",
    options: ["Syracuse", "Providence", "Villanova", "St. John's"],
    correctAnswer: "Villanova",
    fact: "Villanova shot an incredible 78.6% from the field in the 1985 championship game, still the record for a title game.",
  },
  {
    question: "Which program won the NCAA title in 2000, beating Florida?",
    options: ["Duke", "Wisconsin", "Michigan State", "Indiana"],
    correctAnswer: "Michigan State",
    fact: "Michigan State, led by Mateen Cleaves and Morris Peterson, won the 2000 title 89-76 over Florida.",
  },
  {
    question: "Kansas's 2008 title team defeated Memphis in the championship. What was the final score?",
    options: ["75-68", "79-72", "83-69", "88-73"],
    correctAnswer: "75-68",
    fact: "Kansas erased a nine-point deficit in the final two minutes of the 2008 championship game, winning in overtime 75-68.",
  },

  // --- CONFERENCE POWER ---
  {
    question: "Which conference has won the most NCAA Championships in the last 20 years?",
    options: ["ACC", "Big 12", "Big East", "SEC"],
    correctAnswer: "ACC",
    fact: "The ACC (Duke, UNC, Maryland, Connecticut before they left) has dominated championship totals in the 21st century.",
  },
  {
    question: "Which conference has had the most teams in the Final Four in a single year?",
    options: ["ACC", "Big East", "SEC", "Big 12"],
    correctAnswer: "Big East",
    fact: "The Big East placed three teams in the 1985 Final Four (Georgetown, St. John's, and Villanova), nearly monopolizing the field.",
  },
  {
    question: "The 'ACC-Big Ten Challenge' is an annual regular season event. Which conference leads overall in wins?",
    options: ["ACC", "Big Ten", "They are tied", "It started too recently to tell"],
    correctAnswer: "ACC",
    fact: "The ACC has historically led the Big Ten in challenge wins, though the gap has closed in recent years as the Big Ten has grown stronger.",
  },
  {
    question: "Which conference sent the most teams to the 2023 NCAA Tournament?",
    options: ["ACC", "Big 12", "Big Ten", "SEC"],
    correctAnswer: "Big 12",
    fact: "The Big 12 placed 9 teams in the 2023 NCAA Tournament field, the most of any conference that year.",
  },
  {
    question: "The Mountain West Conference has produced multiple Cinderella teams. Which school had a memorable 2023 Final Four run?",
    options: ["Utah State", "San Diego State", "UNLV", "Colorado State"],
    correctAnswer: "San Diego State",
    fact: "San Diego State reached the 2023 national championship game as a 5-seed, losing to UConn in an exciting 76-59 final.",
  },

  // --- TRIVIA WILDCARDS ---
  {
    question: "What is the nickname for Duke's famously passionate student section?",
    options: ["The Crazies", "Cameron Crazies", "Duke Nation", "The Blue Wall"],
    correctAnswer: "Cameron Crazies",
    fact: "The Cameron Crazies are known for elaborate taunts, costumes, and camping out in 'Krzyzewskiville' for weeks to get the best seats.",
  },
  {
    question: "Which team is famous for their 'Big Blue Nation' fan base?",
    options: ["Kentucky", "Kansas", "Memphis", "UCLA"],
    correctAnswer: "Kentucky",
    fact: "Kentucky's 'Big Blue Nation' is one of the most passionate fan bases in college sports, known for turning every arena into a home game.",
  },
  {
    question: "What color are the Kansas Jayhawks' uniforms?",
    options: ["Blue and White", "Crimson and Blue", "Red and Blue", "Blue and Gold"],
    correctAnswer: "Crimson and Blue",
    fact: "Kansas's official colors are crimson and blue — though the blue is often referred to informally as 'KU blue.'",
  },
  {
    question: "Which team plays in the Maples Pavilion?",
    options: ["Stanford", "Cal", "USC", "Oregon"],
    correctAnswer: "Stanford",
    fact: "Stanford's Maples Pavilion is one of the most storied arenas in women's basketball and hosts the Cardinal men's and women's programs.",
  },
  {
    question: "What is the name of the arena where the Kentucky Wildcats play home games?",
    options: ["Rupp Arena", "Wildcats Center", "Commonwealth Arena", "Stoll Field"],
    correctAnswer: "Rupp Arena",
    fact: "Rupp Arena, named after legendary coach Adolph Rupp, is one of the largest arenas in college basketball history.",
  },
  {
    question: "What are Duke basketball players often called by rivals?",
    options: ["The Dukies", "The Blue Devils", "The Cameron Kids", "The Coach K Robots"],
    correctAnswer: "The Blue Devils",
    fact: "Duke's Blue Devils nickname was adopted in 1923, named after the 'Blue Devils' — an elite French military unit from World War I.",
  },
  {
    question: "What is the name of Kansas's arena?",
    options: ["Allen Fieldhouse", "Frank Martin Center", "Williams Arena", "Phog Arena"],
    correctAnswer: "Allen Fieldhouse",
    fact: "Allen Fieldhouse, opened in 1955 and named after Phog Allen, is consistently ranked as one of the best college basketball atmospheres in the country.",
  },
  {
    question: "What is North Carolina's primary arena called?",
    options: ["The Smith Center", "Carmichael Arena", "Dean Dome", "Kenan Center"],
    correctAnswer: "The Smith Center",
    fact: "The Smith Center is officially named the Dean E. Smith Center, nicknamed 'The Dean Dome,' after UNC's legendary head coach.",
  },

  // --- WOMEN'S BASKETBALL BONUS ---
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
    question: "Which player broke the all-time NCAA scoring record (men's or women's) in 2023?",
    options: ["Aliyah Boston", "Caitlin Clark", "Angel Reese", "Paige Bueckers"],
    correctAnswer: "Caitlin Clark",
    fact: "Caitlin Clark broke Pete Maravich's all-time NCAA scoring record in February 2024, becoming the all-time leader across all of college basketball.",
  },
  {
    question: "South Carolina won the 2022 and 2024 women's NCAA Championship under which coach?",
    options: ["Kim Mulkey", "Geno Auriemma", "Dawn Staley", "Tara VanDerveer"],
    correctAnswer: "Dawn Staley",
    fact: "Dawn Staley's South Carolina Gamecocks won in 2017, 2022, and 2024, establishing her as one of the elite coaches in women's basketball.",
  },
  {
    question: "Who coached Tennessee women's basketball to 8 national championships?",
    options: ["Holly Warlick", "Pat Summitt", "Nancy Darsch", "Lisa Stone"],
    correctAnswer: "Pat Summitt",
    fact: "Pat Summitt won 8 national championships at Tennessee and retired with 1,098 wins — the most in Division I women's basketball history at the time.",
  },

  // --- NBA CONNECTION ---
  {
    question: "Which March Madness hero went undrafted despite his legendary tournament performances?",
    options: ["Kemba Walker", "Draymond Green", "Danny Manning", "Glenn Robinson"],
    correctAnswer: "Draymond Green",
    fact: "Draymond Green wasn't drafted until the second round despite leading Michigan State to multiple tournaments — he became a four-time NBA champion.",
  },
  {
    question: "Kemba Walker had a legendary 2011 NCAA Tournament run. Which school did he lead to the title?",
    options: ["North Carolina", "Syracuse", "Connecticut", "Georgetown"],
    correctAnswer: "Connecticut",
    fact: "Kemba Walker scored 130 points over six games in the 2011 Big East Tournament and then led UConn through the NCAA Tournament to the championship.",
  },
  {
    question: "Which future NBA MVP led North Carolina to the 2005 national championship?",
    options: ["Marvin Williams", "Sean May", "Rashad McCants", "Raymond Felton"],
    correctAnswer: "Sean May",
    fact: "Sean May was the MOP of the 2005 NCAA Tournament, putting up dominant performances to lead UNC to their fourth title.",
  },
  {
    question: "LeBron James never played college basketball. What school was he committed to before going pro?",
    options: ["Ohio State", "Duke", "Kentucky", "He was never committed to a college"],
    correctAnswer: "He was never committed to a college",
    fact: "LeBron declared for the NBA Draft straight out of high school in 2003 — he never formally committed to any college program.",
  },
  {
    question: "Which future NBA star averaged 28.6 PPG in the 2007 NCAA Tournament while at Ohio State?",
    options: ["Greg Oden", "Mike Conley Jr.", "Daequan Cook", "Ron Lewis"],
    correctAnswer: "Greg Oden",
    fact: "Greg Oden led Ohio State to the 2007 title game despite the Buckeyes losing to Florida. He was the #1 overall pick that same year.",
  },
  {
    question: "Kevin Durant played one year at which university before going to the NBA?",
    options: ["Georgetown", "Kansas", "Ohio State", "Texas"],
    correctAnswer: "Texas",
    fact: "Kevin Durant averaged 25.8 PPG in his lone season at Texas in 2006–07, winning the Wooden Award before becoming the #2 overall pick.",
  },
  {
    question: "Which two future NBA All-Stars faced off in the 2005 Final Four?",
    options: [
      "LeBron James and Carmelo Anthony",
      "Chris Paul and Marvin Williams",
      "Dwyane Wade and Emeka Okafor",
      "Dwight Howard and Luol Deng",
    ],
    correctAnswer: "Chris Paul and Marvin Williams",
    fact: "Chris Paul's Wake Forest team lost to Illinois in the 2005 Final Four, while Marvin Williams' UNC team went on to win the title.",
  },

  // --- DARK HORSES & STATS ---
  {
    question: "Which team had the shortest average height in a championship game but still won?",
    options: ["UNLV 1990", "Princeton 1965", "NC State 1983", "Villanova 1985"],
    correctAnswer: "Villanova 1985",
    fact: "Villanova's 1985 championship team relied almost entirely on precision shooting rather than athleticism, setting the all-time title game field goal percentage record.",
  },
  {
    question: "Which program has the best all-time winning percentage in the NCAA Tournament?",
    options: ["Duke", "UCLA", "Kentucky", "North Carolina"],
    correctAnswer: "UCLA",
    fact: "UCLA's 11 championships and consistent tournament success give them the highest all-time tournament winning percentage among storied programs.",
  },
  {
    question: "How many points did Hakeem Olajuwon average in the 1983 and 1984 NCAA Tournaments for Houston?",
    options: ["14.3", "18.7", "16.2", "20.1"],
    correctAnswer: "16.2",
    fact: "Hakeem Olajuwon's Houston 'Phi Slama Jama' teams reached two consecutive Final Fours, dazzling fans with dunks and athleticism.",
  },
  {
    question: "In the 2016 tournament, Syracuse made the Final Four despite their regular-season record. What was that record?",
    options: ["17-14", "19-13", "16-15", "18-12"],
    correctAnswer: "19-13",
    fact: "Syracuse entered the 2016 tournament at 19-13, one of the weakest records ever for a Final Four team.",
  },
  {
    question: "Which school is known for the 'Princeton Offense' style of slow, methodical basketball?",
    options: ["Yale", "Harvard", "Princeton", "Penn"],
    correctAnswer: "Princeton",
    fact: "The Princeton Offense, popularized by coach Pete Carril, uses backdoor cuts and precise passing to generate high-percentage shots — no shot clock abuse required.",
  },

  // --- TERMINOLOGY & MISC ---
  {
    question: "What does 'RPI' stand for in college basketball?",
    options: [
      "Ranking Performance Index",
      "Ratings Percentage Index",
      "Relative Power Indicator",
      "Regional Performance Index",
    ],
    correctAnswer: "Ratings Percentage Index",
    fact: "RPI was used by the NCAA for decades to evaluate teams for tournament selection but was replaced by the NET ranking in 2018.",
  },
  {
    question: "What does 'auto bid' mean in March Madness?",
    options: [
      "An automatic selection for any team with a winning record",
      "A bid given to conference tournament champions",
      "A bid given to the highest-ranked team",
      "A bid given to teams who win their first-round game",
    ],
    correctAnswer: "A bid given to conference tournament champions",
    fact: "Every conference tournament champion receives an automatic bid to the NCAA Tournament, guaranteeing every Division I conference at least one team in the field.",
  },
  {
    question: "What does 'at-large' mean in the context of March Madness?",
    options: [
      "A team selected despite not winning their conference tournament",
      "A team from a large school",
      "A team that enters the tournament from the play-in round",
      "A team with the highest non-conference strength of schedule",
    ],
    correctAnswer: "A team selected despite not winning their conference tournament",
    fact: "At-large bids (36 total) are awarded by the NCAA Selection Committee to deserving teams who didn't win their conference tournament.",
  },
  {
    question: "What is 'March Madness' technically referring to?",
    options: [
      "The NFL Draft period",
      "The NCAA Men's Division I Basketball Tournament",
      "The NBA trade deadline",
      "All college basketball tournaments combined",
    ],
    correctAnswer: "The NCAA Men's Division I Basketball Tournament",
    fact: "The term 'March Madness' specifically refers to the NCAA Men's Division I Tournament, though it's informally used for the women's tournament too.",
  },
  {
    question: "Which network has broadcast the NCAA Tournament the longest?",
    options: ["ESPN", "CBS", "NBC", "TNT"],
    correctAnswer: "CBS",
    fact: "CBS has been broadcasting the NCAA Tournament since 1982 and now shares rights with Turner Sports (TNT, TBS, truTV).",
  },
  {
    question: "What is a 'bubble team' in March Madness parlance?",
    options: [
      "A team in danger of being left out of the tournament field",
      "A team that always chokes in the tournament",
      "A team that plays in a dome arena",
      "A team from a non-major conference",
    ],
    correctAnswer: "A team in danger of being left out of the tournament field",
    fact: "Bubble teams sit on the edge of inclusion/exclusion when the 68-team field is announced — late-season wins or losses are critical.",
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
    question: "How long is the NCAA Tournament from start to finish?",
    options: ["2 weeks", "3 weeks", "4 weeks", "5 weeks"],
    correctAnswer: "3 weeks",
    fact: "The NCAA Tournament runs for approximately three weeks, starting with the First Four in mid-March and ending with the championship game in early April.",
  },

  // --- ADDITIONAL HISTORY ---
  {
    question: "Which school won the very first NCAA Tournament in 1939?",
    options: ["Kansas", "Utah", "Oregon", "Ohio State"],
    correctAnswer: "Oregon",
    fact: "The Oregon Ducks won the first NCAA Tournament in 1939, defeating Ohio State 46-33 in the championship game.",
  },
  {
    question: "What was the name of the tournament before the NCAA began running it?",
    options: ["National Invitational Tournament", "NAIB Tournament", "College Basketball Invitational", "AAU Championship"],
    correctAnswer: "National Invitational Tournament",
    fact: "The NIT predated the NCAA Tournament and was considered more prestigious through the 1940s before the NCAA's event grew in stature.",
  },
  {
    question: "Which school's fans are known for camping outside for months to get basketball tickets, a practice called 'Krzyzewskiville'?",
    options: ["North Carolina", "Duke", "Kentucky", "Indiana"],
    correctAnswer: "Duke",
    fact: "Duke students begin camping in 'K-Ville' weeks before the UNC game every year, with a tent lottery system managing who gets priority.",
  },
  {
    question: "Which legendary program has its games broadcast in Spanish to the widest audience in the U.S.?",
    options: ["Miami", "Arizona", "UNLV", "New Mexico"],
    correctAnswer: "Arizona",
    fact: "Arizona's large Southwestern fan base includes a significant Spanish-speaking audience, and their games are widely broadcast in Spanish throughout the region.",
  },
  {
    question: "North Carolina's rivalry with Duke is often called what?",
    options: ["The Research Triangle Rivalry", "The Tobacco Road Rivalry", "The Carolina Classic", "The Tar Heel-Blue Devil War"],
    correctAnswer: "The Tobacco Road Rivalry",
    fact: "The Duke-UNC rivalry is called the 'Tobacco Road Rivalry' because both schools are located in North Carolina's Research Triangle, historically tied to tobacco farming.",
  },
  {
    question: "Which mascot is a live animal that attends games at Auburn?",
    options: ["A bear", "A tiger", "An eagle", "A bulldog"],
    correctAnswer: "An eagle",
    fact: "Auburn's live eagle, Nova, flies around Jordan-Hare Stadium before football games — basketball uses the Tiger mascot instead.",
  },
  {
    question: "Which school retires jersey numbers most often in men's college basketball?",
    options: ["Kentucky", "North Carolina", "Duke", "Indiana"],
    correctAnswer: "North Carolina",
    fact: "North Carolina's banners hang in the Smith Center for players like Michael Jordan, James Worthy, and Bob McAdoo — all retired numbers.",
  },
  {
    question: "Michael Jordan wore which number during his time at North Carolina?",
    options: ["15", "23", "45", "32"],
    correctAnswer: "23",
    fact: "Jordan wore #23 at North Carolina — the same number he'd make iconic in the NBA — and won the 1982 national championship with a clutch shot.",
  },
  {
    question: "Michael Jordan's title-winning shot in the 1982 Championship was against which opponent?",
    options: ["Georgetown", "Virginia", "Houston", "Louisville"],
    correctAnswer: "Georgetown",
    fact: "As a freshman, Jordan hit the go-ahead jumper with 16 seconds left to lift North Carolina past Georgetown 63-62 in the 1982 title game.",
  },
  {
    question: "Which ACC school won the 2004 NIT Championship?",
    options: ["Virginia Tech", "Maryland", "Georgia Tech", "Wake Forest"],
    correctAnswer: "Maryland",
    fact: "Maryland won the 2004 NIT, defeating St. Joseph's in the final — still a considerable achievement for teams that fall short of the NCAA field.",
  },
  {
    question: "Duke's rivalry with Maryland was part of which conference before Maryland moved to the Big Ten?",
    options: ["Big East", "SEC", "ACC", "Pac-10"],
    correctAnswer: "ACC",
    fact: "Maryland left the ACC for the Big Ten in 2014, ending one of college basketball's great conference rivalries.",
  },
  {
    question: "Which forward was known as 'The Brow' during his NCAA stint and went #1 overall?",
    options: ["Zion Williamson", "Anthony Davis", "Karl-Anthony Towns", "Ben Simmons"],
    correctAnswer: "Anthony Davis",
    fact: "Anthony Davis, named 'The Brow' for his distinctive unibrow, won the 2012 national championship with Kentucky and was the #1 overall pick.",
  },
  {
    question: "Zion Williamson's one year at Duke is remembered most for what highlight?",
    options: [
      "A game-winning buzzer-beater against UNC",
      "His shoe exploding mid-game causing a knee injury scare",
      "Scoring 50 points in an NCAA Tournament game",
      "Setting the Duke single-season scoring record",
    ],
    correctAnswer: "His shoe exploding mid-game causing a knee injury scare",
    fact: "Zion's Nike shoe literally blew apart during a 2019 game vs. UNC, causing him to slip and injure his knee — the moment went viral worldwide.",
  },
  {
    question: "Patrick Ewing won a national championship at which school?",
    options: ["Syracuse", "Georgetown", "St. John's", "Connecticut"],
    correctAnswer: "Georgetown",
    fact: "Patrick Ewing led Georgetown to the 1984 national championship, defeating Houston 84-75, and was named the tournament's Most Outstanding Player.",
  },
  {
    question: "Which school's basketball team plays in the Carrier Dome?",
    options: ["Georgetown", "Providence", "Syracuse", "St. John's"],
    correctAnswer: "Syracuse",
    fact: "Syracuse plays in the Carrier Dome (now JMA Wireless Dome), the largest on-campus arena in Division I basketball by capacity.",
  },
  {
    question: "Indiana's iconic coach Bobby Knight was known for doing what in a 1985 game that earned him a technical foul?",
    options: ["Throwing a chair across the court", "Punching a referee", "Walking onto the court during play", "Using profanity on a microphone"],
    correctAnswer: "Throwing a chair across the court",
    fact: "Bobby Knight threw a chair across the court during a 1985 game against Purdue, drawing a technical and suspension — one of the most infamous moments in coaching history.",
  },
  {
    question: "Which coach led Gonzaga to their first Final Four appearance in 1999?",
    options: ["Mark Few", "Dan Fitzgerald", "Lute Olson", "Dan Monson"],
    correctAnswer: "Dan Monson",
    fact: "Gonzaga's first Final Four run in 1999 was under coach Dan Monson — it put the Bulldogs on the national map permanently.",
  },
  {
    question: "How many times has a 16-seed beaten a 1-seed in the NCAA Tournament through 2024?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    fact: "UMBC beat Virginia in 2018 (the first time ever), and FDU beat Purdue in 2023 — only two 16-over-1 upsets in tournament history.",
  },
  {
    question: "Which school sent a 64-year-old team chaplain, Sister Jean, to the 2018 Final Four as their unofficial mascot?",
    options: ["Gonzaga", "Michigan", "Loyola-Chicago", "Nevada"],
    correctAnswer: "Loyola-Chicago",
    fact: "Sister Jean Dolores Schmidt became a national celebrity during Loyola-Chicago's 2018 Final Four run, appearing on merchandise and magazine covers.",
  },
  {
    question: "Which player's 44-point performance in a 1965 tournament regional is still considered one of the all-time great games?",
    options: ["Jerry Lucas", "Bill Bradley", "Walt Hazzard", "Cazzie Russell"],
    correctAnswer: "Bill Bradley",
    fact: "Bill Bradley of Princeton scored 58 points in the 1965 third-place game against Wichita State — a legendary performance from a future senator.",
  },
  {
    question: "Which school was banned from post-season play in 2013 due to NCAA violations?",
    options: ["Ohio State", "UMass", "Louisville", "Connecticut"],
    correctAnswer: "Connecticut",
    fact: "UConn was banned from the 2013 tournament due to low Academic Progress Rate scores — the irony being they won the title the very next year.",
  },
  {
    question: "What are the four sites of the modern Final Four called collectively?",
    options: ["Regional Finals", "Final Arenas", "National Semifinals", "Semifinal Sites"],
    correctAnswer: "National Semifinals",
    fact: "The Final Four's two games are technically called the National Semifinals, played at a single predetermined host city's arena.",
  },
  {
    question: "Which tournament game is nicknamed 'The Game of the Century' and took place in 1968?",
    options: ["UCLA vs. Houston", "Duke vs. Kentucky", "North Carolina vs. Kansas", "Ohio State vs. Cincinnati"],
    correctAnswer: "UCLA vs. Houston",
    fact: "UCLA vs. Houston in 1968 drew an estimated 120 million TV viewers — the largest audience for a college basketball game at the time.",
  },
  {
    question: "Which player hit a free throw to help ensure UCLA's 88-game winning streak ended in 1974?",
    options: ["Bill Walton", "Keith Wilkes", "Notre Dame's Dwight Clay", "Steve Downing"],
    correctAnswer: "Notre Dame's Dwight Clay",
    fact: "Notre Dame's Dwight Clay hit the corner jumper that ended UCLA's 88-game winning streak in 1974, one of the most stunning upsets in college basketball history.",
  },
  {
    question: "Which team's unprecedented 1971-73 run featured Bill Walton shooting 21 of 22 shots in the 1973 championship game?",
    options: ["Indiana", "UCLA", "North Carolina", "Marquette"],
    correctAnswer: "UCLA",
    fact: "Bill Walton's 21-for-22 shooting (44 points) in the 1973 title game is considered one of the greatest individual championship performances ever.",
  },
  {
    question: "Which coach won NCAA titles at two different schools?",
    options: ["Rick Pitino", "Larry Brown", "Billy Donovan", "Bob Knight"],
    correctAnswer: "Larry Brown",
    fact: "Larry Brown won the 1988 NCAA title at Kansas and is also the only coach to win both an NCAA championship and an NBA championship.",
  },
  {
    question: "Whose college career is celebrated in the documentary 'Survive & Advance'?",
    options: ["Jim Valvano", "Lenny Bias", "Len Elmore", "Lorenzo Charles"],
    correctAnswer: "Jim Valvano",
    fact: "'Survive & Advance' chronicles NC State's 1983 miracle run under Jim Valvano and is widely considered one of the best sports documentaries ever made.",
  },
  {
    question: "Which team ended Duke's bid for a repeat championship in the 2012 Sweet 16?",
    options: ["Ohio", "Lehigh", "NC State", "Florida State"],
    correctAnswer: "Lehigh",
    fact: "Lehigh stunned Duke in the 2012 first round as a 15-seed — one of the most significant upsets of Duke's dynasty era.",
  },
  {
    question: "How many teams from the same conference can be placed in the same regional bracket?",
    options: ["Unlimited", "No more than 4", "No more than 3", "No more than 2"],
    correctAnswer: "No more than 4",
    fact: "The NCAA tries to limit teams from the same conference meeting until later rounds, but the rules allow up to 4 from one conference in a region.",
  },
  {
    question: "Which mid-major won the NIT in 2019, beating Texas Tech?",
    options: ["Lipscomb", "Temple", "Florida", "Texas"],
    correctAnswer: "Temple",
    fact: "Temple won the 2019 NIT, defeating Texas Tech in the finals at Madison Square Garden.",
  },
  {
    question: "North Carolina State's Lorenzo Charles scored the winning dunk to win the 1983 championship. Whose pass did he catch?",
    options: ["Sidney Lowe", "Thurl Bailey", "Cozell McQueen", "Dereck Whittenburg"],
    correctAnswer: "Dereck Whittenburg",
    fact: "Whittenburg's desperation heave was short — Charles caught it and dunked to stun Houston. Valvano then ran the court looking for someone to hug.",
  },
];

export function getRandomQuestions(count: number = 5): Question[] {
  const shuffled = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((q) => ({
    ...q,
    options: [...q.options].sort(() => Math.random() - 0.5),
  }));
}
