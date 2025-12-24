const removeFromArray = function(arr, removedValue) {
    result = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== removedValue) {
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
