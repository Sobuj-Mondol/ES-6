function add(num1,num2 = 0){   /*  ১. পদ্ধতি(= 0)। */
    //পেরামেটারে ভ্যালু হিসাবে 0 যোগ করা হলো।
    // num2 = num2 || 0;     ২.পদ্ধতি।
    /* 
    if(num2 == undefined){    ৩. পদ্ধতি।
        num2 = 0;
    } 
    */
    let total = num1 + num2;
    return total;
}
const result = add(15);
console.log(result);
// পরিস্কার ভাবে করা হলো।
function Name ( first,last = 'Mondol'){
    let fullName = first +' ' + last;
    return fullName;
}
let result2 = Name('Sobuj');  // last valu jodi na thake tahole deafault valu jeta deowa hobe setai pabe.r jodi second parameter deowa hoy tahole seta nibe.
console.log(result2);

