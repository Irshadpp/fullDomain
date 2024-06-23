function addToCart(item, callback){
    console.log('add to cart');
    callback();
}

function checkout(callback){
    console.log('checkout')
    callback()
}

function proceedToPayment(callback){
    console.log('payment')
    callback()
}

function updateStatus(){
    console.log('status');
}

const item = ['fdsf', 'fdsafas']

addToCart(item, function(){
    checkout(function(){
        proceedToPayment(function(){
            updateStatus();
        })
    })
})
