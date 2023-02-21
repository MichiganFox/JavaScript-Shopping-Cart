//Shopping Cart Lab
let cart = [];

function addItem(name, cost){
    let newCart={
        Name: name,
        Cost: cost
    };

    cart.push(newCart);
}


function DisplayAllCart(){
    cart.forEach((c)=> {
        console.log(`Name: ${c.Name} Cost: $${c.Cost}`);
    });
}

// function totalCost(){
//     var sum = 0;
//     cart.forEach((c) =>(sum += c.Cost))
//     return sum;
// }

function checkOut(){
    var sum = 0;
   cart.forEach((c)=>{sum += c.Cost *1.06})
        
        console.log("The total is " + sum.toFixed(2))
        
    }



    

