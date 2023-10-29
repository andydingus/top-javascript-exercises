const removeFromArray = function(arr, ...elements) {
    let newArray = arr;
    for (const element of elements) {
        let elementIndex = arr.indexOf(element);
        if (elementIndex != -1) {
            arr.splice(elementIndex, 1);
        }
    }
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
