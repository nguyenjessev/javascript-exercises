const palindromes = function(s) {
    s = s.toLowerCase()
         .replace(/[^a-zA-Z]/g, '');
    const reversed = s.split('')
                .reverse()
                .join('');

    return s === reversed;
}

module.exports = palindromes
