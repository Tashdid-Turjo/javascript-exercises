const removeFromArray = function(arr, removedValue1, removedValue2) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        if ((arr[i] !== removedValue1) && (arr[i] !== removedValue2)) {
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(removeFromArray([1, "tacos", 3, 4], 7, "tacos"));

// Do not edit below this line
module.exports = removeFromArray;
