console.log("Q21-Solved by Akshay Jadhav");

const countris=["India","US","Russia","lanka","Ethiopia"];
//Ethiopia  exist in array
if(countris.includes('Ethiopia')){
    console.log('ETHIOPIA');
}else{
    countris.push('Ethiopia');
}
//Ethiopia not exist in array
const countris1=["India","US","Russia","lanka"];
if(countris1.includes('Ethiopia')){
    console.log('ETHIOPIA');
}else{
    countris1.push('Ethiopia');
    console.log(countris1);
}


