// scores
const score1 = 88;
const score2 = 92;
const score3 = 79;


// amount of score
const numScores = 3;

const totalPoints = score1 + score2 + score3;

// have java calculate average

const averageScore = totalPoints / numScores;

const myOutput = ` first quiz score ${score1} 
second quiz score ${score2} 
third quiz score ${score3} 

average score: ${averageScore}`;


console.log(myOutput)