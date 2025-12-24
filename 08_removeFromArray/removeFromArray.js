const removeFromArray = function(arr, removedValue1) {
    result = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== removedValue1) {
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(removeFromArray([1, 2, 2, 3], 2));

// Do not edit below this line
module.exports = removeFromArray;
