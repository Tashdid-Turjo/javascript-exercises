str = "";

const repeatString = function(str, times) {
    for (let i = 0; i < times; i++) {
        let result += str;
        return result;
    }
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
