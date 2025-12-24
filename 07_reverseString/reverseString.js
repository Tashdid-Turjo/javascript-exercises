// !! N.B: in the spec/test file, removing .skip, will show in the output that, every Tests ran, otherwise it will show in the output that, Tests: 3 skipped, 1 passed. !!

const reverseString = function(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[str.length - 1 - i];
    }

    return result;
};

console.log(reverseString('123! abc! Hello, Odinite.'));

// Do not edit below this line
module.exports = reverseString;
