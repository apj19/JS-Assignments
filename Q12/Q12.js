console.log("Q12-Solved by Akshay Jadhav");

const date = new Date();
let year= date.getFullYear();
let m=date.getMonth() +1;
let month= m <10 ? `0${m}`: m; 
let d=date.getDay();
let day= d <10 ? `0${d}`: d;
let hr= date.getHours();
let m1= date.getMinutes();
let min= m1 <10 ? `0${m1}`: m1;
// console.log(day);
console.log(`${year}-${month}-${day} ${hr}:${min}`);
console.log(`${day}-${month}-${year} ${hr}:${min}`);
console.log(`${day}/${month}/${year} ${hr}:${min}`);

// YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm
  