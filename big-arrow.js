const add = (num1, num2) => num1 + num2;
const result = add(50,15);
//
const add2 = (num1,num2,num3) => num1 + num2 + num3;
const result2 = add2(10, 10, 10);
//
const fivetimes = num => num * 5;
const output = fivetimes(10);
//
const getName = () => 'Sobuj Mondal'
const value = getName();
console.log(value);
// multiple arrow
const domath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const multi = sum * diff;
    const output = multi * 10;
    return output;
}
const result3 = domath(10, 5);
console.log(result3);
