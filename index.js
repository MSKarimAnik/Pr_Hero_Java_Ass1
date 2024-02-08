// Problem 1 Solve

function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number";
    }
    const ticketPrice = 120;
    const regularCost = 500 + (8*50);
    const totalIncome = ticketSale * ticketPrice;
    const remainingAmount = totalIncome - regularCost;
    return remainingAmount;
    }
const remainingAmount = calculateMoney(ticketSale);
console.log(remainingAmount);