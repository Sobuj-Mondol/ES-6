const numbers = [10, 15, 25, 80, 100, 1, 30];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(15, 50, 30, 80, 99, 1, 20, 95);
const maxInArray = Math.max(...numbers);
// console.log(max,maxInArray);
// new array add+ number push
const numbers2 = [...numbers];  // এই এরের আগে ও পরে নাম্বার যোগ করতে পারবে push ছারাই।
// numbers.push(200);
console.log(numbers);
console.log(numbers2);
