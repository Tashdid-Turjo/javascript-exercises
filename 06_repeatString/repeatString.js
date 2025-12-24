// let result = "";     // If result is global, it keeps old data. Next function call adds more, so output becomes too long. Thus, it will show in the output (times * 2) times.

const repeatString = function(str, times) {
    let result = "";

    if (times < 0) return "ERROR";
    for (let i = 0; i < times; i++) {
        result += str;
    }
    return result;
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
