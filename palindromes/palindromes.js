const palindromes = function(s) {
    s = s.toLowerCase()
         .replace(' ', '');
    const reversed = s.split('')
                .reverse()
                .join('');

    return s === reversed;
}

module.exports = palindromes
