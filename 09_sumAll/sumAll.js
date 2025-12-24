const sumAll = function(firstNum, secondNum) {
    let result = 0;

    if(firstNum < secondNum) {
        for(let i = firstNum; i <= secondNum; i++) {
            result += i;
        }   
    return result;
    }

    if(secondNum < firstNum) {
        for(let i = secondNum; i <= firstNum; i++) {
            result += i;
        }   
    return result;
    }
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
