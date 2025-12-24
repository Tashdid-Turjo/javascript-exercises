// !! N.B: As I used "...args" (rest parameter), thus, now, it doesn't matter how many arguments are there in the console.log part. !!

const removeFromArray = function(arr, ...args) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        if (!args.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
