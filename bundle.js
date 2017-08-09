(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
