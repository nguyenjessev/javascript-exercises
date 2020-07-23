const caesar = function(s, offset) {
    let chars = s.split('');
    chars = chars.map(char => {
        const charCode = char.charCodeAt();

        if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
            return char;
        }

        let newCharCode = charCode + offset;
        const startCode = getStart(charCode);

        newCharCode -= startCode; // How far is the new charCode from the start
        newCharCode %= 26; // Simplify
        newCharCode += 26; // If it's negative, this gets it into range
        newCharCode %= 26; // Gives final index. If greater than 26, will loop, if within range, will stay in range
        newCharCode += startCode; // Offsets into the actual charCode range

        return String.fromCharCode(newCharCode);
    });

    return chars.join('');
}

function getStart(code) {
    return code < 97 ? 65 : 97;
}

module.exports = caesar

// Find distance from start of alphabet