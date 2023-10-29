const reverseString = function(input) {
    // Splitting the string solution
    let splitString = input.split("");
    let reversedArray = splitString.reverse();
    let newString = reversedArray.join("");

    return newString;
    
    // For loop solution
    // let newString = '';
    // for (let i = input.length - 1; i >= 0; i--) {
    //     newString += input[i];
    // }

    // return newString;
};

// Do not edit below this line
module.exports = reverseString;
