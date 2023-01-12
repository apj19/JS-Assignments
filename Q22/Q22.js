console.log("Q22-Solved by Akshay Jadhav");

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// const ages = [1 ,4, 7 ,9 ];

ages.sort();
console.log(ages);
let minAge= Math.min(...ages);
let maxAge= Math.max(...ages);
console.log(`Min of array: ${minAge}`);
console.log(`Max of array: ${maxAge}`);

///MEdian of array

let len= ages.length;

if(len%2==0){
    let m= (ages[len/2] + ages[(len/2)-1])/2;
    console.log(`Median of array: ${m}`);
}else{
    console.log(`Median of array: ${ages[(len/2)-0.5]}`);
}

///Averge of array
let sum=0
for (let index = 0; index < ages.length; index++) {
    sum = sum+ages[index];  
}
let avg=sum/ages.length;
console.log(`Aveg of array: ${avg}`);


////range of ages

console.log(`Ranges of array: ${maxAge-minAge}`);

///
let compare= Math.abs( (minAge-avg) - (maxAge-avg) );
console.log(`Comapre of array: ${compare}`);