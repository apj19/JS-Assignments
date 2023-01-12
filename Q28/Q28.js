console.log("Q28-Solved by Akshay Jadhav");

let n=4;
console.log("Pattren-1");

for (let i = 0; i < n; i++) {
    let ans="";
    for (let j = 0; j <=i; j++) {
        ans=ans+"*"      
    } 
    console.log(ans); 
       
}
// ///////
console.log("Pattren-2");
for (let i = 0; i < n; i++) {
    let ans="";
    for (let j = 0; j < n; j++) {
        ans=ans+"*"      
    } 
    console.log(ans); 
       
}

console.log("Pattren-3");
for (let i = 0; i < n; i++) {
    let ans="";
    let space="";
    for (let j = 1; j < n-i; j++) {
        space=space+" "      
    } 
    space=space+"*";
    for (let j = 0; j <= 2*i-1; j++) {
                space=space+"*";      
    } 
    console.log(space); 
       
}


