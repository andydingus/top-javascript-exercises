const removeFromArray = function(arr, element) {
    let elementIndex = arr.indexOf(element);
    let newArray = arr;
    if (elementIndex != -1) {
        arr.splice(elementIndex, 1);
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
