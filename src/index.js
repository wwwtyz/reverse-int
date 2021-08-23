module.exports = function reverse (n) {
    if (n >= 0) {
        result = Number(String(n).split('').reverse().join(''));

    } else {
        n = Math.abs(n)
        result = (Number(String(n).split('').reverse().join('')));
    }
return result;
};
