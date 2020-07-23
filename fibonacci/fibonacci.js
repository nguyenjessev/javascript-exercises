const fibonacci = function(index) {
    if (index < 0) return "OOPS";

    let last = 0;
    let result = 1;

    for (let i = 1; i < index; i++) {
        const temp = result;
        result += last;
        last = temp;
    }

    return result;
}

module.exports = fibonacci

// 1, 1, 2, 3, 5, 8, 13, 21, 34
// 1 = 1
// 2 = 1
// 3 = 2
// 4 = 3
// 5 = 5
// 6 = 8
// 7 = 13
// 8 = 21