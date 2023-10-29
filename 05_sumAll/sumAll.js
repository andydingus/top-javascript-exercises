const sumAll = function(firstNum, secondNum) {
    let finalSum;
    // Checking for negative numbers...
    if (firstNum < 0 || secondNum < 0) {
        return 'ERROR';
    // Making sure variables are numbers...
    } else if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
        return 'ERROR';
    // If starting with smaller number...      
    } else if (firstNum < secondNum) {
        for (i = firstNum + 1; i < secondNum; i++) {
            firstNum += i;
        }
        finalSum = firstNum + secondNum;
    // If starting with bigger number...
    } else {
        for (i = firstNum - 1; i > secondNum; i--) {
            firstNum += i;
        }
        finalSum = firstNum + secondNum;
    }
    
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
