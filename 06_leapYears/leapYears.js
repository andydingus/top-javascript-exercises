const leapYears = function(year) {
// Leap years:
// 1) Divisible by 4
// 2) Not divisible by 100 unless divisible by 400
    // Divisible by 4 and not divisible by 100 is a leap year
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    // Divisible by 100 but is also divisible by 400, making it a leap year
    } else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    // Not divisible by 4 and divisible by 100 is NOT a leap year
    } else if (year % 4 !== 0 || year % 100 === 0){
        return false;
    }
    
 
};

// Do not edit below this line
module.exports = leapYears;
