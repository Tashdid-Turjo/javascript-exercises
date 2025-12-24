const sumAll = function(firstNum, secondNum) {
    let result = 0;

    if((firstNum < secondNum) && (firstNum > 0) && (secondNum > 0)&& (Number.isInteger(firstNum)) && (Number.isInteger(secondNum))) {
        for(let i = firstNum; i <= secondNum; i++) {
            result += i;
        }   
    return result;
    }

    if((secondNum < firstNum) && (firstNum > 0) && (secondNum > 0)&& (Number.isInteger(firstNum)) && (Number.isInteger(secondNum))) {
        for(let i = secondNum; i <= firstNum; i++) {
            result += i;
        }   
    return result;
    }

    else return 'ERROR';
};

console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
