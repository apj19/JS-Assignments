console.log("Q23-Solved by Akshay Jadhav");

let userinput=1020;

let checkprime= function(num){
    if(num==1){
        return false;
    }
    if(num==2 || num==3){
        return true;
    }

    if(num%2==0 || num%3==0){
        return false;
    }

    for (let i = 5; i*i <= num ; i=i+6) {
        // console.log("inside loop");
            if(num%i==0 || num%(i+2)==0){
                return false;
            }
    }

    return true;
}


// console.log(checkprime(userinput));

if(checkprime(userinput)){
    console.log(`the number ${userinput} is Prime`);
}else{
    console.log(`the number ${userinput} is not prime`);

}
