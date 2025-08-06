// // function assignGrade(score) {
// //     if (score >= 90) return 'A';
// //     else if (score >= 80) return 'B';
// //     else if (score >= 70) return 'C';
// //     else if (score >= 60) return 'D';
// //     else return 'F';
// // }

// // // Object containing students and their scores
// // const students = {
// //     Alice: 95,
// //     Bob: 82,
// //     Charlie: 67,
// //     Diana: 74,
// //     Ethan: 59
// // };

// // // Assign grades and print results
// // for (let student in students) {
// //     const score = students[student];
// //     const grade = assignGrade(score);
// //     console.log(`${student}: Grade ${grade}`);
// // }

// let month="march"
// switch(month){
//     case "january":
//         console.log("january the month of new days")
//         break;
//     case "february":
//         console.log("february month leapyear or non leap year")
//         break;
//     case "march":
//         console.log("its march with ")
//         break;
//     case "april":
//         console.log("its april with summer")
//         break;
//     case "may":
//         console.log("its may with sunny day")
//         break;
//     case "june":
//         console.log("its june for farmers")
//         break;
//     case "july":
//         console.log("its rainy day")
//         break;
//     case "august":
//         console.log("")
//     }
    


// let students={
//     key:CSSMathValue,
//     name:"boss",
//     rollno:"99",
//     branch:"it"
// }


// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }



// const fruits = ["apple", "banana", "cherry", "date"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//   console.log(num * num);
// }

//  let arr=[1,2,3,4]
// for(let num in arr)
// {
//   console.log(num)
// }

// function printIsoscelesTriangle(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let spaces = ' '.repeat(rows - i);
//         let stars = '*'.repeat(2 * i - 1);
//         console.log(spaces + stars);
//     }
// }


// printIsoscelesTriangle(5);



// function printHollowSquare(size) {
//     for (let i = 0; i < size; i++) {
//         if (i === 0 || i === size - 1) {
//             console.log('*'.repeat(size));
//         } else {
//             console.log('*' + ' '.repeat(size - 2) + '*');
//         }
//     }
// }

// printHollowSquare(5);
// h



// let str1="welcome to the college.";
// let str2="campus";
// console.log("the count of length",str1.length)
// console.log(str1[6]);
// console.log("uppercase:",str1.toUpperCase())
// console.log("lowercase:",str1.toLowerCase())
// console.log(str1.concat(str2))
// console.log("remove starting and ending spaces",str1.trim());
// console.log(str1.charAt(3))
// console.log(str2.replace("campus","main"))
// console.log(str1.slice(0,3))
// console.log(str1.replaceAll("welcome to the college","nmmn")) 
// console.log(str1.slice(-8,-1))

// let name="we are students from mrec";
// let val="main campus";
// console.log(name.length)


// console.log("i will play ${sports} everyday to select in tournament ${dem} like ipl")
// let game="chess";
// let chm="tournament";

// let fullname="abhilashkummari";
// console.log("username is:","@"+fullname+fullname.length) 
// console.log("lowercase:",fullname.toLowerCase())
// let fullname="ABHILASHKUMMARI";
// let char=fullname.toLowerCase().charAt(3)


// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     console.log("it is vowel")
    
    
// } else {


//     console.log("it is a consonent")
    
// }

// let str1="avinash gurijala vaagu vanka konda kona paadenamma ee paata";
// console.log(str1.replace(/ /g, "_"))


// let str="saivinash";
// let formatted = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// console.log(formatted)  

// let marks=[44,25,75,87,98]
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i]
// }
// let average=sum/marks.length
// console.log("average marks:",average)

function fun1(){
    console.log("hello")                                                                                                                  
}
fun1();

function f1(a,b){
    console.log(a+b)

}
f1(5,8);

const g1=(a,b) =>{

}
console.log(g1(2,5))
let g5=(s)=>{

}
var g2=(t) =>{
    return t*5
}
console.log(g2(10));
var g3=(n,m)=>{
    return n*m
}
console.log(`return value:${g3(5,7)}`)













