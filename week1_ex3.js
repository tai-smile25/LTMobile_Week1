function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

let dolphinsAverage1 = calculateAverage(96, 108, 89);
let koalasAverage1 = calculateAverage(88, 91, 110);

console.log(`Dolphins Average Score: ${dolphinsAverage1}`);
console.log(`Koalas Average Score: ${koalasAverage1}`);

if (dolphinsAverage1 > koalasAverage1) {
    console.log("Dolphins win the trophy!");
} else if (koalasAverage1 > dolphinsAverage1) {
    console.log("Koalas win the trophy!");
} else {
    console.log("It's a draw!");
}

let dolphinsAverageBonus1 = calculateAverage(97, 112, 101);
let koalasAverageBonus1 = calculateAverage(109, 95, 123);

console.log(`Dolphins Average Score (Bonus 1): ${dolphinsAverageBonus1}`);
console.log(`Koalas Average Score (Bonus 1): ${koalasAverageBonus1}`);

if (dolphinsAverageBonus1 >= 100 && dolphinsAverageBonus1 > koalasAverageBonus1) {
    console.log("Dolphins win the trophy (Bonus 1)!");
} else if (koalasAverageBonus1 >= 100 && koalasAverageBonus1 > dolphinsAverageBonus1) {
    console.log("Koalas win the trophy (Bonus 1)!");
} else if (dolphinsAverageBonus1 === koalasAverageBonus1 && dolphinsAverageBonus1 >= 100 && koalasAverageBonus1 >= 100) {
    console.log("It's a draw (Bonus 1)!");
} else {
    console.log("No team wins the trophy (Bonus 1)!");
}

// Bonus 2: Minimum score for a draw
let dolphinsAverageBonus2 = calculateAverage(97, 112, 101);
let koalasAverageBonus2 = calculateAverage(109, 95, 106);

console.log(`Dolphins Average Score (Bonus 2): ${dolphinsAverageBonus2}`);
console.log(`Koalas Average Score (Bonus 2): ${koalasAverageBonus2}`);

if (dolphinsAverageBonus2 >= 100 && dolphinsAverageBonus2 > koalasAverageBonus2) {
    console.log("Dolphins win the trophy (Bonus 2)!");
} else if (koalasAverageBonus2 >= 100 && koalasAverageBonus2 > dolphinsAverageBonus2) {
    console.log("Koalas win the trophy (Bonus 2)!");
} else if (dolphinsAverageBonus2 === koalasAverageBonus2 && dolphinsAverageBonus2 >= 100 && koalasAverageBonus2 >= 100) {
    console.log("It's a draw (Bonus 2)!");
} else {
    console.log("No team wins the trophy (Bonus 2)!");
}
