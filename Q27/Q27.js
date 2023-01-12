console.log("Q27-Solved by Akshay Jadhav");

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

for (let i = 1; i <=100; i++) {
    if(checkprime(i)){
        console.log(i);
    }
    
}
