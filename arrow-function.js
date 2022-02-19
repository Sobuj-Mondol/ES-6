function add(num1,num2){
    return  num1 + num2;
}
// variable diye
// function expression
let add2 = function add2(num1,num2){
    return num1 + num2;
}
// function expression (anonymous)
let add3 = function(num1,num2){
    return num1 + num2;
}
// arrow function
let add4 = (num1,num2) => num1 + num2;

let result = add(15,15);
let result2 = add2(15,15);
let result3 = add3(15,15);
let result4 = add3(15,15);
console.log(result, result2, result3, result4);
