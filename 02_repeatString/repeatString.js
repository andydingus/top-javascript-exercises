const repeatString = function(string, num) {
    // Solution using a for loop
    let newString = '';
    if (num < 0) {
        return 'ERROR';
    } else {
        for (i = 0; i < num; i++) {
            newString += string;
        }
        return newString;
    }
    
    // Easy solution for else statement
    // return string.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
