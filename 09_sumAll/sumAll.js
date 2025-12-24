const sumAll = function(firstNum, secondNum) {
    let result = 0;

    for(let i = firstNum; i <= secondNum; i++) {
        result += i;
    }   
    return result;
};

console.log(sumAll(1, 4000));

// Do not edit below this line
module.exports = sumAll;
