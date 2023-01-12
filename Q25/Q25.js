console.log("Q25-Solved by Akshay Jadhav");

let weight=69;
let height=1.65;

let bmi= function(weight, height){
 return weight/(height*height)
}

// console.log(bmi(weight,height));

if(bmi(weight,height)<18.5){
    console.log("person is underweight");
}else if(bmi(weight,height)<=24.9){
    console.log("person is Normal");
}else if(bmi(weight,height)<=29.9){
    console.log("person is Overweight");
}else{
    console.log("person is Obese");
}
