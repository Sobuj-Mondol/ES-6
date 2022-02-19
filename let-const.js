// let দিয়ে ভ্যালু বার বার পাল্টানো যাবে।
let balance = 1240;
balance = 1240;
//const দিয়ে ভ্যালু বার বার ডাল্টানো যাবে না।
const userName = 'Sobuj Mondol'
const fullName = 'My name is: '+userName;
console.log(fullName);
// const error
const numbers = [20, 50, 45, 60, 30];
// numbers = [1, 5, 10]; //not allowed
numbers.push(100);
numbers[1] = 15;
console.log(numbers);
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    sum = sum + number;
    console.log(sum);
}
 