function sayHello(name, age){
    return `Hi ${name} you are ${age} years old`;
}

const sh = sayHello("이승민", 21)
console.log(sh)

const calculator = { 
    plus : function (a,b) {return a+b}, 
    subtract : function (a,b) {return a-b},
    multiply : function (a,b) {return a*b},
    divide : function (a,b) {return a/b},
    square : function (a,b) {return a**b}
}

const plus = calculator.plus(5,5)

console.log(plus)