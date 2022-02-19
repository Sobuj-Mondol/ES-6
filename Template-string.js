let multiLineNew = `
this is multiline 
this is second line
this is third line
four line`;
console.log(multiLineNew);
//
let friends = ['Akash', 'Batas', 'haowa', 'domka haowa'];
let friendCound = 5;
let oldHeader = '<h3 class="friend-name">friend-5</h3>'     // ES-6
// let oldHeader = '<h3 class="friend-name">friend-'+friendCound+'</h3>'    // old model
let newOldHeader = `<h3 class="friend-name">friend-${friends.length}</h3>`   // old model
console.log(newOldHeader);
//
let first = 'Sobuj';
let last = 'Mondol';
// let fullName = first + ' ' + last;     // old model
let fullName = `My name is: ${first} ${last}.`;
console.log(fullName);
