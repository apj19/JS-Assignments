console.log("Q17-Solved by Akshay Jadhav");


// let date= new Date();
// console.log(date.getMonth());

// const objDays={
//     january:31,
//     february:28,
//     March:31,
//     April:30,
//     May:31,
//     June:30,
//     July:31,
//     August:31,
//     September:30,
//     October:31,
//     November:30,
//     December:31
// }

// const daysInJanuary = getDaysInMonth(2025, 1);
// console.log(new Date(2020, 2, 0).getDate());

let month=2;
// let year=2020;

let getDaysInMonth= (month)=> new Date(2022, month, 0).getDate() ;

console.log(getDaysInMonth(month));
