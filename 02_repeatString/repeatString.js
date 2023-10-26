const repeatString = function(string, num) {
    // Solution using a for loop
    let newString = '';
    for (i = 0; i < num; i++) {
        newString += string;
    }
    return newString;
    // Easy solution
    // return string.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
