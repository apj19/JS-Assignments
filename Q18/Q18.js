console.log("Q18-Solved by Akshay Jadhav");

let month=2;
let year=2020;

let getDaysInMonth= (year,month)=> new Date(year, month, 0).getDate() ;

console.log(getDaysInMonth(year,month));