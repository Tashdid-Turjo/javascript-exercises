// !! N.B: There are 5 arguments. !!

const removeFromArray = function(arr, removedValue1, removedValue2, removedValue3, removedValue4) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        if ((arr[i] !== removedValue1) && (arr[i] !== removedValue2) && (arr[i] !== removedValue3) && (arr[i] !== removedValue4)) {
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
