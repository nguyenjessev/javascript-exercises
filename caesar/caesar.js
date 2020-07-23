const caesar = function(s, offset) {
    let chars = s.split('');
    chars = chars.map(char => {
        const charCode = char.charCodeAt();

        if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
            return char;
        }

        let newCharCode = charCode + offset;
        const startCode = getStart(charCode);

        newCharCode -= startCode;
        newCharCode %= 26;
        newCharCode += 26;
        newCharCode %= 26;
        newCharCode += startCode;

        return String.fromCharCode(newCharCode);
    });

    return chars.join('');
}

function getStart(code) {
    return code < 97 ? 65 : 97;
}

module.exports = caesar

// Find distance from start of alphabet