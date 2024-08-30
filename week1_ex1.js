// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Function BMI
function calculateBMI(mass, height) {
    return mass / (height ** 2);
}

let markMassKg = 78;
let markHeightM = 1.75;

let johnMassKg = 85;
let johnHeightM = 1.80;

let markBMI = calculateBMI(markMassKg, markHeightM);
let johnBMI = calculateBMI(johnMassKg, johnHeightM);

let markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI:", markBMI);
console.log("John's BMI:", johnBMI);
console.log("Does Mark have a higher BMI than John?", markHigherBMI);
