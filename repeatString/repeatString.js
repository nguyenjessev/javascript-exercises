const repeatString = function(text, num) {
    if (num < 0) return "ERROR";

    let result = "";

    for (let i = 0; i < num; i++) {
        result += text;
    }

    return result;
}

module.exports = repeatString
