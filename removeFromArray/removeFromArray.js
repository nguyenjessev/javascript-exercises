const removeFromArray = function(myArray, ...args) {
    args.forEach((key) => {
        if (myArray.indexOf(key) >= 0) {
            myArray.splice(myArray.indexOf(key), 1);
        }
    })

    return myArray;
}

module.exports = removeFromArray
