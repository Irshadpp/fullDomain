// function mul(x,y){
//     return x*y;
// }

// const mulByTwo = mul.bind(this, 2);
// console.log(mulByTwo(5));


function mul(x){
    return function(y){
        return x*y;
    }
}



const mulByTwo = mul(2);
const mulByFive = mul(5)
console.log(mulByTwo(10))
console.log(mulByFive(10))