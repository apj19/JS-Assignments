console.log("Q20-Solved by Akshay Jadhav");
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
//chceking and adding at start
if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat');
}

console.log(shoppingCart);

//checking and adding ad end
if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar');
}
console.log(shoppingCart);


//removeing honey
let pos=shoppingCart.indexOf('Honey');
shoppingCart.splice(pos,1);
console.log(shoppingCart);
//modifiying tre to green tree
let teapos=shoppingCart.indexOf('Tea');
shoppingCart[teapos]='Green Tea';
console.log(shoppingCart);


