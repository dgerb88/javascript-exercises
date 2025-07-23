const reverseString = function(stringToReverse) {
    let separated = stringToReverse.split('')
    let reversed = separated.reverse()
    return reversed.join('')
};

// Do not edit below this line
module.exports = reverseString;
