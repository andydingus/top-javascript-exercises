const fibonacci = function(n) {
    n = Number(n);
    if (n < 2) {
        if (n < 0) {
            return 'OOPS';
        }
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
