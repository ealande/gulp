const gulp = require('gulp')

function standardFunction(callback){
    console.log ("Executing GULP");
callback();}

function sayHello (callback) {
    console.log ("Hello, Gulp!");
    sayGoodbye();
    callback();
}

function sayGoodbye(){
    console.log ("Goodbye,Gulp!")
}

exports.default = gulp.series(standardFunction, sayHello);
exports.sayHello = sayHello;