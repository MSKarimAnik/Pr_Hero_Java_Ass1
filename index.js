// Problem 1 Solve

// function calculateMoney(ticketSale) {
//     if (ticketSale < 0) {
//         return "Invalid Number";
//     }
//     const ticketPrice = 120;
//     const regularCost = 500 + (8*50);
//     const totalIncome = ticketSale * ticketPrice;
//     const remainingAmount = totalIncome - regularCost;
//     return remainingAmount;
//     }
// const remainingAmount = calculateMoney(ticketSale);
// console.log(remainingAmount);

// Problem Solve 2

function checkName(name) {
    // Check if the input is a string
    if (typeof name !== 'string') {
        return "Invalid";
    }
    
    // Convert the name to lowercase for case insensitivity
    const lowercaseName = name.toLowerCase();
    
    // Get the last character of the name
    const lastCharacter = lowercaseName.charAt(lowercaseName.length - 1);

    // Check if the last character is one of 'a', 'y', 'i', 'o', 'u', or 'w'
    if (['a', 'y', 'i', 'o', 'u', 'w'].includes(lastCharacter)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

const inputName = "Tonmoy";
const result = checkName(inputName);
console.log(result);



