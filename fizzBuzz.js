module.exports = {

    // I now will attempt to iterate through a given amount of numbers
    // If num is a multiple of 3 & 5, print FIZZBUZZ
    // If num is only a mul of 3 print FIZZ
    // If num is only a mul of 5 print BUZZ
    // Any other number print the actual number
    fizzBuzz: function(num) {
        for (var i; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log('FIZZBUZZ');
            } else if (i % 3 === 0) {
                console.log('FIZZ');
            } else if (i % 5 === 0) {
                console.log('BUZZ');
            } else {
                console.log('Your number is' + i);
            }
        }
    }
}
// OMG that was HARD. Phew...