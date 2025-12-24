// !! 3 arguments are there now; where for first Test, there was two arguments.

const removeFromArray = function(arr, removedValue1, removedValue2) {
    result = [];

    for(let i = 0; i < arr.length; i++) {
        if ((arr[i] !== removedValue1) && (arr[i] !== removedValue2)) {
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
