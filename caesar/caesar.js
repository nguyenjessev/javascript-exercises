const caesar = function(s, offset) {
    const result = s.split('')
                    .map(c => String.fromCharCode( c.charCodeAt(0) + offset ))
                    .join(''); 

    return result;
}

module.exports = caesar
