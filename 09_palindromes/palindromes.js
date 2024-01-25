const palindromes = function (str) {
    const reversedString = str.toLowerCase().replace(/[^\w-]/g,"");
    return reversedString.split("").reverse().join("") == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
