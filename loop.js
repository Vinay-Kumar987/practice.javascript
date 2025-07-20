/*  
1. for loop ---  traditional loop for iterating over arrays or performing task a fiexed number of TimeRanges.
यह एक पारंपरिक लूप है, जो किसी array या किसी काम को एक निश्चित संख्या बार दोहराने के लिए होता है।

2. for...in Loop  -- Iterates over the keys (property names) of an object.
उपयोग: यह ऑब्जेक्ट की keys (प्रॉपर्टी के नाम) पर लूप करता है।

किसके लिए: Object के लिए (Array के लिए सलाह नहीं दी जाती क्योंकि order fix नहीं रहता)।

forEach() Loop --उपयोग: यह array के हर element पर काम करता है और हर element के लिए callback function चलाता है।

किसके लिए: केवल Arrays। 
Purpose: Iterates over array elements, executes a callback for each element.

Works on: Arrays only.

*/

// =============for loop ===============
// let arr = ["vinay", "singh", "kushwaha", "vikas"]
// for (let i = 0; i <= arr.length; i++){
//     console.log(i, arr[i])
// }







// ++++++++++++++++++ for in loop         ++++++++++++++++++++++++


// let obj = { name: "vinay", age: 23, city: "delhi" }
// for (let key in obj) {
//     console.log(key, obj[key]);
// }


// let obj1 = {
//     name: "raj",
//     age: 24,
//     branch: "btech",
//     roll_no : 122,

// }
// for (let key in obj1) {
//     console.log(key, obj1[key]);
// }







// let obj2 = { name: "A", age: 1, class: 0 }
// for (let key in obj2) {
//     console.log(key, obj2[key]);
// }

// +++++++++++++++++++=  for each loop ++++++++++++++++++++


// let arr = ["red", "orange", "sky blue"]
// arr.forEach((color, index) => {
//     console.log(index, color)
// })



// let arrr = ["a", "b", "c", "d", "e"]
// arrr.forEach((i, j) => {
//     console.log(j,i)
// })





// // +++++++++++++++++++++ while loop ==========================
// Definition:
// while loop एक control structure है जो तब तक कोड को बार-बार execute करता है जब तक दी गई condition true रहती है।
// अगर condition false हो जाती है, तो loop रुक जाता है।
// A while loop repeatedly executes a block of code as long as a given condition is true.
// When the condition becomes false, the loop stops.


let i = 1;
while (i <= 10) {
    console.log(i)

    i++;
}


let arr = ["viany", "singh", "kumar", "mahatma"]
let index = 0;
while (index <= arr.length) {
    console.log(arr[index])
    index++
}




// if Statement
// Definition: Executes a block of code if the condition is true.
// else

// Executes a block of code if the condition is false.
    
let score = 70;
if (score >= 80) {
    console.log("a");
}
else if (score >= 60) {
    console.log("b")
}else if (score >= 50){
    console.log("c")
}
else {
    console.log("fail")
}


// ++++++++++++++++++++++++++++ switch +++++++++++++++++++++++

// A switch is used to perform different actions based on different values of a variable.

let weak = 61
switch (weak) {
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("Tue")
        break;
    case 3:
        console.log("wed");
        break;
    case 4:
        console.log("thru");
        break;
    case 5:
        console.log("fri");
        break;
    case 6:
        console.log("Sat");
        break;
    case 7:
        console.log("sund");
        break;
    default:
        console.log("no match");
}