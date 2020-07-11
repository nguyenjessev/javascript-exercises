const sumAll = function(a, b) {
    if (typeof(a) != "number"
        || typeof(b) != "number"
        || a < 0
        || b < 0) {
        return "ERROR";
    }

    return (a+b) * (Math.abs(a-b) + 1) / 2;
}

module.exports = sumAll
