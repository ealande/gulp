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

exports.default = standardFunction;
exports.sayHello = sayHello;