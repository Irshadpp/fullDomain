// const cart = ['fdsfasd'];
// const promise = createOrder(cart);

// promise.then(function(orderId){
//     console.log(orderId)
//     return orderId;
// })
// .then((orderId)=>{
//    return proceedToPayment(orderId);
// })
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((err)=>{
//     console.log(err.message)
// })


// function createOrder(cart){
    
// const pr = new Promise((resolve, reject)=>{
//     if(!validateOrder()){
//         const err = new Error('order is not validated');
//         reject(err);
//     }
    
//     const orderId = 1324342;
//     resolve(orderId);
// });

// return pr

// }

// function proceedToPayment(){
//     return new Promise((resolve, reject)=>{
//         resolve("payment successfull")
//     })
// }

// function validateOrder(){
//     return true;
// }



