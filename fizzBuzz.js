'use strict';
module.exports =
    function fizzBuzz(num) {
        for (let i; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                return 'FIZZBUZZ';
            } else if (i % 3 === 0) {
                console.log(i);
                return 'FIZZ';
            } else if (i % 5 === 0) {
                console.log(i)
                return 'BUZZ';
            } else {
                console.log(i)
                return 'Your number is' + i;
            }
        }
    }

// // document.getElementById('btn').onclick = function handleClickEvent(ev) {
// //         const val = document.getElementById('numInput').value;
// //         fizzBuzz(val);
// }