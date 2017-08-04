module.exports =
    function fizzBuzz(num) {
        for (let i; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                return 'FIZZBUZZ';
            } else if (i % 3 === 0) {
                return 'FIZZ';
            } else if (i % 5 === 0) {
                return 'BUZZ';
            } else {
                return 'Your number is' + i;
            }
        }
    }