function calculateBMI(mass, height) {
    return mass / (height ** 2);
}

let markMassKg = 78;
let markHeightM = 1.75;

let johnMassKg = 85;
let johnHeightM = 1.80;

let markBMI = calculateBMI(markMassKg, markHeightM);
let johnBMI = calculateBMI(johnMassKg, johnHeightM);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else if (johnBMI > markBMI) {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI.toFixed(1)})!`);
}