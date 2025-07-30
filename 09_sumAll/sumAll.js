const sumAll = function(one, two) {
    if (!Number.isInteger(one) || !Number.isInteger(two)) { return "ERROR" }
    if (one < 0 || two < 0) { return "ERROR" }
    const step = one <= two ? 1 : -1
    const length = Math.abs(two - one) + 1
    const all = Array.from({ length }, (_, i) => one + i * step);
    return all.reduce((sum, num) => sum + num, 0)
};

// Do not edit below this line
module.exports = sumAll;
